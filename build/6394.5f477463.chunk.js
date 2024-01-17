"use strict";(self.webpackChunkdatabase_uts=self.webpackChunkdatabase_uts||[]).push([[6394],{84409:(R,o,e)=>{e.d(o,{p:()=>d});var t=e(27279),u=e(87006),_=e(40464);const d=(P={})=>{const{get:E}=(0,u.kY)(),{data:n,isLoading:a}=(0,_.useQuery)(["ee","providers"],async()=>{const{data:m}=await E("/admin/providers");return m},P);return{providers:t.useMemo(()=>n??[],[n]),isLoading:a}}},76394:(R,o,e)=>{e.r(o),e.d(o,{LoginEE:()=>l});var t=e(27279),u=e(84366),_=e(93415),d=e(10701),P=e(32370),E=e(70627),n=e.n(E),a=e(61020),M=e(72450),m=e(13320),O=e(31640),D=e(84409),v=e(80090);const i=(0,M.ZP)(u.i)`
  flex: 1;
`,l=c=>{const{formatMessage:s}=(0,a.Z)(),{isLoading:g,providers:p}=(0,D.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&p.length===0?t.createElement(m.Md,null,t.createElement(O.Z,{...c})):t.createElement(m.Md,null,t.createElement(O.Z,{...c},t.createElement(_.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(i,null),t.createElement(_.x,{paddingLeft:3,paddingRight:3},t.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(v.Z,{providers:p,displayAllProviders:!1})))))};l.defaultProps={onSubmit:c=>c.preventDefault(),requestError:null},l.propTypes={formErrors:n().object.isRequired,modifiedData:n().object.isRequired,onChange:n().func.isRequired,onSubmit:n().func,requestError:n().object}},80090:(R,o,e)=>{e.d(o,{Z:()=>c});var t=e(27279),u=e(10701),_=e(2981),d=e(32370),P=e(23298),E=e(74577),n=e(70627),a=e.n(n),M=e(61020),m=e(47533),O=e(72450);const D=O.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,v=(0,O.ZP)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,i=({provider:s})=>t.createElement(_.u,{label:s.displayName},t.createElement(D,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,s.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const l=({providers:s,displayAllProviders:g})=>{const{formatMessage:p}=(0,M.Z)();return g?t.createElement(P.r,{gap:4},s.map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):s.length>2&&!g?t.createElement(P.r,{gap:4},s.slice(0,2).map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(E.P,{col:4},t.createElement(_.u,{label:p({id:"global.see-more"})},t.createElement(D,{as:m.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},s.map(r=>t.createElement(i,{key:r.uid,provider:r})))};l.defaultProps={displayAllProviders:!0},l.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const c=l}}]);
