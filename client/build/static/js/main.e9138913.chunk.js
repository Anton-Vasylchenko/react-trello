(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(13),s=a.n(c),d=a(71),o=a.n(d),i=a(9),u=a(8),l=a(12),b=a.n(l),j=a(21),O=a(23),f=a(22),p=a.n(f),x=new function e(){var t=this;Object(O.a)(this,e),this._baseUrl="".concat("https://trello-react-demo.herokuapp.com/","api/"),this.getBoards=Object(j.a)(b.a.mark((function e(){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(t._baseUrl,"list/"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),this.addBoard=function(){var e=Object(j.a)(b.a.mark((function e(a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(t._baseUrl,"list"),a);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteBoard=function(){var e=Object(j.a)(b.a.mark((function e(a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(t._baseUrl,"list/")+a);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCards=Object(j.a)(b.a.mark((function e(){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(t._baseUrl,"card/"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),this.addCard=function(){var e=Object(j.a)(b.a.mark((function e(a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(t._baseUrl,"card"),a);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteCardsByBoardId=function(){var e=Object(j.a)(b.a.mark((function e(a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(t._baseUrl,"card/deleteByBoardId/")+a);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteCard=function(){var e=Object(j.a)(b.a.mark((function e(a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(t._baseUrl,"card/")+a);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateCard=function(){var e=Object(j.a)(b.a.mark((function e(a,r){var n,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={boardId:r},e.next=3,p.a.patch("".concat(t._baseUrl,"card/")+a,n);case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},h=x,_=function(e){return{type:"SET_BOARDS",payload:e}},v=function(e){return{type:"SET_BOARDS_LOADED",payload:e}},m=function(e){return{type:"SET_CARDS",payload:e}},y=function(e){return{type:"SET_LOADED",payload:e}},D=a(121),g=a(122),E=a(123),C=a(74),w=a(118),B=a(2);var A=function(e){var t=e.onAddHandler,a=e.show,c=e.setShow,s=e.cardForm,d=Object(r.useState)(""),o=Object(i.a)(d,2),u=o[0],l=o[1],b=n.a.useRef(),j=n.a.useRef(),O=function(){l(""),c(!1)};return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(D.a,{show:a,onHide:O,children:[Object(B.jsx)(D.a.Header,{closeButton:!0,children:Object(B.jsx)(D.a.Title,{children:"New board"})}),Object(B.jsxs)(D.a.Body,{children:[0!==u.length&&Object(B.jsx)(g.a,{variant:"warning",children:u}),Object(B.jsxs)(E.a,{children:[Object(B.jsxs)(E.a.Group,{className:"mb-3",controlId:"title",children:[Object(B.jsx)(E.a.Label,{children:"Title"}),Object(B.jsx)(E.a.Control,{ref:b,type:"text",placeholder:"Enter a title"})]}),s&&Object(B.jsx)(C.a,{controlId:"floatingTextarea2",children:Object(B.jsx)(E.a.Control,{ref:j,as:"textarea",placeholder:"Please, enter your text here",style:{height:"100px"}})})]})]}),Object(B.jsxs)(D.a.Footer,{children:[Object(B.jsx)(w.a,{variant:"secondary",onClick:O,children:"Close"}),Object(B.jsx)(w.a,{variant:"primary",onClick:function(){var e=b.current.value;if(0!==e.trim().length)if(s&&0===j.current.value.trim().length)l("Please, enter a text!");else{var a;if(!s)return t(a={title:e}),void O();a={title:e,text:j.current.value},t(a),O()}else l("Please, enter a title!")},children:"Save"})]})]})})},I=a(51);var L=function(){var e=Object(u.c)(),t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(w.a,{variant:"success",size:"sm",className:"m-2",onClick:function(){return c(!0)},children:Object(B.jsx)(I.a,{})}),Object(B.jsx)(A,{onAddHandler:function(t){h.addBoard({title:t.title}).then((function(t){e(function(e){return{type:"ADD_BOARD",payload:e}}(t))}))},show:n,setShow:c})]})};var S=function(){return Object(B.jsx)("header",{className:o.a.header,children:Object(B.jsx)(L,{})})},N=a(27),k=a(3),R=a(124),T=a(76),U=a(75),H=a.n(U);var P=function(e){var t=e.id,a=Object(u.c)();return Object(B.jsx)("div",{className:H.a["delete-button"],onClick:function(){h.deleteCard(t).then((function(e){a({type:"DELETE_CARD",payload:t})}))},children:Object(B.jsx)(T.a,{})})},F=a(77),z=a.n(F),J=a(34),q=a(55),V=a.n(q);var X=function(e){var t=e.item,a=e.index;return Object(B.jsx)(J.b,{draggableId:"".concat(t.id+""),index:a,children:function(e,a){return Object(B.jsx)("div",Object(k.a)(Object(k.a)(Object(k.a)({ref:e.innerRef,snapshot:a},e.draggableProps),e.dragHandleProps),{},{children:Object(B.jsxs)(R.a,{bg:"Light",text:"dark",className:V.a.card,children:[Object(B.jsxs)(R.a.Body,{children:[Object(B.jsx)(R.a.Title,{children:t.title}),Object(B.jsx)(R.a.Text,{className:V.a["card-text"],children:t.text})]}),Object(B.jsx)("div",{className:V.a.date,children:z.a.utc(t.createdAt).local().startOf("seconds").fromNow()}),Object(B.jsx)(P,{id:t.id})]},t.id)}))}})},K=a(60),G=a(78),M=a.n(G);var Q=function(e){var t=e.boardId,a=Object(u.c)(),n=Object(u.d)((function(e){return e.cards})).cards,c=Object(r.useState)(!1),s=Object(i.a)(c,2),d=s[0],o=s[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(w.a,{variant:"info",size:"sm",className:M.a.button,onClick:function(){return o(!0)},children:Object(B.jsx)(I.a,{})}),Object(B.jsx)(A,{onAddHandler:function(e){h.addCard({title:e.title,text:e.text,listId:t}).then((function(e){var t=Object(k.a)({},e);t.idx=n.length,a({type:"ADD_CARDS",payload:t})}))},show:d,setShow:o,cardForm:!0})]})},W=a(56),Z=a.n(W);var Y=function(e){var t=e.boardId,a=Object(u.c)(),r=Object(u.d)((function(e){return e.cards})).cards.filter((function(e){return e.ListId===t}));return Object(B.jsxs)("div",{className:Z.a.buttons,children:[Object(B.jsx)(Q,{boardId:t}),0!==r.length&&Object(B.jsx)(w.a,{onClick:function(){a({type:"DELETE_CARDS",payload:t}),h.deleteCardsByBoardId(t)},className:Z.a.button,size:"sm",variant:"warning",children:Object(B.jsx)(K.a,{})}),Object(B.jsx)(w.a,{onClick:function(){a({type:"DELETE_BOARD",payload:t}),h.deleteBoard(t)},className:Z.a.button,size:"sm",variant:"danger",children:Object(B.jsx)(K.b,{})})]})},$=a(119),ee=a(79),te=a.n(ee);var ae=function(e){var t=e.animation,a=t||"border";return Object(B.jsx)($.a,{className:te.a.loader,animation:a})},re=a(40),ne=a.n(re);var ce=function(e){var t=e.item,a=Object(u.c)(),r=Object(u.d)((function(e){return e.cards})),c=r.cards,s=r.isLoaded,d=c.filter((function(e){return e.ListId===t.id}));return n.a.useEffect((function(){a((function(e){e(y(!1)),h.getCards().then((function(t){e(m(t))}))}))}),[a]),Object(B.jsx)(J.c,{droppableId:"".concat(t.id),children:function(e){return Object(B.jsxs)("div",{className:ne.a.board,children:[Object(B.jsxs)("div",{className:ne.a["board-title"],children:[t.title,Object(B.jsx)("div",{className:ne.a["nav-panel"],children:Object(B.jsx)(Y,{boardId:t.id})})]}),Object(B.jsx)("div",Object(k.a)(Object(k.a)({className:ne.a["board-content"]},e.droppableProps),{},{ref:e.innerRef,children:s?d.map((function(e,t){return Object(B.jsx)(X,{item:e,index:t},e.id)})):Object(B.jsx)(ae,{animation:"grow"})})),e.placeholder]})}})},se=a(120),de=a(80),oe=a(61),ie=a.n(oe),ue={default:5,1100:3,700:3,500:2};var le=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.boards})),a=t.boards,r=t.isLoaded,c=Object(u.d)((function(e){return e.cards})).cards;n.a.useEffect((function(){e((function(e){e(v(!1)),h.getBoards().then((function(t){e(_(t))}))}))}),[e]);var s=r?Object(B.jsx)(de.a,{breakpointCols:ue,className:ie.a["my-masonry-grid"],columnClassName:ie.a["my-masonry-grid_column"],children:a.map((function(e,t){return Object(B.jsx)(ce,{item:e,index:t},e.id)}))}):Object(B.jsx)(ae,{});return Object(B.jsx)(J.a,{onDragEnd:function(t){var a=t.destination,r=t.draggableId;if(a){var n=c.filter((function(e){return e.id===+r}))[0],s=Object(k.a)({},n);s.ListId=+a.droppableId;var d=c.indexOf(n),o=Object(N.a)(c);o.splice(d,1),o.splice(a.index,0,s),h.updateCard(n.id,a.droppableId),e(m(o))}},children:Object(B.jsx)(se.a,{className:"text-center",children:s})})};a(114),a(115);var be=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(S,{}),Object(B.jsx)(le,{})]})},je=a(17),Oe=a(81),fe={boards:[],isLoaded:!0},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOARDS":return{boards:t.payload,isLoaded:!0};case"SET_BOARDS_LOADED":return Object(k.a)(Object(k.a)({},e),{},{isLoaded:t.payload});case"ADD_BOARD":return Object(k.a)(Object(k.a)({},e),{},{boards:[].concat(Object(N.a)(e.boards),[t.payload])});case"DELETE_BOARD":return Object(k.a)(Object(k.a)({},e),{},{boards:e.boards.filter((function(e){return e.id!==t.payload}))});default:return e}},xe={cards:[],isLoaded:!0},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CARDS":return Object(k.a)(Object(k.a)({},e),{},{cards:t.payload,isLoaded:!0});case"SET_LOADED":return Object(k.a)(Object(k.a)({},e),{},{isLoaded:t.payload});case"DELETE_CARDS":return Object(k.a)(Object(k.a)({},e),{},{cards:e.cards.filter((function(e){return e.ListId!==t.payload}))});case"DELETE_CARD":return Object(k.a)(Object(k.a)({},e),{},{cards:e.cards.filter((function(e){return e.id!==t.payload}))});case"ADD_CARDS":return Object(k.a)(Object(k.a)({},e),{},{cards:[].concat(Object(N.a)(e.cards),[t.payload])});default:return e}},_e=Object(je.c)({boards:pe,cards:he}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,me=Object(je.e)(_e,ve(Object(je.a)(Oe.a)));s.a.render(Object(B.jsx)(u.a,{store:me,children:Object(B.jsx)(be,{})}),document.getElementById("root"))},40:function(e,t,a){e.exports={board:"BoardItem_board__2Okcv","board-title":"BoardItem_board-title__1jp0q","board-content":"BoardItem_board-content__3mmrK","nav-panel":"BoardItem_nav-panel__1w2lH"}},55:function(e,t,a){e.exports={text:"CardItem_text__3Psxo",card:"CardItem_card__1tNjq",date:"CardItem_date__9bsAv"}},56:function(e,t,a){e.exports={buttons:"BoardButtons_buttons__17C-2",button:"BoardButtons_button__3lqcs"}},61:function(e,t,a){e.exports={"my-masonry-grid":"BoardList_my-masonry-grid__2a33h","my-masonry-grid_column":"BoardList_my-masonry-grid_column__O5flV",list:"BoardList_list__kZXVJ"}},71:function(e,t,a){e.exports={header:"Header_header__1kxJ_"}},75:function(e,t,a){e.exports={"delete-button":"CardDelete_delete-button__1K3Oi"}},78:function(e,t,a){e.exports={button:"CardAdd_button__2Wa0Q"}},79:function(e,t,a){e.exports={loader:"Loader_loader__r3y-1"}}},[[116,1,2]]]);
//# sourceMappingURL=main.e9138913.chunk.js.map