import{a as g,_ as h}from"./axios-Z7H_SfNI.js";import{_ as x,a as w}from"./DataTable-0Rm93l6C.js";import{e as k,r as c,h as v,l as y,m as e,w as o,q as j,F as C,o as b,p as a,s as V}from"./index-BYl8y8Iq.js";import{_ as B}from"./p-BoKch5lK.js";const U=k({__name:"UserView",setup(D){const u=[{title:"玩家名称",key:"name"},{title:"SW",key:"sw"}],r=["🦑","🐙"],t=c([]),s=c(!0),_=v(()=>t.value.map(n=>{const l=r[Math.floor(Math.random()*2)];return{sw:n.sw,name:n.name+(n.nickname?` ${l+n.nickname}`:"")}}));function m(){g.get("/splatoon/public/json/user.json").then(function(n){setTimeout(()=>{s.value=!1,t.value=n.data},1e3)}).catch(function(n){console.log(n)}).finally(function(){})}return m(),(n,l)=>{const i=x,p=h,f=B,d=w;return b(),y(C,null,[e(i,{title:"注意",type:"warning"},{default:o(()=>[a(" 玩家名称为《斯普拉遁3》游戏内的玩家名称，请仔细检查玩家名称是否存在错误，这会影响到对局结算计分。 ")]),_:1}),e(f,null,{default:o(()=>[a(" 参赛人数："),e(p,{style:{"font-size":"24px"}},{default:o(()=>[a(V(t.value.length||"--"),1)]),_:1})]),_:1}),e(d,{loading:s.value,columns:j(u),data:_.value,bordered:!1,"single-line":!1,"scroll-x":400},null,8,["loading","columns","data"])],64)}}});export{U as default};