(this["webpackJsonpgraphic-calculator"]=this["webpackJsonpgraphic-calculator"]||[]).push([[0],{174:function(e,t,c){},177:function(e,t,c){},178:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(59),r=c.n(s),i=(c(67),c(2)),l=c(23),o=(c(174),c(1));l.c.animation=!1;var j=function(e){var t=e.series,c=Object(n.useState)({}),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){var e=[],c=[];t.forEach((function(t){e.push(t.x),c.push(t.y)})),r({labels:e,datasets:[{data:c,backgroundColor:["#95ca3e","rgb(18, 31, 61)"]}]})}),[t]),Object(o.jsxs)("div",{className:"Chart",children:[Object(o.jsx)("div",{className:"chart",children:Object(o.jsx)(l.a,{data:s,options:{plugins:{title:{display:!0,text:"Barras"},legend:{display:!1}}}})}),Object(o.jsx)("div",{className:"chart",children:Object(o.jsx)(l.b,{data:s,options:{plugins:{title:{display:!0,text:"Puntos"},legend:{display:!1}}}})})]})},u=c(38),d=c.n(u),b=c(62),p=(c(177),function(e){var t=e.onAddPoint,c=Object(n.useState)(0),a=Object(i.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(0),j=Object(i.a)(l,2),u=j[0],d=j[1];return Object(o.jsxs)("div",{className:"PointForm",children:[Object(o.jsxs)("div",{className:"point",children:[Object(o.jsx)("p",{children:"X:"}),Object(o.jsx)("input",{type:"number",onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)("div",{className:"point",children:[Object(o.jsx)("p",{children:"Y:"}),Object(o.jsx)("input",{type:"number",onChange:function(e){return d(e.target.value)}})]}),Object(o.jsx)("button",{onClick:function(){return t({x:s,y:u})},children:"Agregar"})]})}),h=(c(178),function(e){var t=e.onSeriesChange,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(""),j=Object(i.a)(l,2),u=j[0],h=j[1],O=Object(n.useState)(void 0),x=Object(i.a)(O,2),f=x[0],m=x[1];Object(n.useEffect)((function(){s.length>5?(s.pop(),function(e){g.apply(this,arguments)}("No puedes agregar mas de 5 puntos.")):t(s)}),[s]);function g(){return(g=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t),clearTimeout(f),m(setTimeout((function(){h("")}),4e3));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"DataForm",children:[Object(o.jsx)("p",{className:"text",children:"Ac\xe1 puedes introducir los datos :)"}),Object(o.jsxs)("div",{className:"inline",children:[Object(o.jsx)(p,{onAddPoint:function(e){r(s.concat(e))}}),Object(o.jsx)("p",{className:"error",children:u})]}),Object(o.jsxs)("div",{className:"inline",children:[Object(o.jsxs)("p",{className:"text",children:["Tu serie de datos es:",s.slice(0,5).map((function(e,t){return Object(o.jsxs)("span",{className:"data-point",children:["(",e.x,",",e.y,")"]},t)}))]}),Object(o.jsx)("button",{className:"clear-all",onClick:function(){h(""),r([])},children:"Borrar todo"})]})]})});c(179);var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"header wrapper",children:[Object(o.jsx)("h1",{className:"title--green",children:"Graphic calculator"}),Object(o.jsx)("h2",{className:"subtitle--green",children:"Platzi Master assessment"})]}),Object(o.jsx)("div",{className:"data-form-wrapper wrapper",children:Object(o.jsx)(h,{onSeriesChange:function(e){return a(e)}})}),Object(o.jsx)("div",{className:"chart-wrapper wrapper",children:Object(o.jsx)(j,{series:c})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,181)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()},67:function(e,t,c){}},[[180,1,2]]]);
//# sourceMappingURL=main.4e3bcc56.chunk.js.map