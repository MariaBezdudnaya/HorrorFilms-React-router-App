"use strict";(self.webpackChunkreact_router_app=self.webpackChunkreact_router_app||[]).push([[590],{590:(e,s,a)=>{a.r(s),a.d(s,{FilmsPage:()=>f,filmsLoader:()=>o});var l=a(483),c=a(891),i=a(530),r=a(723);const t=e=>{let{imageUrl:s,title:a,year:l,id:t,description:n}=e;return(0,r.jsxs)("div",{className:"card_item",children:[(0,r.jsxs)("div",{className:"card-item",children:[(0,r.jsx)("div",{className:"card_image",children:(0,r.jsx)("img",{className:"card-image",src:s,alt:"film"})}),(0,r.jsxs)("div",{className:"card-info",children:[(0,r.jsxs)("div",{className:"card-title",children:[" ","Film"]}),(0,r.jsx)(c.N_,{to:"".concat(i.b.films,"/").concat(t),className:"film-title_link",children:a}),(0,r.jsx)("div",{className:"film-year",children:(0,r.jsx)(c.N_,{to:"".concat(i.b.films,"/").concat(t),className:"film-year_link",children:l})})]}),(0,r.jsx)("p",{className:"card-description",children:n})]}),(0,r.jsx)("hr",{style:{opacity:"15%"}})]})};var n=a(978),d=a(670),m=a(83),h=a(376);const o=e=>{let{request:s}=e;const a=new URL(s.url).searchParams.get("search"),l=(0,n.J)("/films",{search:a});return(0,m.v6)({films:l})},f=()=>{const{films:e}=(0,h.LG)(),[s,a]=(0,c.ok)(),i=s.get("search"),{state:n}=(0,h.cq)(),[m,o]=(0,l.useState)(i||"");return(0,l.useEffect)((()=>{a((e=>(m?e.set("search",m):e.delete("search"),e)))}),[m]),(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(d.a,{}),children:(0,r.jsx)(h.jD,{resolve:e,errorElement:(0,r.jsx)("div",{children:"Oops, error while loading films"}),children:e=>(0,r.jsxs)("div",{className:"films_content",children:[(0,r.jsx)("div",{className:"films_foundInput",children:(0,r.jsx)("input",{type:"text",className:"search-input",placeholder:"Search films",value:m,onChange:e=>o(e.target.value)})}),(0,r.jsxs)("div",{className:"relative",children:["loading"===n&&(0,r.jsx)(d.a,{}),e&&e.length>0?e.map((e=>(0,r.jsx)(t,{...e},e.id))):(0,r.jsx)("div",{className:"films_foundError",children:"Film is not found..."})]})]})})})}}}]);
//# sourceMappingURL=590.ad81c18c.chunk.js.map