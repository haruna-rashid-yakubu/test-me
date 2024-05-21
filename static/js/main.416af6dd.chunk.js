(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/icon-sun.f3da52d1.svg"},26:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/icon-moon.7101c57d.svg"},27:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/icon-arrow-right.9e19be64.svg"},28:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/icon-arrow-left.e9bb7637.svg"},29:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/illustration-empty.e3122ec2.svg"},49:function(e,t,i){},50:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),c=i(3),d=i.n(c);var n=Object(a.createContext)(),l=i(0);var r=()=>{const e=Object(a.useContext)(n),{dark:t,toggleDarkMode:s}=e;return Object(l.jsxs)("nav",{id:"navbar",className:t?"dark":void 0,children:[Object(l.jsx)("div",{id:"mode-toggle",onClick:s,children:t?Object(l.jsx)("img",{src:i(25).default,alt:"icon-sun"}):Object(l.jsx)("img",{src:i(26).default,alt:"icon-moon"})}),Object(l.jsx)("div",{id:"horizontal-line"}),Object(l.jsx)("a",{style:{display:"table-cell"},target:"_blank",rel:"noreferrer",name:"portfolio-link",id:"portfolio-link"})]})},o=i(53);var u=e=>{let{item:t,deleteItem:i,updateItems:s}=e;const c=Object(a.useContext)(n),{dark:d}=c,{name:r,quantity:o,price:u,total:j,itemId:m}=t,[b,p]=Object(a.useState)({name:r,quantity:o,price:u,total:j,itemId:m}),[x,h]=Object(a.useState)(!1);Object(a.useEffect)((()=>{s(b)}),[b]),Object(a.useEffect)((()=>{i(x,b)}),[x]);const O=e=>{let t;t="quantity"===e.target.name&&b.price>0?(parseFloat(e.target.value)*parseFloat(b.price)).toFixed(2):"price"===e.target.name&&b.quantity>0?(parseFloat(e.target.value)*parseFloat(b.quantity)).toFixed(2):b.total,p({...b,[e.target.name]:e.target.value,total:t})};return Object(l.jsxs)("div",{id:"modal-item-list-inputs-"+m,children:[Object(l.jsx)("p",{id:"item-name-title-"+m,className:d?"dark td-beautiful":"td-beautiful",children:"Article"}),Object(l.jsx)("input",{className:d?"dark":void 0,type:"text",id:"item-name-input-"+m,name:"name",autoComplete:"off",value:b.name,onChange:O}),Object(l.jsx)("p",{id:"qty-title-"+m,className:d?"dark td-beautiful":"td-beautiful",children:"Qt\xe9."}),Object(l.jsx)("input",{className:d?"dark":void 0,type:"number",min:"1",id:"qty-input-"+m,name:"quantity",autoComplete:"off",value:b.quantity,onChange:O}),Object(l.jsx)("p",{id:"price-title-"+m,className:d?"dark td-beautiful":"td-beautiful",children:"Prix"}),Object(l.jsx)("input",{className:d?"dark":void 0,type:"number",min:"0.01",step:"0.01",id:"price-input-"+m,name:"price",autoComplete:"off",value:b.price,onChange:O}),Object(l.jsx)("p",{id:"total-title-"+m,className:d?"dark td-beautiful":"td-beautiful",children:"Total"}),Object(l.jsx)("p",{id:"total-input-"+m,className:d?"dark td-beautiful":"td-beautiful",children:b.quantity>0&&b.price>0?(b.quantity*b.price).toFixed(2):0}),Object(l.jsx)("div",{id:"svg-"+m,onClick:e=>{h(!0)},children:Object(l.jsx)("svg",{width:"13",height:"16",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z",fillRule:"nonzero"})})})]})};var j=Object(a.createContext)();var m=()=>{const e=Object(a.useContext)(j),t=Object(a.useContext)(n),{addInvoice:s,discardClick:c,currentUser:d,cancelEditClick:r,saveChangesClick:m,newInvoiceForm:b,editInvoiceForm:p}=e,{dark:x}=t,[h,O]=Object(a.useState)({id:"",createdAt:"",paymentDue:"",description:"",paymentTerms:30,clientName:"",clientEmail:"",status:"",total:""}),[f,v]=Object(a.useState)({street:"",city:"",postCode:"",country:""}),[y,k]=Object(a.useState)({street:"",city:"",postCode:"",country:""}),[g,N]=Object(a.useState)([]),[C,I]=Object(a.useState)(!0),[E,T]=Object(a.useState)(!1),[w,F]=Object(a.useState)(!1),{createdAt:D,description:S,paymentTerms:A,clientName:M,clientEmail:B}=h;Object(a.useEffect)((()=>{let e=new Date,t=(""+e.getDate()).length<2?"0"+e.getDate():""+e.getDate(),i=(""+(e.getMonth()+1)).length<2?"0"+(e.getMonth()+1):""+(e.getMonth()+1),a=e.getFullYear(),s=P(new Date,30);O({...h,createdAt:[a,i,t].join("-"),paymentDue:s})}),[]),Object(a.useEffect)((()=>{if(d){O({id:d.id,createdAt:d.createdAt,paymentDue:d.paymentDue,description:d.description,paymentTerms:d.paymentTerms,clientName:d.clientName,clientEmail:d.clientEmail,status:d.status,total:d.total}),v(d.senderAddress),k(d.clientAddress);let e=d.items.map((e=>({...e,itemId:Object(o.a)()})));N(e)}}),[]),Object(a.useEffect)((()=>{setTimeout((()=>{(b||p)&&document.getElementById("invoice-modal").classList.add("fade-in")}),100)}),[]);const q=e=>{v({...f,[e.target.name]:e.target.value})},_=e=>{O({...h,[e.target.name]:e.target.value})},z=e=>{k({...y,[e.target.name]:e.target.value})},P=(e,t)=>{let i=new Date(e);i.setDate(i.getDate()+t);let a=i.toString();return a.substring(11,15)+"-"+{Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"}[a.substring(4,7)]+"-"+a.substring(8,10)},R=e=>{const t=g.map((t=>(t.itemId===e.itemId&&(t=e),t)));N(t)},U=(e,t)=>{e&&N(g.filter((e=>e.itemId!==t.itemId)))},L=e=>{O({...h,status:e.target.name})},V=d?Object(l.jsxs)(a.Fragment,{children:["Modifier ",Object(l.jsx)("span",{style:{color:"#7E88C3"},children:"#"}),d.id]}):null;return Object(l.jsx)("div",{id:"invoice-modal",className:"back-drop",children:Object(l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),d?C?((e,t,i,a)=>{let s=!1,c=!1,n={description:"ni-proj-desc",clientName:"ni-client-name",clientEmail:"ni-client-email",id:"",total:""},l={street:"ni-sa-input",city:"ni-from-city",postCode:"ni-from-zip",country:"ni-from-country"},r={street:"ni-to-street",city:"ni-to-city",postCode:"ni-to-zip",country:"ni-to-country"},o=[];if(Object.keys(e).forEach((t=>{if("id"===t||"total"===t||"createdAt"===t||"paymentDue"===t||"paymentTerms"===t||"status"===t)return;let i=document.getElementById(n[t]);0===e[t].length?(o.push(t),i.style.cssText+="border:1px solid #ec5757",i.previousSibling.style.cssText+="color:#ec5757;"):E&&(i.style.cssText-="border:1px solid #ec5757",i.previousSibling.style.cssText-="color:#ec5757;")})),Object.keys(t).forEach((e=>{let i=document.getElementById(l[e]);0===t[e].length?(o.push(e),i.style.cssText+="border:1px solid #ec5757",i.previousSibling.style.cssText+="color:#ec5757;"):E&&(i.style.cssText-="border:1px solid #ec5757",i.previousSibling.style.cssText-="color:#ec5757;")})),Object.keys(i).forEach((e=>{let t=document.getElementById(r[e]);0===i[e].length?(o.push(e),t.style.cssText+="border:1px solid #ec5757",t.previousSibling.style.cssText+="color:#ec5757"):E&&(t.style.cssText-="border:1px solid #ec5757",t.previousSibling.style.cssText-="color:#ec5757;")})),a.forEach((e=>{Object.keys(e).forEach((t=>{if("itemId"===t||"total"===t)return;let i=document.getElementById("item-name-input-".concat(e.itemId)),a=document.getElementById("qty-input-".concat(e.itemId)),s=document.getElementById("price-input-".concat(e.itemId));0===e[t].length?(o.push(t),"name"===t?i.style.cssText+="border:1px solid #ec5757":"quantity"===t?a.style.cssText+="border:1px solid #ec5757":s.style.cssText+="border:1px solid #ec5757"):E&&("name"===t?i.style.cssText-="border:1px solid #ec5757":"quantity"===t?(a.style.cssText-="border:1px solid #ec5757",a.style.cssText+="width:50px"):(s.style.cssText-="border:1px solid #ec5757",s.style.cssText+="width:50px"))}))})),o.length>0&&(c=!0),0===a.length&&(s=!0),c||s)T(c),F(s);else{let s=0;a.forEach((e=>s+=parseFloat(e.total))),"draft"===e.status&&(e.status="pending"),e.senderAddress=t,e.clientAddress=i,e.items=a,e.total=s,m(d,e)}})(h,f,y,g):r():"discard"===h.status?c():"pending"===h.status?((e,t,i,a)=>{let c=!1,d=!1,n={description:"ni-proj-desc",clientName:"ni-client-name",clientEmail:"ni-client-email",id:"",total:""},l={street:"ni-sa-input",city:"ni-from-city",postCode:"ni-from-zip",country:"ni-from-country"},r={street:"ni-to-street",city:"ni-to-city",postCode:"ni-to-zip",country:"ni-to-country"},o=[];Object.keys(e).forEach((t=>{if("id"===t||"total"===t||"createdAt"===t||"paymentDue"===t||"paymentTerms"===t||"status"===t)return;let i=document.getElementById(n[t]);0===e[t].length?(o.push(t),i.style.cssText+="border:1px solid #ec5757",i.previousSibling.style.cssText+="color:#ec5757;"):E&&(i.style.cssText-="border:1px solid #ec5757",i.previousSibling.style.cssText-="color:#ec5757;")})),Object.keys(t).forEach((e=>{let i=document.getElementById(l[e]);0===t[e].length?(o.push(e),i.style.cssText+="border:1px solid #ec5757",i.previousSibling.style.cssText+="color:#ec5757;"):E&&(i.style.cssText-="border:1px solid #ec5757",i.previousSibling.style.cssText-="color:#ec5757;")})),Object.keys(i).forEach((e=>{let t=document.getElementById(r[e]);0===i[e].length?(o.push(e),t.style.cssText+="border:1px solid #ec5757",t.previousSibling.style.cssText+="color:#ec5757"):E&&(t.style.cssText-="border:1px solid #ec5757",t.previousSibling.style.cssText-="color:#ec5757;")})),a.forEach((e=>{Object.keys(e).forEach((t=>{if("itemId"===t||"total"===t)return;let i=document.getElementById("item-name-input-".concat(e.itemId)),a=document.getElementById("qty-input-".concat(e.itemId)),s=document.getElementById("price-input-".concat(e.itemId));0===e[t].length?(o.push(t),"name"===t?i.style.cssText+="border:1px solid #ec5757":"quantity"===t?a.style.cssText+="border:1px solid #ec5757":s.style.cssText+="border:1px solid #ec5757"):E&&("name"===t?i.style.cssText-="border:1px solid #ec5757":"quantity"===t?a.style.cssText-="border:1px solid #ec5757":s.style.cssText-="border:1px solid #ec5757")}))})),o.length>0&&(d=!0),0===a.length&&(c=!0),d||c?(T(d),F(c)):s(e,t,i,a)})(h,f,y,g):s(h,f,y,g)},children:[Object(l.jsxs)("div",{id:"invoice-modal-form",className:x?"dark":void 0,children:[Object(l.jsx)("p",{id:"invoice-modal-title",className:x?"dark":void 0,children:d?V:"New Invoice"}),Object(l.jsxs)("div",{id:"ni-bill-from",children:[Object(l.jsx)("p",{className:"modal-sec-title",children:"Facture"}),Object(l.jsxs)("div",{id:"street-address",children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Nom de l'entreprise"}),Object(l.jsx)("input",{className:x?"dark":void 0,type:"text",id:"ni-sa-input",name:"street",autoComplete:"off",value:f.street,onChange:q})]}),Object(l.jsxs)("div",{id:"ni-city-zip-country",children:[Object(l.jsxs)("div",{id:"city",children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Ville"}),Object(l.jsx)("input",{className:x?"dark":void 0,type:"text",id:"ni-from-city",name:"city",autoComplete:"off",value:f.city,onChange:q})]}),Object(l.jsxs)("div",{id:"zip",children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Code Postal"}),Object(l.jsx)("input",{className:x?"dark":void 0,type:"text",id:"ni-from-zip",name:"postCode",autoComplete:"off",value:f.postCode,onChange:q})]}),Object(l.jsxs)("div",{id:"country",children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Pays"}),Object(l.jsx)("input",{className:x?"dark":void 0,type:"text",id:"ni-from-country",name:"country",autoComplete:"off",value:f.country,onChange:q})]})]})]}),Object(l.jsxs)("div",{id:"ni-bill-to",children:[Object(l.jsx)("p",{className:"modal-sec-title",children:"Facture de : "}),Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Nom du Client"}),Object(l.jsx)("input",{id:"ni-client-name",className:x?"dark":void 0,type:"text",name:"clientName",autoComplete:"off",value:M,onChange:_}),Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Email Du Client"}),Object(l.jsx)("input",{id:"ni-client-email",className:x?"dark":void 0,type:"email",name:"clientEmail",autoComplete:"off",placeholder:"e.g. email@example.com",value:B,onChange:_}),Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Quartier"}),Object(l.jsx)("input",{id:"ni-to-street",className:x?"dark":void 0,type:"text",name:"street",autoComplete:"off",value:y.street,onChange:z}),Object(l.jsxs)("div",{id:"bt-cityzipcountry",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Ville"}),Object(l.jsx)("input",{id:"ni-to-city",className:x?"dark":void 0,type:"text",name:"city",autoComplete:"off",value:y.city,onChange:z})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Code Postal"}),Object(l.jsx)("input",{id:"ni-to-zip",className:x?"dark":void 0,type:"text",name:"postCode",autoComplete:"off",value:y.postCode,onChange:z})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Pays"}),Object(l.jsx)("input",{id:"ni-to-country",className:x?"dark":void 0,type:"text",name:"country",autoComplete:"off",value:y.country,onChange:z})]})]}),Object(l.jsxs)("div",{id:"td-date-terms",children:[Object(l.jsxs)("div",{id:"td-date",children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Date de facturation"}),Object(l.jsx)("input",{className:x?"dark":void 0,type:"date",name:"createdAt",autoComplete:"off",value:D,onChange:e=>{const t=P(e.target.value,A+1);O({...h,[e.target.name]:e.target.value,paymentDue:t})}})]}),Object(l.jsxs)("div",{id:"td-terms",children:[Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Delais de paiement"}),Object(l.jsxs)("div",{id:"payment-terms-drop",className:x?"dark":void 0,children:[Object(l.jsxs)("div",{id:"term-arrow",children:[Object(l.jsx)("p",{className:x?"dark":void 0,children:1===A?"Net 1 day":7===A?"Net 7 days":14===A?"Net 14 days":"Net 30 days"}),Object(l.jsx)("img",{src:i(7).default,alt:"icon-arrow-down"})]}),Object(l.jsxs)("div",{id:"dropdown-items",className:x?"dark":void 0,onClick:e=>{const t="day"===e.target.id?1:"week"===e.target.id?7:"two-weeks"===e.target.id?14:30,i=P(D,t+1);O({...h,paymentTerms:t,paymentDue:i})},children:[Object(l.jsx)("p",{id:"day",className:x?"dark":void 0,children:"Sous 24H"}),Object(l.jsx)("p",{id:"week",className:x?"dark":void 0,children:"Sous 1 Semaine"}),Object(l.jsx)("p",{id:"two-weeks",className:x?"dark":void 0,children:"Sous 15 Jours"}),Object(l.jsx)("p",{id:"month",className:x?"dark":void 0,children:"Sous 1 mois"})]})]})]})]}),Object(l.jsx)("p",{className:x?"dark td-beautiful":"td-beautiful",children:"Description"}),Object(l.jsx)("input",{id:"ni-proj-desc",className:x?"dark":void 0,type:"text",name:"description",autoComplete:"off",placeholder:"ex : Conception de site web .",value:S,onChange:_})]}),Object(l.jsxs)("div",{id:"ni-item-list",children:[Object(l.jsx)("p",{className:"modal-big-title",children:"Item List"}),Object(l.jsxs)("div",{id:"modal-item-list-header",children:[Object(l.jsx)("p",{id:"header1",className:x?"dark td-beautiful":"td-beautiful",children:"Article"}),Object(l.jsx)("p",{id:"header2",className:x?"dark td-beautiful":"td-beautiful",children:"Qt\xe9."}),Object(l.jsx)("p",{id:"header3",className:x?"dark td-beautiful":"td-beautiful",children:"Prix"}),Object(l.jsx)("p",{id:"header4",className:x?"dark td-beautiful":"td-beautiful",children:"Total"}),Object(l.jsx)("p",{id:"header5"})]}),g.length>0?g.map((e=>Object(l.jsx)(u,{item:e,deleteItem:U,updateItems:R},e.itemId))):null,Object(l.jsxs)("button",{id:"modal-add-new-item",onClick:e=>{e.preventDefault();let t=Object(o.a)();N(g.concat({itemId:t,name:"",quantity:"",price:"",total:(0).toFixed(2)}))},className:x?"dark":void 0,children:[Object(l.jsx)("img",{src:i(8).default,alt:"icon-plus"}),Object(l.jsx)("p",{style:{marginLeft:"5px"},children:"Ajouter un Article"})]})]}),Object(l.jsxs)("div",{id:"alert-messages",children:[E?Object(l.jsx)("div",{id:"field-alert",children:Object(l.jsx)("p",{className:"alert-text",children:"-Veuillez remplir toutes les cases"})}):null,w?Object(l.jsx)("div",{id:"item-alert",children:Object(l.jsx)("p",{className:"alert-text",children:"-Ajouter au moins un article"})}):null]})]}),Object(l.jsx)("div",{id:"invoice-modal-submit-btns",className:x?"dark":void 0,children:Object(l.jsx)("div",{id:"ni-bot-btns",children:d?Object(l.jsx)(a.Fragment,{children:Object(l.jsxs)("div",{id:"change-btns",children:[Object(l.jsx)("input",{type:"submit",name:"cancel",value:"Annuler",className:"form-btn cancel",onMouseOut:e=>{I(!0)},onMouseOver:e=>{I(!1)}}),Object(l.jsx)("input",{type:"submit",name:"changes",value:"Enregistrer",className:"form-btn change"})]})}):Object(l.jsx)(a.Fragment,{children:Object(l.jsxs)("div",{id:"ni-btns",children:[Object(l.jsx)("input",{type:"submit",name:"discard",value:"Annuler",className:x?"form-btn discard dark":"form-btn discard",onMouseOver:L}),Object(l.jsxs)("div",{id:"save-btns",children:[Object(l.jsx)("input",{type:"submit",name:"draft",value:"Brouillon",className:x?"form-btn draft dark":"form-btn draft",onMouseOver:L}),Object(l.jsx)("input",{type:"submit",name:"pending",value:"Envoy\xe9 ",className:"form-btn send",onMouseOver:L})]})]})})})})]})})};var b=()=>{const[e,t]=Object(a.useState)(!1),s=Object(a.useContext)(j),c=Object(a.useContext)(n),{dark:d}=c,{invoices:r,newInvoiceForm:o,newInvoiceClick:u,invoiceDetails:b,filterCheck:p,filters:x}=s;Object(a.useEffect)((()=>{setTimeout((()=>{t(!0)}),500)}));const h=e=>{p(e.target.value)};let O,f=r.filter((e=>x.includes(e.status))).length;switch(x.length){case 1:O=x[0]+" invoices";break;case 2:O=x[0]+" & "+x[1]+" invoices";break;case 3:O="total invoices";break;default:O="filters selected",f="no"}return!b&&Object(l.jsxs)(a.Fragment,{children:[Object(l.jsxs)("header",{id:"header",className:o?"modal-container":null,children:[Object(l.jsxs)("div",{id:"header-left",children:[Object(l.jsx)("h1",{id:"header-title",className:d?"dark":void 0,children:"Factures"}),Object(l.jsx)("h1",{id:"mobile-title",className:d?"dark":void 0,children:"Factures"}),e&&r?Object(l.jsxs)(a.Fragment,{children:[Object(l.jsxs)("p",{id:"header-numInvoices",className:d?"dark":void 0,children:["Il y'a au Total ",f," ",O]}),Object(l.jsxs)("p",{id:"mobile-numInvoices",className:d?"dark":void 0,children:[f," ",O]})]}):e?Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("p",{id:"header-noInvoices",children:"Total de 0 Factures"}),Object(l.jsx)("p",{id:"mobile-noInvoices",children:"Total de 0 Factures"})]}):null]}),Object(l.jsxs)("div",{id:"header-right",children:[Object(l.jsxs)("div",{id:"filter-dropdown",children:[Object(l.jsxs)("div",{id:"header-arrow",children:[Object(l.jsx)("p",{id:"filter-title",className:d?"dark":void 0,children:"Filtres"}),Object(l.jsx)("p",{id:"mobile-filter",className:d?"dark":void 0,children:"Filtrer"}),Object(l.jsx)("img",{src:i(7).default,alt:"icon-arrow-down"})]}),Object(l.jsxs)("div",{id:"filter-choices",className:d?"dark":void 0,children:[Object(l.jsxs)("label",{className:d?"dark container":"container",children:["Brouillon",Object(l.jsx)("input",{onClick:h,type:"checkbox",defaultChecked:"false",value:"draft"}),Object(l.jsx)("span",{className:d?"checkmark dark":"checkmark"})]}),Object(l.jsxs)("label",{className:d?"dark container":"container",children:["En Attentes",Object(l.jsx)("input",{type:"checkbox",defaultChecked:"false",onClick:h,value:"pending"}),Object(l.jsx)("span",{className:d?"checkmark dark":"checkmark"})]}),Object(l.jsxs)("label",{className:d?"dark container":"container",children:["Pay\xe9s",Object(l.jsx)("input",{type:"checkbox",defaultChecked:"false",onClick:h,value:"paid"}),Object(l.jsx)("span",{className:d?"checkmark dark":"checkmark"})]})]})]}),Object(l.jsxs)("button",{id:"new-invoice-container",onClick:u,children:[Object(l.jsx)("div",{id:"new-invoice-icon",children:Object(l.jsx)("img",{src:i(8).default,alt:"icon-plus"})}),Object(l.jsx)("p",{id:"new-invoice-btn-words",children:"Nouvelle Facture"}),Object(l.jsx)("p",{id:"mobile-new-invoice-btn-words",children:"Nouvelle Facture"})]})]})]}),o&&Object(l.jsx)(m,{})]})};var p=e=>{let{invoice:t}=e;const s=Object(a.useContext)(j),c=Object(a.useContext)(n),{dark:d}=c,{invoiceDetailsClick:r}=s,[o,u]=Object(a.useState)(""),[m,b]=Object(a.useState)(""),[p,x]=Object(a.useState)(""),{id:h,paymentDue:O,total:f,clientName:v,status:y}=t;return Object(a.useEffect)((()=>{const e=O.substring(0,4),t=parseInt(O.substring(5,7))-1,i=O.substring(8),a=new Date(e,t,i).toString();u(a.substring(11,15)),b(a.substring(4,7)),x(a.substring(8,10))}),[]),Object(l.jsxs)("div",{className:d?"dark invoice-item":"invoice-item",onClick:()=>r(t),children:[Object(l.jsxs)("h3",{className:d?"dark item-id":"item-id",children:[Object(l.jsx)("span",{style:{color:"#7e88c3"},children:"#"}),h]}),Object(l.jsxs)("p",{className:d?"dark item-created-at":"item-created-at",children:["Date ",p," ",m," ",o]}),Object(l.jsx)("p",{className:d?"item-client-name dark":"item-client-name",children:v}),Object(l.jsxs)("h3",{className:d?"dark item-payment-due":"item-payment-due",children:["Fcfa ",f.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(l.jsxs)("div",{className:"colored-part-and-arrow",children:[Object(l.jsxs)("div",{id:y+"--"+h,className:d?"dark item-status-container":"item-status-container",children:[Object(l.jsx)("div",{className:d?"dark dot":"dot"}),Object(l.jsx)("p",{className:d?"dark item-status":"item-status",children:"paid"===y?"pay\xe9":"non pay\xe9"})]}),Object(l.jsx)("img",{src:i(27).default,alt:"icon-arrow-right"})]})]})};var x=()=>{const e=Object(a.useContext)(j),t=Object(a.useContext)(n),{dark:i}=t,{cancelDeleteClick:s,onConfirmDeleteClick:c,currentUser:d}=e;return Object(a.useEffect)((()=>{setTimeout((()=>{document.getElementById("delete-modal-container").classList.add("fade-in")}),100)}),[]),Object(l.jsx)("div",{id:"delete-modal-container",className:"back-drop",children:Object(l.jsxs)("div",{id:"delete-modal",className:i?"dark":void 0,children:[Object(l.jsx)("p",{id:"dm-heading",className:i?"dark":void 0,children:"Confirmer la suppression"}),Object(l.jsxs)("p",{id:"dm-question",className:i?"dark":void 0,children:["Etes vous sure de supprimer la facture ?"," ",Object(l.jsx)("span",{style:{color:"#7E88C3"},children:"#"}),d.id,"? Impossible d'effectuer cette tache"]}),Object(l.jsxs)("div",{id:"dm-btns",children:[Object(l.jsx)("button",{id:"dm-cancel",className:i?"dark form-btn":"form-btn",onClick:s,children:Object(l.jsx)("p",{id:"cancel",className:i?"dark":void 0,children:"Annuler"})}),Object(l.jsx)("button",{id:"dm-delete",className:"form-btn",onClick:()=>c(d),children:Object(l.jsx)("p",{id:"delete",children:"Supprimer"})})]})]})})};var h=e=>{let{currentUser:t}=e;const{deleteConfirmation:s,editInvoiceForm:c,deleteButtonClick:d,editButtonClick:r,goBackClick:o,onMarkAsPaidClick:u}=Object(a.useContext)(j),{dark:b}=Object(a.useContext)(n),[p,h]=Object(a.useState)({year:"",month:"",day:""}),[O,f]=Object(a.useState)({dueYear:"",dueMonth:"",dueDay:""});Object(a.useEffect)((()=>{window.scrollTo(0,0)}),[]),Object(a.useEffect)((()=>{const e=e=>{const t=new Date(e);return{year:t.getFullYear(),month:t.toLocaleString("default",{month:"short"}),day:t.getDate()}};h(e(t.createdAt)),f(e(t.paymentDue))}),[t]);const{status:v,total:y,items:k,id:g,description:N,clientName:C,clientEmail:I,clientAddress:E,senderAddress:T}=t;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"details-container",className:c||s?"modal-container":null,children:[Object(l.jsxs)("div",{id:"back-button",onClick:o,children:[Object(l.jsx)("img",{src:i(28).default,alt:"icon-arrow-left"}),Object(l.jsx)("p",{className:b?"dark":void 0,children:"Retour"})]}),Object(l.jsxs)("header",{id:"details-header",className:b?"dark":void 0,children:[Object(l.jsxs)("div",{id:"dh-status",children:[Object(l.jsx)("p",{id:"status-word",className:b?"dark":void 0,children:"Status"}),Object(l.jsxs)("div",{id:"".concat(v,"--").concat(g),className:b?"dark item-status-container":"item-status-container",children:[Object(l.jsx)("div",{className:b?"dark dot":"dot"}),Object(l.jsx)("p",{className:b?"dark item-status":"item-status",children:v.charAt(0).toUpperCase()+v.slice(1)})]})]}),Object(l.jsxs)("div",{id:"dh-options",style:{display:"flex",justifyContent:"draft"===v?"flex-end":"space-between"},children:[Object(l.jsx)("button",{id:"edit",className:b?"form-btn dark":"form-btn",onClick:r,children:Object(l.jsx)("p",{children:"Modifier"})}),Object(l.jsx)("button",{id:"delete",className:"form-btn",onClick:d,children:Object(l.jsx)("p",{children:"Supprimer"})}),"draft"!==v&&Object(l.jsx)("button",{id:"mark-as-paid",className:"form-btn",onClick:()=>u(v),children:Object(l.jsx)("p",{children:"pending"===v?"Pay\xe9":"Impay\xe9"})})]})]}),Object(l.jsxs)("section",{id:"details-card",className:b?"dark":void 0,children:[Object(l.jsxs)("div",{id:"top-details",children:[Object(l.jsxs)("div",{id:"td-group1",className:"td-cn-group1",children:[Object(l.jsxs)("p",{id:"td-id",className:b?"dark td-bold":"td-bold",children:[Object(l.jsx)("span",{style:{color:"#7E88C3"},children:"#"}),g]}),Object(l.jsx)("p",{id:"td-description",className:b?"dark td-beautiful":"td-beautiful",children:N})]}),Object(l.jsxs)("div",{id:"td-group2",className:"td-cn-group2",children:[Object(l.jsx)("p",{id:"td-inv-date-header",className:b?"dark td-beautiful":"td-beautiful",children:"Date de facturation"}),Object(l.jsxs)("p",{id:"td-inv-date",className:b?"dark td-bold":"td-bold",children:[p.day," ",p.month," ",p.year]})]}),Object(l.jsxs)("div",{id:"td-group3",className:"td-cn-group3",children:[Object(l.jsx)("p",{id:"td-due-date-header",className:b?"dark td-beautiful":"td-beautiful",children:"Paiement de"}),Object(l.jsxs)("p",{id:"td-due-date",className:b?"dark td-bold":"td-bold",children:[O.dueDay," ",O.dueMonth," ",O.dueYear]})]}),Object(l.jsxs)("div",{id:"td-group4",className:"td-cn-group4",children:[Object(l.jsx)("p",{id:"td-bill-to-header",className:b?"dark td-beautiful":"td-beautiful",children:"Facture de :"}),Object(l.jsx)("p",{id:"td-bill-to-name",className:b?"dark td-bold":"td-bold",children:C}),Object(l.jsxs)("div",{id:"td-bill-to-address",className:b?"dark td-beautiful":"td-beautiful",children:[Object(l.jsx)("p",{id:"client-street",children:E.street}),Object(l.jsx)("p",{id:"client-city",children:E.city}),Object(l.jsx)("p",{id:"client-zip",children:E.postCode}),Object(l.jsx)("p",{id:"client-country",children:E.country})]})]}),Object(l.jsxs)("div",{id:"td-group5",className:"td-cn-group5",children:[Object(l.jsx)("p",{id:"td-sent-to-header",className:b?"dark td-beautiful":"td-beautiful",children:"Envoyer \xe0:"}),Object(l.jsx)("p",{id:"td-sent-to-email",className:b?"dark td-bold":"td-bold",children:I})]}),Object(l.jsx)("div",{id:"td-group6",className:"td-cn-group6",children:Object(l.jsxs)("div",{id:"td-sender-address",className:b?"dark td-beautiful":"td-beautiful",children:[Object(l.jsx)("p",{id:"client-street",children:T.street}),Object(l.jsx)("p",{id:"client-city",children:T.city}),Object(l.jsx)("p",{id:"client-zip",children:T.postCode}),Object(l.jsx)("p",{id:"client-country",children:T.country})]})})]}),Object(l.jsxs)("div",{id:"details-card-items",className:b?"dark":void 0,children:[Object(l.jsxs)("div",{id:"dc-items-header",children:[Object(l.jsx)("p",{id:"item-name",className:b?"dark":void 0,children:"Nom"}),Object(l.jsx)("p",{id:"qty",className:b?"dark":void 0,children:"QTE."}),Object(l.jsx)("p",{id:"price",className:b?"dark":void 0,children:"Prix"}),Object(l.jsx)("p",{id:"total",className:b?"dark":void 0,children:"Total"})]}),k.map(((e,t)=>Object(l.jsxs)("div",{className:"item-info",children:[Object(l.jsx)("p",{className:b?"dark item-info-name":"item-info-name",children:e.name}),Object(l.jsx)("p",{className:b?"dark item-info-quantity":"item-info-quantity",children:e.quantity}),Object(l.jsxs)("p",{className:b?"dark item-info-price":"item-info-price",children:["Fcfa ",parseFloat(e.price).toFixed(2)]}),Object(l.jsxs)("p",{className:b?"dark item-info-total":"item-info-total",children:["Fcfa ",(e.quantity*e.price).toFixed(2)]}),Object(l.jsx)("p",{id:"random-x",className:b?"dark":void 0,children:"x"})]},t)))]}),Object(l.jsxs)("div",{id:"details-card-total",className:b?"dark":void 0,children:[Object(l.jsx)("p",{id:"amount-due",children:"Montant \xe0 payer"}),Object(l.jsxs)("div",{id:"dc-total",children:["Fcfa ",y.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]})]}),Object(l.jsxs)("footer",{id:"mobile-footer",className:b?"dark":void 0,children:[Object(l.jsx)("div",{id:"edit",className:b?"form-btn dark":"form-btn",onClick:r,children:Object(l.jsx)("p",{children:"Modifier"})}),Object(l.jsx)("div",{id:"delete",className:"form-btn",onClick:d,children:Object(l.jsx)("p",{children:"Suppimer"})}),"draft"!==v&&Object(l.jsx)("div",{id:"mark-as-paid",className:"form-btn",onClick:()=>u(v),children:Object(l.jsx)("p",{children:"pending"===v?"Pay\xe9":"Impay\xe9"})})]})]}),c&&Object(l.jsx)(m,{}),s&&Object(l.jsx)(x,{})]})},O=i(52);var f=()=>{const[e,t]=Object(a.useState)(!1),s=Object(a.useContext)(j),c=Object(a.useContext)(n),{dark:d}=c,{invoices:r,currentUser:o,invoiceDetails:u,filters:m,newInvoiceForm:b,getInvoices:x}=s;Object(a.useEffect)((()=>{x()}),[]),Object(a.useEffect)((()=>{window.scrollTo(0,0)}),[]),Object(a.useEffect)((()=>{setTimeout((()=>{t(!0)}),500)}),[]);let f=r.filter((e=>m.includes(e.status)));return u?Object(l.jsx)(O.a,{timeout:300,classNames:"fade",children:Object(l.jsx)(h,{currentUser:o})}):Object(l.jsx)(O.a,{in:!0,timeout:300,classNames:"fade",children:Object(l.jsx)("section",{id:"invoices",className:b?"new-invoice-modal-container":null,children:e&&0===f.length?Object(l.jsxs)("div",{id:"empty-container",children:[Object(l.jsx)("img",{src:i(29).default,alt:"emtpy-illustration"}),Object(l.jsx)("h2",{className:d?"dark":void 0,children:"IL n'y a pas de factures"}),Object(l.jsxs)("p",{className:d?"dark":void 0,children:["Cr\xe9ez une facture en cliquant sur le"," ",Object(l.jsx)("span",{style:{fontWeight:"700"},children:"Nouvelle facture"}),"bouton et commencer ou modifier le"," ",Object(l.jsx)("span",{style:{fontWeight:"700"},children:"Filtrer par status"})]})]}):Object(l.jsx)("div",{id:"invoice-list",children:f.map(((e,t)=>Object(l.jsx)(p,{invoice:e},t)))})})})},v=i(4),y=i.n(v);const k="ADD_INVOICE",g="NEW_INVOICE_FORM",N="INVOICE_DETAILS",C="GO_BACK",I="EDIT_INVOICE_FORM",E="DELETE_CONFIRMATION",T="DISCARD",w="FILTER_INVOICES",F="MARK_PAID",D="CANCEL_DELETE",S="CONFIRM_DELETE",A="CANCEL_EDIT",M="SAVE_CHANGES",B="DARK",q="INVOICE_ERROR",_="GET_INVOICES";var z=(e,t)=>{switch(t.type){case _:return{...e,invoices:t.payload};case k:return{...e,newInvoiceForm:!1,invoices:[...e.invoices,t.payload]};case g:return{...e,newInvoiceForm:t.payload};case N:return{...e,currentUser:t.payload,invoiceDetails:!0};case C:return{...e,currentUser:null,invoiceDetails:!1,filters:t.payload};case I:return{...e,editInvoiceForm:t.payload};case E:case D:return{...e,deleteConfirmation:t.payload};case T:return{...e,newInvoiceForm:t.payload};case w:return{...e,filters:t.payload};case F:return{...e,currentUser:t.payload};case S:return{...e,currentUser:null,invoiceDetails:!1,filters:["draft","pending","paid"],deleteConfirmation:!1,invoices:t.payload};case A:return{...e,editInvoiceForm:t.payload};case M:return{...e,invoices:t.payloadOne,currentUser:t.payloadTwo,editInvoiceForm:!1};case q:return{...e,error:t.payload};default:return e}};var P=e=>{const[t,i]=Object(a.useReducer)(z,{invoices:[],newInvoiceForm:!1,invoiceDetails:!1,editInvoiceForm:!1,deleteConfirmation:!1,currentUser:null,filters:["paid","pending","draft"],error:null});return Object(l.jsx)(j.Provider,{value:{invoices:t.invoices,newInvoiceForm:t.newInvoiceForm,currentUser:t.currentUser,invoiceDetails:t.invoiceDetails,editInvoiceForm:t.editInvoiceForm,deleteConfirmation:t.deleteConfirmation,filters:t.filters,error:t.error,newInvoiceClick:()=>{i({type:g,payload:!0})},addInvoice:async(e,t,a,s)=>{let c="";for(let i=0;i<=1;i++)c+=String.fromCharCode(Math.floor(26*Math.random())+65);for(let i=0;i<=3;i++)c+=Math.floor(10*Math.random());let d=0;s.forEach((e=>d+=parseFloat(e.total))),e.id=c,e.senderAddress=t,e.clientAddress=a,e.items=s,e.total=d;const n={headers:{"Content-Type":"application/json"}};try{const t=await y.a.post("/api/invoices",e,n);i({type:k,payload:t.data})}catch(l){i({type:q,payload:l.response.msg})}},invoiceDetailsClick:e=>{i({type:N,payload:e})},goBackClick:()=>{i({type:C,payload:["draft","pending","paid"]})},deleteButtonClick:()=>{i({type:E,payload:!0})},editButtonClick:()=>{i({type:I,payload:!0})},discardClick:()=>{i({type:T,payload:!1})},filterCheck:e=>{let a=t.filters;const s=a.indexOf(e);s>=0?a.splice(s,1):a.push(e),i({type:w,payload:a})},onMarkAsPaidClick:async e=>{const a=t.currentUser;a.status="pending"===e?"paid":"pending";const s={headers:{"Content-Type":"application/json"}};try{const e=await y.a.put("/api/invoices/".concat(a._id),a,s);i({type:F,payload:e.data})}catch(c){i({type:q,payload:c.response.msg})}},cancelDeleteClick:()=>{i({type:D,payload:!1})},onConfirmDeleteClick:async e=>{let a=t.invoices.filter((t=>t.id!==e.id));i({type:S,payload:a});try{await y.a.delete("/api/invoices/".concat(e._id))}catch(s){i({type:q,payload:s.response.msg})}},cancelEditClick:()=>{i({type:A,payload:!1})},saveChangesClick:async(e,a)=>{const s={headers:{"Content-Type":"application/json"}};try{const c=await y.a.put("/api/invoices/".concat(e._id),a,s);let d=t.invoices.map((e=>(e.id===a.id&&(e=c.data),e)));i({type:M,payloadOne:d,payloadTwo:c.data})}catch(c){i({type:q,payload:c.response.msg})}},getInvoices:async()=>{try{const e=await y.a.get("/api/invoices");i({type:_,payload:e.data})}catch(e){i({type:q,payload:e.response.msg})}}},children:e.children})};var R=(e,t)=>t.type===B?{...e,dark:t.payload}:e;var U=e=>{const[t,i]=Object(a.useReducer)(R,{dark:!1});return Object(l.jsx)(n.Provider,{value:{dark:t.dark,toggleDarkMode:()=>{let e=!t.dark;document.body.style.backgroundColor=e?"#141625":"#f8f8f8",i({type:B,payload:e})}},children:e.children})};i(49);var L=()=>{const[e]=Object(a.useState)(!0);return Object(l.jsx)(O.a,{in:e,appear:!0,timeout:300,classNames:"fade",children:Object(l.jsx)("main",{id:"main-app",children:Object(l.jsx)(P,{children:Object(l.jsxs)(U,{children:[Object(l.jsx)(r,{}),Object(l.jsx)(b,{}),Object(l.jsx)(f,{})]})})})})};d.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root"))},7:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/icon-arrow-down.a6ed7bff.svg"},8:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/icon-plus.278c048a.svg"}},[[50,1,2]]]);
//# sourceMappingURL=main.416af6dd.chunk.js.map