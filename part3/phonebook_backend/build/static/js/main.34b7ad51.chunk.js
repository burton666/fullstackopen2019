(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(41)},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(2),l=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.addPerson,t=e.newName,a=e.nameHandler,u=e.newNumber,o=e.numberHandler;return r.a.createElement("form",{onSubmit:n},"name: ",r.a.createElement("input",{value:t,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:u,onChange:o}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"add"))},s=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("p",{style:{margin:0}},n.name," ",n.number,r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},m=function(e){var n=e.filter,t=e.persons,a=e.removePerson;return n.length>0&&(t=t.filter(function(e){return e.name.toLowerCase().includes(n)||e.number.includes(n)})),t.map(function(e){return r.a.createElement(s,{key:e.id,person:e,removePerson:a})})},f=t(4),d=t.n(f),b=t(15),p=t(3),v=t.n(p),h="/api/persons",g=function(){return v.a.get(h).then(function(e){return e.data})},w=function(){var e=Object(b.a)(d.a.mark(function e(n){var t,a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(t=e.sent,!t.some(function(e){return e.name===n.name})){e.next=12;break}if(!window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?"))){e.next=10;break}return a=t.find(function(e){return e.name===n.name}),E(a.id,n),e.abrupt("return",a);case 10:e.next=14;break;case 12:return r=v.a.post(h,n),e.abrupt("return",r.then(function(e){return e.data}));case 14:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),E=function(e,n){return v.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},j={getAll:g,create:w,update:E,remove:function(e){return v.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})}},O=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t}," ",n," ")},k=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),s=Object(c.a)(o,2),f=s[0],d=s[1],b=Object(a.useState)(""),p=Object(c.a)(b,2),v=p[0],h=p[1],g=Object(a.useState)(""),w=Object(c.a)(g,2),E=w[0],k=w[1],x=Object(a.useState)({message:null,class:null}),C=Object(c.a)(x,2),N=C[0],P=C[1];Object(a.useEffect)(function(){j.getAll().then(function(e){u(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h1",{id:"Header"},"Phonebook"),r.a.createElement(O,{message:N.message,className:N.class}),r.a.createElement(l,{value:E,onChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:f,number:v};j.create(n).then(function(e){if(console.log("Response from App: ",e,"newPerson",n),e.name!==n.name){var a=t.findIndex(function(n){return n.name===e.name});console.log("Before",t,"Index",a),t[a].number=e.number}else t.push(e);console.log("after",t),u(t),d(""),h(""),P({message:"Added ".concat(e.name),class:"notification"}),console.log(N),setTimeout(function(){P({message:null,class:null})},5e3)})},newName:f,nameHandler:function(e){d(e.target.value)},newNumber:v,numberHandler:function(e){h(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{filter:E,persons:t,removePerson:function(e){var n=window.confirm("delete ".concat(e.name," ?"));console.log("Confirmation",n),n&&(j.remove(e.id),u(t.filter(function(n){return n.id!==e.id})))}}))};t(40);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.34b7ad51.chunk.js.map