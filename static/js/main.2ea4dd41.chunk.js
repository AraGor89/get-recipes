(this["webpackJsonpget-recipes"]=this["webpackJsonpget-recipes"]||[]).push([[0],{11:function(e,t,n){e.exports={authContainer:"auth_authContainer__11GTM",imgInputContainer:"auth_imgInputContainer__28mN_",inputContainer:"auth_inputContainer__1OeX5",logImageContainer:"auth_logImageContainer__26h4I",centeredText:"auth_centeredText__2gHwC",authImage:"auth_authImage__2urXn",warningContainer:"auth_warningContainer__3pb7j"}},13:function(e,t,n){e.exports={navBarContainer:"navBar_navBarContainer__2W2wx",logoContainer:"navBar_logoContainer__2UwII",menuContainer:"navBar_menuContainer__3p1tI",navItem:"navBar_navItem__bsIGM",activeLink:"navBar_activeLink__2Dsy5"}},15:function(e,t,n){e.exports={listsContainer:"lists_listsContainer__1RmSd",listItemsContainer:"lists_listItemsContainer__3RaoM",mealImageContainer:"lists_mealImageContainer__3Ynbi",mealIngredientsContainer:"lists_mealIngredientsContainer__397mo"}},19:function(e,t,n){e.exports={paginationContainer:"pagination_paginationContainer__3wLCm",prev:"pagination_prev__iDxf7",next:"pagination_next__v6qAy"}},24:function(e,t,n){e.exports={headerContainer:"header_headerContainer__2L3NU",ownRecipebg:"header_ownRecipebg__2z_LQ"}},38:function(e,t,n){e.exports=n.p+"static/media/logImage.4bfe581a.jpg"},39:function(e,t,n){e.exports={mainContainer:"main_mainContainer__k5gkf"}},40:function(e,t,n){e.exports={nooResultContainer:"noResult_nooResultContainer__bwTZw"}},41:function(e,t,n){e.exports={loadingContainer:"loading_loadingContainer__2PO0A"}},42:function(e,t,n){e.exports={ownRecipe:"ownRecipe_ownRecipe__3xnCA"}},43:function(e,t,n){e.exports={searchContainer:"search_searchContainer__1tJwD"}},46:function(e,t,n){e.exports=n(76)},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){e.exports=n.p+"static/media/Roboto-Regular.11eabca2.ttf"},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),c=n.n(i),o=n(12),l=n(4);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(5),m=n(36),s=n(3),p={login:"Bon",password:"appetit",initialized:!1,falseAttemptsCount:0},d="LOGIN",g="PASSWORD",E="LOGIN_SUBMIT",_="INCREMENT_FALSE_ATTEMPTS_COUNT",f=function(e){return{type:E,toggle:e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(s.a)(Object(s.a)({},e),{},{login:t.login});case g:return Object(s.a)(Object(s.a)({},e),{},{password:t.password});case E:return Object(s.a)(Object(s.a)({},e),{},{initialized:t.toggle});case _:return Object(s.a)(Object(s.a)({},e),{},{falseAttemptsCount:e.falseAttemptsCount+=1});default:return e}},h=n(37),v="8de8a047cbcb1268485e3c0cce18189f\t",b="https://api.edamam.com/search?",N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return h.get("".concat(b,"q=").concat(e,"&app_id=").concat("ca77737b","&app_key=").concat(v,"&from=").concat(t,"&to=").concat(n))},R={count:null,fromItem:0,mealResultArray:[],moreResults:!0,mealName:"",toItem:10,err:"",isFetching:!1},O=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return function(n,a){var r=a().mainReducer.mealName;n(O(!0)),N(r,e,t).then((function(e){console.log(e.data);var t=e.data,a=t.count,r=t.from,i=t.hits,c=t.more,o=t.to;n(function(e,t,n,a,r){return{type:"SET_INCOMING_DATA",payload:{count:e,fromItem:t,mealResultArray:n,moreResults:a,toItem:r}}}(a,r,i,c,o)),n(O(!1))})).catch((function(e){n({type:"SET_ERROR",err:e.message})}))}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MEAL_NAME_CHANGE":return Object(s.a)(Object(s.a)({},e),{},{mealName:t.mealName});case"TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"SET_INCOMING_DATA":return Object(s.a)(Object(s.a)({},e),t.payload);case"SET_ERROR":return Object(s.a)(Object(s.a)({},e),{},{err:t.err});default:return e}},A=Object(u.c)({authReducer:C,mainReducer:w}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,T=Object(u.e)(A,j(Object(u.a)(m.a))),y=(n(72),n(2)),k=n(11),x=n.n(k),S=n(38),L=n.n(S);var G=function(){return r.a.createElement("div",{className:x.a.warningContainer},r.a.createElement("h2",null,"WRONG LOGIN OR PASSWORD"))},M=Object(l.b)((function(e){return{initialized:e.authReducer.initialized,login:e.authReducer.login,password:e.authReducer.password,falseAttemptsCount:e.authReducer.falseAttemptsCount}}),{loginAC:function(e){return{type:d,login:e}},passwordAC:function(e){return{type:g,password:e}},loginSubmitAC:f,incrementFalseAttemptsAC:function(){return{type:_}}})((function(e){var t=e.falseAttemptsCount,n=e.initialized,i=e.loginAC,c=e.passwordAC,o=e.login,l=e.password,u=e.loginSubmitAC,m=e.incrementFalseAttemptsAC;if(Object(a.useEffect)((function(){1===t&&setTimeout((function(){window.location.reload()}),3e3)}),[t]),n)return r.a.createElement(y.a,{to:"/main"});return r.a.createElement("div",{className:x.a.authContainer},r.a.createElement("div",{className:x.a.imgInputContainer},r.a.createElement("div",{className:x.a.inputContainer},r.a.createElement("p",null,"Please log in to your account by typing "),r.a.createElement("p",null,"Bon appetit"),r.a.createElement("input",{type:"text",value:o,onChange:function(e){i(e.target.value)},placeholder:"login"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:l,onChange:function(e){c(e.target.value)},placeholder:"password"})," ",r.a.createElement("br",null),r.a.createElement("div",null,1===t&&r.a.createElement(G,null)),r.a.createElement("button",{onClick:function(){!function(e,t,n,a){"Bon"===e&&"appetit"===t?n(!0):a()}(o,l,u,m),i(""),c("")},disabled:1===t},"Log in")),r.a.createElement("div",{className:x.a.logImageContainer},r.a.createElement("img",{src:L.a,alt:"logImage",className:x.a.authImage}),r.a.createElement("p",{className:x.a.centeredText},"Welcome Back"))))})),z=n(39),B=n.n(z),H=function(e){return{initialized:e.authReducer.initialized}},U=function(e){return Object(l.b)(H)((function(t){return r.a.createElement("div",null,t.initialized?r.a.createElement(e,t):r.a.createElement(y.a,{to:"/login"}))}))},F=n(77),D=n(15),K=n.n(D),W=n(44),P=function(e){var t=e.recipe,n=t.image,i=t.label,c=t.calories,o=t.totalWeight,l=t.shareAs,u=t.ingredientLines,m=Object(a.useState)(!1),s=Object(W.a)(m,2),p=s[0],d=s[1];return r.a.createElement("div",{className:K.a.listItemsContainer},r.a.createElement("div",{className:K.a.mealImageContainer},r.a.createElement("img",{src:n,alt:"mealImage"})),r.a.createElement("div",{className:K.a.mealIngredientsContainer},r.a.createElement("h2",null," ",i),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"calories:")," ",c),r.a.createElement("p",null," ",r.a.createElement("strong",null,"weight:")," ",o),p&&r.a.createElement("div",null,r.a.createElement("a",{href:l,target:"blank"},"More detailed information"),r.a.createElement("br",null),r.a.createElement("strong",null," ingredients"),u.map((function(e){return r.a.createElement("ul",{key:Object(F.a)()},r.a.createElement("li",null,e))}))),r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){return d(!p)}},p?"hide":"show"," details")))},X=n(19),J=n.n(X);var q=function(e){var t=e.recipes,n=e.getRecipesTHUNK,a=e.fromItem,i=e.toItem,c=e.moreResults;return r.a.createElement("div",{className:J.a.paginationContainer},0!==t.length&&r.a.createElement("div",null,a>0&&r.a.createElement("span",{className:J.a.prev,onClick:function(){n(a-10,i-10)}},"Prev"),c&&r.a.createElement("span",{className:J.a.next,onClick:function(){n(a+10,i+10)}},"Next")))},Y=Object(u.d)(Object(l.b)((function(e){return{fromItem:e.mainReducer.fromItem,toItem:e.mainReducer.toItem,moreResults:e.mainReducer.moreResults,recipes:e.mainReducer.mealResultArray}}),{getRecipesTHUNK:I}))((function(e){var t=e.recipes,n=e.getRecipesTHUNK,a=e.fromItem,i=e.toItem,c=e.moreResults;return r.a.createElement("div",{className:K.a.listsContainer},t&&t.map((function(e){return r.a.createElement(P,{recipe:e.recipe,key:Object(F.a)()})})),r.a.createElement(q,{recipes:t,getRecipesTHUNK:n,moreResults:c,toItem:i,fromItem:a}))})),Q=n(40),V=n.n(Q);var Z=function(e){return r.a.createElement("div",{className:V.a.nooResultContainer},r.a.createElement("h1",null,"No result"))},$=n(41),ee=n.n($);var te=function(){return r.a.createElement("div",{className:ee.a.loadingContainer})},ne=Object(u.d)(Object(l.b)((function(e){return{isFetching:e.mainReducer.isFetching,count:e.mainReducer.count}}),{getRecipesTHUNK:I}),U)((function(e){var t=e.count,n=e.isFetching;return 0===t?r.a.createElement(Z,null):r.a.createElement("div",{className:B.a.mainContainer},n?r.a.createElement(te,null):r.a.createElement(Y,null))})),ae=n(42),re=n.n(ae),ie=Object(u.d)(Object(l.b)((function(e){return{}}),{}),U)((function(e){return r.a.createElement("div",{className:re.a.ownRecipe},"own recipe")})),ce=(n(74),n(13)),oe=n.n(ce),le=function(e){var t=e.link,n=e.content;return r.a.createElement("div",{className:oe.a.navItem},r.a.createElement(o.b,{to:t,activeClassName:oe.a.activeLink},n))},ue=Object(l.b)((function(e){return{initialized:e.authReducer.initialized}}),{loginSubmitAC:f})((function(e){var t=e.loginSubmitAC,n=e.initialized;return r.a.createElement("div",{className:oe.a.navBarContainer},r.a.createElement("div",{className:oe.a.logoContainer},"LOGO"),r.a.createElement("div",{className:oe.a.menuContainer},r.a.createElement(le,{link:"/main",content:"Main"}),r.a.createElement(le,{link:"/ownRecipe",content:"Own recipe"}),n?r.a.createElement("span",{onClick:function(){t(!1)},className:oe.a.navItem},"Log out"):r.a.createElement(le,{link:"/login",content:"Login"})))})),me=n(43),se=n.n(me);var pe=function(e){var t=e.mealNameChangeAC,n=e.getRecipesTHUNK,a=e.mealName,i=e.initialized,c=function(){a&&n()};return r.a.createElement("div",{className:se.a.searchContainer},r.a.createElement("input",{type:"text",value:a,onChange:function(e){t(e.target.value)},placeholder:"You look hungry",onKeyDown:function(e){13===e.keyCode&&c()},disabled:!i}),r.a.createElement("button",{onClick:c,disabled:!i}," ","HUNT"," "))},de=n(24),ge=n.n(de),Ee=Object(u.d)(Object(l.b)((function(e){return{mealName:e.mainReducer.mealName,initialized:e.authReducer.initialized}}),{mealNameChangeAC:function(e){return{type:"MEAL_NAME_CHANGE",mealName:e}},getRecipesTHUNK:I}))((function(e){var t="/ownRecipe"===Object(y.g)().pathname;return r.a.createElement("div",{className:"".concat(ge.a.headerContainer," ").concat(t?"".concat(ge.a.ownRecipebg):"")},r.a.createElement(ue,null),!t&&r.a.createElement(pe,e))}));var _e=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(Ee,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/login",component:function(){return r.a.createElement(M,null)}}),r.a.createElement(y.b,{path:"/main",component:function(){return r.a.createElement(ne,null)}}),r.a.createElement(y.b,{path:"/ownRecipe",component:function(){return r.a.createElement(ie,null)}})))};n(75);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(l.a,{store:T},r.a.createElement(_e,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.2ea4dd41.chunk.js.map