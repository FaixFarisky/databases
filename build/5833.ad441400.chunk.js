"use strict";(self.webpackChunkdatabase_uts=self.webpackChunkdatabase_uts||[]).push([[5833],{75021:(c,n,t)=>{t.d(n,{q:()=>r});var s=t(27279),E=t(87006),o=t(40464);function r({enabled:d}={enabled:!0}){const{get:l}=(0,E.kY)(),{data:i,isError:M,isLoading:D}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await l("/admin/license-limit-information");return a},{enabled:d}),e=s.useMemo(()=>i??{},[i]),O=s.useCallback(a=>(e?.features??[]).find(_=>_.name===a)?.options??{},[e?.features]);return{license:e,getFeature:O,isError:M,isLoading:D}}},85833:(c,n,t)=>{t.r(n),t.d(n,{CreateActionEE:()=>_});var s=t(27279),E=t(10701),o=t(2981),r=t(50703),d=t(48102),l=t(15206),i=t(16543),M=t(69439),D=t.n(M),e=t(70627),O=t.n(e),a=t(61020),P=t(75021);const _=({onClick:C})=>{const{formatMessage:u}=(0,a.Z)(),{license:{permittedSeats:L,shouldStopCreate:m},isError:A,isLoading:f}=(0,P.q)();return A||f?null:s.createElement(E.k,{gap:2},!D()(L)&&m&&s.createElement(o.u,{description:u({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},s.createElement(r.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:l.Z})),s.createElement(d.z,{"data-testid":"create-user-button",onClick:C,startIcon:s.createElement(i.Z,null),size:"S",disabled:m},u({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};_.propTypes={onClick:O().func.isRequired}}}]);