(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),s=n(4),a=n(1),d=n(0),o=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,i=e.find((function(t){return n===t.id}));return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"buttons",children:e.map((function(t){return Object(d.jsx)("span",{className:"item",children:Object(d.jsx)("button",{className:"button is-primary is-outlined",type:"button",onClick:function(){n!==t.id&&c(t.id)},children:t.title})},t.id)}))}),Object(d.jsx)("div",{className:"input is-success",children:null===i||void 0===i?void 0:i.content})]})},l=(n(10),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),b=function(){var t=Object(a.useState)(l[0].id),e=Object(s.a)(t,2),n=e[0],c=e[1],i=l.find((function(t){return n===t.id}));return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h1",{className:"title is-3",children:["Selected tab is\xa0",null===i||void 0===i?void 0:i.title]}),Object(d.jsx)(o,{tabs:l,selectedTabId:n,onTabSelected:function(t){c(t)}})]})})};i.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c1f11831.chunk.js.map