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
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

// Product

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: string;
};

type ProductPayload = {
  [Types.Create]: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: string;
  };
  [Types.Delete]: {
    id: string;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      const x = [...state.filter((product) => product.id === action.payload.id)];
      const y = [...state].indexOf(x[0]);
      if (x[0]) {
        const t = x.map((product) => product.quantity)[0];
        const updatedQuantity = (
          parseInt(t) + parseInt(action.payload.quantity)
        ).toString();
        [...state][y].quantity = updatedQuantity;

        return [
          ...state,
        ];
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: action.payload.quantity,
          },
        ];
      }
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};
