(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(15),n(1)),i=n(4),u=n.n(i),m=n(8),d=n(7),s=n(3),f=(n(19),n(2)),p=function(e){var t=e.updateTodo,n=e.todo,c={id:n.id,name:n.name,completed:!1},r=Object(a.useState)(c),i=Object(s.a)(r,2),u=i[0],m=i[1];return o.a.createElement("div",{className:"todo-edit"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u),m(c)}},o.a.createElement("label",null,"todo:"),o.a.createElement("input",{type:"text",name:"name",value:u.name,onChange:function(e){var t=e.target,n=t.name,a=t.value;m(Object(l.a)({},u,Object(f.a)({},n,a)))}}),o.a.createElement("button",{className:"done"},"\u2713")))},E=function(e){var t=e.todos,n=e.deleteTodo,a=e.toggleTodo,c=e.editTodo,r=e.updateTodo,l=function(e){return r(e)},i=t.map(function(e){return e.edit?o.a.createElement("li",{key:e.id},o.a.createElement(p,{todo:e,updateTodo:l})):o.a.createElement("li",{key:e.id},o.a.createElement("span",{onClick:function(){return a(e.id)},style:{textDecoration:e.completed?"line-through":"none",opacity:e.completed?"0.5":"1",cursor:"pointer"}},e.name),o.a.createElement("button",{className:"edit",onClick:function(){return c(e.id)}},"Edit"),o.a.createElement("button",{className:"delete",onClick:function(){return n(e.id)}},"X"))});return o.a.createElement("div",{className:"todo-list"},t.length>0?o.a.createElement("ul",null,i):o.a.createElement("p",null," No todos!"))},b=function(e){var t=e.addTodo,n={id:null,name:"",completed:!1},c=Object(a.useState)(n),r=Object(s.a)(c,2),i=r[0],u=r[1];return o.a.createElement("div",{className:"todo-input"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),u(n)}},o.a.createElement("label",null,"todo:"),o.a.createElement("input",{type:"text",name:"name",value:i.name,autocomplete:"off",onChange:function(e){var t=e.target,n=t.name,a=t.value;u(Object(l.a)({},i,Object(f.a)({},n,a)))}}),o.a.createElement("button",null,"add")))},g=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:winstonsmithcodes@gmail.com?Subject=Hi%20Winston",target:"_top"},o.a.createElement("i",{className:"fas fa-envelope fa-2x"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.twitter.com/winstoncodes"},o.a.createElement("i",{className:"fab fa-twitter fa-2x"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.github.com/winstoncodes"},o.a.createElement("i",{className:"fab fa-git fa-2x"})))))},v=(n(22),function(e){return o.a.createElement("div",{style:{backgroundColor:"inherit",color:"inherit",margin:0,textAlign:"center"}},o.a.createElement("p",{id:"notf"},"Click a todo to mark as complete"))}),h=function(){var e=function(e,t){if(t)return localStorage.setItem(e,JSON.stringify(t));var n=localStorage.getItem(e);return n&&JSON.parse(n)||[]},t=e("todosLocal"),n=Object(a.useState)(t),c=Object(s.a)(n,2),r=c[0],i=c[1],f=function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name){e.next=2;break}return e.abrupt("return");case 2:t.id=r.length+1,i(Object(m.a)(r).concat([t]));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){e("todosLocal",r)}),o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("h1",null,"Remind Me!")),o.a.createElement(v,null),o.a.createElement("div",{className:"content"},o.a.createElement(b,{addTodo:f}),o.a.createElement(E,{todos:r,deleteTodo:function(e){i(r.filter(function(t){return t.id!==e}))},toggleTodo:function(e){i(r.map(function(t){return t.id===e?Object(l.a)({},t,{completed:!t.completed}):t}))},editTodo:function(e){i(r.map(function(t){return t.id===e?Object(l.a)({},t,{edit:!t.edit}):t}))},updateTodo:function(e){i(r.map(function(t){return t.id===e.id?e:t}))}})),o.a.createElement(g,null))};r.a.render(o.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.e946b39a.chunk.js.map