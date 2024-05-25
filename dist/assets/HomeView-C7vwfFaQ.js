import{c as C,a as b,b as _,d,e as m,u as z,f as v,g as H,h as P,i as R,j as g,F as k,k as h,t as N,r as p,l as S,m as e,w as n,n as y,o as j,p as t}from"./index-BOCKwTRC.js";import{N as L,a as O}from"./headers-CfTKpdlZ.js";import{_ as D}from"./p-BmF_5fzJ.js";const E=C("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[b("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[b("no-title",`
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
 `),b("dashed",[_("line",{backgroundColor:"var(--n-color)"})]),d("dashed",[_("line",{borderColor:"var(--n-color)"})]),d("vertical",{backgroundColor:"var(--n-color)"})]),F=Object.assign(Object.assign({},v.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),M=m({name:"Divider",props:F,setup(a){const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=z(a),u=v("Divider","-divider",E,H,a,s),r=P(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:o,textColor:f,fontWeight:x}}=u.value;return{"--n-bezier":i,"--n-color":o,"--n-text-color":f,"--n-font-weight":x}}),l=c?R("divider",void 0,r,a):void 0;return{mergedClsPrefix:s,cssVars:c?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var a;const{$slots:s,titlePlacement:c,vertical:u,dashed:r,cssVars:l,mergedClsPrefix:i}=this;return(a=this.onRender)===null||a===void 0||a.call(this),g("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:u,[`${i}-divider--no-title`]:!s.default,[`${i}-divider--dashed`]:r,[`${i}-divider--title-position-${c}`]:s.default&&c}],style:l},u?null:g("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!u&&s.default?g(k,null,g("div",{class:`${i}-divider__title`},this.$slots),g("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}}),$=h("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),w=[h("&:first-child",`
 margin-top: 0;
 `),h("&:last-child",`
 margin-bottom: 0;
 `)],G=h([C("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[d("align-text",{paddingLeft:0}),$,w]),C("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[d("align-text",{paddingLeft:0}),$,w])]),I=Object.assign(Object.assign({},v.props),{alignText:Boolean}),W=m({name:"Ul",props:I,setup(a){const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=z(a),u=v("Typography","-xl",G,N,a,s),r=P(()=>{const{common:{cubicBezierEaseInOut:i},self:{olPadding:o,ulPadding:f,liMargin:x,liTextColor:B,liLineHeight:V,liFontSize:T}}=u.value;return{"--n-bezier":i,"--n-font-size":T,"--n-line-height":V,"--n-text-color":B,"--n-li-margin":x,"--n-ol-padding":o,"--n-ul-padding":f}}),l=c?R("ul",void 0,r,a):void 0;return{mergedClsPrefix:s,cssVars:c?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var a;const{mergedClsPrefix:s}=this;return(a=this.onRender)===null||a===void 0||a.call(this),g("ul",{class:[`${s}-ul`,this.themeClass,this.alignText&&`${s}-ul--align-text`],style:this.cssVars},this.$slots)}}),U=m({name:"Li",render(){return g("li",null,this.$slots)}}),Z=y("div",{style:{"max-width":"750px",margin:"0px auto"}},[y("img",{src:"https://img2.imgtp.com/2024/05/23/9kGGvZ01.jpg",alt:"",style:{display:"block",width:"100%"}})],-1),K=m({__name:"HomeView",setup(a){return p(""),p([]),p([]),p([]),p([]),p(!1),p(),(s,c)=>{const u=L,r=O,l=D,i=M,o=U,f=W;return j(),S(k,null,[e(u,null,{default:n(()=>[t("斯普拉遁3 🏆小白杯")]),_:1}),e(r,{prefix:"bar"},{default:n(()=>[t(" 报名流程 ")]),_:1}),e(l,null,{default:n(()=>[t(" 需要玩家提供SW码以及游戏内的玩家名称。（活动期间尽量不要修改玩家名称） ")]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 活动时间 ")]),_:1}),e(f,null,{default:n(()=>[e(o,null,{default:n(()=>[t(" 开始时间：2024-05-25（周六）")]),_:1}),e(o,null,{default:n(()=>[t(" 结束时间：2024-06-14（周五）")]),_:1})]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 活动流程 ")]),_:1}),e(f,null,{default:n(()=>[e(o,null,{default:n(()=>[t("参加的玩家首先需要报名")]),_:1}),e(o,null,{default:n(()=>[t("每场对局需要8名玩家和1名裁判，裁判进入观看席位")]),_:1}),e(o,null,{default:n(()=>[t("由裁判创建房间，设置房间参数（随机地图、取消追加能力等等）")]),_:1}),e(o,null,{default:n(()=>[t("8名玩家随机分成两组对战")]),_:1}),e(o,null,{default:n(()=>[t("时间结束，涂地面积多的获胜")]),_:1})]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 注意事项 ")]),_:1}),e(f,null,{default:n(()=>[e(o,null,{default:n(()=>[t("禁止使用“2024夏季赛”新武器参与活动")]),_:1}),e(o,null,{default:n(()=>[t("禁止使用其他账号参与活动")]),_:1})]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 计分规则 ")]),_:1}),e(f,null,{default:n(()=>[e(o,null,{default:n(()=>[t("胜利组 每人+1分 ")]),_:1}),e(o,null,{default:n(()=>[t("失败组 每人-1分")]),_:1})]),_:1}),e(l,null,{default:n(()=>[t("如果存在玩家掉线，导致游戏中断或继续，本次对局都视为无效。")]),_:1}),e(l,null,{default:n(()=>[t(" 最终会从玩家所有对局中随机选出20局，合计得出最终得分。（不满20局的，剩余场次均按照失败计算） ")]),_:1}),e(i),e(r,{prefix:"bar"},{default:n(()=>[t(" 活动奖励 ")]),_:1}),e(l,null,{default:n(()=>[t("本活动由小白独家赞助💰")]),_:1}),e(l,null,{default:n(()=>[t("本次活动第一名可以获得《斯普拉遁3》amiibo手办任选一个")]),_:1}),Z],64)}}});export{K as default};
