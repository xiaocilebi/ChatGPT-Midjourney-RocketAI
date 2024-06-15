import{d as e,u as l,I as s,v as a,b as t,J as n,K as o,L as r,a as i,y as c,w as p,W as u,o as f,f as x,c as d,F as m,j as g,g as v,z as b,e as y,t as h,n as k,m as w,M as I}from"./index-62750275.js";import{_}from"./Ellipsis-e9b4b389.js";import{_ as T,a as j}from"./Grid-f8a825d9.js";const C=""+new URL("discoverImg-3f271198.png",import.meta.url).href,M={key:0,class:"flex flex-col gap-[30px] p-4"},F=y("img",{class:"primaryRadius",src:C,alt:""},null,-1),R=["onClick"],A={class:"font-bold"},L={key:1,class:"flex flex-col w-full h-full"},U={class:"flex pt-[80px]"},B={class:"tracking-[10px] text-[40px] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text select-none font-bold"},D={class:"flex w-full"},z={class:"flex h-full w-full justify-center items-center"},J=["src"],N=y("div",{class:"mask absolute left-[-15px] right-[-15px] bottom-[-15px] h-[90px] bg-[--primaryColor] blur-[10px]"},null,-1),S={class:"absolute left-0 right-0 bottom-0 flex flex-col text-[#fff] h-[60px] px-[20px]"},$={class:"font-bold"},E={class:"text-[12px]"},G={class:"flex flex-col w-full space-y-[20px]"},K=y("span",{class:"font-bold"},"常用工具",-1),O={class:"overflow-hidden h-[140px]"},P={class:"flex h-full w-full justify-center items-center"},W=["src"],q={class:"flex flex-col p-4 pb-[10px]"},H={class:"font-bold"},Q={class:"text-[#7A808A]"},V=e({__name:"index",setup(e){const C=l(),{globalOtherMenus:V}=s(),X=a((()=>({stickyMenu:V.value.filter((e=>e.isToolTop)),otherMenu:V.value.filter((e=>!e.isToolTop))}))),Y=t(),Z=n(),ee=o(),le=a((()=>ee.globalConfig)),se=r(),ae=a((()=>ee.isLogin)),{isSmallMd:te,isMobile:ne}=i(),oe=e=>{const{menuPath:l,isJump:s,menuIframeUrl:a,isNeedAuth:t}=e;return t&&!ae.value?(Y.warning("请先登录后访问！"),void ee.setLoginDialog(!0)):(Z.updateIframeUrl(""),l?se.push(l):void(s?window.open(a):(Z.updateIframeUrl(a),se.push({path:"/extend"}))))};return(e,l)=>{const s=_,a=T,t=j;return f(),c(u,{hideBg:""},{default:p((()=>[x(ne)?(f(),d("div",M,[F,(f(!0),d(m,null,g(x(V),((e,l)=>(f(),d("div",{onClick:l=>oe(e),key:l,class:"bg-[#F7F7FA] dark:bg-[#353944] primaryRadius flex p-4 items-center gap-[10px] cursor-pointer"},[v(x(b),{icon:e.menuIcon,class:"text-[20px]"},null,8,["icon"]),y("span",A,h(e.menuTipText),1)],8,R)))),128))])):(f(),d("div",L,[y("div",{class:"headerImg flex flex-col py-[40px] space-y-[100px] min-h-[300px] w-full justify-center items-center",style:I([{background:x(C)?`linear-gradient(rgba(0, 0, 0, 0),rgba(11, 11, 13, 1)), url(${x(le).discoverBg}) no-repeat top center`:`url(${x(le).discoverBg}) no-repeat top center`,backgroundSize:"100% 400px, 100% 400px",backgroundRepeat:"no-repeat"}])},[y("div",U,[y("span",B,h(x(ee).siteName),1)]),y("div",{class:k(["flex w-full flex-col space-y-[30px]",[x(te)?"!w-[90%]":"!w-[80%]"]])},[y("div",D,[v(t,{"x-gap":"30","y-gap":"30",cols:"2 s:2 m:2 l:3 xl:4 2xl:4",responsive:"screen"},{default:p((()=>[(f(!0),d(m,null,g(x(X).stickyMenu,((e,l)=>(f(),c(a,{onClick:l=>oe(e),key:l,class:"primaryRadius relative overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-transform duration-200 ease-linear"},{default:p((()=>[y("div",z,[e.menuImg?(f(),d("img",{key:0,class:"h-full w-full object-cover",src:e.menuImg,alt:""},null,8,J)):(f(),c(x(b),{key:1,class:"text-[150px]",icon:e.menuIcon},null,8,["icon"]))]),N,y("div",S,[y("span",$,h(e.menuTipText),1),y("span",E,[v(s,{"line-clamp":"1"},{default:p((()=>[w(h(e.menuDesc||"暂无描述"),1)])),_:2},1024)])])])),_:2},1032,["onClick"])))),128))])),_:1})]),y("div",G,[K,v(t,{"x-gap":"30","y-gap":"30",cols:"2 s:3 m:5 l:5 xl:5 2xl:5",responsive:"screen"},{default:p((()=>[(f(!0),d(m,null,g(x(X).otherMenu,((e,l)=>(f(),c(a,{onClick:l=>oe(e),key:l,class:"primaryRadius relative overflow-hidden flex flex-col cursor-pointer bg-[#F5F6F8] dark:bg-[#353944] border dark:border-[#353944] hover:scale-105 transition-transform duration-200 ease-linear"},{default:p((()=>[y("div",O,[y("div",P,[e.menuImg?(f(),d("img",{key:0,class:"h-full w-full object-cover",src:e.menuImg,alt:""},null,8,W)):(f(),c(x(b),{key:1,class:"text-[50px]",icon:e.menuIcon},null,8,["icon"]))])]),y("div",q,[y("span",H,h(e.menuTipText),1),y("span",Q,[v(s,{"line-clamp":"1"},{default:p((()=>[w(h(e.menuDesc||"暂无描述"),1)])),_:2},1024)])])])),_:2},1032,["onClick"])))),128))])),_:1})])],2)],4)]))])),_:1})}}});export{V as default};
