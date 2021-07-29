type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Increase = "ADD_QUANTITY",
  Decrease = "REDUCE_QUANTITY",
  SubTotalIncrease = "ADD_SUBTOTAL",
  SubTotalDecrease = "REDUCE_SUBTOTAL",
  QuantityChange = "BUTTON_SHOW",
  QuantitySet = "CHANGE_QUANTITY",
  TotalQuantityChange = "CHANGE_TOTALQUANTITY",
  TotalQuantitySet = "SET_TOTALQUANTITY",
  SubTotalChange = "CHANGE_SUBTOTAL",
  SubTotalSet = "SET_SUBTOTAL",
}

// Product

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: string;
  button: boolean;
};

type ProductPayload = {
  [Types.Add]: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: string;
    button: boolean;
  };
  [Types.Delete]: {
    id: string;
  };
  [Types.QuantityChange]: {
    id: string;
    quantity: string;
  };
  [Types.QuantitySet]: {
    id: string;
    // quantity: string;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => {
  switch (action.type) {
    case Types.Add:
      const existingSameProduct = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const existingSameProductIndex = [...state].indexOf(
        existingSameProduct[0]
      );
      if (existingSameProduct[0]) {
        const existingSameProductQuantity = existingSameProduct.map(
          (product) => product.quantity
        )[0];
        const updatedQuantity = (
          parseInt(existingSameProductQuantity) +
          parseInt(action.payload.quantity)
        ).toString();
        [...state][existingSameProductIndex].quantity = updatedQuantity;
        return [...state];
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: action.payload.quantity,
            button: action.payload.button,
          },
        ];
      }
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    case Types.QuantityChange:
      const modifiedProduct = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductIndex = [...state].indexOf(modifiedProduct[0]);
      const newValue = action.payload;
      var updatedQuantity = parseInt(newValue.quantity).toString();
      [...state][modifiedProductIndex].button = true;
      if (Number.isNaN(parseInt(newValue.quantity))) {
        updatedQuantity = "0";
        [...state][modifiedProductIndex].quantity = updatedQuantity;
        return [...state];
      } else {
        [...state][modifiedProductIndex].quantity = updatedQuantity;
        return [...state];
      }
    case Types.QuantitySet:
      const modifiedProduct2 = [
        ...state.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductIndex2 = [...state].indexOf(modifiedProduct2[0]);
      [...state][modifiedProductIndex2].button = false;
      return [...state];
    default:
      return state;
  }
};

// ShoppingCartQuantity

type ShoppingCartPayload = {
  [Types.Increase]: {
    quantity: string;
  };
  [Types.Decrease]: {
    quantity: string;
  };
  [Types.TotalQuantityChange]: {
    id: string;
    quantity: string;
  };
  [Types.TotalQuantitySet]: {};
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  productState: ProductType[],
  state: number,
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => {
  switch (action.type) {
    case Types.Increase:
      return state + parseInt(action.payload.quantity);
    case Types.Decrease:
      return state - parseInt(action.payload.quantity);
    case Types.TotalQuantityChange:
      const modifiedProduct = [
        ...productState.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductQuantity = modifiedProduct.map(
        (product) => product.quantity
      )[0];
      var offset =
        parseInt(modifiedProductQuantity) - parseInt(action.payload.quantity);
      return state + offset;
    case Types.TotalQuantitySet:
      return state;
    default:
      return state;
  }
};

// ShoppingCartSubTotal

type ShoppingCartSubTotalPayload = {
  [Types.SubTotalIncrease]: {
    price: number;
    quantity: string;
  };
  [Types.SubTotalDecrease]: {
    price: number;
    quantity: string;
  };
  [Types.SubTotalChange]: {
    id: string;
    price: number;
    quantity: string;
  };
  [Types.SubTotalSet]: {};
};

export type ShoppingCartSubTotalActions =
  ActionMap<ShoppingCartSubTotalPayload>[keyof ActionMap<ShoppingCartSubTotalPayload>];

export const shoppingCartSubTotalReducer = (
  productState: ProductType[],
  state: number,
  action: ProductActions | ShoppingCartActions | ShoppingCartSubTotalActions
) => {
  switch (action.type) {
    case Types.SubTotalIncrease:
      return state + action.payload.price * parseInt(action.payload.quantity);
    case Types.SubTotalDecrease:
      return state - action.payload.price * parseInt(action.payload.quantity);
    case Types.SubTotalChange:
      const modifiedProduct = [
        ...productState.filter((product) => product.id === action.payload.id),
      ];
      const modifiedProductPrice = modifiedProduct.map(
        (product) => product.price
      )[0];
      const modifiedProductQuantity = modifiedProduct.map(
        (product) => product.quantity
      )[0];
      var offset =
        modifiedProductPrice * parseInt(modifiedProductQuantity) -
        action.payload.price * parseInt(action.payload.quantity);
      return state + offset;
    case Types.SubTotalSet:
      return state;
    default:
      return state;
  }
};
