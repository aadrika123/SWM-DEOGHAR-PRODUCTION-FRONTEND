import{a as y,u as O,j as e,B as V,C as W,e as v,_ as u,i as Q,h as X}from"./index-DC7zYq7C.js";import{r as b,d as Z,h as ee}from"./router-CTqkcgir.js";import{P as se}from"./index-CwIfpbj7.js";import{C as j,b as I}from"./card-B4iR8Qem.js";import{I as z}from"./Image-Dx5rng_b.js";import{S as q}from"./separator-CZh05uh2.js";import{S as f}from"./SkeletonLoader-D1c6ss6M.js";import{u as G,o as U,F as H,c as _,a as h,S as te}from"./SelectField-DOpLesQ5.js";import{R as B}from"./RHFTextField-CGc57oHr.js";import{R as Y}from"./RHFTextArea-EKC-Xap-.js";import{B as J}from"./ButtonLoading-7gTo-ajp.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";const ae=_().shape({reminderDate:h().required().label("Reminder Date"),reminderTime:h().required().label("Reminder Time"),remarks:h().required().label("Remarks")});function ie({open:d,setOpen:o,title:g,aptData:m}){const{user:r}=y(),i=O({}),a=()=>o(!d),s=G({resolver:U(ae),defaultValues:{reminderDate:"",reminderTime:"",remarks:""}}),x=async n=>{W("Are you sure?","Please confirm",async()=>{try{const l=await i.mutateAsync({api:v.postReminder,data:{...n,userId:r==null?void 0:r.id,consumerId:m}});l.data.status?(u.success(l.data.msg),o(!1)):u.error(l.data.msg)}catch(l){u.error(l.msg)}})};return e.jsxs("div",{children:[d&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${d?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:g??"Add Reminder"}),e.jsxs("button",{style:{background:"none"},onClick:a,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(H,{methods:s,onSubmit:s.handleSubmit(x),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(B,{name:"reminderDate",label:"Reminder Date",type:"date",isRequired:!0,min:new Date().toISOString().split("T")[0]})}),e.jsx("div",{children:e.jsx(B,{name:"reminderTime",label:"Reminder Time",type:"time",isRequired:!0})}),e.jsx("div",{className:"col-span-2",children:e.jsx(Y,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(V,{size:"sm",type:"button",onClick:a,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(J,{isLoading:i.isPending,disabled:i.isPending,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]})})]})})})]})}const ne=[{value:"Door Closed",label:"Door Closed"},{value:"No Response from CitizenCitizen Will Pay Next Month",label:"No Response from Citizen"},{value:"Citizen Will Pay Next Day",label:"Citizen Will Pay Next Day"},{value:"Citizen Will Pay Next Month",label:"Citizen Will Pay Next Month"},{value:"Refuses to Pay",label:"Refuses to Pay"},{value:"other",label:"Other"}],de=_().shape({denyList:h().required("Deny List is required"),latitude:h(),longitude:h(),remarks:h().required("Remarks is required")});function re({open:d,setOpen:o,title:g,aptData:m}){const r=O({}),{user:i}=y(),{coords:a,isGeolocationEnabled:s}=Q(),x=()=>o(!d),n=G({resolver:U(de),defaultValues:{denyList:"",latitude:"",longitude:"",remarks:""}}),l=async p=>{o(!1),W("Are you sure?","Please confirm",async()=>{try{const c=await r.mutateAsync({api:v.postPaymentDeny,data:{...p,userId:i==null?void 0:i.id,consumerId:m}});c.data.status?(u.success(c.data.msg),o(!1)):u.error(c.data.msg)}catch(c){u.error(c.msg)}})};return b.useEffect(()=>{m&&(n.setValue("latitude",String(a==null?void 0:a.latitude)),n.setValue("longitude",String(a==null?void 0:a.longitude))),n.watch("denyList")!=="other"&&n.setValue("remarks",n.watch("denyList")),n.watch("denyList")==="other"&&n.setValue("remarks","")},[n.watch("denyList")]),e.jsxs("div",{children:[d&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${d?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:g??"Add Deny"}),e.jsxs("button",{style:{background:"none"},onClick:x,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:s?e.jsxs(H,{methods:n,onSubmit:n.handleSubmit(l),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(te,{name:"denyList",label:"Deny List",data:ne,isRequired:!0})}),n.watch("denyList")==="other"&&e.jsx("div",{className:"col-span-2",children:e.jsx(Y,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(V,{size:"sm",type:"button",onClick:x,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(J,{isLoading:r.isPending,disabled:r.isPending,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]}):e.jsx("div",{className:"text-center py-4",children:e.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Please enable location to continue"})})})]})})})]})}const le=[{title:"View & Pay",icon:"/icons/grid.svg",link:"/deoghar-app/consumer-payment",bg:"bg-gradient-to-tl from-[#EEF2FF] to-[#9CC6F7]",accessMenu:["4","5"]},{title:"Transaction History",icon:"/icons/history.svg",link:"/deoghar-app/tran-history",bg:"bg-gradient-to-tl from-[#FFEFE4] to-[#FFBC96]",accessMenu:["4","5"]},{title:"Geo Map",icon:"/icons/location.svg",link:"/deoghar-app/con-geo-map",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",accessMenu:["4","5"]},{title:"Reminder",icon:"/icons/bells.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FEE8FF] to-[#E4AFFF]",accessMenu:["4","5"]},{title:"Deny",icon:"/icons/deniel2.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4","5"]},{title:"Geo Tagging",icon:"/icons/location.svg",link:"/deoghar-app/con-geo-tagging",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",accessMenu:["4","5"]},{title:"Update Consumer",icon:"/icons/update.svg",link:"/deoghar-app/update-consumer",bg:"bg-gradient-to-tl from-[#EAD9FF] to-[#C291FF]",accessMenu:["4"]},{title:"Deactivate Consumer",icon:"/icons/deactivate.svg",link:"/deoghar-app/con-deactivated",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4"]},{title:"Payment Adjustment",icon:"/icons/cur.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/demand-con-adjust",accessMenu:["4"]},{title:"Print Demand",icon:"/icons/denial.svg",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",link:"/deoghar-app/print-demand-con",accessMenu:["4"]},{title:"Add Renter",icon:"/icons/add-consumer.svg",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",link:"/deoghar-app/add-renter",accessMenu:["4"]}];function Ne(){var x,n,l,p,c,N,k,C,F,w,A,$,R,M,L,P,E,S,T,D;const{user:d}=y(),[o,g]=b.useState(!1),[m,r]=b.useState(!1),i=Z(),{id:a}=ee(),s=X({api:`${v.getConsumerDetailsById}/${a}`,options:{enabled:!!a}});return s!=null&&s.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(j,{children:e.jsxs(I,{children:[e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{})]})})}):e.jsxs(se,{title:"Consumer Action",children:[o&&e.jsx(ie,{open:o,setOpen:g,aptData:(x=s==null?void 0:s.data)==null?void 0:x.data[0].id}),m&&e.jsx(re,{open:m,setOpen:r,aptData:(n=s==null?void 0:s.data)==null?void 0:n.data[0].id}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(z,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Consumer Action"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Consumer action details here."})]})]}),e.jsx(q,{}),e.jsx(j,{children:e.jsx(I,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(p=(l=s==null?void 0:s.data)==null?void 0:l.data[0])==null?void 0:p.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(c=s==null?void 0:s.data)==null?void 0:c.data[0])==null?void 0:N.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Mobile:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(C=(k=s==null?void 0:s.data)==null?void 0:k.data[0])==null?void 0:C.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(w=(F=s==null?void 0:s.data)==null?void 0:F.data[0])==null?void 0:w.monthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:($=(A=s==null?void 0:s.data)==null?void 0:A.data[0])==null?void 0:$.totalDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(M=(R=s==null?void 0:s.data)==null?void 0:R.data[0])==null?void 0:M.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(L=s==null?void 0:s.data)==null?void 0:L.data[0])==null?void 0:P.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(E=s==null?void 0:s.data)==null?void 0:E.data[0])==null?void 0:S.cansumerType})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(D=(T=s==null?void 0:s.data)==null?void 0:T.data[0])==null?void 0:D.Address})})]})})}),e.jsx(q,{}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:le.map((t,K)=>t.accessMenu.includes(`${d==null?void 0:d.userTypeId}`)&&e.jsxs("div",{className:"flex items-center flex-col cursor-pointer mt-2",children:[e.jsx(j,{onClick:()=>{t.title==="View & Pay"&&i(`${t.link}/${a}`),t.title=="Update Consumer"&&i(`${t.link}/${a}`),t.title=="All Flats List"&&i(`${t.link}/${a}`),t.title=="Transaction History"&&i(`${t.link}?id=${a}&tranType=consumerId`),t.title=="Update Apartment"&&i(`${t.link}/${a}`),t.title=="Payment Adjustment"&&i(`${t.link}/${a}`),t.title=="Deactivate Apartment"&&i(`${t.link}/${a}`),t.title=="Geo Tagging"&&i(`${t.link}/${a}`),t.title=="Geo Map"&&i(`${t.link}/${a}`),t.title=="Reminder"&&g(!0),t.title=="Deny"&&r(!0),t.title=="Adjust Demand"&&i(`${t.link}/${a}`),t.title=="Add Renter"&&i(`${t.link}/${a}`),t.title=="Deactivate Consumer"&&i(`${t.link}/${a}`),t.title=="Print Demand"&&i(`${t.link}/${a}`)},className:"w-[52px] h-[52px] flex items-center justify-center bg-[#12743B] rounded-2xl",children:e.jsx(z,{src:t.icon,alt:"icon"})}),e.jsx("p",{className:"text-xs font-bold text-gray-800 mt-2 text-center",children:t.title})]},K+1))})]})]})}export{Ne as default};