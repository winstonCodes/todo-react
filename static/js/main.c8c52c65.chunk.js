(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(5),c=a.n(l),r=(a(13),a(1)),i=a(6),m=a(3),u=(a(15),a(2)),d=function(e){var t=e.updateTodo,a=e.todo,l={id:a.id,name:a.name,completed:a.completed},c=Object(n.useState)(l),i=Object(m.a)(c,2),d=i[0],s=i[1];return o.a.createElement("div",{className:"todo-edit"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(d),s(l)}},o.a.createElement("label",null,"todo:"),o.a.createElement("input",{type:"text",name:"name",value:d.name,onChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(r.a)({},d,Object(u.a)({},a,n)))}}),o.a.createElement("button",{className:"done"},"\u2713")))},s=function(e){var t=e.todos,a=e.deleteTodo,n=e.toggleComplete,l=e.toggleEdit,c=e.updateTodo,r=e.clearCompleted,i=e.clearAll,m=function(e){return c(e)},u=t.map(function(e){return e.edit?o.a.createElement("li",{key:e.id},o.a.createElement(d,{todo:e,updateTodo:m})):o.a.createElement("li",{key:e.id},o.a.createElement("span",{onClick:function(){return n(e.id)},style:{textDecoration:e.completed?"line-through":"none",opacity:e.completed?"0.5":"1",cursor:"pointer"}},e.name),o.a.createElement("button",{className:"edit",onClick:function(){return l(e.id)}},"Edit"),o.a.createElement("button",{className:"delete",onClick:function(){return a(e.id)}},"X"))});return o.a.createElement("div",{className:"todo-list"},t.length>0?o.a.createElement("ul",null,u,o.a.createElement("button",{className:"clear",onClick:r},"Clear Completed"),"|",o.a.createElement("button",{className:"clear",onClick:i},"Clear All")):o.a.createElement("p",null," No todos!"))},f=function(e){var t=e.addTodo,a={id:null,name:"",completed:!1},l=Object(n.useState)(a),c=Object(m.a)(l,2),i=c[0],d=c[1];return o.a.createElement("div",{className:"todo-input"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),d(a)}},o.a.createElement("label",null,"todo:"),o.a.createElement("input",{type:"text",name:"name",value:i.name,autocomplete:"off",onChange:function(e){var t=e.target,a=t.name,n=t.value;d(Object(r.a)({},i,Object(u.a)({},a,n)))}}),o.a.createElement("button",{className:"add"},"add")))},E=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:winstonsmithcodes@gmail.com?Subject=Hi%20Winston",target:"_top"},o.a.createElement("i",{className:"fas fa-envelope fa-2x"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.twitter.com/winstoncodes"},o.a.createElement("i",{className:"fab fa-twitter fa-2x"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/winstonCodes/todo-react"},o.a.createElement("i",{className:"fab fa-git fa-2x"})))))},p=(a(18),function(e){return o.a.createElement("div",{style:{backgroundColor:"inherit",color:"inherit",margin:0,textAlign:"center"}},o.a.createElement("p",{id:"notf"},"Click a todo to mark as complete"))}),b=function(){var e=function(e,t){if(t)return localStorage.setItem(e,JSON.stringify(t));var a=localStorage.getItem(e);return a&&JSON.parse(a)||[]},t=e("todosLocal"),a=Object(n.useState)(t),l=Object(m.a)(a,2),c=l[0],u=l[1];return Object(n.useEffect)(function(){e("todosLocal",c)}),o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("h1",null,"Remind Me!")),o.a.createElement("div",{className:"content"},o.a.createElement(p,null),o.a.createElement(f,{addTodo:function(e){e.name&&(e.id=Date.now(),u(Object(i.a)(c).concat([e])))}}),o.a.createElement(s,{todos:c,deleteTodo:function(e){u(c.filter(function(t){return t.id!==e}))},toggleComplete:function(e){u(c.map(function(t){return t.id===e?Object(r.a)({},t,{completed:!t.completed}):t}))},toggleEdit:function(e){u(c.map(function(t){return t.id===e?Object(r.a)({},t,{edit:!t.edit}):t}))},updateTodo:function(e){u(c.map(function(t){return t.id===e.id?e:t}))},clearCompleted:function(){u(c.filter(function(e){return!e.completed}))},clearAll:function(){u([])}})),o.a.createElement(E,null))};c.a.render(o.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(20)}},[[7,2,1]]]);
//# sourceMappingURL=main.c8c52c65.chunk.js.map