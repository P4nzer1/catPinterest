import{c as p,j as s,u as l,a as d,f as h,b as c,s as f,r as u,S as x}from"./index-D7C1Ss_H.js";import{T as g,u as j,C as v}from"./useFavorites-B13scy-Z.js";const _="_link_13yht_17",k={link:_},C=e=>{const{children:a,className:r,...t}=e,i=p(k.link,r);return s.jsx(s.Fragment,{children:s.jsx("a",{className:i,...t,children:a})})},F="_container_1gmvl_1",N="_link_1gmvl_6",o={container:F,link:N},y=()=>{const e=l(),{remainingCats:a}=d(t=>t.cats),r=t=>{t.preventDefault(),a.length>0?(e(h(a)),e(c()),e(f([]))):e(c())};return s.jsx("div",{className:o.container,children:s.jsx(g,{color:"primary",children:s.jsx(C,{href:"#",onClick:r,className:o.link,children:"...загружаем еще котиков..."})})})},S="_wrapper_1fbaa_1",w={wrapper:S},L=()=>{const e=l(),{items:a,loading:r,error:t}=d(n=>n.cats),{isFavorite:i,handleToggleFavorite:m}=j();return u.useEffect(()=>{a.length||e(c())},[e,a.length]),r?s.jsx(x,{}):t?s.jsxs("div",{children:["Ошибка:",t]}):s.jsxs("div",{className:w.wrapper,children:[a.map(n=>s.jsx(v,{cat:n,isFavorite:i(n),onToggleFavorite:()=>m(n)},n.id)),s.jsx(y,{})]})};export{L as default};
