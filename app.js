(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var s=a(29),n=a.n(s),r=a(131),o=a(130),l=a(109),c=a(113),i=a(126);function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){p(e,t,a[t])})}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let d={searchResults:[],alternatives:[],alt_toggle:!1};function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){m(e,t,a[t])})}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const g=e=>t=>t({type:"DELETE_ITEM",payload:e});let E={username:"",password:"",userId:"",loggedIn:!1,savedItems:{},topSearches:{}};var b=Object(c.c)({searchReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"POPULATE_LIST":return u({},e,{searchResults:[...s],alt_toggle:!1});case"POPULATE_ALT":return u({},e,{alternatives:[...s],alt_toggle:!0});case"ALT_TOGGLE":return u({},e,{alt_toggle:!e.alt_toggle});default:return e}},userReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"CREATE_USER":return h({},e,{username:s.username,password:s.password,userId:s._id,topSearches:h({},s.topSearches),loggedIn:!0});case"LOG_IN":return{username:s.username,password:s.password,userId:s._id,topSearches:h({},s.topSearches),savedItems:h({},s.savedItems),loggedIn:!0};case"LOG_OUT":return{state:E};case"SAVE_ITEM":return h({},e,{savedItems:h({},e.savedItems,s)});case"DELETE_ITEM":return delete e.savedItems[s],h({},e,{savedItems:h({},e.savedItems)});case"UPDATE_TOP":let t={};return t=e.topSearches[s]?h({},e.topSearches,e.topSearches[s]++):h({},e.topSearches,e.topSearches[s]=1),h({},e,{topSearches:h({},t)});default:return e}}});const v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d;var y=Object(l.b)(e=>({alt_toggle:e.searchReducer.alt_toggle}),e=>({populateAlternatives:t=>e((e=>t=>{fetch(`https://medicine-backend.herokuapp.com/api/v1/alternatives/${e}`).then(e=>e.json()).then(e=>t({type:"POPULATE_ALT",payload:e})).catch(e=>console.error(e))})(t)),altToggle:()=>e(e=>e({type:"ALT_TOGGLE"})),saveItem:t=>e((e=>{let t={[e.rxcui]:{rxcui:e.rxcui,name:e.name}};return e=>e({type:"SAVE_ITEM",payload:t})})(t)),deleteItem:t=>e(g(t))}))(class extends s.Component{constructor(e){super(e),this.state={saved:!1},this.toggleSave=this.toggleSave.bind(this)}toggleSave(e){e.preventDefault(),this.setState(e=>({saved:!e.saved}));let t=e.target.parentNode.parentNode.parentNode.id,a={rxcui:t,name:e.target.parentNode.parentNode.firstChild.innerText};"save"===e.target.id?this.props.saveItem(a):this.props.deleteItem(t)}render(){let e=this.props.details.rxcui;return n.a.createElement("li",{id:e},n.a.createElement("div",{className:"list-item-container container"},this.props.alt_toggle?n.a.createElement("h2",null,this.props.details.synonym):n.a.createElement("h2",null,this.props.details.name),n.a.createElement("div",{className:"save-btn"},this.state.saved?n.a.createElement("button",{id:"undo",onClick:this.toggleSave,type:"submit"},"Undo"):n.a.createElement("button",{id:"save",onClick:this.toggleSave,type:"submit"},"Save"),this.props.alt_toggle?null:n.a.createElement("button",{id:"alt",onClick:()=>this.props.populateAlternatives(e),type:"submit"},"Alternatives"))))}});var S=Object(l.b)(e=>({searchResults:e.searchReducer.searchResults,alternatives:e.searchReducer.alternatives,alt_toggle:e.searchReducer.alt_toggle,initial:e.searchReducer.initial,favorites:e.searchReducer.favorites}))(class extends s.Component{constructor(e){super(e)}render(){return n.a.createElement(s.Fragment,null,n.a.createElement("ul",{className:"container"},this.props.alt_toggle?this.props.alternatives.map(e=>n.a.createElement(y,{key:e.rxcui,details:e})):this.props.searchResults.map(e=>n.a.createElement(y,{key:e.rxcui,details:e}))))}});var f=Object(l.b)(e=>({loggedIn:e.userReducer.loggedIn,state:e.userReducer,topSearches:e.userReducer.topSearches}),e=>({createUser:t=>e((e=>t=>{fetch("https://medicine-backend.herokuapp.com/api/v1/user",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>t({type:"CREATE_USER",payload:e})).catch(e=>console.error(e))})(t)),logOut:t=>e((e=>t=>{const a=`https://medicine-backend.herokuapp.com/api/v1/user/${e.userId}`;fetch(a,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(()=>t({type:"LOG_OUT"}))})(t)),logIn:t=>e((e=>t=>{fetch(`https://medicine-backend.herokuapp.com/api/v1/user/${e}`).then(e=>e.json()).then(e=>t({type:"LOG_IN",payload:e[0]})).catch(e=>console.error(e))})(t)),initialLoad:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(t=>e(initialLoad(t)))}))(class extends s.Component{constructor(e){super(e),this.state={name:"",password:""},this.onChange=this.onChange.bind(this),this.onSubmit=this.onSubmit.bind(this),this.logOut=this.logOut.bind(this)}onChange(e){this.setState({[e.target.name]:e.target.value})}onSubmit(e){e.preventDefault();let t={username:this.state.name,password:this.state.password};this.state.name&&this.state.password?("signup"===e.target.id&&this.props.createUser(t),"login"===e.target.id&&this.props.logIn(this.state.name)):(this.setState({name:"",password:""}),document.getElementById("username").value="",document.getElementById("password").value="",alert("Missing field(s)"))}logOut(){this.props.logOut(this.props.state)}render(){return this.props.loggedIn?n.a.createElement("form",null,n.a.createElement("button",{id:"logout",onClick:this.logOut,type:"submit"},"Log Out")):n.a.createElement("form",null,n.a.createElement("input",{type:"text",id:"username",name:"name",placeholder:"Username",onChange:this.onChange}),n.a.createElement("input",{type:"text",id:"password",name:"password",placeholder:"Password",onChange:this.onChange}),n.a.createElement("button",{id:"signup",onClick:this.onSubmit,type:"submit"},"Sign Up"),n.a.createElement("button",{id:"login",onClick:this.onSubmit,type:"submit"},"Log In"))}}),O=a(117),I=a.n(O),_=a(129);var T=Object(l.b)(e=>({alt_toggle:e.searchReducer.alt_toggle,username:e.userReducer.name,password:e.userReducer.password,loggedIn:e.userReducer.loggedIn,topSearches:e.userReducer.topSearches}),e=>({populateList:t=>e((e=>t=>{const a=`https://medicine-backend.herokuapp.com/api/v1/search/${e.searchValue}`;fetch(a).then(e=>e.json()).then(e=>t({type:"POPULATE_LIST",payload:e})).catch(e=>console.error(e))})(t)),altToggle:()=>e(e=>e({type:"ALT_TOGGLE"})),updateTopSearches:t=>e((e=>t=>t({type:"UPDATE_TOP",payload:e}))(t))}))(class extends s.Component{constructor(e){super(e),this.state={searchValue:""},this.onSubmit=this.onSubmit.bind(this),this.searchEntry=this.searchEntry.bind(this),this.backBtn=this.backBtn.bind(this)}searchEntry(e){this.setState({searchValue:e.target.value})}onSubmit(e){e.preventDefault();let t={searchValue:this.state.searchValue};this.props.updateTopSearches(this.state.searchValue),this.state.searchValue?this.props.populateList(t):alert("PLEASE ENTER VALUE"),document.getElementById("search").value=""}backBtn(e){e.preventDefault(),this.props.altToggle()}render(){return this.props.loggedIn?n.a.createElement(s.Fragment,null,n.a.createElement("nav",{className:"container"},n.a.createElement("img",{src:I.a,alt:"canvas logo"}),n.a.createElement("div",{className:"right container"},n.a.createElement("form",null,this.props.alt_toggle?n.a.createElement("button",{className:"back",onClick:this.backBtn},"Back"):null,n.a.createElement("input",{id:"search",type:"text",name:"search",placeholder:"Example: 'Advil'",onChange:this.searchEntry}),n.a.createElement("button",{className:"search",onClick:this.onSubmit,type:"submit"},"Search"),n.a.createElement(_.a,{to:"/profile"},n.a.createElement("button",{className:"profile",type:"submit"},"Profile"))),n.a.createElement(f,null))),n.a.createElement(S,null)):n.a.createElement("nav",{className:"container"},n.a.createElement("img",{src:I.a,alt:"canvas logo"}),n.a.createElement("div",{className:"right container"},n.a.createElement(f,null)))}});var w=Object(l.b)(null,e=>({deleteItem:t=>e(g(t))}))(class extends s.Component{constructor(e){super(e),this.delete=this.delete.bind(this)}delete(e){let t=e.target.parentNode.parentNode.parentNode.id;this.props.deleteItem(t)}render(){let e=this.props.details.rxcui;return n.a.createElement("li",{id:e},n.a.createElement("div",{className:"list-item-container container"},n.a.createElement("h2",null,this.props.details.name),n.a.createElement("div",{className:"save-btn"},n.a.createElement("button",{id:"undo",onClick:this.delete,type:"submit"},"Undo"))))}});var k=Object(l.b)(e=>({alt_toggle:e.searchReducer.alt_toggle,savedItems:e.userReducer.savedItems}))(class extends s.Component{constructor(e){super(e)}render(){return n.a.createElement(s.Fragment,null,n.a.createElement("nav",{className:"container"},n.a.createElement("img",{src:I.a,alt:"canvas logo"}),n.a.createElement("div",{className:"right container"},n.a.createElement(_.a,{to:"/"},n.a.createElement("button",{className:"home",type:"submit"},"Home")))),n.a.createElement("ul",null,Object.values(this.props.savedItems).map(e=>n.a.createElement(w,{key:e.rxcui,details:e}))))}});a.d(t,"default",function(){return N});const C=(()=>Object(c.e)(b,v(Object(c.a)(i.a))))();class N extends s.Component{constructor(e){super(e),this.state={current:""}}render(){return n.a.createElement(l.a,{store:C},n.a.createElement(r.a,null,n.a.createElement("div",null,n.a.createElement(o.a,{exact:!0,path:"/",component:T}),n.a.createElement(o.a,{exact:!0,path:"/profile",component:k}))))}}},117:function(e,t,a){e.exports=a.p+"src/assets/logo/canvas-logo-379194b4.png"}}]);
//# sourceMappingURL=app.js.map