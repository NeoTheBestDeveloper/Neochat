(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/thumbs-down-solid.f1faec9f.svg"},103:function(e,t,a){e.exports={loader__wrapper:"Loader_loader__wrapper__3gVeG",loader:"Loader_loader__2DKMc"}},104:function(e,t,a){e.exports={dialogs__item:"DialogItem_dialogs__item__1Cdio",activeLink:"DialogItem_activeLink__1IQU6"}},13:function(e,t,a){e.exports={usersTitle:"Users_usersTitle__366KX",user:"Users_user__1dQYj",ava_wrapper:"Users_ava_wrapper__EEYTu",ava:"Users_ava__dN1VK",followBtn:"Users_followBtn__3m1nP",userRight:"Users_userRight__2SzYe",descriptions:"Users_descriptions__iLA8f",name:"Users_name__3Kys8",location:"Users_location__1IQvC",status:"Users_status__E0SMG",users__header:"Users_users__header__3gJLL"}},14:function(e,t,a){e.exports={nav:"Nav_nav__3gICw",usersItem:"Nav_usersItem__3C8vv",activelink:"Nav_activelink__2eHLF",item:"Nav_item__96rLj"}},140:function(e,t,a){},141:function(e,t,a){e.exports=a.p+"static/media/user.5e946c20.svg"},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/media/avaSvgDefault.f9d5315a.svg"},150:function(e,t,a){e.exports=a.p+"static/media/7.8a9519e1.jpg"},151:function(e,t,a){e.exports=a.p+"static/media/30.a575ad6a.jpg"},17:function(e,t,a){e.exports={profile__title:"ProfileInfo_profile__title__1KB5H",profile__ava:"ProfileInfo_profile__ava__2cWMl",ava__img:"ProfileInfo_ava__img__BjWwK",profile__description:"ProfileInfo_profile__description__1YoLN",status:"ProfileInfo_status__31wvJ",all__counts:"ProfileInfo_all__counts__13Itw",counts:"ProfileInfo_counts__24SPT"}},178:function(e,t,a){e.exports=a(306)},183:function(e,t,a){},184:function(e,t,a){},208:function(e,t,a){},23:function(e,t,a){e.exports={item:"Post_item__nOP_R",post__description:"Post_post__description__f5MKF",post__text:"Post_post__text__ZDpQU",post__ava:"Post_post__ava__13FwM",reiting:"Post_reiting__1tmeR",like:"Post_like__1m6cf",like__item:"Post_like__item__2G136",dislike:"Post_dislike__jxSxZ",dislike__item:"Post_dislike__item__31SPg",likesCount:"Post_likesCount__2JvYD",dislikesCount:"Post_dislikesCount__3TI7n"}},27:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogs__left:"Dialogs_dialogs__left__2vEtR",dialogs__title:"Dialogs_dialogs__title__3R8D-",dialogs__items:"Dialogs_dialogs__items__1o0VM",wrapper:"Dialogs_wrapper__1cRA8",messages:"Dialogs_messages__1w_Up",messagesItems:"Dialogs_messagesItems__2eejk",form__adder:"Dialogs_form__adder__2KCk0",form__text:"Dialogs_form__text__TpyUT"}},28:function(e,t,a){e.exports={form_title:"Login_form_title__1oTAN",form:"Login_form__2mvFD",form_login_wrapper:"Login_form_login_wrapper__1jTpO",form_loginInput:"Login_form_loginInput__1pS7P",form_password_wrapper:"Login_form_password_wrapper__13z5u",form_passwordInput:"Login_form_passwordInput__gt2DG",submitBtn_wrapper:"Login_submitBtn_wrapper__3uQ-S",submitBtn:"Login_submitBtn__3-9f5",checkbox_wrapper:"Login_checkbox_wrapper__L0fW0",form_checkboxInput:"Login_form_checkboxInput__2cWAt"}},306:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),s=a(69),i=a.n(s),o=(a(183),a(31)),c=a(32),l=a(34),u=a(33),m=a(10),d=(a(184),a(74)),_=a.n(d),f=a(11),p=function(e){return r.a.createElement("header",{className:_.a.header},r.a.createElement("div",{className:_.a.login_block},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(f.b,{to:"/login",activeClassName:_.a.activelink},"Login")))},g=a(9),v=a(12),E=a.n(v),h=a(21),b=a(4),k=a(139),C=k.create({withCredentials:!0,headers:{"api-key":"d48157d2-2191-474f-a96d-4fce9597c7d0"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return C.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},N=function(e){return C.delete("follow/".concat(e)).then((function(e){return e.data}))},O=function(e){return C.post("follow/".concat(e)).then((function(e){return e.data}))},S=function(){return C.get("auth/me").then((function(e){return e.data}))},P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return C.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},j=function(){return C.delete("auth/login").then((function(e){return e.data}))},y=function(e){return C.get("profile/"+e).then((function(e){return e.data}))},x=function(e){return C.get("profile/status/"+e).then((function(e){return e.data}))},D=function(e){return C.put("profile/status",{status:e}).then((function(e){return e.data}))},I=a(24),T={userId:null,email:null,login:null,isAuth:!1},L=function(e,t,a,n){return{type:"SET_AUTH_USER_DATA",data:{userId:e,login:t,email:a,isAuth:n}}},A=function(){return function(){var e=Object(h.a)(E.a.mark((function e(t){var a,n,r,s,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.email,s=n.id,i=n.login,t(L(s,i,r,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":return Object(b.a)(Object(b.a)({},e),t.data);default:return e}},U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p,this.props)}}]),a}(r.a.Component),F=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:0===e.sent.resultCode&&t(L(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(U),R=a(14),B=a.n(R),G=a(75),z=a.n(G),H=function(e){return r.a.createElement("div",{className:z.a.friends__item},r.a.createElement("div",{className:z.a.item__ava},r.a.createElement("img",{src:e.ava,alt:""})),r.a.createElement("div",{className:z.a.item__name},e.name))},W=a(76),K=a.n(W),V=function(e){return r.a.createElement("div",{className:K.a.friends},r.a.createElement("h1",{className:K.a.friends__title},"Friends"),r.a.createElement("div",{className:K.a.friends__items},e.friends))},q=Object(g.b)((function(e){return{friends:e.siteBar.friendsData.map((function(e){return r.a.createElement(H,{name:e.name,ava:e.ava,key:e.id})}))}}),(function(e){return{}}))(V),J=q,Z=function(e){return r.a.createElement("nav",{className:B.a.nav},r.a.createElement("div",null,r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/profile"},"Profile")),r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/dialogs"},"Messages")),r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/news"},"News")),r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/music"},"Music")),r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/settings"},"Settings")),r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/games"},"Games")),r.a.createElement("div",{className:B.a.item},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/servises"},"Servises"))),r.a.createElement(J,null),r.a.createElement("div",{className:B.a.usersItem},r.a.createElement(f.b,{activeClassName:B.a.activelink,to:"/users"},"Users")))},Y=a(140),Q=a.n(Y),X=a(26),$=a(77),ee=a.n($),te=a(78),ae=a.n(te),ne=a(99),re=a.n(ne),se=a(100),ie=a.n(se),oe=a(141),ce=a.n(oe),le={postData:[],likesCountStart:0,dislikesCountStart:0,idStart:1,profile:null,status:""},ue=function(e){return{type:"SET-STATUS",status:e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:e.idStart,message:t.postText,likesCount:e.likesCountStart,dislikesCount:e.dislikesCountStart,likeSrc:ee.a,dislikeSrc:ae.a,likeCliked:!1,dislikeCliked:!1};return e.idStart++,Object(b.a)(Object(b.a)({},e),{},{postData:[].concat(Object(X.a)(e.postData),[a])});case"DELETE-POST":return Object(b.a)(Object(b.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.id}))});case"CHANGE-LIKE":var n=e.postData.find((function(e){return e.id===t.id}));return 0===n.dislikesCount&&0===n.likesCount?(n.likesCount++,n.likeSrc=re.a):0===n.dislikesCount&&0!==n.likesCount?(n.likesCount--,n.likeSrc=ee.a):(n.dislikesCount--,n.dislikeSrc=ae.a,n.likeSrc=re.a,n.likesCount++),Object(b.a)(Object(b.a)({},e),{},{postData:Object(X.a)(e.postData)});case"CHANGE-DISLIKE":var r=e.postData.find((function(e){return e.id===t.id}));return 0===r.likesCount&&0===r.dislikesCount?(r.dislikesCount++,r.dislikeSrc=ie.a):0===r.likesCount&&0!==r.dislikesCount?(r.dislikesCount--,r.dislikeSrc=ae.a):(r.likesCount--,r.likeSrc=ee.a,r.dislikeSrc=ie.a,r.dislikesCount++),Object(b.a)(Object(b.a)({},e),{},{postData:Object(X.a)(e.postData)});case"SET-PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}},de=a(42),_e=a.n(de),fe=a(135),pe=a(136),ge=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},ve=function(e){return e&&e.trim()?void 0:"Field is required"},Ee=a(72),he=a(56),be=a.n(he),ke=function(e){return function(t){var a,n=t.input,s=t.meta,i=s.error,o=s.submitFailed,c=s.active,l=Object(Ee.a)(t,["input","meta"]);return"input"===e?a="Field is required"!==i&&void 0!==i||"Field is required"===i&&o:"textarea"===e&&(a="Field is required"!==i&&void 0!==i||"Field is required"===i&&o&&c),r.a.createElement("div",{className:be.a.formControl+" "+(a?be.a.error:void 0)},r.a.createElement(e,Object.assign({},n,l)),r.a.createElement("span",null,a?i:void 0))}},Ce=(a(208),a(23)),we=a.n(Ce),Ne=function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:we.a.item},r.a.createElement("div",{className:we.a.post__description},r.a.createElement("img",{className:we.a.post__ava,src:"https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",alt:""}),r.a.createElement("div",{className:we.a.reiting},r.a.createElement("div",{className:we.a.like},r.a.createElement("img",{className:we.a.like__item,ref:t,src:e.likeSrc,alt:"",onClick:function(){var t=e.id;e.changeLike(t)}}),r.a.createElement("div",{className:we.a.likesCount},e.likesCount)),r.a.createElement("div",{className:we.a.dislike},r.a.createElement("img",{className:we.a.dislike__item,ref:a,src:e.dislikeSrc,alt:"",onClick:function(){var t=e.id;e.changedisilke(t)}}),r.a.createElement("div",{className:we.a.dislikesCount},e.dislikesCount)))),r.a.createElement("div",{className:we.a.post__text},e.message))},Oe=Object(g.b)((function(e){return{}}),(function(e){return{changeLike:function(t){e(function(e){return{type:"CHANGE-LIKE",id:e}}(t))},changedisilke:function(t){e(function(e){return{type:"CHANGE-DISLIKE",id:e}}(t))}}}),(function(e,t,a){return{id:a.id,message:a.message,dislikesCount:a.dislikesCount,likesCount:a.likesCount,likeSrc:a.likeSrc,dislikeSrc:a.dislikeSrc,changeLike:t.changeLike,changedisilke:t.changedisilke}}))(Ne),Se=ge(30),Pe=ke("textarea"),je=Object(pe.a)({form:"AddPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(fe.a,{placeholder:"Add new post:)",className:_e.a.form__text,name:"postText",component:Pe,validate:[ve,Se]}),r.a.createElement("button",{className:_e.a.form__adder,onClick:e.addPost,type:"submit"},"Add post"),r.a.createElement("button",{className:_e.a.form__remover},"Remove"))})),ye=r.a.memo((function(e){var t=Object(X.a)(e.Posts).reverse().map((function(e){return r.a.createElement(Oe,{key:e.id,message:e.message,dislikesCount:e.dislikesCount,likesCount:e.likesCount,id:e.id,likeSrc:e.likeSrc,dislikeSrc:e.dislikeSrc})}));return r.a.createElement("div",null,r.a.createElement("h1",{className:_e.a.MyPosts__title},"My Posts"),r.a.createElement("div",{className:_e.a.MyPosts__form},r.a.createElement(je,{onSubmit:function(t){e.addPost(t.postText)}})),r.a.createElement("div",{className:_e.a.posts},t))})),xe=Object(g.b)((function(e){return{newPostText:e.profilePage.newPostText,Posts:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",postText:e}}(t)),e(Object(I.a)("AddPostForm"))}}}))(ye),De=a(17),Ie=a.n(De),Te=a(103),Le=a.n(Te),Ae=function(e){return r.a.createElement("div",{className:Le.a.loader__wrapper},r.a.createElement("div",{className:Le.a.loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},Me=a(59),Ue=function(e){var t=Object(n.useState)(!1),a=Object(Me.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(e.status),c=Object(Me.a)(o,2),l=c[0],u=c[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",{className:Ie.a.status},r.a.createElement("div",{className:Ie.a.status__title},"Status:"),s?r.a.createElement("div",null,r.a.createElement("input",{value:l,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(l)}})):r.a.createElement("div",{className:Ie.a.status__text,onDoubleClick:function(){i(!0)}},e.status))},Fe=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t&&a?r.a.createElement("div",{className:Ie.a.profile__title},r.a.createElement("div",{className:Ie.a.profile__ava},r.a.createElement("img",{className:Ie.a.ava__img,src:t.photos.large,alt:""})),r.a.createElement("div",{className:Ie.a.profile__description},r.a.createElement("div",{className:Ie.a.name},t.fullName),r.a.createElement(Ue,{status:a,updateStatus:n}),r.a.createElement("div",{className:Ie.a.all__counts},r.a.createElement("div",{className:Ie.a.counts},"Friends",r.a.createElement("br",null),null!==t.friendsCount?34:t.friendsCount),r.a.createElement("div",{className:Ie.a.counts},"Subscribers",r.a.createElement("br",null),null!==t.subscribersCount?23:t.subscribersCount),r.a.createElement("div",{className:Ie.a.counts},"Photos",r.a.createElement("br",null),null!==t.photosCount?78:t.photosCount),r.a.createElement("div",{className:Ie.a.counts},"Audios",r.a.createElement("br",null),null!==t.audiosCount?345:t.audiosCount)))):r.a.createElement(Ae,null)},Re=function(e){return r.a.createElement("div",{className:Q.a.Profile},r.a.createElement(Fe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(xe,null))},Be=a(7),Ge=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getProfileTC(e),this.props.getStatusTC(e)}},{key:"render",value:function(){return r.a.createElement(Re,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC}))}}]),a}(r.a.Component),ze=Object(Be.compose)(Object(g.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfileTC:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:null===(n=t.sent).photos.large&&(n.photos.large=ce.a),a({type:"SET-PROFILE",profile:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatusTC:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:(n=t.sent)||(n="Not status"),a(ue(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusTC:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:0===t.sent.resultCode&&a(ue(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),m.f)(Ge),He=a(104),We=a.n(He),Ke=function(e){return r.a.createElement("li",null,r.a.createElement("div",{className:We.a.dialogs__item},r.a.createElement(f.b,{activeClassName:We.a.activeLink,to:"/dialogs/"+e.id},e.name)))},Ve=a(48),qe=a.n(Ve),Je=function(e){return r.a.createElement("div",{className:qe.a.message_item},r.a.createElement("div",{className:qe.a.item__description},r.a.createElement("img",{className:qe.a.item__ava,src:e.avatar,alt:""}),r.a.createElement("div",{className:qe.a.item__author},e.author)),r.a.createElement("div",null,r.a.createElement("div",{className:qe.a.item__text},e.messageItem__text)))},Ze=a(27),Ye=a.n(Ze),Qe=ge(50),Xe=ke("textarea"),$e=Object(pe.a)({form:"dialogsAddMessageForm"})((function(e){return r.a.createElement("form",{className:Ye.a.addMessageForm,onSubmit:e.handleSubmit},r.a.createElement(fe.a,{className:Ye.a.form__text,placeholder:"Add new message:)",value:e.newMessageText,component:Xe,validate:[ve,Qe],name:"newMessageBody"}),r.a.createElement("button",{className:Ye.a.form__adder},"Add message"))})),et=r.a.createRef(),tt=function(e){return r.a.createElement("div",{className:Ye.a.dialogs},r.a.createElement("div",{className:Ye.a.dialogs__left},r.a.createElement("div",{className:Ye.a.dialogs__title},"Dialogs"),r.a.createElement("ul",{className:Ye.a.dialogs__items},e.dialogsElements)),r.a.createElement("div",{className:Ye.a.wrapper}),r.a.createElement("div",{className:Ye.a.messages},r.a.createElement("div",{className:Ye.a.messagesItems,ref:et},e.messageElements),r.a.createElement($e,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})))},at={dialogsData:[{id:1,name:"Jane"},{id:2,name:"Mark"}],messagesData:[],idStart:0},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:e.idStart,messageItem__text:t.newMessageBody,author:"Me",avatar:"https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"};return Object(b.a)(Object(b.a)({},e),{},{messagesData:[].concat(Object(X.a)(e.messagesData),[a]),idStart:Object(b.a)({},e).idStart+1});default:return e}},rt=function(e){return{isAuth:e.auth.isAuth}},st=function(e){var t=function(t){Object(l.a)(n,t);var a=Object(u.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(m.a,{to:"/login"})}}]),n}(r.a.Component);return Object(g.b)(rt)(t)},it=Object(Be.compose)(Object(g.b)((function(e){var t=e.dialogsPage.dialogsData.map((function(e){return r.a.createElement(Ke,{key:e.id,id:e.id,name:e.name})})),a=e.dialogsPage.messagesData.map((function(e){return r.a.createElement(Je,{key:e.id,author:e.author,messageItem__text:e.messageItem__text,avatar:e.avatar})}));return{newMessageText:e.dialogsPage.newMessageText,dialogsElements:t,messageElements:a}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",newMessageBody:e}}(t)),e(Object(I.a)("dialogsAddMessageForm"))}}})),st)(tt),ot=a(143),ct=a.n(ot),lt=function(e){return r.a.createElement("div",{className:ct.a.Dialogs},"News")},ut=a(144),mt=a.n(ut),dt=function(e){return r.a.createElement("div",{className:mt.a.Dialogs},"Music")},_t=a(145),ft=a.n(_t),pt=function(e){return r.a.createElement("div",{className:ft.a.Dialogs},"Settings")},gt=a(146),vt=a.n(gt),Et=function(e){return r.a.createElement("div",{className:vt.a.Dialogs},"Games")},ht=a(147),bt=a.n(ht),kt=function(e){return r.a.createElement("div",{className:bt.a.Dialogs},"Servises")},Ct=a(148),wt=function(e,t,a,n){return e.map((function(e){return e[a]===t?(console.log(e[a]),Object(b.a)(Object(b.a)({},e),n)):e}))},Nt={usersData:[],pageSize:4,totalUsersCount:0,currentPage:1,avaDefault:a.n(Ct).a,isFetching:!0,followingInProgress:[]},Ot=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},St=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},Pt=function(e,t){return{type:"TOGGLE-IS-FOLLOWINGPROGRESS",isFetching:e,userId:t}},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{usersData:wt(e.usersData,t.id,"id",{followed:!0})});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{usersData:wt(e.usersData,t.id,"id",{followed:!1})});case"SET-USERS":return Object(b.a)(Object(b.a)({},e),{},{usersData:t.usersData});case"SET-CURRENT-PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SET-USERS-TOTAL-COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWINGPROGRESS":return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(X.a)(e.followingInProgress),[t.userId]):Object(X.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},yt=a(13),xt=a.n(yt),Dt=a(60),It=a.n(Dt),Tt=function(e){for(var t=e.totalUsersCount,a=e.pageSize,s=e.onPageChanched,i=(e.currentPage,e.portionSize),o=void 0===i?5:i,c=Math.ceil(t/a),l=[],u=1;u<=c;u++)l.push(u);var m=Math.ceil(c/o),d=Object(n.useState)(1),_=Object(Me.a)(d,2),f=_[0],p=_[1],g=(f-1)*o+1,v=f*o;return r.a.createElement("div",{className:It.a.wrapper},r.a.createElement("ul",{className:It.a.pageChoise},f>1&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){p(1)}},"<<"),r.a.createElement("button",{className:It.a.prevBtn,onClick:function(){p(f-1)}},"<")),l.filter((function(e){return e>=g&&e<=v})).map((function(e){return r.a.createElement("li",{key:e,onClick:function(t){s(e)}},e)})),m>f&&r.a.createElement("div",null,r.a.createElement("button",{className:It.a.nextBtn,onClick:function(){p(f+1)}},">"),r.a.createElement("button",{onClick:function(){p(m)}},">>"))))},Lt=function(e){var t=e.user,a=e.followingInProgress,n=e.unfollow,s=e.follow,i=e.avaDefault;return r.a.createElement("div",null,r.a.createElement("div",{className:xt.a.user},r.a.createElement("div",{className:xt.a.userLeft},r.a.createElement(f.b,{className:xt.a.ava_wrapper,to:"/profile/"+t.id}," ",r.a.createElement("img",{src:null!==t.photos.small?t.photos.small:i,className:xt.a.ava,alt:"/"})," "),t.followed?r.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)},className:xt.a.followBtn},"Unfollow"):r.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){s(t.id)},className:xt.a.followBtn},"Follow")),r.a.createElement("div",{className:xt.a.userRight},r.a.createElement("div",{className:xt.a.descriptions},r.a.createElement("div",{className:xt.a.name},t.name),r.a.createElement("div",{className:xt.a.status},void 0!==t.status?"Shouldn't worry":t.status)),r.a.createElement("div",{className:xt.a.location},r.a.createElement("div",{className:xt.a.country},null!==t.country?"Belarus":t.status),r.a.createElement("div",{className:xt.a.town},null!==t.town?"Tokyo":t.status)))))},At=function(e){var t=e.currentPage,a=e.totalUsersCount,n=e.pageSize,s=e.onPageChanched,i=e.users,o=e.avaDefault,c=Object(Ee.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanched","users","avaDefault"]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:xt.a.users__header},r.a.createElement("div",{className:xt.a.usersTitle},"Users"),r.a.createElement(Tt,{onPageChanched:s,currentPage:t,totalUsersCount:a,pageSize:n})),r.a.createElement("div",{className:xt.a.users},i.map((function(e){return r.a.createElement(Lt,{key:e.id,user:e,followingInProgress:c.followingInProgress,avaDefault:o,follow:c.follow,unfollow:c.unfollow})})))))},Mt=a(149),Ut=function(e){return e.usersPage.pageSize},Ft=function(e){return e.usersPage.totalUsersCount},Rt=function(e){return e.usersPage.currentPage},Bt=function(e){return e.usersPage.avaDefault},Gt=function(e){return e.usersPage.isFetching},zt=function(e){return e.usersPage.followingInProgress},Ht=Object(Mt.a)((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),Wt=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanched=function(t){var a=e.props.pageSize;e.props.getUsersThunkCreater(t,a)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.getUsersThunkCreater(t,a)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ae,null):null,r.a.createElement(At,{totalUsersCount:this.props.totalUsersCount,users:this.props.users,onPageChanched:this.onPageChanched,pageSize:this.props.pageSize,currentPage:this.props.currentPage,avaDefault:this.props.avaDefault,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,toggleFollowigProgress:this.props.toggleFollowigProgress,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),Kt=Object(Be.compose)(Object(g.b)((function(e){return{users:Ht(e),pageSize:Ut(e),totalUsersCount:Ft(e),currentPage:Rt(e),avaDefault:Bt(e),isFetching:Gt(e),followingInProgress:zt(e)}}),{follow:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Pt(!0,e)),t.next=3,O(e);case 3:0===t.sent.resultCode&&a({type:"FOLLOW",id:e}),a(Pt(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Pt(!0,e)),t.next=3,N(e);case 3:0===t.sent.resultCode&&a({type:"UNFOLLOW",id:e}),a(Pt(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Ot,toggleFollowigProgress:Pt,getUsersThunkCreater:function(e,t){return function(){var a=Object(h.a)(E.a.mark((function a(n){var r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(St(!0)),a.next=3,w(e,t);case 3:r=a.sent,n(Ot(e)),n(St(!1)),n({type:"SET-USERS",usersData:r.items}),n({type:"SET-USERS-TOTAL-COUNT",totalUsersCount:r.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}),st)(Wt),Vt=a(28),qt=a.n(Vt),Jt=ge(50),Zt=ke("input"),Yt=Object(pe.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t,className:qt.a.form},r.a.createElement("div",{className:qt.a.form_login_wrapper},r.a.createElement(fe.a,{type:"text",placeholder:"Email",className:qt.a.form_loginInput,component:Zt,validate:[ve,Jt],name:"email"})),r.a.createElement("div",{className:qt.a.form_password_wrapper},r.a.createElement(fe.a,{type:"password",placeholder:"Password",className:qt.a.form_passwordInput,component:Zt,validate:[ve,Jt],name:"password"})),r.a.createElement("div",{className:qt.a.submitBtn_wrapper},r.a.createElement("button",{className:qt.a.submitBtn},"Login"),r.a.createElement("div",{className:qt.a.checkbox_wrapper},r.a.createElement("label",{htmlFor:"rememberMe"},"Remember me"),r.a.createElement(fe.a,{type:"checkbox",className:qt.a.form_checkboxInput,id:"rememberMe",component:"input",name:"rememberMe"}))),a&&r.a.createElement("div",{className:be.a.form_summary_error},a)))})),Qt=Object(Be.compose)(Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),(function(e){return{login:function(t,a,n){e(function(e,t,a){return function(){var n=Object(h.a)(E.a.mark((function n(r){var s,i;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e,t,a);case 2:0===(s=n.sent).resultCode?(r(A()),r(Object(I.a)("login"))):(i=s.messages.length>0?s.messages[0]:"Some error",r(Object(I.b)("login",{_error:i})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,a,n))}}})))((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",{className:qt.a.form_title},"Login"),r.a.createElement(Yt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Xt={initialized:!1},$t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},ea=a(150),ta=a.n(ea),aa=a(151),na=a.n(aa),ra={friendsData:[{id:1,name:"Jane",ava:ta.a},{id:2,name:"Mark",ava:na.a}]},sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ra,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ia=a(152),oa=a(137),ca=a(7),la=ca.createStore,ua=ca.combineReducers,ma=ca.applyMiddleware,da=la(ua({profilePage:me,dialogsPage:nt,siteBar:sa,usersPage:jt,auth:M,form:oa.a,app:$t}),ma(ia.a));window.store=da;var _a=da,fa=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(F,null),r.a.createElement(Z,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ze,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Qt,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ze,null)}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(it,null)}}),r.a.createElement(m.b,{path:"/news",render:lt}),r.a.createElement(m.b,{path:"/music",render:dt}),r.a.createElement(m.b,{path:"/settings",render:pt}),r.a.createElement(m.b,{path:"/games",render:Et}),r.a.createElement(m.b,{path:"/servises",render:kt}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(Kt,null)}}))):r.a.createElement(Ae,null)}}]),a}(r.a.Component),pa=Object(Be.compose)(Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(A());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(fa),ga=function(e){return r.a.createElement(f.a,{basename:"/Neochat"},r.a.createElement(g.a,{store:_a},r.a.createElement(pa,null)))};i.a.render(r.a.createElement(ga,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports={MyPosts__title:"MyPosts_MyPosts__title__CPDCN",MyPosts__form:"MyPosts_MyPosts__form__Vup4-",form__text:"MyPosts_form__text__341dC",form__adder:"MyPosts_form__adder__1cypa",form__remover:"MyPosts_form__remover__3Wkmy"}},48:function(e,t,a){e.exports={message_item:"Message_message_item__3OWtu",item__ava:"Message_item__ava__2tTec",item__author:"Message_item__author__fbpjO",item__text:"Message_item__text__2eJsV"}},56:function(e,t,a){e.exports={formControl:"FormControl_formControl__Vv_Rk",error:"FormControl_error__WZZFe",form_summary_error:"FormControl_form_summary_error__37qo7"}},60:function(e,t,a){e.exports={wrapper:"Paginator_wrapper__37ndC",pageChoise:"Paginator_pageChoise__2sYqV",prevBtn:"Paginator_prevBtn__1sUtD",nextBtn:"Paginator_nextBtn__116BL",selected:"Paginator_selected__2cTTO"}},74:function(e,t,a){e.exports={header:"Header_header__1VCKf",login_block:"Header_login_block__3dzPh",activelink:"Header_activelink__VD1ZO"}},75:function(e,t,a){e.exports={item__ava:"FriendsItem_item__ava__1mhwH"}},76:function(e,t,a){e.exports={friends__title:"Friends_friends__title__1eHEq",friends__items:"Friends_friends__items__WHKzv"}},77:function(e,t,a){e.exports=a.p+"static/media/thumbs-up-regular.d51a5b46.svg"},78:function(e,t,a){e.exports=a.p+"static/media/thumbs-down-regular.d28f6a89.svg"},99:function(e,t,a){e.exports=a.p+"static/media/thumbs-up-solid.dbeab264.svg"}},[[178,1,2]]]);
//# sourceMappingURL=main.5d32e020.chunk.js.map