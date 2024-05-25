import{c as b,a as x,b as _,d,e as h,u as w,f as m,g as T,h as z,i as P,j as p,F as R,k as g,t as H,l as N,m as e,w as n,n as C,o as S,p as t}from"./index-BYl8y8Iq.js";import{N as j,a as L}from"./headers-iTf2VnN3.js";import{_ as O}from"./p-BoKch5lK.js";const D=b("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[x("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[x("no-title",`
 display: flex;
 align-items: center;
 `)]),_("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),d("title-position-left",[_("line",[d("left",{width:"28px"})])]),d("title-position-right",[_("line",[d("right",{width:"28px"})])]),d("dashed",[_("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),d("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),_("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),x("dashed",[_("line",{backgroundColor:"var(--n-color)"})]),d("dashed",[_("line",{borderColor:"var(--n-color)"})]),d("vertical",{backgroundColor:"var(--n-color)"})]),E=Object.assign(Object.assign({},m.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),F=h({name:"Divider",props:E,setup(o){const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=w(o),u=m("Divider","-divider",D,T,o,s),r=z(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:a,textColor:f,fontWeight:v}}=u.value;return{"--n-bezier":i,"--n-color":a,"--n-text-color":f,"--n-font-weight":v}}),l=c?P("divider",void 0,r,o):void 0;return{mergedClsPrefix:s,cssVars:c?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;const{$slots:s,titlePlacement:c,vertical:u,dashed:r,cssVars:l,mergedClsPrefix:i}=this;return(o=this.onRender)===null||o===void 0||o.call(this),p("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:u,[`${i}-divider--no-title`]:!s.default,[`${i}-divider--dashed`]:r,[`${i}-divider--title-position-${c}`]:s.default&&c}],style:l},u?null:p("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!u&&s.default?p(R,null,p("div",{class:`${i}-divider__title`},this.$slots),p("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}}),y=g("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),$=[g("&:first-child",`
 margin-top: 0;
 `),g("&:last-child",`
 margin-bottom: 0;
 `)],M=g([b("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[d("align-text",{paddingLeft:0}),y,$]),b("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[d("align-text",{paddingLeft:0}),y,$])]),G=Object.assign(Object.assign({},m.props),{alignText:Boolean}),I=h({name:"Ul",props:G,setup(o){const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=w(o),u=m("Typography","-xl",M,H,o,s),r=z(()=>{const{common:{cubicBezierEaseInOut:i},self:{olPadding:a,ulPadding:f,liMargin:v,liTextColor:k,liLineHeight:B,liFontSize:V}}=u.value;return{"--n-bezier":i,"--n-font-size":V,"--n-line-height":B,"--n-text-color":k,"--n-li-margin":v,"--n-ol-padding":a,"--n-ul-padding":f}}),l=c?P("ul",void 0,r,o):void 0;return{mergedClsPrefix:s,cssVars:c?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;const{mergedClsPrefix:s}=this;return(o=this.onRender)===null||o===void 0||o.call(this),p("ul",{class:[`${s}-ul`,this.themeClass,this.alignText&&`${s}-ul--align-text`],style:this.cssVars},this.$slots)}}),W=h({name:"Li",render(){return p("li",null,this.$slots)}}),U=C("div",{style:{"max-width":"750px",margin:"0px auto"}},[C("img",{src:"https://img2.imgtp.com/2024/05/23/9kGGvZ01.jpg",alt:"",style:{display:"block",width:"100%"}})],-1),J=h({__name:"HomeView",setup(o){return(s,c)=>{const u=j,r=L,l=O,i=F,a=W,f=I;return S(),N(R,null,[e(u,null,{default:n(()=>[t("斯普拉遁3 🏆小白杯")]),_:1}),e(r,{prefix:"bar"},{default:n(()=>[t(" 报名流程 ")]),_:1}),e(l,null,{default:n(()=>[t(" 需要玩家提供SW码以及游戏内的玩家名称。（活动期间尽量不要修改玩家名称） ")]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 活动时间 ")]),_:1}),e(f,null,{default:n(()=>[e(a,null,{default:n(()=>[t(" 开始时间：2024-05-25（周六）")]),_:1}),e(a,null,{default:n(()=>[t(" 结束时间：2024-06-14（周五）")]),_:1})]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 活动流程 ")]),_:1}),e(f,null,{default:n(()=>[e(a,null,{default:n(()=>[t("参加的玩家首先需要报名")]),_:1}),e(a,null,{default:n(()=>[t("每场对局需要8名玩家和1名裁判，裁判进入观看席位")]),_:1}),e(a,null,{default:n(()=>[t("由裁判创建房间，设置房间参数（随机地图、取消追加能力等等）")]),_:1}),e(a,null,{default:n(()=>[t("8名玩家随机分成两组对战")]),_:1}),e(a,null,{default:n(()=>[t("时间结束，涂地面积多的获胜")]),_:1})]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 注意事项 ")]),_:1}),e(f,null,{default:n(()=>[e(a,null,{default:n(()=>[t("禁止使用“2024夏季赛”新武器参与活动")]),_:1}),e(a,null,{default:n(()=>[t("禁止使用其他账号参与活动")]),_:1})]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 计分规则 ")]),_:1}),e(f,null,{default:n(()=>[e(a,null,{default:n(()=>[t("胜利组 每人+1分 ")]),_:1}),e(a,null,{default:n(()=>[t("失败组 每人-1分")]),_:1})]),_:1}),e(l,null,{default:n(()=>[t("如果存在玩家掉线，导致游戏中断或继续，本次对局都视为无效。")]),_:1}),e(l,null,{default:n(()=>[t(" 最终会从玩家所有对局中随机选出20局，合计得出最终得分。（不满20局的，剩余场次均按照失败计算） ")]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 活动奖励 ")]),_:1}),e(l,null,{default:n(()=>[t("本活动由小白独家赞助💰")]),_:1}),e(l,null,{default:n(()=>[t("本次活动第一名可以获得《斯普拉遁3》amiibo手办任选一个")]),_:1}),U],64)}}});export{J as default};
