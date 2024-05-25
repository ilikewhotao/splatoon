import{i as wo,f as io,u as ko,b as lo,c as ze,B as _o,V as So,g as ao,N as Ro,d as zo,e as so,h as Bo,j as Po,k as $o,l as Te,m as Le,I as Ve,S as Oo,W as To,E as Fo,n as co,o as Eo,p as Io,q as jo,F as Mo,r as Be,L as Ao,s as No,t as Do,z as Lo,a as He,_ as Vo,v as Ho}from"./axios-DKQf2278.js";import{v as uo,x as xe,r as R,y as Pe,z as fo,A as Fe,B as _e,C as $e,D as Uo,E as Oe,k as P,c as $,e as K,u as ve,G as fe,H as Ko,f as V,h as j,i as he,j as l,T as Ee,I as we,J as Wo,K as vo,L as N,M as ho,d as O,b as p,N as Ie,O as mo,P as Xo,Q as je,R as Ce,S as go,U as H,V as Q,W as po,X as Yo,Y as Z,Z as qo,_ as Ue,$ as bo,a0 as ke,a1 as ue,a2 as Go,a3 as Jo,a4 as Qo,a5 as Ke,a6 as Zo,a7 as We,a8 as et,a9 as ot,aa as tt,ab as nt,l as ge,m as I,w as T,F as pe,o as X,p as L,s as Y,ac as Se,ad as Re,n as Xe}from"./index-BOCKwTRC.js";import{_ as rt}from"./p-BmF_5fzJ.js";import{a as it}from"./headers-CfTKpdlZ.js";const ce=R(null);function Ye(e){if(e.clientX>0||e.clientY>0)ce.value={x:e.clientX,y:e.clientY};else{const{target:o}=e;if(o instanceof Element){const{left:t,top:n,width:a,height:u}=o.getBoundingClientRect();t>0||n>0?ce.value={x:t+a/2,y:n+u/2}:ce.value={x:0,y:0}}else ce.value=null}}let be=0,qe=!0;function lt(){if(!uo)return xe(R(null));be===0&&Pe("click",document,Ye,!0);const e=()=>{be+=1};return qe&&(qe=fo())?(Fe(e),_e(()=>{be-=1,be===0&&$e("click",document,Ye,!0)})):e(),xe(ce)}const at=R(void 0);let ye=0;function Ge(){at.value=Date.now()}let Je=!0;function st(e){if(!uo)return xe(R(!1));const o=R(!1);let t=null;function n(){t!==null&&window.clearTimeout(t)}function a(){n(),o.value=!0,t=window.setTimeout(()=>{o.value=!1},e)}ye===0&&Pe("click",window,Ge,!0);const u=()=>{ye+=1,Pe("click",window,a,!0)};return Je&&(Je=fo())?(Fe(u),_e(()=>{ye-=1,ye===0&&$e("click",window,Ge,!0),$e("click",window,a,!0),n()})):u(),xe(o)}let ee=0,Qe="",Ze="",eo="",oo="";const to=R("0px");function dt(e){if(typeof document>"u")return;const o=document.documentElement;let t,n=!1;const a=()=>{o.style.marginRight=Qe,o.style.overflow=Ze,o.style.overflowX=eo,o.style.overflowY=oo,to.value="0px"};Uo(()=>{t=Oe(e,u=>{if(u){if(!ee){const h=window.innerWidth-o.offsetWidth;h>0&&(Qe=o.style.marginRight,o.style.marginRight=`${h}px`,to.value=`${h}px`),Ze=o.style.overflow,eo=o.style.overflowX,oo=o.style.overflowY,o.style.overflow="hidden",o.style.overflowX="hidden",o.style.overflowY="hidden"}n=!0,ee++}else ee--,ee||a(),n=!1},{immediate:!0})}),_e(()=>{t==null||t(),n&&(ee--,ee||a(),n=!1)})}const Me=R(!1),no=()=>{Me.value=!0},ro=()=>{Me.value=!1};let de=0;const ct=()=>(wo&&(Fe(()=>{de||(window.addEventListener("compositionstart",no),window.addEventListener("compositionend",ro)),de++}),_e(()=>{de<=1?(window.removeEventListener("compositionstart",no),window.removeEventListener("compositionend",ro),de=0):de--})),Me);function ut(e){return e.map(yo)}function yo(e){var o,t;return typeof e=="string"?{label:e,value:e}:e.type==="group"?{type:"group",label:(o=e.label)!==null&&o!==void 0?o:e.name,value:(t=e.value)!==null&&t!==void 0?t:e.name,key:e.key||e.name,children:e.children.map(a=>yo(a))}:e}const ft=P([$("auto-complete",`
 z-index: auto;
 position: relative;
 display: inline-flex;
 width: 100%;
 `),$("auto-complete-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[io({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),vt=Object.assign(Object.assign({},V.props),{to:ze.propTo,menuProps:Object,append:Boolean,bordered:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},defaultValue:{type:String,default:null},loading:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:String,placement:{type:String,default:"bottom-start"},value:String,blurAfterSelect:Boolean,clearAfterSelect:Boolean,getShow:Function,showEmpty:Boolean,inputProps:Object,renderOption:Function,renderLabel:Function,size:String,options:{type:Array,default:()=>[]},zIndex:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onSelect:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array],onInput:[Function,Array]}),ht=K({name:"AutoComplete",props:vt,setup(e){const{mergedBorderedRef:o,namespaceRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:a}=ve(e),u=ko(e),{mergedSizeRef:h,mergedDisabledRef:b,mergedStatusRef:f}=u,v=R(null),c=R(null),S=R(e.defaultValue),y=fe(e,"value"),C=Ko(y,S),w=R(!1),d=R(!1),r=V("AutoComplete","-auto-complete",ft,Wo,e,n),k=j(()=>ut(e.options)),x=j(()=>{const{getShow:i}=e;return i?i(C.value||""):!!C.value}),z=j(()=>x.value&&w.value&&(e.showEmpty?!0:!!k.value.length)),E=j(()=>Po(k.value,$o("value","children")));function _(i){const{"onUpdate:value":B,onUpdateValue:A,onInput:U}=e,{nTriggerFormInput:me,nTriggerFormChange:xo}=u;A&&N(A,i),B&&N(B,i),U&&N(U,i),S.value=i,me(),xo()}function s(i){const{onSelect:B}=e,{nTriggerFormInput:A,nTriggerFormChange:U}=u;B&&N(B,i),A(),U()}function m(i){const{onBlur:B}=e,{nTriggerFormBlur:A}=u;B&&N(B,i),A()}function F(i){const{onFocus:B}=e,{nTriggerFormFocus:A}=u;B&&N(B,i),A()}function g(){d.value=!0}function M(){window.setTimeout(()=>{d.value=!1},0)}function oe(i){var B,A,U;switch(i.key){case"Enter":if(!d.value){const me=(B=c.value)===null||B===void 0?void 0:B.getPendingTmNode();me&&(q(me.rawNode),i.preventDefault())}break;case"ArrowDown":(A=c.value)===null||A===void 0||A.next();break;case"ArrowUp":(U=c.value)===null||U===void 0||U.prev();break}}function q(i){(i==null?void 0:i.value)!==void 0&&(s(i.value),e.clearAfterSelect?_(null):i.label!==void 0&&_(e.append?`${C.value}${i.label}`:i.label),w.value=!1,e.blurAfterSelect&&se())}function te(){_(null)}function ne(i){w.value=!0,F(i)}function re(i){w.value=!1,m(i)}function ie(i){w.value=!0,_(i)}function le(i){q(i.rawNode)}function ae(i){var B;!((B=v.value)===null||B===void 0)&&B.contains(vo(i))||(w.value=!1)}function se(){var i,B;!((i=v.value)===null||i===void 0)&&i.contains(document.activeElement)&&((B=document.activeElement)===null||B===void 0||B.blur())}const G=j(()=>{const{common:{cubicBezierEaseInOut:i},self:{menuBoxShadow:B}}=r.value;return{"--n-menu-box-shadow":B,"--n-bezier":i}}),D=a?he("auto-complete",void 0,G,e):void 0,W=R(null),J={focus:()=>{var i;(i=W.value)===null||i===void 0||i.focus()},blur:()=>{var i;(i=W.value)===null||i===void 0||i.blur()}};return{focus:J.focus,blur:J.blur,inputInstRef:W,uncontrolledValue:S,mergedValue:C,isMounted:lo(),adjustedTo:ze(e),menuInstRef:c,triggerElRef:v,treeMate:E,mergedSize:h,mergedDisabled:b,active:z,mergedStatus:f,handleClear:te,handleFocus:ne,handleBlur:re,handleInput:ie,handleToggle:le,handleClickOutsideMenu:ae,handleCompositionStart:g,handleCompositionEnd:M,handleKeyDown:oe,mergedTheme:r,cssVars:a?void 0:G,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender,mergedBordered:o,namespace:t,mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:`${e}-auto-complete`,ref:"triggerElRef",onKeydown:this.handleKeyDown,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd},l(_o,null,{default:()=>[l(So,null,{default:()=>{if(this.$slots.default)return ao(this.$slots,"default",{handleInput:this.handleInput,handleFocus:this.handleFocus,handleBlur:this.handleBlur,value:this.mergedValue});const{mergedTheme:t}=this;return l(Ro,{ref:"inputInstRef",status:this.mergedStatus,theme:t.peers.Input,themeOverrides:t.peerOverrides.Input,bordered:this.mergedBordered,value:this.mergedValue,placeholder:this.placeholder,size:this.mergedSize,disabled:this.mergedDisabled,clearable:this.clearable,loading:this.loading,inputProps:this.inputProps,onClear:this.handleClear,onFocus:this.handleFocus,onUpdateValue:this.handleInput,onBlur:this.handleBlur},{suffix:()=>{var n,a;return(a=(n=this.$slots).suffix)===null||a===void 0?void 0:a.call(n)},prefix:()=>{var n,a;return(a=(n=this.$slots).prefix)===null||a===void 0?void 0:a.call(n)}})}}),l(zo,{show:this.active,to:this.adjustedTo,containerClass:this.namespace,zIndex:this.zIndex,teleportDisabled:this.adjustedTo===ze.tdkey,placement:this.placement,width:"target"},{default:()=>l(Ee,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{var o;if((o=this.onRender)===null||o===void 0||o.call(this),!this.active)return null;const{menuProps:t}=this;return we(l(Bo,Object.assign({},t,{clsPrefix:e,ref:"menuInstRef",theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,"auto-pending":!0,class:[`${e}-auto-complete-menu`,this.themeClass,t==null?void 0:t.class],style:[t==null?void 0:t.style,this.cssVars],treeMate:this.treeMate,multiple:!1,renderLabel:this.renderLabel,renderOption:this.renderOption,size:"medium",onToggle:this.handleToggle}),{empty:()=>{var n,a;return(a=(n=this.$slots).empty)===null||a===void 0?void 0:a.call(n)}}),[[so,this.handleClickOutsideMenu,void 0,{capture:!0}]])}})})]}))}}),mt=P([$("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ho({background:"var(--n-color-modal)"}),O("hoverable",[P("&:hover","box-shadow: var(--n-box-shadow);")]),O("content-segmented",[P(">",[p("content",{paddingTop:"var(--n-padding-bottom)"})])]),O("content-soft-segmented",[P(">",[p("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),O("footer-segmented",[P(">",[p("footer",{paddingTop:"var(--n-padding-bottom)"})])]),O("footer-soft-segmented",[P(">",[p("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),P(">",[$("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[p("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),p("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),p("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),p("content","flex: 1; min-width: 0;"),p("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[P("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),p("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),$("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[P("img",`
 display: block;
 width: 100%;
 `)]),O("bordered",`
 border: 1px solid var(--n-border-color);
 `,[P("&:target","border-color: var(--n-color-target);")]),O("action-segmented",[P(">",[p("action",[P("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),O("content-segmented, content-soft-segmented",[P(">",[p("content",{transition:"border-color 0.3s var(--n-bezier)"},[P("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),O("footer-segmented, footer-soft-segmented",[P(">",[p("footer",{transition:"border-color 0.3s var(--n-bezier)"},[P("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),O("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Ie($("card",`
 background: var(--n-color-modal);
 `,[O("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),mo($("card",`
 background: var(--n-color-popover);
 `,[O("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ae={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},gt=Te(Ae),pt=Object.assign(Object.assign({},V.props),Ae),bt=K({name:"Card",props:pt,setup(e){const o=()=>{const{onClose:v}=e;v&&N(v)},{inlineThemeDisabled:t,mergedClsPrefixRef:n,mergedRtlRef:a}=ve(e),u=V("Card","-card",mt,Xo,e,n),h=je("Card",a,n),b=j(()=>{const{size:v}=e,{self:{color:c,colorModal:S,colorTarget:y,textColor:C,titleTextColor:w,titleFontWeight:d,borderColor:r,actionColor:k,borderRadius:x,lineHeight:z,closeIconColor:E,closeIconColorHover:_,closeIconColorPressed:s,closeColorHover:m,closeColorPressed:F,closeBorderRadius:g,closeIconSize:M,closeSize:oe,boxShadow:q,colorPopover:te,colorEmbedded:ne,colorEmbeddedModal:re,colorEmbeddedPopover:ie,[Ce("padding",v)]:le,[Ce("fontSize",v)]:ae,[Ce("titleFontSize",v)]:se},common:{cubicBezierEaseInOut:G}}=u.value,{top:D,left:W,bottom:J}=go(le);return{"--n-bezier":G,"--n-border-radius":x,"--n-color":c,"--n-color-modal":S,"--n-color-popover":te,"--n-color-embedded":ne,"--n-color-embedded-modal":re,"--n-color-embedded-popover":ie,"--n-color-target":y,"--n-text-color":C,"--n-line-height":z,"--n-action-color":k,"--n-title-text-color":w,"--n-title-font-weight":d,"--n-close-icon-color":E,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":s,"--n-close-color-hover":m,"--n-close-color-pressed":F,"--n-border-color":r,"--n-box-shadow":q,"--n-padding-top":D,"--n-padding-bottom":J,"--n-padding-left":W,"--n-font-size":ae,"--n-title-font-size":se,"--n-close-size":oe,"--n-close-icon-size":M,"--n-close-border-radius":g}}),f=t?he("card",j(()=>e.size[0]),b,e):void 0;return{rtlEnabled:h,mergedClsPrefix:n,mergedTheme:u,handleCloseClick:o,cssVars:t?void 0:b,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{segmented:e,bordered:o,hoverable:t,mergedClsPrefix:n,rtlEnabled:a,onRender:u,embedded:h,tag:b,$slots:f}=this;return u==null||u(),l(b,{class:[`${n}-card`,this.themeClass,h&&`${n}-card--embedded`,{[`${n}-card--rtl`]:a,[`${n}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${n}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${n}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${n}-card--bordered`]:o,[`${n}-card--hoverable`]:t}],style:this.cssVars,role:this.role},H(f.cover,v=>{const c=this.cover?Q([this.cover()]):v;return c&&l("div",{class:`${n}-card-cover`,role:"none"},c)}),H(f.header,v=>{const{title:c}=this,S=c?Q(typeof c=="function"?[c()]:[c]):v;return S||this.closable?l("div",{class:[`${n}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},l("div",{class:`${n}-card-header__main`,role:"heading"},S),H(f["header-extra"],y=>{const C=this.headerExtra?Q([this.headerExtra()]):y;return C&&l("div",{class:[`${n}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},C)}),this.closable&&l(po,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),H(f.default,v=>{const{content:c}=this,S=c?Q(typeof c=="function"?[c()]:[c]):v;return S&&l("div",{class:[`${n}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},S)}),H(f.footer,v=>{const c=this.footer?Q([this.footer()]):v;return c&&l("div",{class:[`${n}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},c)}),H(f.action,v=>{const c=this.action?Q([this.action()]):v;return c&&l("div",{class:`${n}-card__action`,role:"none"},c)}))}}),Ne={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function},yt=Te(Ne),Ct=P([$("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[p("icon",{color:"var(--n-icon-color)"}),O("bordered",{border:"var(--n-border)"}),O("icon-top",[p("close",{margin:"var(--n-close-margin)"}),p("icon",{margin:"var(--n-icon-margin)"}),p("content",{textAlign:"center"}),p("title",{justifyContent:"center"}),p("action",{justifyContent:"center"})]),O("icon-left",[p("icon",{margin:"var(--n-icon-margin)"}),O("closable",[p("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),p("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),p("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[O("last","margin-bottom: 0;")]),p("action",`
 display: flex;
 justify-content: flex-end;
 `,[P("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),p("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),p("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),$("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),Ie($("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),$("dialog",[ho(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),xt={default:()=>l(Ve,null),info:()=>l(Ve,null),success:()=>l(Oo,null),warning:()=>l(To,null),error:()=>l(Fo,null)},wt=K({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},V.props),Ne),setup(e){const{mergedComponentPropsRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:a}=ve(e),u=je("Dialog",a,t),h=j(()=>{var C,w;const{iconPlacement:d}=e;return d||((w=(C=o==null?void 0:o.value)===null||C===void 0?void 0:C.Dialog)===null||w===void 0?void 0:w.iconPlacement)||"left"});function b(C){const{onPositiveClick:w}=e;w&&w(C)}function f(C){const{onNegativeClick:w}=e;w&&w(C)}function v(){const{onClose:C}=e;C&&C()}const c=V("Dialog","-dialog",Ct,Yo,e,t),S=j(()=>{const{type:C}=e,w=h.value,{common:{cubicBezierEaseInOut:d},self:{fontSize:r,lineHeight:k,border:x,titleTextColor:z,textColor:E,color:_,closeBorderRadius:s,closeColorHover:m,closeColorPressed:F,closeIconColor:g,closeIconColorHover:M,closeIconColorPressed:oe,closeIconSize:q,borderRadius:te,titleFontWeight:ne,titleFontSize:re,padding:ie,iconSize:le,actionSpace:ae,contentMargin:se,closeSize:G,[w==="top"?"iconMarginIconTop":"iconMargin"]:D,[w==="top"?"closeMarginIconTop":"closeMargin"]:W,[Ce("iconColor",C)]:J}}=c.value,i=go(D);return{"--n-font-size":r,"--n-icon-color":J,"--n-bezier":d,"--n-close-margin":W,"--n-icon-margin-top":i.top,"--n-icon-margin-right":i.right,"--n-icon-margin-bottom":i.bottom,"--n-icon-margin-left":i.left,"--n-icon-size":le,"--n-close-size":G,"--n-close-icon-size":q,"--n-close-border-radius":s,"--n-close-color-hover":m,"--n-close-color-pressed":F,"--n-close-icon-color":g,"--n-close-icon-color-hover":M,"--n-close-icon-color-pressed":oe,"--n-color":_,"--n-text-color":E,"--n-border-radius":te,"--n-padding":ie,"--n-line-height":k,"--n-border":x,"--n-content-margin":se,"--n-title-font-size":re,"--n-title-font-weight":ne,"--n-title-text-color":z,"--n-action-space":ae}}),y=n?he("dialog",j(()=>`${e.type[0]}${h.value[0]}`),S,e):void 0;return{mergedClsPrefix:t,rtlEnabled:u,mergedIconPlacement:h,mergedTheme:c,handlePositiveClick:b,handleNegativeClick:f,handleCloseClick:v,cssVars:n?void 0:S,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){var e;const{bordered:o,mergedIconPlacement:t,cssVars:n,closable:a,showIcon:u,title:h,content:b,action:f,negativeText:v,positiveText:c,positiveButtonProps:S,negativeButtonProps:y,handlePositiveClick:C,handleNegativeClick:w,mergedTheme:d,loading:r,type:k,mergedClsPrefix:x}=this;(e=this.onRender)===null||e===void 0||e.call(this);const z=u?l(qo,{clsPrefix:x,class:`${x}-dialog__icon`},{default:()=>H(this.$slots.icon,_=>_||(this.icon?Z(this.icon):xt[this.type]()))}):null,E=H(this.$slots.action,_=>_||c||v||f?l("div",{class:[`${x}-dialog__action`,this.actionClass],style:this.actionStyle},_||(f?[Z(f)]:[this.negativeText&&l(Le,Object.assign({theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,ghost:!0,size:"small",onClick:w},y),{default:()=>Z(this.negativeText)}),this.positiveText&&l(Le,Object.assign({theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,size:"small",type:k==="default"?"primary":k,disabled:r,loading:r,onClick:C},S),{default:()=>Z(this.positiveText)})])):null);return l("div",{class:[`${x}-dialog`,this.themeClass,this.closable&&`${x}-dialog--closable`,`${x}-dialog--icon-${t}`,o&&`${x}-dialog--bordered`,this.rtlEnabled&&`${x}-dialog--rtl`],style:n,role:"dialog"},a?H(this.$slots.close,_=>{const s=[`${x}-dialog__close`,this.rtlEnabled&&`${x}-dialog--rtl`];return _?l("div",{class:s},_):l(po,{clsPrefix:x,class:s,onClick:this.handleCloseClick})}):null,u&&t==="top"?l("div",{class:`${x}-dialog-icon-container`},z):null,l("div",{class:[`${x}-dialog__title`,this.titleClass],style:this.titleStyle},u&&t==="left"?z:null,Ue(this.$slots.header,()=>[Z(h)])),l("div",{class:[`${x}-dialog__content`,E?"":`${x}-dialog__content--last`,this.contentClass],style:this.contentStyle},Ue(this.$slots.default,()=>[Z(b)])),E)}}),kt=bo("n-dialog-provider"),De=Object.assign(Object.assign({},Ae),Ne),_t=Te(De),St=K({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},De),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const o=R(null),t=R(null),n=R(e.show),a=R(null),u=R(null);Oe(fe(e,"show"),r=>{r&&(n.value=!0)}),dt(j(()=>e.blockScroll&&n.value));const h=ke(co);function b(){if(h.transformOriginRef.value==="center")return"";const{value:r}=a,{value:k}=u;if(r===null||k===null)return"";if(t.value){const x=t.value.containerScrollTop;return`${r}px ${k+x}px`}return""}function f(r){if(h.transformOriginRef.value==="center")return;const k=h.getMousePosition();if(!k||!t.value)return;const x=t.value.containerScrollTop,{offsetLeft:z,offsetTop:E}=r;if(k){const _=k.y,s=k.x;a.value=-(z-s),u.value=-(E-_-x)}r.style.transformOrigin=b()}function v(r){We(()=>{f(r)})}function c(r){r.style.transformOrigin=b(),e.onBeforeLeave()}function S(){n.value=!1,a.value=null,u.value=null,e.onAfterLeave()}function y(){const{onClose:r}=e;r&&r()}function C(){e.onNegativeClick()}function w(){e.onPositiveClick()}const d=R(null);return Oe(d,r=>{r&&We(()=>{const k=r.el;k&&o.value!==k&&(o.value=k)})}),ue(Eo,o),ue(Io,null),ue(jo,null),{mergedTheme:h.mergedThemeRef,appear:h.appearRef,isMounted:h.isMountedRef,mergedClsPrefix:h.mergedClsPrefixRef,bodyRef:o,scrollbarRef:t,displayed:n,childNodeRef:d,handlePositiveClick:w,handleNegativeClick:C,handleCloseClick:y,handleAfterLeave:S,handleBeforeLeave:c,handleEnter:v}},render(){const{$slots:e,$attrs:o,handleEnter:t,handleAfterLeave:n,handleBeforeLeave:a,preset:u,mergedClsPrefix:h}=this;let b=null;if(!u){if(b=ao(e),!b){Go("modal","default slot is empty");return}b=Jo(b),b.props=Qo({class:`${h}-modal`},o,b.props||{})}return this.displayDirective==="show"||this.displayed||this.show?we(l("div",{role:"none",class:`${h}-modal-body-wrapper`},l(Zo,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${h}-modal-scroll-content`},{default:()=>{var f;return[(f=this.renderMask)===null||f===void 0?void 0:f.call(this),l(Mo,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var v;return l(Ee,{name:"fade-in-scale-up-transition",appear:(v=this.appear)!==null&&v!==void 0?v:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:n,onBeforeLeave:a},{default:()=>{const c=[[Ke,this.show]],{onClickoutside:S}=this;return S&&c.push([so,this.onClickoutside,void 0,{capture:!0}]),we(this.preset==="confirm"||this.preset==="dialog"?l(wt,Object.assign({},this.$attrs,{class:[`${h}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Be(this.$props,yt),{"aria-modal":"true"}),e):this.preset==="card"?l(bt,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${h}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Be(this.$props,gt),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=b,c)}})}})]}})),[[Ke,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Rt=P([$("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),$("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[et({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),$("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[$("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),$("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[io({duration:".25s",enterScale:".5"})])]),zt=Object.assign(Object.assign(Object.assign(Object.assign({},V.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),De),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Bt=K({name:"Modal",inheritAttrs:!1,props:zt,setup(e){const o=R(null),{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:a}=ve(e),u=V("Modal","-modal",Rt,ot,e,t),h=st(64),b=lt(),f=lo(),v=e.internalDialog?ke(kt,null):null,c=e.internalModal?ke(No,null):null,S=ct();function y(s){const{onUpdateShow:m,"onUpdate:show":F,onHide:g}=e;m&&N(m,s),F&&N(F,s),g&&!s&&g(s)}function C(){const{onClose:s}=e;s?Promise.resolve(s()).then(m=>{m!==!1&&y(!1)}):y(!1)}function w(){const{onPositiveClick:s}=e;s?Promise.resolve(s()).then(m=>{m!==!1&&y(!1)}):y(!1)}function d(){const{onNegativeClick:s}=e;s?Promise.resolve(s()).then(m=>{m!==!1&&y(!1)}):y(!1)}function r(){const{onBeforeLeave:s,onBeforeHide:m}=e;s&&N(s),m&&m()}function k(){const{onAfterLeave:s,onAfterHide:m}=e;s&&N(s),m&&m()}function x(s){var m;const{onMaskClick:F}=e;F&&F(s),e.maskClosable&&!((m=o.value)===null||m===void 0)&&m.contains(vo(s))&&y(!1)}function z(s){var m;(m=e.onEsc)===null||m===void 0||m.call(e),e.show&&e.closeOnEsc&&Do(s)&&!S.value&&y(!1)}ue(co,{getMousePosition:()=>{const s=v||c;if(s){const{clickedRef:m,clickedPositionRef:F}=s;if(m.value&&F.value)return F.value}return h.value?b.value:null},mergedClsPrefixRef:t,mergedThemeRef:u,isMountedRef:f,appearRef:fe(e,"internalAppear"),transformOriginRef:fe(e,"transformOrigin")});const E=j(()=>{const{common:{cubicBezierEaseOut:s},self:{boxShadow:m,color:F,textColor:g}}=u.value;return{"--n-bezier-ease-out":s,"--n-box-shadow":m,"--n-color":F,"--n-text-color":g}}),_=a?he("theme-class",void 0,E,e):void 0;return{mergedClsPrefix:t,namespace:n,isMounted:f,containerRef:o,presetProps:j(()=>Be(e,_t)),handleEsc:z,handleAfterLeave:k,handleClickoutside:x,handleBeforeLeave:r,doUpdateShow:y,handleNegativeClick:d,handlePositiveClick:w,handleCloseClick:C,cssVars:a?void 0:E,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e}=this;return l(Ao,{to:this.to,show:this.show},{default:()=>{var o;(o=this.onRender)===null||o===void 0||o.call(this);const{unstableShowMask:t}=this;return we(l("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},l(St,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var n;return l(Ee,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?l("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[Lo,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Pt=P([$("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[O("show-divider",[$("list-item",[P("&:not(:last-child)",[p("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),O("clickable",[$("list-item",`
 cursor: pointer;
 `)]),O("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),O("hoverable",[$("list-item",`
 border-radius: var(--n-border-radius);
 `,[P("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[p("divider",`
 background-color: transparent;
 `)])])]),O("bordered, hoverable",[$("list-item",`
 padding: 12px 20px;
 `),p("header, footer",`
 padding: 12px 20px;
 `)]),p("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[P("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),$("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p("prefix",`
 margin-right: 20px;
 flex: 0;
 `),p("suffix",`
 margin-left: 20px;
 flex: 0;
 `),p("main",`
 flex: 1;
 `),p("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Ie($("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),mo($("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),$t=Object.assign(Object.assign({},V.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Co=bo("n-list"),Ot=K({name:"List",props:$t,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t,mergedRtlRef:n}=ve(e),a=je("List",n,o),u=V("List","-list",Pt,tt,e,o);ue(Co,{showDividerRef:fe(e,"showDivider"),mergedClsPrefixRef:o});const h=j(()=>{const{common:{cubicBezierEaseInOut:f},self:{fontSize:v,textColor:c,color:S,colorModal:y,colorPopover:C,borderColor:w,borderColorModal:d,borderColorPopover:r,borderRadius:k,colorHover:x,colorHoverModal:z,colorHoverPopover:E}}=u.value;return{"--n-font-size":v,"--n-bezier":f,"--n-text-color":c,"--n-color":S,"--n-border-radius":k,"--n-border-color":w,"--n-border-color-modal":d,"--n-border-color-popover":r,"--n-color-modal":y,"--n-color-popover":C,"--n-color-hover":x,"--n-color-hover-modal":z,"--n-color-hover-popover":E}}),b=t?he("list",void 0,h,e):void 0;return{mergedClsPrefix:o,rtlEnabled:a,cssVars:t?void 0:h,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),l("ul",{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},o.header?l("div",{class:`${t}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?l("div",{class:`${t}-list__footer`},o.footer()):null)}}),Tt=K({name:"ListItem",setup(){const e=ke(Co,null);return e||nt("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return l("li",{class:`${o}-list-item`},e.prefix?l("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?l("div",{class:`${o}-list-item__main`},e):null,e.suffix?l("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&l("div",{class:`${o}-list-item__divider`}))}}),Ft={style:{display:"flex","justify-content":"space-between"}},At=K({__name:"RecordView",setup(e){const o=R(""),t=d=>d.slice(d.indexOf("#")+1,d.indexOf("#")+18),n=R([]),a=R([]);function u(d){a.value=n.value.filter(r=>r.sw.includes(d)||r.name.includes(d)||r.nickname&&r.nickname.includes(d)).map(r=>{const x=["🦑","🐙"][Math.floor(Math.random()*2)],z="#"+r.sw+"@"+r.name+(r.nickname?x+r.nickname:"");return{label:z,value:z}})}function h(d){a.value=[],n.value.length===0?He.get("/splatoon/public/json/user.json").then(function(r){n.value=r.data,u(d)}).catch(function(r){console.log(r)}).finally(function(){}):u(d)}const b=R([]),f=R([]);function v(d){f.value=b.value.filter(r=>r.win.includes(t(d))||r.lose.includes(t(d))).map(r=>({result:r.win.includes(t(d))?"win":"lose",...r}))}function c(d){b.value.length===0?He.get("/splatoon/public/json/record.json").then(function(r){b.value=r.data,v(d)}).catch(function(r){console.log(r)}).finally(function(){}):v(d)}const S=R(!1),y=R();function C(d){var r;return(r=n.value.find(k=>k.sw===d))==null?void 0:r.name}function w(d){y.value=d,S.value=!0}return(d,r)=>{const k=rt,x=ht,z=Vo,E=Ho,_=Tt,s=Ot,m=it,F=Bt;return X(),ge(pe,null,[I(k,null,{default:T(()=>[L("可以通过输入SW码、玩家名称、昵称来查询。")]),_:1}),I(x,{value:o.value,"onUpdate:value":[r[0]||(r[0]=g=>o.value=g),h],"input-props":{autocomplete:"disabled"},options:a.value,placeholder:"例：“小白”",clearable:"",onSelect:c},null,8,["value","options"]),I(k,null,{default:T(()=>[L(" 胜率统计： "),I(z,null,{default:T(()=>[L(Y(f.value.filter(g=>(g==null?void 0:g.result)==="win").length+"/"+f.value.length),1)]),_:1})]),_:1}),I(s,{bordered:"",hoverable:"",clickable:""},{default:T(()=>[(X(!0),ge(pe,null,Se(f.value,g=>(X(),Re(_,{onClick:M=>w(g)},{default:T(()=>[Xe("div",Ft,[I(E,{bordered:!1,type:g.result==="win"?"success":void 0,size:"small"},{default:T(()=>[L(Y(g.result==="win"?"WIN!":"LOSE..."),1)]),_:2},1032,["type"]),Xe("div",null,Y(g.datetime),1)])]),_:2},1032,["onClick"]))),256))]),_:1}),I(F,{style:{width:"80%","max-width":"750px"},show:S.value,"onUpdate:show":r[1]||(r[1]=g=>S.value=g),class:"custom-card",preset:"card",title:"对战详情",bordered:!1},{default:T(()=>[I(m,{style:{display:"flex","justify-content":"space-between"}},{default:T(()=>[I(z,{type:"success"},{default:T(()=>[L("WIN!")]),_:1}),I(z,{type:"success"},{default:T(()=>{var g;return[L(Y((g=y.value)==null?void 0:g.score.win)+"%",1)]}),_:1})]),_:1}),I(s,{bordered:""},{default:T(()=>{var g;return[(X(!0),ge(pe,null,Se((g=y.value)==null?void 0:g.win,M=>(X(),Re(_,null,{default:T(()=>[I(z,{type:M===t(o.value)?"success":"default"},{default:T(()=>[L(Y(C(M)),1)]),_:2},1032,["type"])]),_:2},1024))),256))]}),_:1}),I(m,{style:{display:"flex","justify-content":"space-between"}},{default:T(()=>[I(z,{type:"error"},{default:T(()=>[L("LOSE...")]),_:1}),I(z,{type:"error"},{default:T(()=>{var g;return[L(Y((g=y.value)==null?void 0:g.score.lose)+"%",1)]}),_:1})]),_:1}),I(s,{bordered:""},{default:T(()=>{var g;return[(X(!0),ge(pe,null,Se((g=y.value)==null?void 0:g.lose,M=>(X(),Re(_,null,{default:T(()=>[I(z,{type:M===t(o.value)?"error":"default"},{default:T(()=>[L(Y(C(M)),1)]),_:2},1032,["type"])]),_:2},1024))),256))]}),_:1})]),_:1},8,["show"])],64)}}});export{At as default};
