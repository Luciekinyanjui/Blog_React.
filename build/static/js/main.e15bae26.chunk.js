(this["webpackJsonpwriters-blog"]=this["webpackJsonpwriters-blog"]||[]).push([[0],{59:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a(43),o=a.n(c),i=a(50),s=a(28),m=a(19),u=a(35),p=a(36),d=a(40),E=a(20),h=a(25),b=function(){return r.a.createElement("h3",null,"Not Found")},f=function(e){var t=e.title,a=e.description,l=e.published;return r.a.createElement(n.Fragment,null,r.a.createElement("h4",null,t," ",l?"(".concat(l,")"):""),r.a.createElement("p",null,a||r.a.createElement("i",null,"No Description")))},w=function(e){var t=e.match.url,a=e.name,l=e.born,c=e.deceased,o=e.description,i=e.image,s=e.texts;return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:i,alt:a,style:{maxWidth:300}}),r.a.createElement("h1",null,a),r.a.createElement("h3",null,l," \u2014 ",c),r.a.createElement("p",null,o),r.a.createElement("ul",null,s.map((function(e){var a=e.id,n=e.title;return r.a.createElement("li",{key:a},r.a.createElement(E.b,{to:"".concat(t,"/texts/").concat(a)},n))}))),r.a.createElement(h.a,{path:"".concat(t,"/texts/:textId"),render:function(e){var t=s.find((function(t){return t.id===e.match.params.textId}));return t?r.a.createElement(f,t):r.a.createElement(b,null)}}))},v=function(e){var t=e.match.url,a=e.writers;return r.a.createElement(n.Fragment,null,r.a.createElement("ul",null,a.map((function(e){var a=e.id,n=e.name;return r.a.createElement("li",{key:a},r.a.createElement(E.b,{to:"".concat(t,"/").concat(a)},n))}))),r.a.createElement(h.a,{exact:!0,path:t,render:function(){return r.a.createElement("h3",null,"Please select a writer from above.")}}),r.a.createElement(h.a,{path:"".concat(t,"/:writerId"),render:function(e){var t=a.find((function(t){return t.id===e.match.params.writerId}));return t?r.a.createElement(w,Object.assign({},e,t)):r.a.createElement(b,null)}}))},g=a(12),O=a(104),x=a(107),j=a(106),y=a(98),k=a(99),I=a(100),N=a(101),D=a(102),C=a(103),F=a(5),P=a(105),B=a(55),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState({mobileOpen:!a.state.mobileOpen})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.location.pathname,l=e.children,c=e.writers,o=this.state.mobileOpen,i=r.a.createElement("div",null,r.a.createElement(O.a,{smDown:!0},r.a.createElement("div",{className:t.toolbar})),r.a.createElement(x.a,null,r.a.createElement(j.a,{component:E.b,to:"/",selected:"/"===a},"Home"),r.a.createElement(j.a,{component:E.b,to:"/writers",selected:"/writers"===a},"Writers"),r.a.createElement(x.a,null,c.map((function(e){var n=e.id,l=e.name,c="/writers/".concat(n);return r.a.createElement(j.a,{to:c,key:n,className:t.nested,component:E.b,selected:c===a},l)})))));return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,null),r.a.createElement("div",{className:t.root},r.a.createElement(k.a,{position:"absolute",className:t.appBar},r.a.createElement(I.a,null,r.a.createElement(N.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerToggle,className:t.navIconHide},r.a.createElement(P.a,null)),r.a.createElement(D.a,{variant:"h6",color:"inherit",noWrap:!0},"Writers Blog"))),r.a.createElement(O.a,{mdUp:!0},r.a.createElement(C.a,{variant:"temporary",open:o,onClose:this.handleDrawerToggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},i)),r.a.createElement(O.a,{smDown:!0,implementation:"css"},r.a.createElement(C.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},i)),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),l)))}}]),t}(n.Component),W=Object(B.a)(h.f,Object(F.a)((function(e){return{root:{flexGrow:1,zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},appBar:{zIndex:e.zIndex.drawer+1},navIconHide:Object(g.a)({},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:Object(g.a)({width:240},e.breakpoints.up("md"),{position:"relative"}),content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},nested:{paddingLeft:e.spacing(4)}}})))(H),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={writers:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3004/writers?_embed=texts");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,this.setState({writers:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.writers;return r.a.createElement(E.a,null,r.a.createElement(W,{writers:e},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,"Home")}}),r.a.createElement(h.a,{path:"/writers",render:function(t){return r.a.createElement(v,Object.assign({},t,{writers:e}))}}),r.a.createElement(h.a,{component:b}))))}}]),t}(n.Component);Object(l.render)(r.a.createElement(z,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.e15bae26.chunk.js.map