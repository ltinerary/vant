import{c as V,f as g}from"./use-translate.3147781c.js";import{n as C,u as t,w as h}from"./with-install.6d6d29d8.js";import{L as w}from"./index.25dd8ae6.js";import{u as k}from"./index.1f370f94.js";import{z as b,e as l}from"./vue-libs.4d090e76.js";const[S,n]=V("switch");var j=b({name:S,props:{size:C,loading:Boolean,disabled:Boolean,modelValue:t,activeColor:String,inactiveColor:String,activeValue:{type:t,default:!0},inactiveValue:{type:t,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:c}){const o=()=>e.modelValue===e.activeValue,d=()=>{if(!e.disabled&&!e.loading){const a=o()?e.inactiveValue:e.activeValue;c("update:modelValue",a),c("change",a)}},s=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return l(w,{class:n("loading"),color:a},null)}};return k(()=>e.modelValue),()=>{const{size:a,loading:r,disabled:u,activeColor:m,inactiveColor:f}=e,i=o(),v={fontSize:g(a),backgroundColor:i?m:f};return l("div",{role:"switch",class:n({on:i,loading:r,disabled:u}),style:v,"aria-checked":i,onClick:d},[l("div",{class:n("node")},[s()])])}}});const N=h(j);export{N as S};
