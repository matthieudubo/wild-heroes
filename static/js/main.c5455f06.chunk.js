(this["webpackJsonpwild-heroes"]=this["webpackJsonpwild-heroes"]||[]).push([[0],{16:function(e,t,n){},34:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(26),i=n.n(c),o=n(11),r=n(2),l=n.p+"static/media/Logo.b43d2c16.png",d=(n(34),n(0)),u=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("div",{className:"header-content",children:[Object(d.jsx)("a",{href:"/wild-heroes/",className:"logo-content",children:Object(d.jsx)("img",{src:l,className:"logo",alt:"Logo"})}),Object(d.jsx)("h1",{children:"WILD HEROES"}),Object(d.jsxs)("div",{className:"header-content-link",children:[Object(d.jsx)(o.b,{activeClassName:"text-nav-active",className:"text-nav",to:"/wild-heroes/quiz",children:"Quiz"}),Object(d.jsx)(o.b,{activeClassName:"text-nav-active",className:"text-nav",to:"/wild-heroes/informations",children:"Informations"})]})]})})},m=function(){return Object(d.jsx)("div",{children:" "})},j=function(){return Object(d.jsx)("div",{children:" "})},b=n(8),h=n(29),O=n.n(h),p=(n(62),function(){return Object(d.jsxs)("div",{children:["ICI SERONT LES STATS ",Object(d.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius consequuntur laborum saepe quos quae. Doloribus, dolores odit doloremque blanditiis sed veniam laudantium perferendis eum magnam molestiae non, nostrum ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius consequuntur laborum saepe quos quae. Doloribus, dolores odit doloremque blanditiis sed veniam laudantium perferendis eum magnam molestiae non, nostrum ullam."]})}),x=(n(63),function(){return Object(d.jsxs)("div",{children:["ICI SERA LA BIO ",Object(d.jsx)("br",{}),"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi saepe numquam omnis! Sequi quidem, nobis dolorem unde, ex velit in delectus ipsa molestiae voluptatum reprehenderit, aspernatur autem et. In, consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi saepe numquam omnis! Sequi quidem, nobis dolorem unde, ex velit in delectus ipsa molestiae voluptatum reprehenderit, aspernatur autem et. In, consequatur?"]})}),g=(n(64),function(e){var t=e.hideModal,n=e.image,a=e.name;return Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsx)("input",{type:"button",className:"close-modal-button",onClick:function(){return t()}}),"\xd7",Object(d.jsx)("div",{className:"modal-card",children:Object(d.jsx)("img",{src:n,alt:a,className:"modal-img"})}),Object(d.jsxs)("div",{className:"hero-infos",children:[Object(d.jsx)("div",{className:"hero-stats",children:Object(d.jsx)(p,{})}),Object(d.jsx)("div",{className:"hero-bio",children:Object(d.jsx)(x,{})})]})]})}),f=(n(16),function(e){var t,n=e.name,s=e.image,c=e.alignment,i=Object(a.useState)(!1),o=Object(b.a)(i,2),r=o[0],l=o[1],u=function(){l(!r)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"card ".concat((t=c,"good"===t?"good-card":"bad"===t?"bad-card":"normal-card")),onClick:function(){return u()},onKeyPress:function(){return u()},role:"button",tabIndex:0,children:[Object(d.jsx)("img",{src:s,alt:n}),Object(d.jsx)("h2",{children:n})]}),Object(d.jsx)("div",{children:r&&Object(d.jsx)(g,{name:n,image:s,toggleModal:r,setToggleModal:l,hideModal:u})})]})}),v=function(e){var t=e.hero,n=e.isLoading;return Object(d.jsx)("div",{className:"cards-list",children:n?Object(d.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif",alt:"loader",className:"loader-cardsList"}):Object(d.jsx)("div",{className:"container-cards-button",children:Object(d.jsx)("div",{className:"container-cards",children:t.map((function(e){return Object(d.jsx)(f,{name:e.name,image:e.image.url,alignment:e.biography.alignment},e.id)}))})})})},N=(n(65),function(e){for(var t=e.cardsPerPage,n=e.totalCards,a=e.paginate,s=e.currentPage,c=[],i=1;i<=Math.ceil(n/t);i+=1)c.push(i);return Object(d.jsxs)("nav",{className:"nav-page",children:[Object(d.jsxs)("p",{children:[" ",t<31?"Page: ".concat(s):null]}),Object(d.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(d.jsx)("li",{className:"page-item",children:t<31&&Object(d.jsx)("input",{to:"/",value:e,type:"button",onClick:function(){a(e)},className:"page-link"})},e)}))})]})}),q=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!0),i=Object(b.a)(c,2),o=i[0],r=i[1],l=Object(a.useState)(!0),u=Object(b.a)(l,2),m=u[0],j=u[1],h=Object(a.useState)(1),p=Object(b.a)(h,2),x=p[0],g=p[1],f=Object(a.useState)(30),q=Object(b.a)(f,2),S=q[0],C=q[1],L=x*S,I=L-S,w=n.slice(I,L);return Object(a.useEffect)((function(){o&&O.a.get("https://superheroapi.com/api.php/10216027606921557/search/'%20'").then((function(e){return e.data.results})).then((function(e){s(e),r(!1),j(!1)}))}),[n,o]),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{setCardsPerPage:C,totalCards:n.length,isLoading:m,hero:w}),Object(d.jsx)("div",{className:"container-pagination",children:Object(d.jsx)(N,{currentPage:x,cardsPerPage:S,totalCards:n.length,paginate:function(e){g(e),document.documentElement.scrollTop=0}})})]})};n(66);var S=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/wild-heroes/",component:m}),Object(d.jsx)(r.a,{path:"/wild-heroes/quiz",component:j}),Object(d.jsx)(r.a,{path:"/wild-heroes/informations",component:q})]})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c5455f06.chunk.js.map