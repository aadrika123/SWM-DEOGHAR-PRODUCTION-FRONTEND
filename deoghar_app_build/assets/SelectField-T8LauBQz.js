import{j as e,t as h}from"./index-D9iGf2Cx.js";import{d as b,C as g}from"./switch-Bq3JCmpa.js";const N=({children:j,name:r,label:a,selectedText:t,className:c,data:l,initialValue:v,initialValueText:C,isRequired:d,...u})=>{const{control:x,setValue:m}=b();return e.jsx(g,{name:r,control:x,render:({field:{ref:f,...o},fieldState:{error:s}})=>e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-gray-700 dark:text-gray-200 ",children:[a," ",d&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{...o,onChange:n=>{var i;o.onChange(n),t&&m(t,(i=l==null?void 0:l.find(p=>p.value==n.target.value))==null?void 0:i.label)},ref:f,className:h("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s?"border-red-400":null,c),...u,children:[e.jsx("option",{value:"",children:"Select"}),l==null?void 0:l.map((n,i)=>e.jsx("option",{value:n.value,children:n.label},i+1))]}),s&&e.jsx("span",{className:"text-red-400 text-xs",children:s==null?void 0:s.message})]})})};export{N as R};