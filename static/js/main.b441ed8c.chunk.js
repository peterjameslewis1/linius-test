(this["webpackJsonplinius-tech-test"]=this["webpackJsonplinius-tech-test"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(7),a=n.n(i),r=(n(14),n(15),n(0)),l=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"header-mobile",children:[Object(r.jsx)("i",{class:"fas fa-home"}),Object(r.jsx)("h2",{children:"Linius"}),Object(r.jsx)("i",{class:"fas fa-user-circle"})]}),Object(r.jsx)("nav",{className:"nav",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("a",{href:"#home",children:Object(r.jsx)("li",{children:"Home"})}),Object(r.jsx)("a",{href:"#about",children:Object(r.jsx)("li",{children:"About"})}),Object(r.jsx)("a",{href:"#contact",children:Object(r.jsx)("li",{children:"Contact"})})]})})]})},j=n(3),o=n(6),u=n.n(o),b=n(8),d=n(9),h=function(e){var t=e.sortAscending,n=e.sortDecending,c=e.alphabetical;return Object(r.jsxs)("div",{className:"filter",children:[Object(r.jsx)("label",{children:"Sort by"}),Object(r.jsxs)("select",{onChange:function(e){switch(e.target.value){case"ascending":return t();case"decending":return n();case"alphabetical":return c();default:return}},children:[Object(r.jsx)("option",{}),Object(r.jsx)("option",{value:"ascending",children:"Rating (ascending)"}),Object(r.jsx)("option",{value:"decending",children:"Rating (decending)"}),Object(r.jsx)("option",{value:"alphabetical",children:"alphabetical"})]})]})},f=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){var e=Object(b.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("8672037f7713f0f454d73f60ab645f36","&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,s(n.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"movie-container",children:[Object(r.jsx)(h,{sortAscending:function(){s(Object(j.a)(n).sort((function(e,t){return e.vote_average-t.vote_average})))},sortDecending:function(){s(Object(j.a)(n).sort((function(e,t){return e.vote_average-t.vote_average})).reverse())},alphabetical:function(){s(Object(j.a)(n).sort((function(e,t){return e.title>t.title?-1:e.title<t.title?1:0})).reverse()),console.log(Object(j.a)(n).sort((function(e){return e.title})))}}),Object(r.jsx)("ul",{className:"movie-list",id:"list",children:n.map((function(e){return Object(r.jsxs)("li",{className:"movie-list__item",children:[Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path)}),Object(r.jsxs)("div",{className:"movie-list__item__details",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{class:"fas fa-star"}),e.vote_average,"/10"]})]})]},e.id)}))})]})},O=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("ul",{children:Object(r.jsx)("a",{href:"https://github.com/peterjameslewis1",target:"_blank",children:Object(r.jsx)("i",{class:"fab fa-github"})})})})},x=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{}),Object(r.jsx)(O,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.b441ed8c.chunk.js.map