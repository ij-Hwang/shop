(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(22),i=c(0),r=c.n(i),a=c(20),s=c.n(a),j=(c(83),c(5)),o=c(124),d=c(120),l=c(125),b=c(123),h=c(74),O=c(121),u=c(122),x=(c(84),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4},{id:3,title:"Blue Ragoon",content:"Born in Korea",price:14e4}]),p=c(70),f=c.n(p),v=c(119),m=c(40),g=c(1);var y=function(e){var t=Object(m.d)((function(e){return e})),c=Object(m.c)();return Object(g.jsxs)("div",{children:[Object(g.jsxs)(v.a,{responsive:"sm",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(g.jsx)("th",{children:"\uc218\ub7c9"}),Object(g.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(g.jsx)("tbody",{children:t.reducer.map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.id}),Object(g.jsx)("td",{children:e.name}),Object(g.jsx)("td",{children:e.quan}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{onClick:function(){c({type:"\uc218\ub7c9\uc99d\uac00",payload:{id:e.id}})},children:"+"}),Object(g.jsx)("button",{onClick:function(){c({type:"\uc218\ub7c9\uac10\uc18c",payload:{id:e.id}})},children:"-"})]})]},t)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(g.jsxs)("div",{className:"my-alert2",children:[Object(g.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"\ucc3d\ubcc0\ud658"})},children:"\ub2eb\uae30"})]}):Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"\ucc3d\ubcc0\ud658"})},children:"\uc5f4\uae30"})]})},k=c(32),S=c(9),C=c(75),B=Object(i.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,134))})),I=r.a.createContext();function w(){var e=Object(i.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(20),a=Object(j.a)(r,2),s=a[0],o=a[1];return Object(i.useEffect)((function(){0!=c&&c<3&&o(s+1)}),[c]),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:["\uc548\ub155\ud558\uc2ed\ub2c8\uae4c \uc804 ",s]}),Object(g.jsx)("button",{onClick:function(){n(c+1)},children:"\ub204\ub974\uba74 \ud55c\uc0b4\uba39\uae30"})]})}function R(e){var t=Object(i.useContext)(I),c=Object(C.useHistory)();return e.shoes.map((function(n,i){return Object(g.jsx)(u.a,{md:4,children:Object(g.jsxs)("div",{onClick:function(){c.push("/detail/"+e.shoes[i].id)},children:[Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(i+1,".jpg"),width:"100%",alt:"shoes".concat(i+1)}),Object(g.jsx)("h4",{children:n.title}),Object(g.jsx)("p",{children:n.content}),Object(g.jsx)("p",{children:n.price}),Object(g.jsxs)("p",{children:[t[i],"\uac1c"]})]})},i)}))}var F=function(){var e=Object(i.useState)(x),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(i.useState)([10,11,13]),s=Object(j.a)(a,2),u=s[0],p=s[1],v=Object(i.useState)(!0),m=Object(j.a)(v,2),C=m[0],F=m[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(o.a,{bg:"light",expand:"sm",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(o.a.Brand,{as:k.b,to:"/",children:"OkShop"}),Object(g.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(l.a,{className:"me-auto",children:[Object(g.jsx)(l.a.Link,{as:k.b,to:"/",children:" Home"}),Object(g.jsx)(l.a.Link,{as:k.b,to:"/detail/0",children:"Detail"}),Object(g.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(b.a.Item,{as:k.b,to:"/test",children:"Action"}),Object(g.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(b.a.Divider,{}),Object(g.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(g.jsxs)(S.Switch,{children:[Object(g.jsxs)(S.Route,{exact:!0,path:"/",children:[Object(g.jsxs)("div",{className:"jumbotron background",children:[Object(g.jsx)("h1",{children:"20% Season Off"}),Object(g.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(g.jsx)("p",{children:Object(g.jsx)(h.a,{variant:"primary",children:"Learn more"})})]}),Object(g.jsx)(d.a,{children:Object(g.jsxs)(I.Provider,{value:u,children:[Object(g.jsx)(O.a,{children:Object(g.jsx)(R,{shoes:c})}),!0===C?Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){f.a.get("http://codingapple1.github.io/shop/data2.json").then((function(e){r([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")})),F(!C)},children:"\ub354\ubcf4\uae30"}):null]})})]}),Object(g.jsx)(S.Route,{path:"/detail/:id",children:Object(g.jsx)(i.Suspense,{fallback:Object(g.jsx)("div",{children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694."}),children:Object(g.jsx)(B,{shoes:c,stock:u,stockchg:p})})}),Object(g.jsx)(S.Route,{path:"/cart",children:Object(g.jsx)(y,{})}),Object(g.jsx)(S.Route,{path:"/test",children:Object(g.jsx)(w,{})})]})]})},L=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,136)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))},N=c(58);var q=[];var D=Object(N.b)(Object(N.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id})),i=Object(n.a)(e);return c<0?(i.push(t.payload),i):(i.map((function(e){return e.id===t.payload.id&&e.quan++,e})),i)}if("\uc218\ub7c9\uc99d\uac00"===t.type){var r=Object(n.a)(e);return console.log(t.payload),r[t.payload.id].quan++,r}if("\uc218\ub7c9\uac10\uc18c"===t.type){var a=Object(n.a)(e);return a[t.payload.id].quan--,a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;if("\ucc3d\ubcc0\ud658"===t.type){var c=!e;return c}return e}}));s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k.a,{children:Object(g.jsx)(m.a,{store:D,children:Object(g.jsx)(F,{})})})}),document.getElementById("root")),L()},83:function(e,t,c){},84:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.2efe9373.chunk.js.map