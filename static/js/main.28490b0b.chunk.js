(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),o=(a(16),a(6)),i=a(1),d=a(2),s=a(3),m=function(e){var t=e.id,a=e.text,n=e.date,l=e.handleDeleteNote;return c.a.createElement("div",{className:"note"},c.a.createElement("span",null,a),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,n),c.a.createElement(s.a,{className:"delete-icon",size:"1.3em",onClick:function(){return l(t)}})))},u=function(e){var t=e.handleAddNote,a=Object(n.useState)(""),l=Object(i.a)(a,2),r=l[0],o=l[1];return c.a.createElement("div",{className:"note new"},c.a.createElement("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:r,onChange:function(e){200-e.target.value.length>=0&&o(e.target.value)}}),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,200-r.length," Remaining"),c.a.createElement("button",{className:"save",onClick:function(){r.trim().length>0&&(t(r),o(""))}},"Save")))},h=function(e){var t=e.notes,a=e.handleAddNote,n=e.handleDeleteNote;return c.a.createElement("div",{className:"notes-list"},t.map(function(e){return c.a.createElement(m,{id:e.id,text:e.text,date:e.date,handleDeleteNote:n})}),c.a.createElement(u,{handleAddNote:a}))},E=function(e){var t=e.handleSearchNote;return c.a.createElement("div",{className:"search"},c.a.createElement(s.b,{className:"search-icons",size:"1.3em"}),c.a.createElement("input",{type:"text",placeholder:"Type to search...",onChange:function(e){t(e.target.value)}}))},f=function(e){var t=e.handleToggleDarkMode;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Notes"),c.a.createElement("button",{onClick:function(){t(function(e){return!e})},className:"save"},"Toggle Mode"))},v=function(){var e=Object(n.useState)([{id:Object(d.a)(),text:"This is my first note!",date:"15/04/2022"},{id:Object(d.a)(),text:"This is my second note!",date:"15/04/2022"},{id:Object(d.a)(),text:"This is my third note!",date:"29/04/2022"},{id:Object(d.a)(),text:"This is my final note!",date:"30/04/2022"}]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),m=s[0],u=s[1],v=Object(n.useState)(""),N=Object(i.a)(v,2),b=N[0],g=N[1];return c.a.createElement("div",{className:"".concat(m&&"dark-mode")},c.a.createElement("div",{className:"container"},c.a.createElement(f,{handleToggleDarkMode:u}),c.a.createElement(E,{handleSearchNote:g}),c.a.createElement(h,{notes:a.filter(function(e){return e.text.toLowerCase().includes(b)}),handleAddNote:function(e){var t=new Date,n={id:Object(d.a)(),text:e,date:t.toLocaleDateString()},c=[].concat(Object(o.a)(a),[n]);l(c)},handleDeleteNote:function(e){var t=a.filter(function(t){return t.id!==e});l(t)}})))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)))},7:function(e,t,a){e.exports=a(18)}},[[7,2,1]]]);
//# sourceMappingURL=main.28490b0b.chunk.js.map