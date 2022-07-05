(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),n=(c(15),c(10)),a=c(2),r=c(1),l=c.n(r),o=(c(16),c(17),c(18),c(0)),j=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(o.jsx)("br",{})]})]})]})},d=l.a.memo((function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(j,{movie:e},e.imdbID)}))})})),m=c(8),b=c(6),u=c.n(b),v=(c(21),c(9)),O=c.n(v);var h=l.a.memo((function(e){var t=e.movies,c=e.onSetMovies,s=Object(r.useState)(null),i=Object(a.a)(s,2),n=i[0],l=i[1],d=Object(r.useState)(""),b=Object(a.a)(d,2),v=b[0],h=b[1],x=Object(r.useState)(!0),f=Object(a.a)(x,2),p=f[0],N=f[1],g=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=v,fetch("".concat("https://www.omdbapi.com/?apikey=b2241fd4&t=").concat(c)).then((function(e){return e.json()}));case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:O()("input",{"is-danger":!p}),value:v,onChange:function(e){h(e.target.value)}})}),!p&&Object(o.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-light","data-cy":"find",onClick:function(){v?(g(),h(""),N(!0)):N(!1)},children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-primary","data-cy":"add",onClick:function(){t.every((function(e){return e.imdbID!==(null===n||void 0===n?void 0:n.imdbID)}))&&(n&&p&&c(n),h(""))},children:"Add to the list"})})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),n&&p&&Object(o.jsx)(j,{movie:n})]})]})})),x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(0),l=Object(a.a)(i,2),j=l[0],m=l[1],b=Object(r.useCallback)((function(e){s([].concat(Object(n.a)(c),[e]))}),[c]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsxs)("div",{className:"page-content",children:[Object(o.jsx)("button",{type:"button",onClick:function(){return m((function(e){return e+1}))},children:j}),Object(o.jsx)(d,{movies:c})]}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(h,{movies:c,onSetMovies:b})})]})};i.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6269261b.chunk.js.map