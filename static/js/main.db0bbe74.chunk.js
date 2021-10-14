(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),s=(n(17),n(11)),o=n(2),u=n(3),l=n(7),b=n(6),d=n(9),j=n(5),m=n(4),h=n(20),O=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).nameInputId=Object(h.a)(),t.telInputId=Object(h.a)(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=Object(m.a)(t),a=n.props,r=n.state,c=Object(d.a)(Object(d.a)({},r),{},{id:Object(h.a)()});a.onSubmit(c)},t.resetState=function(){t.setState({name:"",number:""})},t.state={id:"",name:"",number:""},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.handleInputChange,n=this.nameInputId,a=this.telInputId;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsx)("label",{htmlFor:n,children:"\u0418\u043c\u044f"}),Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:n,onChange:e}),Object(O.jsx)("label",{htmlFor:a,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:a,onChange:e}),Object(O.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(a.Component);var p=function(t){var e=t.contactName,n=t.contactNumber;return Object(O.jsxs)("span",{children:[e,": ",n]})};var v=function(t){var e=t.contacts;return Object(O.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(O.jsxs)("li",{className:"contacts__item",children:[Object(O.jsx)(p,{contactName:n,contactNumber:a}),";"]},e)}))})};var x=function(t){var e=t.value,n=t.onChange,a=Object(h.a)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:a,children:"Filter by Name"}),Object(O.jsx)("input",{type:"text",value:e,onChange:n,id:a})]})};var C=function(t){var e=t.title,n=t.children;return Object(O.jsxs)("section",{className:"section",children:[e&&Object(O.jsx)("h2",{children:e}),n]})},g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).formSubmitHandler=function(e){t.setState((function(t){var n=t.contacts,a=e.name.toLowerCase();if(!n.find((function(t){return t.name.toLowerCase()===a})))return{contacts:[].concat(Object(s.a)(t.contacts),[e])};alert("".concat(e.name," already exists!"))}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=this.formSubmitHandler,n=this.getFilteredContacts,a=this.changeFilter,r=t.filter;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(f,{onSubmit:e}),Object(O.jsxs)(C,{title:"Contacts",children:[Object(O.jsx)(v,{contacts:n()}),Object(O.jsx)(x,{value:r,onChange:a})]})]})}}]),n}(a.Component);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.db0bbe74.chunk.js.map