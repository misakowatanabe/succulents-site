(this["webpackJsonpsucculents-site"]=this["webpackJsonpsucculents-site"]||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),n=c(10),s=c.n(n),o=(c(83),c(84),c(30)),r=c(32),l=c(41),j=c(13),d=c(153),m=c(145),u=c(140),p=c(142),b=c(143),g=c(70),x=c.n(g),h=c(51),O=c.n(h),y=c(61),v=c.n(y),f=c(60),N=c.n(f),S=c(69),w=c.n(S),B=c(144),P=[{categoryName:"Succulents",image:c.p+"static/media/categorySucculent.62275829.jpg",description:"Some description for succulents"},{categoryName:"Pots",image:c.p+"static/media/categoryPot.9ef1b587.jpg",description:"Some description for pots"},{categoryName:"Other",image:c.p+"static/media/categoryOther.27ff9f4e.jpg",description:"Some description for other items"}],k=c(2);function C(){var e=Object(a.useState)({left:!1}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&n(Object(r.a)(Object(r.a)({},c),{},Object(o.a)({},e,t)))}},g=function(e){return Object(k.jsx)("div",{role:"presentation",onClick:s(e,!1),onKeyDown:s(e,!1),children:Object(k.jsx)(u.a,{children:P.map((function(e,t){return Object(k.jsx)(p.a,{button:!0,children:Object(k.jsx)(b.a,{children:Object(k.jsxs)(j.b,{to:"/succulents-site/".concat(e.categoryName),className:"drawerLinkText",children:[e.categoryName,Object(k.jsx)(O.a,{className:"ArrowIcon",style:{fontSize:"30px"}})]})})},t)}))})})},h=Object(a.useState)(!1),y=Object(l.a)(h,2),f=y[0],S=y[1],C=w()();C.y>50&&!f&&S(!0),C.y<=50&&f&&S(!1);var I={backgroundColor:f?"white":"transparent",transition:"400ms ease"},T=Object(B.a)("(max-width:688px)"),z=Object(B.a)("(min-width:688px)");return Object(k.jsxs)("div",{className:"test",children:[T&&Object(k.jsx)("div",{children:["left"].map((function(e){return Object(k.jsxs)("div",{className:"header",style:I,children:[Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(m.a,{onClick:s(e,!0),children:Object(k.jsx)(x.a,{className:"menuIcon",style:{fontSize:"40px"}})}),Object(k.jsx)(d.a,{anchor:e,open:c[e],onClose:s(e,!1),onOpen:s(e,!0),children:g(e)})]},e),Object(k.jsx)("div",{className:"logoMobile",children:Object(k.jsx)(j.b,{to:"/succulents-site",children:"Happy Succulent"})}),Object(k.jsx)(N.a,{className:"searchIcon",style:{fontSize:"34px"}}),Object(k.jsx)(v.a,{className:"cartIcon",style:{fontSize:"34px"}})]},e)}))}),z&&Object(k.jsxs)("div",{className:"header",style:I,children:[Object(k.jsx)("div",{className:"logoBigScreen",children:Object(k.jsx)(j.b,{to:"/succulents-site",children:"Happy Succulent"})}),P.map((function(e,t){return Object(k.jsx)(j.b,{to:"/succulents-site/".concat(e.categoryName),className:"navLinkText",children:e.categoryName},t)})),Object(k.jsx)(N.a,{className:"searchIcon",style:{fontSize:"34px"}}),Object(k.jsx)(v.a,{className:"cartIcon",style:{fontSize:"34px"}})]})]})}var I=c(11),T=c(146),z=c(148),E=c(149),H=c(151),F=c(150),A=c(53),D=c.p+"static/media/main.02d623f9.jpg",V=c(6),G=c(155),L=Object(V.a)((function(e){return{root:{color:e.palette.getContrastText("rgb(255,255,255.0.9)"),backgroundColor:"rgb(255,255,255,0.9)","&:hover":{backgroundColor:"rgb(255,255,255,0.9)"},padding:"10px 18px 10px 30px",fontSize:"20px",fontWeight:"normal",borderRadius:"24px"}}}))(m.a),M=Object(T.a)((function(e){return Object(G.a)({margin:{margin:e.spacing(1),marginTop:"200px"}})}));function K(){var e=M();return Object(k.jsx)("div",{className:"mainButton",children:Object(k.jsx)(j.b,{to:"/succulents-site/Succulents",children:Object(k.jsxs)(L,{variant:"contained",color:"primary",className:e.margin,style:{fontSize:"15px"},children:["Explore",Object(k.jsx)(O.a,{style:{marginLeft:"13px"}})]})})})}var W=c(147),J=Object(T.a)({root:{textAlign:"center",margin:"0% 5% 5% 5%"}});function R(){var e=J();return Object(k.jsxs)("div",{className:"homeBackground",children:[Object(k.jsxs)("div",{className:"mainImage",style:{backgroundImage:"url(".concat(D,")")},children:[Object(k.jsx)("h1",{className:"mainText",children:"Happy Succulent"}),Object(k.jsx)(K,{})]}),Object(k.jsx)("div",{className:"shopByCategory",children:"Shop By Category"}),Object(k.jsx)(W.a,{container:!0,spacing:1,children:P.map((function(t,c){return Object(k.jsx)(W.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsx)(z.a,{className:e.root,children:Object(k.jsx)(E.a,{children:Object(k.jsxs)(j.b,{to:"/succulents-site/".concat(t.categoryName),children:[Object(k.jsx)(F.a,{component:"img",alt:"CategoryImage",height:"220",image:t.image}),Object(k.jsxs)(H.a,{children:[Object(k.jsx)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.categoryName}),Object(k.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description})]})]})})})},c)}))})]})}var U=c(152),q=c(154),Q=Object(T.a)((function(e){return Object(G.a)({selectEmpty:{marginTop:e.spacing(2)}})}));function X(){var e=Q(),t=i.a.useState({age:"",name:"hai"}),c=Object(l.a)(t,2),a=c[0],n=c[1],s=Object(B.a)("(max-width:750px)");return Object(k.jsx)(U.a,{className:s?"sortButton-mobile":"sortButton-bigScreen",children:Object(k.jsxs)(q.a,{value:a.age,onChange:function(e){var t=e.target.name;n(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},t,e.target.value)))},name:"age",className:e.selectEmpty,inputProps:{"aria-label":"age"},children:[Object(k.jsx)("option",{value:"Best selling",children:"Best selling"}),Object(k.jsx)("option",{value:"Price, high to low",children:"Price, high to low"}),Object(k.jsx)("option",{value:"Price, low to high",children:"Price, low to high"})]})})}var Y=[{category:"Succulents",image:c.p+"static/media/succulent1.2a95bd85.jpg",name:"Mixed",price:1,sold:22,id:"1"},{category:"Succulents",image:c.p+"static/media/succulent2.8489a344.jpg",name:"Graptosedum",price:2,sold:35,id:"2"},{category:"Succulents",image:c.p+"static/media/succulent3.d4acc119.jpg",name:"Agave",price:3,sold:17,id:"3"},{category:"Succulents",image:c.p+"static/media/succulent4.6cde9e73.jpg",name:"Haworthiopsis",price:4,sold:5,id:"4"},{category:"Succulents",image:c.p+"static/media/succulent5.8d25cb08.jpg",name:"Haworthia Turgida",price:5,sold:13,id:"5"},{category:"Pots",image:c.p+"static/media/pot1.20e0dd4c.jpg",name:"Matte Gray",price:1,sold:22,id:"7"},{category:"Pots",image:c.p+"static/media/pot2.9b383a50.jpg",name:"Round Bowl",price:2,sold:35,id:"8"},{category:"Pots",image:c.p+"static/media/pot3.664a580d.jpg",name:"Creemy Gray",price:3,sold:17,id:"9"},{category:"Pots",image:c.p+"static/media/pot4.576dfaf6.jpg",name:"Pot with Foot",price:4,sold:5,id:"10"},{category:"Other",image:c.p+"static/media/other1.c46c63d9.jpg",name:"Soil",price:1,sold:17,id:"11"},{category:"Other",image:c.p+"static/media/other2.968adbf6.jpg",name:"Shovel",price:2,sold:5,id:"12"}],Z=Object(T.a)((function(e){return Object(G.a)({root:{flexGrow:1,margin:"0px 5% 60px 5%"}})}));function $(){var e=Z(),t=Object(B.a)("(max-width:750px)");function c(){var e=Object(I.g)().categoryName,c=[];return Y.forEach((function(a){a.category===e&&c.push(Object(k.jsx)(W.a,{item:!0,xs:6,md:4,style:t?{flexBasis:"48%",marginBottom:"20px"}:{flexBasis:"31%",marginBottom:"20px",margin:"1.16%"},children:Object(k.jsx)(j.b,{to:"/succulents-site/".concat(e,"/").concat(a.id),children:Object(k.jsxs)(E.a,{children:[Object(k.jsx)(F.a,{component:"img",alt:"".concat(a.name),height:"280",image:a.image,title:"".concat(a.name)}),Object(k.jsxs)(H.a,{style:{padding:0},children:[Object(k.jsx)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{margin:"5px 0px 0px 0px",fontSize:"18px",color:"#242424"},children:a.name}),Object(k.jsxs)(A.a,{variant:"body2",color:"textSecondary",component:"p",style:{fontSize:"16px",color:"#242424"},children:["SEK ",a.price]})]})]})})},a.id))})),Object(k.jsx)(i.a.Fragment,{children:c})}return Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(W.a,{container:!0,item:!0,xs:12,style:t?{justifyContent:"space-between"}:{justifyContent:"start"},children:Object(k.jsx)(c,{})})})}function _(){function e(){var e=Object(I.g)().categoryName,t=[];return P.forEach((function(c){c.categoryName===e&&t.push(Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"categoryName",children:c.categoryName}),Object(k.jsx)("p",{className:"categoryDescription",children:c.description})]},c.categoryName))})),Object(k.jsx)("div",{children:t})}return Object(k.jsxs)("div",{className:"categoryPage",children:[Object(k.jsx)(e,{}),Object(k.jsx)(X,{}),Object(k.jsx)($,{})]})}function ee(){var e=Object(I.g)().id,t=Y.find((function(t){return t.id===e})),c=Object(B.a)("(max-width:900px)");return Object(k.jsxs)("div",{className:c?"productView-mobile":"productView-bigScreen",children:[Object(k.jsxs)("div",{className:"productViewCategory",children:[Object(k.jsx)(j.b,{to:"/succulents-site",style:{textDecoration:"underline"},children:"Home"}),Object(k.jsx)("span",{children:" > "}),Object(k.jsx)(j.b,{to:"/succulents-site/".concat(null===t||void 0===t?void 0:t.category),style:{textDecoration:"underline"},children:null===t||void 0===t?void 0:t.category})]}),Object(k.jsx)("div",{className:"productViewName",children:null===t||void 0===t?void 0:t.name}),Object(k.jsxs)("div",{className:"productViewPrice",children:["SEK ",null===t||void 0===t?void 0:t.price]}),Object(k.jsx)(F.a,{component:"img",alt:"".concat(null===t||void 0===t?void 0:t.name),image:null===t||void 0===t?void 0:t.image,title:"".concat(null===t||void 0===t?void 0:t.name),style:{width:"100%"}}),Object(k.jsxs)("div",{children:["ID: ",null===t||void 0===t?void 0:t.id]})]})}function te(){return Object(k.jsxs)(I.c,{children:[Object(k.jsx)(I.a,{exact:!0,path:"/succulents-site",component:R}),Object(k.jsx)(I.a,{exact:!0,path:"/succulents-site/:categoryName",component:_}),Object(k.jsx)(I.a,{exact:!0,path:"/succulents-site/:categoryName/:id",component:ee})]})}var ce=c(71),ae=c.n(ce),ie=[{original:c.p+"static/media/galleryImage1.02f25a67.jpg",thumbnail:"https://picsum.photos/id/1018/250/150/"},{original:c.p+"static/media/galleryImage2.457c3d4e.jpg",thumbnail:"https://picsum.photos/id/1015/250/150/"},{original:c.p+"static/media/galleryImage3.7d7c6bcd.jpg",thumbnail:"https://picsum.photos/id/1019/250/150/"}];function ne(){return Object(k.jsxs)("div",{style:{backgroundColor:"#f3f3f3"},children:[Object(k.jsx)("div",{className:"galleyText",children:"Follow us on Instagram"}),Object(k.jsx)(ae.a,{items:ie,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1,autoPlay:!0,slideInterval:5e3}),Object(k.jsxs)("div",{className:"footer",children:[Object(k.jsx)("div",{children:"ABOUT"}),Object(k.jsx)("div",{children:"HELP"}),Object(k.jsx)("div",{children:"SHOP"}),Object(k.jsx)("div",{className:"lastFooter",children:"\xa92021 Misako Watanabe Website design and development"})]})]})}var se=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(C,{}),Object(k.jsx)(te,{}),Object(k.jsx)(ne,{})]})};function oe(){var e=Object(I.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}s.a.render(Object(k.jsxs)(j.a,{children:[Object(k.jsx)(oe,{}),Object(k.jsx)(se,{})]}),document.getElementById("root"))},83:function(e,t,c){},84:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.b207926d.chunk.js.map