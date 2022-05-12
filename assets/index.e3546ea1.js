var Ue=Object.defineProperty,Me=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var ce=(t,a,r)=>a in t?Ue(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,M=(t,a)=>{for(var r in a||(a={}))de.call(a,r)&&ce(t,r,a[r]);if(V)for(var r of V(a))ue.call(a,r)&&ce(t,r,a[r]);return t},q=(t,a)=>Me(t,Fe(a));var pe=(t,a)=>{var r={};for(var n in t)de.call(t,n)&&a.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&V)for(var n of V(t))a.indexOf(n)<0&&ue.call(t,n)&&(r[n]=t[n]);return r};import{r as p,j as e,a as u,L as je,i as Ge,S as He,I as Ke,y as Ve,f as X,b as fe,p as ae,c as he,N as ge,B as qe,d as Ye,u as Ne,e as $e,P as Qe,M as xe,F as N,g as $,h as G,k as W,l as Ze,C as P,m as y,n as Q,o as K,G as me,q as C,t as I,U as Se,s as re,v as ke,w as De,K as We,$ as ze,x as Je,z as ve,A as Xe,R as et,D as H,T as tt,E as at,H as st}from"./vendor.89976efe.js";const rt=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}};rt();const j=p.exports.createContext({}),nt=t=>{const[a,r]=p.exports.useState(void 0),[n,s]=p.exports.useState([]),l={user:a,setUser:r,levels:n,setLevels:s};return e(j.Provider,{value:l,children:t.children})};var w=(t=>(t.HOME="/",t.LOGIN="/login",t.ACCOUNTS="/accounts",t.BACKGROUND="/background-info",t.PAY_INFO="/pay-info",t.BANK="/bank-info",t.MTN="/mtn-info",t))(w||{});function lt(){return u("div",{className:"h-screen w-screen flex flex-col gap-2 justify-center items-center",children:[e("h2",{className:"text-2xl ",children:"\u{1F62D} page not found."}),e("h3",{className:"text-xl ",children:e(je,{to:"/",children:"Go Back \u{1F448}"})})]})}const O={AUTH_KEY:"loan-auth-key",FORMAT_DATE:"eee-MM-yyyy, hh:mm a",CURRENCY:"R",DEFAULT_SELECT_OPTION:"NONE",NOT_SET_STR:"",NOT_SET_INT:-1,PAGE_SIZE:3};var m=(t=>(t.LOAN_REQUEST="loan_requests",t.USER="users_n",t.USER_DOC="user_documents",t.LEVEL="levels",t.PAYMENT_INFO="payment_infos",t.BACK_INFO="background_informations",t))(m||{});const ot={apiKey:"AIzaSyBA_bZYGXDxwjfq5TcF8H6OrFBlw8Tt0Xo",authDomain:"cashful-9f540.firebaseapp.com",databaseURL:"https://cashful-9f540-default-rtdb.firebaseio.com",projectId:"cashful-9f540",storageBucket:"cashful-9f540.appspot.com",messagingSenderId:"678012084096",appId:"1:678012084096:web:6a955b76698af2e182eb65",measurementId:"G-94KHB0D7GE"},it=Ge(ot),Oe=He(it),B=(t,a)=>Ke(Oe,t,a),F=t=>Ve(Oe,t),ct={getToday:()=>X(new Date,"yyyy-MM-dd"),formatDate:(t,a=O.FORMAT_DATE,r=!1)=>typeof t=="string"?t&&X(fe(ae(t),{hours:r?new Date().getTimezoneOffset()/60:0}),a):t&&X(fe(t,{hours:r?new Date().getTimezoneOffset()/60:0}),a),isValidateField:(...t)=>t.filter(r=>r&&r!==null&&r!==void 0?!(Array.isArray(r)&&r.length===0):!1).length===t.length,uniqBy:(t,a)=>{let r={};return t.filter(function(n){let s=a(n);return r.hasOwnProperty(s)?!1:r[s]=!0})},updateArray:(t,a)=>{if(t[0].id){const r=t.findIndex(n=>(n==null?void 0:n.id)===(a==null?void 0:a.id));return t.splice(r,1,a),t}else return[]},uniqueArray:(t,a)=>[...new Map(t.map(r=>[r[a],r])).values()]},dt=[he(ge,"Dashboard",w.HOME,e(Ye,{})),he(ge,"Accounts",w.ACCOUNTS,e(qe,{}))];var we="/cashful-admin/assets/logo.7e04d61c.png";function z({children:t,title:a=""}){const{setUser:r}=p.exports.useContext(j),n=Ne();return e($e,{title:"Cashful",logoUrl:we,userName:"Admin",userImageUrl:"https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",navItems:dt,onLogOut:()=>{r(null),localStorage.clear(),n(w.LOGIN)},children:e(Qe,{children:t})})}function R({onClick:t,children:a,disabled:r=!1,seconday:n=!1,fullWidth:s=!1}){return e("button",{disabled:r,className:`${s==!0?"w-full":""} px-5 py-2.5 rounded-md text-sm text-white ${n?"bg-gray-800":"bg-primary"} hover:bg-gray-800 hover:-translate-y-1 transition-all disabled:hover:bg-gray-600 disabled:hover:translate-y-0 disabled:text-gray-100 disabled:bg-gray-600`,onClick:l=>{l.preventDefault(),t()},children:a})}function v({vertical:t=!0}){const a=t==!0?"py-[6px]":"px-[6px]";return e("div",{className:a})}function E({text:t,isSubtitle:a=!1}){return e("h1",{className:`${a==!0?"text-lg":"text-2xl"} font-bold`,children:t})}function Ee({title:t=void 0,children:a,style:r,className:n}){return u("div",{className:"shadow-md rounded-lg",children:[t&&e("div",{className:" rounded-tl-lg  rounded-tr-lg px-6 py-3 text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400",children:e("b",{children:t})}),e("div",{className:"px-6 py-3 "+n,style:r,children:a})]})}function x({title1:t,title2:a,value1:r,value2:n}){return u("div",{className:"grid grid-cols-2 gap-1 my-2 text-sm",children:[u("div",{className:"col-span-1",children:[e("b",{className:"text-gray-700",children:t})," ",e("br",{}),r]}),u("div",{className:"col-span-1",children:[e("b",{className:"text-gray-700",children:a})," ",e("br",{}),n]})]})}function ut({info:t,show:a,setShow:r}){var i,f,h,o,A,k,T;const n=Ne(),[s,l]=p.exports.useState({}),[c,d]=p.exports.useState({});return p.exports.useEffect(()=>{(async S=>{if(S=="")return;const L=G(B(m.BACK_INFO,S)),D=G(B(m.PAYMENT_INFO,S)),[_,U]=await Promise.all([L,D]);U.exists()&&l(U.data()),_.exists()&&d(_.data())})(t.id)},[t.id]),e(xe,{title:"Account Information",show:a,setShow:r,footer:e(N,{children:e($,{title:"Close",onClick:()=>{r(!1)}})}),children:u("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u("div",{className:"col-span-1 border rounded-md p-4",children:[u("div",{className:"flex justify-between items-center gap-2",children:[e(E,{isSubtitle:!0,text:"Background information"}),e($,{title:"Edit",onClick:()=>{n(`${w.BACKGROUND}/${t.id}`)}})]}),e(x,{title1:"First Name",value1:t.firstName||"-",title2:"Last Name",value2:t.lastName||"-"}),e(x,{title1:"Date of Birth",value1:t.dob||"-",title2:"Gender",value2:t.gender||"-"}),e(x,{title1:"Mobile Number",value1:t.mobileNumber||"-",title2:"Address",value2:t.address||"-"}),e(x,{title1:"Credit Score",value1:c.creditScore||"-",title2:"Credit Score Value",value2:c.creditScoreValue||"-"}),e(x,{title1:"Small Business Owner",value1:c.isSmallBusinessOwner?"Yes":"No",title2:"Business Offering",value2:c.businessOffering||"-"}),e(x,{title1:"Length of Operations",value1:c.lengthOfOperation||"-",title2:"Initial Business Financing",value2:c.sourceOfFinancing||"-"}),e(x,{title1:"Business Investment To-Date",value1:c.investmentToDate||"-",title2:"Business Income Per Month",value2:c.monthlyIncome||"-"}),e(x,{title1:"Business Expenses Per Month",value1:c.monthlyExpense||"-",title2:"Highest Level of Education",value2:c.highestLevelOfEducation||"-"}),e(x,{title1:"Monthly Savings",value1:c.savingMonthly||"-",title2:"Stokvel Participation",value2:c.isPartOfStockvel?"Yes":"No"}),e(x,{title1:"Stokvel Contribution",value1:c.stockvelContribution||"-",title2:"",value2:""})]}),u("div",{className:"col-span-1 border rounded-md p-4",children:[u("div",{className:"flex justify-between items-center gap-2",children:[e(E,{isSubtitle:!0,text:`${s.bankDetail?"Bank":"MTN"} Account Details`}),e($,{title:"Edit",onClick:()=>{n(`${w.PAY_INFO}/${t.id}`)}})]}),s.bankDetail?u(N,{children:[e(x,{title1:"Account Holder",value1:(i=s.bankDetail)==null?void 0:i.hodlerName,title2:"Account Number",value2:(f=s.bankDetail)==null?void 0:f.accountNumber}),e(x,{title1:"Account Type",value1:(h=s.bankDetail)==null?void 0:h.accountType,title2:"Bank",value2:(o=s.bankDetail)==null?void 0:o.bankName}),e(x,{title1:"Branch Code",value1:(A=s.bankDetail)==null?void 0:A.bankCode,title2:"",value2:""})]}):e(N,{children:e(x,{title1:"Account Holder",value1:(k=s.mtnDetail)==null?void 0:k.fullName,title2:"Account Number",value2:(T=s.mtnDetail)==null?void 0:T.accountNumber})})]})]})})}function ee({id:t,status:a,url:r,infoKey:n}){const s=async l=>{if(confirm("Are you sure you want to change the status to "+l+"?")===!0){console.log(m.USER_DOC,t);const d=B(m.USER_DOC,t);await W(d,{[`${n}.status`]:l.toString()}),window.location.reload()}};return u("div",{className:"flex gap-8 justify-start items-center mb-8",children:[e("div",{className:"p-2 bg-gray-200 rounded-md",children:e("img",{src:r,alt:"",width:120,height:120,className:"object-cover rounded-md"})}),u("div",{className:"flex flex-col gap-2",children:[e(R,{onClick:()=>{s("approved")},children:"Approve"}),e(R,{seconday:!0,onClick:()=>{s("pending")},children:"Reject"}),u("p",{className:"text-sm text-gray-700",children:[e("b",{children:"Status"}),": ",a]})]})]})}function pt({info:t,setInfo:a}){const[r,n]=p.exports.useState(!1);return t.firstName==null?e(N,{}):u(Ee,{children:[e(E,{text:"Account Information"}),e(v,{}),e(x,{title1:"First Name",value1:t.firstName||"-",title2:"Last Name",value2:t.lastName||"-"}),e(x,{title1:"Date of Birth",value1:t.dob||"-",title2:"Gender",value2:t.gender||"-"}),e(x,{title1:"Mobile Number",value1:t.mobileNumber||"-",title2:"Address",value2:t.address||"-"}),e(v,{}),e(R,{fullWidth:!0,onClick:()=>{n(!0)},children:"View Account Information"}),e(ut,{info:t,show:r,setShow:n}),e(v,{}),e(E,{text:"User documents"}),e(v,{}),e(ee,{id:t.id,url:t.doc.bankStatement.url,status:t.doc.bankStatement.status,infoKey:"bankStatement"}),e(ee,{id:t.id,url:t.doc.idCard.url,status:t.doc.idCard.status,infoKey:"idCard"}),e(ee,{id:t.id,url:t.doc.proofOfAddress.url,status:t.doc.proofOfAddress.status,infoKey:"proofOfAddress"})]})}function Z({header:t,items:a,hideOption:r=!1,noShadow:n=!1,onEdit:s,onDelete:l}){return e(N,{children:e("div",{className:`relative overflow-x-auto ${n?"shadow-sm":"shadow-md"} sm:rounded-lg`,children:u("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400",children:u("tr",{children:[t.split(",").map((c,d)=>e("th",{scope:"col",className:"px-6 py-3",children:c},d)),r==!1&&e("th",{scope:"col",className:"px-6 py-3",children:e("span",{children:"Options"})})]})}),e("tbody",{children:a.map((c,d)=>u("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[Object.values(c).map((i,f)=>typeof i=="string"?e("td",{className:"p-4",children:i},f):e("td",{className:"p-4",children:i},f)),r==!1&&e("td",{className:"p-4 ",children:u("div",{className:"flex space-x-2 justify-start items-center",children:[e("div",{onClick:()=>{s&&s(c)},className:"font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"}),e("div",{onClick:()=>{l&&l(c)},className:"font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline",children:"Delete"})]})})]},d))})]})})})}function ft({searching:t=!1,pendingList:a=[],setInfo:r,reviewedList:n=[]}){return u(Ee,{children:[u("div",{children:[e(E,{text:"Pending Review",isSubtitle:!0}),e(v,{}),e(Z,{noShadow:!0,header:"First Name,Last Name,Account Status,View",items:[...a.map(s=>({fname:s.firstName+"",lname:s.lastName,status:"Pending",btn:e(N,{children:e("button",{onClick:()=>{r(s)},children:"View"})})}))],hideOption:!0})]}),e(v,{}),e(v,{}),u("div",{children:[e(E,{text:t?"Search Results":"Reviewed",isSubtitle:!0}),e(v,{}),e(Z,{noShadow:!0,header:"First Name,Last Name,Account Status,View",items:[...n.map(s=>({fname:s.firstName+"",lname:s.lastName,status:"Reviewed",btn:e(N,{children:e("button",{onClick:()=>{r(s)},children:"View"})})}))],hideOption:!0}),e(v,{})]})]})}function ht(){const[t,a]=p.exports.useState({}),[r,n]=p.exports.useState([]),[s,l]=p.exports.useState([]),[c,d]=p.exports.useState(void 0),[i,f]=p.exports.useState(!1),[h,o]=p.exports.useState(!1),[A,k]=p.exports.useState("");p.exports.useEffect(()=>{(async()=>{const L=F(m.USER_DOC),D=P(L,y("bankStatement.status","==","pending")),_=P(L,y("idCard.status","==","pending")),U=P(L,y("proofOfAddress.status","==","pending")),J=P(L,y("bankStatement.status","==","approved"),y("idCard.status","==","approved"),y("proofOfAddress.status","==","approved"),K(me()),Q(O.PAGE_SIZE)),[Pe,Be,Te,_e]=await Promise.all([C(D),C(_),C(U),C(J)]);n(await gt(Pe,Be,Te));const[oe,ie]=await be(_e);ie?l(ie):I("No Next Page Available"),d(oe!==void 0?oe:void 0)})()},[i]);const T=async()=>{if(c==null){I("No Next Page Available");return}const S=F(m.USER_DOC),L=P(S,y("bankStatement.status","==","approved"),y("idCard.status","==","approved"),y("proofOfAddress.status","==","approved"),K(me()),Se(c),Q(O.PAGE_SIZE)),D=await C(L),[_,U]=await be(D);d(_),U?l(U):I("No Next Page Available"),d(_!==void 0?_:void 0)},le=async()=>{if(A.length==0)return;const S=F(m.USER),L=await C(P(S,y("firstName","==",A)));if(L.empty)I("No Data Available");else{o(!0);const D=L.docs[0],U=(await G(B(m.USER_DOC,D.id))).data(),J={id:D.id,firstName:D.data().firstName,lastName:D.data().lastName,dob:D.data().dob,address:D.data().address,gender:D.data().gender,mobileNumber:D.data().mobileNumber,doc:U};l([J])}};return e(z,{title:"Accounts",children:u("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u("div",{className:"col-span-1",children:[u("div",{className:"flex flex-col md:flex-row gap-2 justify-between items-center",children:[e(E,{text:"Overview"}),u("div",{className:"flex justify-end items-center gap-2",children:[e("input",{onKeyUp:S=>{S.preventDefault(),S.key==="Enter"&&le()},value:A,onChange:S=>{k(S.target.value)},type:"text",className:"px-5 py-1 border border-gray-400 rounded-full",placeholder:"Search Users"}),h&&e(Ze,{className:"text-3xl cursor-pointer",onClick:()=>{k(""),o(!1),f(S=>!S)}})]})]}),e(v,{}),e(v,{}),e(v,{}),e(ft,{searching:h,pendingList:r,reviewedList:s,setInfo:a}),h==!1&&c!==void 0&&e("div",{className:"my-4 flex justify-center",children:e(R,{onClick:()=>{T()},children:"View More"})})]}),e("div",{className:"col-span-1",children:e(pt,{info:t,setInfo:a})})]})})}const gt=async(t,a,r)=>{const n=[];return t.empty||t.docs.forEach(s=>{n.push({id:s.id,doc:s.data()})}),a.empty||a.docs.forEach(s=>{n.push({id:s.id,doc:s.data()})}),r.empty||r.docs.forEach(s=>{n.push({id:s.id,doc:s.data()})}),await Ae(n)},be=async t=>{var r;const a=[];if(t.empty)return[void 0,void 0];{t.docs.forEach(l=>{a.push({id:l.id,doc:l.data()})});let n;a.length===O.PAGE_SIZE&&(n=(r=a[a.length-1])==null?void 0:r.id);const s=await Ae(a,!1);return[n,s]}},Ae=async(t=[],a=!0)=>{const r=a?ct.uniqueArray(t,"id"):t;return await Promise.all(r.map(async s=>{var c,d,i,f,h,o;const l=await G(B(m.USER,s.id));return q(M({},s),{firstName:(c=l.data())==null?void 0:c.firstName,lastName:(d=l.data())==null?void 0:d.lastName,address:(i=l.data())==null?void 0:i.address,dob:(f=l.data())==null?void 0:f.dob,mobileNumber:(h=l.data())==null?void 0:h.mobileNumber,gender:(o=l.data())==null?void 0:o.gender})}))},b=A=>{var k=A,{title:t="Enter A Value",value:a,name:r=void 0,onChange:n,row:s=4,register:l,disable:c=!1,type:d="text",show_title:i=!0,min:f="",max:h=""}=k,o=pe(k,["title","value","name","onChange","row","register","disable","type","show_title","min","max"]);return e(N,{children:u("div",{className:"mb-3",children:[i===!0?e("label",{className:"block text-gray-700 text-sm font-bold mb-2 ml-1",children:t}):e(N,{}),d==="textarea"?e(N,{children:e("textarea",M(M({className:"bg-gray-50 appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500",name:r,placeholder:t,value:a,rows:s,disabled:c,onChange:n},o),l))}):e(N,{children:e("input",M(M({className:"bg-gray-50 appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500",name:r,type:d,placeholder:t,value:a,disabled:c,min:f,max:h,onChange:n,required:!0},l),o))})]})})},mt=()=>{const{user:t,setUser:a}=p.exports.useContext(j),{register:r,handleSubmit:n}=re({defaultValues:{email:"",password:""}}),s=l=>{if(l.email!=="support@cashful.me"||l.password!=="ADMIN*01"){I("Wrong Credentials");return}localStorage.setItem(O.AUTH_KEY,JSON.stringify(l)),a(l)};return t!=null&&t.email?(console.log("navigate to home page....."),e(ke,{to:w.HOME,replace:!0})):e(N,{children:u("div",{className:"container m-auto w-11/12 md:w-1/4 h-screen grid grid-cols-1 place-content-center",children:[e("div",{className:"w-full flex justify-center",children:e("img",{src:we,className:"w-12 h-12",alt:""})}),u("form",{children:[e(b,{name:"email",type:"email",title:"Email",register:r("email")}),e(b,{name:"password",type:"password",title:"Password",register:r("password")}),e(R,{fullWidth:!0,disabled:!1,onClick:()=>{n(s)()},children:"Sign In"})]})]})})};function ye({title:t,register:a}){return u("label",{htmlFor:t.replaceAll(" ","-").toLowerCase(),className:"relative inline-flex items-center cursor-pointer",children:[e("input",M({type:"checkbox",id:t.replaceAll(" ","-").toLowerCase(),className:"sr-only peer"},a)),e("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),e("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:t})]})}function vt(){let{id:t}=De();const{register:a,handleSubmit:r,setValue:n}=re(),[s,l]=p.exports.useState({});p.exports.useEffect(()=>{(async()=>{if(t){const i=B(m.BACK_INFO,t),f=await G(i);f.exists()&&l(f.data())}})()},[t]),p.exports.useEffect(()=>{s&&(n("creditScore",s.creditScore||""),n("creditScoreValue",s.creditScoreValue||""),n("isSmallBusinessOwner",s.isSmallBusinessOwner||!1),n("businessOffering",s.businessOffering||""),n("lengthOfOperation",s.lengthOfOperation||""),n("sourceOfFinancing",s.sourceOfFinancing||""),n("investmentToDate",s.investmentToDate||""),n("monthlyIncome",s.monthlyIncome||""),n("monthlyExpense",s.monthlyExpense||""),n("highestLevelOfEducation",s.highestLevelOfEducation||""),n("savingMonthly",s.savingMonthly||""),n("isPartOfStockvel",s.isPartOfStockvel||!1),n("stockvelContribution",s.stockvelContribution||""))},[s]);const c=d=>{if(t){const i=B(m.BACK_INFO,t);W(i,d),I("Data Updated.")}else I("Go back and try again.")};return u(z,{children:[e(E,{text:"Bank Detail"}),e(v,{}),u("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[u("div",{className:"col-span-1",children:[e(b,{title:"Credit Score",register:a("creditScore")}),e(b,{title:"Credit Score Value",register:a("creditScoreValue")}),e(ye,{title:"Is Small Business Owner",register:a("isSmallBusinessOwner")}),e(b,{title:"Business Offering",register:a("businessOffering")}),e(b,{title:"Length of Operations",register:a("lengthOfOperation")}),e(b,{title:"Initial Business Financing",register:a("sourceOfFinancing")}),e(b,{title:"Business Investment To-Date",register:a("investmentToDate")})]}),u("div",{className:"col-span-1",children:[e(b,{title:"Business Income Per Month",register:a("monthlyIncome")}),e(b,{title:"Business Expenses Per Month",register:a("monthlyExpense")}),e(b,{title:"Highest Level of Education",register:a("highestLevelOfEducation")}),e(b,{title:"Monthly Savings",register:a("savingMonthly")}),e(ye,{title:"Stokvel Participation",register:a("isPartOfStockvel")}),e(b,{title:"Stokvel Contribution",register:a("stockvelContribution")})]})]}),e(v,{}),e(R,{onClick:()=>{r(c)()},children:"Submit"})]})}function bt(){let{id:t}=De();const{register:a,handleSubmit:r,setValue:n}=re(),[s,l]=p.exports.useState({});p.exports.useEffect(()=>{(async()=>{if(t){const i=B(m.PAYMENT_INFO,t),f=await G(i);f.exists()&&l(f.data())}})()},[t]),p.exports.useEffect(()=>{s&&(n("bankDetail",s.bankDetail),n("mtnDetail",s.mtnDetail))},[s]);const c=d=>{if(t){const i=B(m.PAYMENT_INFO,t);W(i,d),I("Data Updated.")}else I("Go back and try again.")};return u(z,{children:[u("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[u("div",{className:"col-span-1",children:[e(E,{text:"Bank Detail"}),e(v,{}),e(b,{title:"Holder Name",register:a("bankDetail.hodlerName"),disable:s.bankDetail==null}),e(b,{title:"Account Number",register:a("bankDetail.accountNumber"),disable:s.bankDetail==null}),e(b,{title:"Account Type",register:a("bankDetail.accountType"),disable:s.bankDetail==null}),e(b,{title:"Bank Name",register:a("bankDetail.bankName"),disable:s.bankDetail==null}),e(b,{title:"Bank Code",register:a("bankDetail.bankCode"),disable:s.bankDetail==null})]}),u("div",{className:"col-span-1",children:[e(E,{text:"MTN Detail"}),e(v,{}),e(b,{title:"Full Name",register:a("mtnDetail.fullName"),disable:s.mtnDetail==null}),e(b,{title:"Account Number",register:a("mtnDetail.accountNumber"),disable:s.mtnDetail==null})]})]}),e(v,{}),e(R,{onClick:()=>{r(c)()},children:"Submit"})]})}var g=(t=>(t.pending="pending",t.approved="approved",t.rejected="rejected",t.paid="paid",t.defaulted="defaulted",t))(g||{});function Ce({page:t,setPage:a,current_length:r,next:n,prev:s}){return e(N,{children:e("div",{children:u("div",{className:"flex justify-center mb-3 gap-4",children:[e(R,{onClick:s,disabled:!(t>1),children:"Prev"}),e(R,{disabled:!0,onClick:()=>{},children:t}),e(R,{onClick:n,disabled:r<O.PAGE_SIZE,children:"Next"})]})})})}const Ie=async(t,a,...r)=>{const n=F(m.LOAN_REQUEST),s=P(n,...r,K("loanDate","desc"),Q(O.PAGE_SIZE)),l=await C(s);l.empty?I("No More Data Available!"):(t(1),a(l))},yt=async t=>{const a=F(m.USER),r=await C(P(a,y("firstName","==",t)));return r.empty?[]:r.docs.map(n=>n.id)},Nt=async(t,...a)=>{const r=F(m.LOAN_REQUEST),n=P(r,...a),s=await C(n);t(s)},Re=async(t,a,r,...n)=>{const s=F(m.LOAN_REQUEST),l=P(s,...n,K("loanDate","desc"),Se(r[r.length-1].loanDate),Q(O.PAGE_SIZE)),c=await C(l);c.empty?I("No More Data Available!"):(t(d=>d+1),a(c))},Le=async(t,a,r,...n)=>{const s=F(m.LOAN_REQUEST),l=P(s,...n,K("loanDate","desc"),We(r[0].loanDate),ze(O.PAGE_SIZE)),c=await C(l);c.empty?I("No More Data Available!"):(t(d=>d-1),a(c))},ne=async(t,a,r)=>{r([]),t.docs.forEach(async n=>{var f,h;const s=B(m.USER,n.data().userId),l=await G(s),d=a.filter(o=>{const A=parseInt(n.data().loanAmount);return o.min<=A&&A<=o.max})[0],i=q(M({},n.data()),{id:n.id,firstName:(f=l.data())==null?void 0:f.firstName,lastName:(h=l.data())==null?void 0:h.lastName,level:(d==null?void 0:d.name)+"",interest:(d==null?void 0:d.interest)*100+"%"});r(o=>[...o,i])})},se=async(t,a)=>{if(confirm("Are you sure you want to change the status to "+a+"?")===!0){const n=B(m.LOAN_REQUEST,t.id);await W(n,{loanStatus:a.toString()}),window.location.reload()}};function xt(){const[t,a]=p.exports.useState([]),{levels:r}=p.exports.useContext(j),[n,s]=p.exports.useState(0);p.exports.useEffect(()=>{r.length>0&&Ie(s,d,y("loanStatus","==",g.pending))},[r.length]);const l=async()=>{Re(s,d,t,y("loanStatus","==",g.pending))},c=async()=>{Le(s,d,t,y("loanStatus","==",g.pending))},d=async i=>{ne(i,r,a)};return u("div",{className:"my-4",children:[e(E,{text:"Requests",isSubtitle:!0}),e(v,{}),e(Z,{header:"Date,First Name,Last Name,Level,Term,Amount,Interest,Total,Options",items:[...t.map((i,f)=>({date:i==null?void 0:i.loanDate.split(" ")[0],fname:i==null?void 0:i.firstName,lname:i==null?void 0:i.lastName,level:i==null?void 0:i.level,term:i.paymentTime+"days",amount:O.CURRENCY+i.loanAmount,interest:i.interest,total:O.CURRENCY+i.totalRepayable,option:u("div",{className:"flex gap-2",children:[e(R,{onClick:()=>{se(i,g.approved)},children:"Approve"}),e(R,{seconday:!0,onClick:()=>{se(i,g.rejected)},children:"Reject"})]})}))],hideOption:!0}),e(v,{}),e(Ce,{page:n,setPage:s,current_length:t.length,next:l,prev:c})]})}function St({label:t,hideLabel:a=!1,labelAsFirst:r=!1,defaultValue:n=void 0,name:s,full_width:l=!0,onChange:c,options:d}){return u("div",{className:l===!0?"w-full ":"w-full md:w-1/3 ",children:[a?e(N,{}):e(N,{children:e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs  mb-2",htmlFor:s,children:t})}),u("div",{className:"relative",children:[u("select",{className:"block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-primary",id:s,name:s,defaultValue:n||"none",onChange:i=>{i.target.value!=="none"&&c(i.target.value)},children:[e("option",{value:"none",disabled:!1,children:r?t:"Choose Option"}),d.map((i,f)=>e("option",{value:i.value,children:i.title},f))]}),e("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:e("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})}function te({upComing:t=!0,searching:a=!1,initList:r=[]}){const[n,s]=p.exports.useState(1),[l,c]=p.exports.useState([]),{levels:d}=p.exports.useContext(j);p.exports.useEffect(()=>{d.length>0&&a==!0&&c([...r])},[r]),p.exports.useEffect(()=>{d.length>0&&a==!1&&Ie(s,i,y("loanStatus","in",t?[g.approved]:[g.paid,g.defaulted,g.approved,g.rejected]))},[d]);const i=async o=>{ne(o,d,c)},f=()=>{Re(s,i,l,y("loanStatus","in",t?[g.approved]:[g.paid,g.defaulted,g.approved,g.rejected]))},h=()=>{Le(s,i,l,y("loanStatus","in",t?[g.approved]:[g.paid,g.defaulted,g.approved,g.rejected]))};return u(N,{children:[!a&&e("div",{className:"my-4",children:e(E,{text:t?"Upcoming":"History",isSubtitle:!0})}),e(v,{}),e(Z,{header:"Status,Due Date,Loan Date,First Name,Last Name,Level,Term,Amount,Interest,Total,Options",items:[...l.map((o,A)=>{let k="";return t?k=(o==null?void 0:o.loanStatus)+` & ${Je(ve(ae(o==null?void 0:o.loanDate),parseInt(o.paymentTime)))?"OverDue":"Due"}`:k=o==null?void 0:o.loanStatus,{status:k,duedate:ve(ae(o==null?void 0:o.loanDate),parseInt(o.paymentTime)).toISOString().split("T")[0],date:o==null?void 0:o.loanDate.split(" ")[0],fname:o==null?void 0:o.firstName,lname:o==null?void 0:o.lastName,level:o==null?void 0:o.level,term:o.paymentTime+"days",amount:O.CURRENCY+o.loanAmount,interest:o.interest,total:O.CURRENCY+o.totalRepayable,option:e(St,{label:"Update",labelAsFirst:!0,name:"",defaultValue:(o==null?void 0:o.loanStatus)==g.paid.toString()||g.defaulted.toString()?o==null?void 0:o.loanStatus:void 0,options:[{title:"Paid",value:g.paid},{title:"Defaulted",value:g.defaulted}],hideLabel:!0,full_width:!0,onChange:T=>{se(o,T)}})}})],hideOption:!0}),e(v,{}),!a&&e(Ce,{page:n,setPage:s,current_length:l.length,next:f,prev:h})]})}const kt=()=>{const{setLevels:t,levels:a}=p.exports.useContext(j),[r,n]=p.exports.useState(!1),[s,l]=p.exports.useState(""),[c,d]=p.exports.useState([]);p.exports.useEffect(()=>{(async()=>{const o=F(m.LEVEL),k=(await C(o)).docs.map(T=>q(M({},T.data()),{id:T.id}));t(k)})()},[]);const i=async()=>{if(s.length==0)return;n(!0);const h=await yt(s);Nt(f,y("userId","in",h),y("loanStatus","!=",g.pending))},f=async h=>{ne(h,a,d)};return u(z,{title:"Dashaboard",children:[u("div",{className:"flex flex-row  justify-between items-center gap-2",children:[e(E,{text:"Overview"}),e("input",{onKeyUp:h=>{h.preventDefault(),h.key==="Enter"&&i()},value:s,onChange:h=>l(h.target.value.trim()),type:"text",className:"px-3 py-2 border border-gray-400 rounded-full",placeholder:"Search Users"})]}),e(xt,{}),e(te,{upComing:!0}),e(te,{upComing:!1}),e(xe,{title:`searching for ${s}`,show:r,setShow:n,footer:e(N,{children:e($,{onClick:()=>n(!1),title:"Close"})}),children:e(te,{searching:!0,upComing:!1,initList:c})})]})};function Y(t){const{user:a}=p.exports.useContext(j);return a==null?e(ke,{to:w.LOGIN}):e(N,{children:t.children})}function Dt(){return e(Xe,{children:u(et,{children:[e(H,{path:w.LOGIN,element:e(mt,{})}),e(H,{path:w.HOME,element:e(Y,{children:e(kt,{})})}),e(H,{path:w.ACCOUNTS,element:e(Y,{children:e(ht,{})})}),e(H,{path:`${w.BACKGROUND}/:id`,element:e(Y,{children:e(vt,{})})}),e(H,{path:`${w.PAY_INFO}/:id`,element:e(Y,{children:e(bt,{})})}),e(H,{path:"*",element:e(lt,{})})]})})}function Ot(){return e("div",{style:{background:"#000",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e("div",{children:e("h1",{style:{color:"white"},children:"\u{1F680} Loading...."})})})}function wt(t){const{user:a,setUser:r}=p.exports.useContext(j);return p.exports.useEffect(()=>{const n=localStorage.getItem(O.AUTH_KEY);r(n?JSON.parse(n):null)},[]),a===void 0?e(Ot,{}):e(N,{children:t.children})}function Et(){return u("div",{children:[e(nt,{children:e(wt,{children:e(Dt,{})})}),e(tt,{position:"top-right",autoClose:1500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}at.render(e(st.StrictMode,{children:e(Et,{})}),document.getElementById("root"));