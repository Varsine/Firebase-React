(this["webpackJsonpfirebase-react"]=this["webpackJsonpfirebase-react"]||[]).push([[0],{216:function(e,t,a){e.exports=a.p+"static/media/loading.9df66046.gif"},218:function(e,t,a){e.exports=a(438)},223:function(e,t,a){},224:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(87),i=a.n(l),c=(a(223),a(224),a(225),a(226),a(7)),s=a(31),o=a(4),u=Object(o.connect)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(c.c,{to:"/create"}," New User")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/",onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),m=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(c.c,{to:"/signup"},"sign up")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/signin"},"log in"),">"))},d=Object(o.connect)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(u,{profile:a}):r.a.createElement(m,null);return r.a.createElement("nav",{className:"nav-wrapper gray darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{to:"/",className:"brand-logo"},"logo"),n))})),p=a(16),h=a(17),E=a(19),f=a(18),b=function(){return r.a.createElement("div",{className:"notification"},r.a.createElement("p",null,"Notification"))},g=a(6),v=a(13),N=a(216),O=a.n(N);var j=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"loding-img",alt:"loding...",src:O.a}))},S=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.clients;return r.a.createElement("div",{className:"users-form"},r.a.createElement("h1",null,"List of employees"),t?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Balance ($)"),r.a.createElement("th",null,"Updating Data "),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,t.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.firstName),r.a.createElement("td",null,t.lastName),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/user/"+t.id},t.email)," "),r.a.createElement("td",null,t.balance),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/update/"+t.id},r.a.createElement("button",{className:"update-icon"},"up"))),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.props.removeUser(t.id)},className:"close-icon"},"x")))})))):r.a.createElement(j,null))}}]),a}(r.a.Component),y=Object(g.d)(Object(o.connect)((function(e){return{clients:e.firestore.ordered.client}}),(function(e){return{removeUser:function(t){return e(function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("client").doc(e).delete().then((function(){t({type:"DELETE_USER"})}))}}(t))}}})),Object(v.firestoreConnect)([{collection:"client"}]))(S),C=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(y,null)),r.a.createElement("div",null)),r.a.createElement(b,null)):r.a.createElement(s.a,{to:"/signin"})}}]),a}(r.a.Component),w=Object(g.d)(Object(o.connect)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(v.firestoreConnect)([{collection:"client"}]))(C),R=Object(g.d)(Object(o.connect)((function(e,t){var a=t.match.params.id,n=e.firestore.data.client;return{client:n?n[a]:null,auth:e.firebase.auth}})),Object(v.firestoreConnect)([{collection:"client"}]))((function(e){var t=e.client;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("img",{className:"user-img",src:t.photoURL,alt:"user"}),r.a.createElement("span",{className:"card-title"},t.firstName+" "+t.lastName),r.a.createElement("p",{className:"userProfile-info"},"Your username is your identity online. Whether you\u2019re posting on forums, editing a wiki, playing games, or doing any other online activity that involves interacting with others, your username will be the first thing other people see.People will make assumptions about you based on the name you choose, so pick wisely!"),r.a.createElement("p",null,"Balance - ",t.balance," $"))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loadin project...")):r.a.createElement(s.a,{to:"/signin"})})),U=a(26),x=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:null},e.handleChange=function(t){e.setState(Object(U.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.singIn(e.state),e.props.history.push("/")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.authError;return r.a.createElement("div",{className:"container"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}),r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Log in"),r.a.createElement("div",{className:"red-text center"},e?r.a.createElement("p",null,e):null)))}}]),a}(r.a.Component),F=Object(o.connect)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{singIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(x),I=(a(204),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",password:"",passwordRepeat:"",errorFirstname:"",errorLastname:"",errorEmail:"",errorPassword:""},e.handleChange=function(t){e.setState(Object(U.a)({},t.target.id,t.target.value))},e.validate=function(){var t=e.state,a=t.firstName,n=t.lastName,r=t.email,l=t.password,i=t.passwordRepeat;if(""===a||""===n||""===r||""===l||""===i)e.setState({errorPassword:"Input fields cannot be empty, fill in the fields"});else if(a.length<3)e.setState({errorFirstname:"Firstname lengths must be large or equal to 3"});else if(n.length<5)e.setState({errorLastname:"Lastname lengths must be large or equal to 5"});else if(r.includes("@"))if(l.length<8)e.setState({errorPassword:"The length of the password must be large or equal to 8"});else{if(l===i)return e.state;e.setState({errorPassword:"Password and passwordrepeat must be the same"})}else e.setState({errorEmail:"Email should include @"})},e.handleSubmit=function(t){t.preventDefault(),e.validate()&&(e.props.signUp(e.state),e.props.history.push("/signin"))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.authError,t=this.state,a=t.firstName,n=t.lastName,l=t.email,i=t.password,c=t.passwordRepeat,s=t.errorFirstname,o=t.errorLastname,u=t.errorEmail,m=t.errorPassword;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Sing Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",id:"firstName",value:a.slice(0,1).toUpperCase()+a.slice(1),onChange:this.handleChange})," ",r.a.createElement("div",{className:"red-text center"},s?r.a.createElement("p",null,s):null),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",value:n.slice(0,1).toUpperCase()+n.slice(1),onChange:this.handleChange})," ",r.a.createElement("div",{className:"red-text center"},o?r.a.createElement("p",null,o):null),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",id:"email",value:l,onChange:this.handleChange})," ",r.a.createElement("div",{className:"red-text center"},u?r.a.createElement("p",null,u):null),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"password",value:i,onChange:this.handleChange})," ",r.a.createElement("label",null,"Repeat Password"),r.a.createElement("input",{type:"password",id:"passwordRepeat",value:c,onChange:this.handleChange}),r.a.createElement("div",{className:"red-text center"},m?r.a.createElement("p",null,m):null),r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up"),r.a.createElement("div",{className:"red-text center"},e?r.a.createElement("p",null,e):null)," "))}}]),a}(r.a.Component)),L=Object(o.connect)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,i=r(),c=l();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return console.log(t),c.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I),P=a(21),k=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",balance:"",errorFirstname:"",errorLastname:"",errorEmail:"",errorBalance:""},e.handleChande=function(t){e.setState(Object(U.a)({},t.target.id,t.target.value))},e.validate=function(){var t=e.state,a=t.firstName,n=t.lastName,r=t.email,l=t.balance;if(""===a||""===n||""===r||""===l)e.setState({errorBalance:"Input fields cannot be empty, fill in the fields"});else if(a.length<3)e.setState({errorFirstname:"Firstname lengths must be large or equal to 3"});else if(n.length<5)e.setState({errorLastname:"Lastname lengths must be large or equal to 5"});else if(r.includes("@")){if(!(l<0))return e.state;e.setState({errorBalance:"Balance cannot be negative"})}else e.setState({errorEmail:"Email should include @"})},e.handleSubmit=function(t){t.preventDefault(),e.validate()&&(e.props.createUser(e.state),e.props.history.push("/"))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.lastName,a=e.firstName,n=e.email,l=e.balance,i=e.errorFirstname,c=e.errorLastname,s=e.errorEmail,o=e.errorBalance;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",id:"firstName",value:a.slice(0,1).toUpperCase()+a.slice(1),onChange:this.handleChande}),r.a.createElement("div",{className:"red-text center"},i?r.a.createElement("p",null,i):null),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",value:t.slice(0,1).toUpperCase()+t.slice(1),onChange:this.handleChande}),r.a.createElement("div",{className:"red-text center"},c?r.a.createElement("p",null,c):null),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",id:"email",value:n,onChange:this.handleChande}),r.a.createElement("div",{className:"red-text center"},s?r.a.createElement("p",null,s):null),r.a.createElement("label",null,"Balans"),r.a.createElement("input",{type:"number",id:"balance",value:l,onChange:this.handleChande}),r.a.createElement("div",{className:"red-text center"},o?r.a.createElement("p",null,o):null),r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Add User"))))}}]),a}(r.a.Component),A=Object(o.connect)(null,(function(e){return{createUser:function(t){return e(function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("client").add(Object(P.a)({},e,{authorBalance:0,authorTime:new Date})).then((function(){t({type:"CREATE_USER",user:e})})).catch((function(e){t({type:"CREATE_USER_ERROR",err:e})}))}}(t))}}}))(k),_=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",balance:"",errorEmail:"",errorBalance:""},e.handleChange=function(t){t.preventDefault(),e.setState(Object(U.a)({},t.target.id,t.target.value))},e.validate=function(){var t=e.state,a=t.email,n=t.balance;if(a.includes("@")){if(!(n<0))return e.state;e.setState({errorBalance:"Balance cannot be negative"})}else e.setState({errorEmail:"Email should include @"})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.client,r=a.firestore,l=e.state,i=l.firstName,c=l.lastName,s=l.email,o=l.balance;e.validate()&&(e.props.history.push("/"),r.collection("client").doc(e.props.match.params.id).update(Object(P.a)({},e.state,{lastName:c||n.lastName,firstName:i||n.firstName,email:s||n.email,balance:o||n.balance})))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.client,t=this.state,a=t.errorEmail,n=t.errorBalance;return r.a.createElement("div",null,e?r.a.createElement("form",{onSubmit:this.handleSubmit,className:"userUpdate-form"},r.a.createElement("div",null,r.a.createElement("p",null,"Update first name"),r.a.createElement("input",{type:"text",defaultValue:e.firstName,id:"firstName",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("p",null,"Update last name"),r.a.createElement("input",{type:"text",defaultValue:e.lastName,id:"lastName",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("p",null,"Update email"),r.a.createElement("input",{type:"text",defaultValue:e.email,id:"email",onChange:this.handleChange}),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)),r.a.createElement("div",null,r.a.createElement("p",null,"Update balance"),r.a.createElement("input",{type:"number",defaultValue:e.balance,id:"balance",onChange:this.handleChange}),r.a.createElement("div",{className:"red-text center"},n?r.a.createElement("p",null,n):null)),r.a.createElement("div",{className:"btn pink lighten-1 z-depth-0"},r.a.createElement("button",null,"Update"))):r.a.createElement("div",null,"loding..."))}}]),a}(r.a.Component),B=Object(g.d)(Object(o.connect)((function(e,t){var a=t.match.params.id,n=e.firestore.data.client;return{client:n?n[a]:null,auth:e.firebase.auth}})),Object(v.firestoreConnect)([{collection:"client"}]))(_),D=a(135),G=a.n(D),T=a(139),z=G()({}),V=Object(T.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:j,allowRedirectBack:!0,redirectPath:function(e,t){return z.getRedirectQueryParam(t)||"/sign-in"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=(t.profile,t.isInitializing);return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&!t.isEmpty}}),q=Object(T.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:j,allowRedirectBack:!1,redirectPath:function(e,t){return z.getRedirectQueryParam(t)||"/"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&t.isEmpty}});var J=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d,null)),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:V(w)}),r.a.createElement(s.b,{path:"/user/:id",component:V(R)}),r.a.createElement(s.b,{path:"/update/:id",component:V(B)}),r.a.createElement(s.b,{path:"/create",component:V(A)}),r.a.createElement(s.b,{exact:!0,path:"/signin",component:q(F)}),r.a.createElement(s.b,{path:"/signup",component:q(L)}))))},W=a(39),Q=a(217),$=a(49),K=a.n($),M=(a(436),K.a.initializeApp({apiKey:"AIzaSyAJ3p9VjGl7vpJQhrzjdCbmVlXWlcvptaE",authDomain:"react-project-f1263.firebaseapp.com",databaseURL:"https://react-project-f1263.firebaseio.com",projectId:"react-project-f1263",storageBucket:"react-project-f1263.appspot.com",messagingSenderId:"970600271089",appId:"1:970600271089:web:a78a50adb610a2e39e2d50",measurementId:"G-BJ9RG38PM8"}));K.a.firestore(M);var X=K.a,Y={authError:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(P.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return Object(P.a)({},e,{authError:null});case"SIGNUP_SUCCESS":return console.log("singup success"),Object(P.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("singup error"),Object(P.a)({},e,{authError:"Sign up failed"});case"DELETE_USER":return console.log("delet user"),Object(P.a)({},e,{authError:null});default:return e}},Z={projects:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":case"CREATE_USER_ERROR":return e;case"UPDATE_USER":return console.log("update user"),e;case"UPDATE_USSER_ERROR":return console.log("update not user"),e;default:return e}},te=Object(g.c)({auth:H,user:ee,firestore:W.firestoreReducer,firebase:v.firebaseReducer}),ae=Object(g.e)(te,Object(g.d)(Object(g.a)(Q.a.withExtraArgument({getFirebase:v.getFirebase,getFirestore:W.getFirestore})),Object(W.reduxFirestore)(X))),ne={firebase:K.a,config:X,dispatch:ae.dispatch,createFirestoreInstance:W.createFirestoreInstance};i.a.render(r.a.createElement(o.Provider,{store:ae},r.a.createElement(v.ReactReduxFirebaseProvider,ne,r.a.createElement(J,null))),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.6769a87c.chunk.js.map