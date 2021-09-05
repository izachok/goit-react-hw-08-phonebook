(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{164:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(362),c=n(151),r=n(189),i=n.n(r),o=n(18),s=n(3);function l(t){var e=t.action,n=t.message,r=Object(o.b)(),l=function(t,n){"clickaway"!==n&&r(e())};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:!0,autoHideDuration:6e3,message:n,onClose:l,action:Object(s.jsx)(c.a,{size:"small","aria-label":"close",color:"inherit",onClick:l,children:Object(s.jsx)(i.a,{fontSize:"small"})})})})}},358:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return Q}));var a={};n.r(a),n.d(a,"getContacts",(function(){return d})),n.d(a,"getFilter",(function(){return j})),n.d(a,"getError",(function(){return b})),n.d(a,"getIsLoading",(function(){return m})),n.d(a,"getFilteredContacts",(function(){return O}));var c=n(184),r=n(348),i=n(347),o=n(150),s=n(155),l=n(52),u=(n(64),n(45)),d=function(t){return t.contacts.items},j=function(t){return t.contacts.filter},b=function(t){return t.contacts.error},m=function(t){return t.contacts.isLoading},O=Object(u.a)([j,d],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),f=n(8),h=n(34),x=n(183),g=n(363),p=n(352),v=n(353),C=n(354),y=n(172),w=n(18),k=n(365),F=n(146),S=n(3),A=Object(F.a)((function(t){return{field:{marginBottom:t.spacing(3)}}}));function E(t){var e=t.isOpen,n=t.onClose,c=t.contact,r=Object(w.c)(a.getContacts),o=Object(w.b)(),l=A();return Object(S.jsxs)(g.a,{fullWidth:!0,maxWidth:"xs",open:e,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(S.jsx)(p.a,{id:"form-dialog-title",children:c?"Edit contact":"Add contact"}),Object(S.jsx)(v.a,{children:Object(S.jsx)(y.c,{initialValues:{name:c?c.name:"",number:c?c.number:""},validationSchema:x.a({name:x.b().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name can contain only letters, ', - and space. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.").required(),number:x.b().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number should contain only numbers and it also could contain spaces, dash, parenthesis and startts with +").required()}),onSubmit:function(t,e){var a,i=e.setSubmitting;if(a=(a=t.name).toLowerCase(),r.filter((function(t){return t.name.toLowerCase()===a})).length>0)return alert("".concat(t.name," is already in contacts")),void i(!1);c?function(t){var e=t.name,n=t.number,a=Object(h.a)(Object(h.a)({},c),{},{name:e,number:n});o(f.updateContact(a))}(t):function(t){var e=t.name,a=t.number;o(f.addContact({name:e,number:a})),n()}(t),n()},children:function(t){var e=t.isSubmitting;return Object(S.jsxs)(y.b,{children:[Object(S.jsx)(y.a,{name:"name",type:"text",label:"Name",component:k.a,className:l.field,fullWidth:!0}),Object(S.jsx)(y.a,{name:"number",type:"tel",label:"Phone number",component:k.a,className:l.field,fullWidth:!0}),e&&Object(S.jsx)(s.a,{}),Object(S.jsxs)(C.a,{children:[Object(S.jsx)(i.a,{variant:"contained",color:"primary",disabled:e,type:"submit",children:"Save contact"}),Object(S.jsx)(i.a,{onClick:n,color:"primary",children:"Cancel"})]})]})}})})]})}var N=n(0),z=n(355),L=n(349),W=n(351),B=n(356),D=n(151),J=n(327),Z=n.n(J),q=n(326),I=n.n(q),P=Object(F.a)((function(t){return{card:{display:"flex",flexDirection:"column",height:"100%"},cardContent:{flexGrow:1},cardActions:{justifyContent:"flex-end"}}}));function T(t){var e=t.contact,n=t.onEdit,a=Object(w.b)(),c=P();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(z.a,{item:!0,component:"li",xs:12,sm:6,md:4,children:Object(S.jsxs)(L.a,{className:c.card,children:[Object(S.jsxs)(W.a,{className:c.cardContent,children:[Object(S.jsx)(o.a,{variant:"h6",children:e.name}),Object(S.jsx)(o.a,{variant:"body1",children:e.number})]}),Object(S.jsxs)(B.a,{disableSpacing:!0,className:c.cardActions,children:[Object(S.jsx)(D.a,{onClick:function(){return n(e)},children:Object(S.jsx)(I.a,{})}),Object(S.jsx)(D.a,{onClick:function(){return a(f.deleteContact(e.id))},"aria-label":"Delete contact",children:Object(S.jsx)(Z.a,{})})]})]})})})}var G=Object(F.a)((function(t){return{root:{marginTop:t.spacing(2),listStyle:"none"}}}));function H(t){var e=t.onEdit,n=Object(w.c)(a.getFilteredContacts),c=Object(w.b)(),r=G();return Object(N.useEffect)((function(){return c(f.fetchContacts())}),[c]),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(z.a,{container:!0,component:"ul",spacing:3,className:r.root,children:n.length>0&&n.map((function(t){return Object(S.jsx)(T,{contact:t,onEdit:e},t.id)}))})})}var M=n(164),V=n(357);function $(){var t=Object(w.b)();return Object(S.jsx)("div",{children:Object(S.jsx)(V.a,{type:"text",name:"filter",label:"Find contacts by name:",onChange:function(e){t(l.changeFilter(e.target.value))}})})}var K=Object(F.a)((function(t){return{root:{marginTop:t.spacing(2)}}}));function Q(){var t=Object(w.c)(a.getError),e=Object(w.c)(a.getIsLoading),n=Object(N.useState)(!1),u=Object(c.a)(n,2),d=u[0],j=u[1],b=Object(N.useState)(null),m=Object(c.a)(b,2),O=m[0],f=m[1],h=Boolean(d||O),x=K();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(r.a,{maxWidth:"md",className:x.root,children:[Object(S.jsx)(i.a,{variant:"contained",color:"primary",onClick:function(){j(!0)},children:"Add contact"}),Object(S.jsx)(o.a,{variant:"h3",children:"Contacts"}),t&&Object(S.jsx)(M.a,{message:t,action:l.resetError}),Object(S.jsx)($,{}),Object(S.jsx)(H,{onEdit:function(t){f(t)}}),e&&Object(S.jsx)(s.a,{})]}),h&&Object(S.jsx)(E,{isOpen:h,onClose:function(){j(!1),f(null)},contact:O})]})}}}]);
//# sourceMappingURL=contacts-page.6a1d9902.chunk.js.map