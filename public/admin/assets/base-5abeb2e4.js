import{d as K,O as Q,r as x,y as z,c as d,o as c,e as m,h as e,i as l,f as y,l as A,L as v,J as M,K as T,t as J,P as k,E as h,z as X,s as w}from"./index-a2cde0ca.js";import{I as W}from"./index-97360b7c.js";const $={class:"flex justify-between"},Y=y("b",null,"系统基础设置",-1),Z=y("h5",null,"网站基础信息配置",-1),ee=["src"],le=["src"],ae=["src"],te=["src"],oe=["src"],ne=K({__name:"base",setup(se){const C=[{label:"对话",path:"/chat"},{label:"绘画",path:"/midjourney"},{label:"音乐",path:"/aiMusic"},{label:"mind思维导图",path:"/mind"},{label:"应用广场",path:"/app-store"},{label:"发现页/工具箱",path:"/discover"},{label:"不指定首页",path:""}],a=Q({siteName:"",qqNumber:"",vxNumber:"",robotAvatar:"",userDefautlAvatar:"",filingNumber:"",companyName:"",buyCramiAddress:"",siteRobotName:"",isShowAppCatIcon:"",clientFavoIconPath:"",clientLogoPath:"",clientHomePath:"",clientIntegralIcon:"",clientIntegralName:"",darkClientLogoPath:"",gptsKey:"",discoverBg:""}),L=x({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}]}),N=x();async function V(){const n=await k.queryConfig({keys:["clientIntegralIcon","clientIntegralName","siteName","qqNumber","vxNumber","robotAvatar","userDefautlAvatar","buyCramiAddress","filingNumber","companyName","siteRobotName","isShowAppCatIcon","clientLogoPath","clientFavoIconPath","clientHomePath","darkClientLogoPath","discoverBg"]});Object.assign(a,n.data)}function U(){var n;(n=N.value)==null||n.validate(async t=>{if(t){try{await k.setConfig({settings:q(a)}),h.success("变更配置信息成功")}catch{}V()}else h.error("请填写完整信息")})}function q(n){return Object.keys(n).map(t=>({configKey:t,configVal:n[t]}))}const p=x("/api/upload/file"),F=(n,t)=>{console.log("response: ",n.data),a.robotAvatar=n.data},B=(n,t)=>{console.log("response: ",n.data),a.userDefautlAvatar=n.data},R=(n,t)=>{console.log("response: ",n.data),a.clientLogoPath=n.data},S=(n,t)=>{console.log("response: ",n.data),a.clientFavoIconPath=n.data},f=n=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(n.type)){if(n.size/1024>300)return h.error("当前限制文件最大不超过 300KB!"),!1}else return h.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1};return z(()=>{V()}),(n,t)=>{const P=d("el-alert"),D=X,O=d("el-button"),i=d("el-input"),s=d("el-form-item"),u=d("el-col"),r=d("el-row"),_=d("Plus"),g=d("el-icon"),b=d("el-upload"),I=d("el-divider"),j=d("el-radio"),E=d("el-radio-group"),G=d("el-form"),H=d("el-card");return c(),m("div",null,[e(D,null,{default:l(()=>[e(P,{closable:!1,"show-icon":"",title:"用户端基础配置说明",description:"网站类型设置是实时生效的、这里可以配置网站的logo名称等、购卡地址对应卡密购买、思维导图默认展示属于、机器人名称为对话页的默认AI Robot位置！",type:"success"})]),_:1}),e(H,{style:{margin:"20px"}},{header:l(()=>[y("div",$,[Y,e(O,{class:"button",text:"",onClick:U},{default:l(()=>[A(" 保存设置 ")]),_:1})])]),default:l(()=>[e(G,{ref_key:"formRef",ref:N,rules:L.value,model:a,"label-width":"150px"},{default:l(()=>[Z,e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"网站名称",prop:"siteName"},{default:l(()=>[e(i,{modelValue:a.siteName,"onUpdate:modelValue":t[0]||(t[0]=o=>a.siteName=o),placeholder:"网站名称【RocKet Ai】",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"网站QQ客服",prop:"qqNumber"},{default:l(()=>[e(i,{modelValue:a.qqNumber,"onUpdate:modelValue":t[1]||(t[1]=o=>a.qqNumber=o),placeholder:"网站客服QQ号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"网站VX客服",prop:"vxNumber"},{default:l(()=>[e(i,{modelValue:a.vxNumber,"onUpdate:modelValue":t[2]||(t[2]=o=>a.vxNumber=o),placeholder:"网站客服VX号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"机器人头像",prop:"robotAvatar"},{default:l(()=>[e(b,{class:"avatar-uploader",action:p.value,"show-file-list":!1,"on-success":F,"before-upload":f},{default:l(()=>[a.robotAvatar?(c(),m("img",{key:0,src:a.robotAvatar,style:{width:"100px"},class:"avatar"},null,8,ee)):(c(),v(g,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[e(_)]),_:1}))]),_:1},8,["action"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"用户默认头像",prop:"userDefautlAvatar"},{default:l(()=>[e(b,{class:"avatar-uploader",action:p.value,"show-file-list":!1,"on-success":B,"before-upload":f},{default:l(()=>[a.userDefautlAvatar?(c(),m("img",{key:0,src:a.userDefautlAvatar,style:{width:"100px"},class:"avatar"},null,8,le)):(c(),v(g,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[e(_)]),_:1}))]),_:1},8,["action"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"网站公司信息",prop:"companyName"},{default:l(()=>[e(i,{modelValue:a.companyName,"onUpdate:modelValue":t[3]||(t[3]=o=>a.companyName=o),placeholder:"填写网站备案信息的公司名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"网站备案号",prop:"filingNumber"},{default:l(()=>[e(i,{modelValue:a.filingNumber,"onUpdate:modelValue":t[4]||(t[4]=o=>a.filingNumber=o),placeholder:"填写网站备案信息的备案号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"机器人名称",prop:"siteRobotName"},{default:l(()=>[e(i,{modelValue:a.siteRobotName,"onUpdate:modelValue":t[5]||(t[5]=o=>a.siteRobotName=o),placeholder:"默认[Ai Robot]、首页默认展示状态下的名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(I),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"积分图标",prop:"clientIntegralIcon"},{default:l(()=>[e(i,{modelValue:a.clientIntegralIcon,"onUpdate:modelValue":t[6]||(t[6]=o=>a.clientIntegralIcon=o),placeholder:"仅可输入Emoji，默认为 ⚡",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"积分名称",prop:"clientIntegralName"},{default:l(()=>[e(i,{modelValue:a.clientIntegralName,"onUpdate:modelValue":t[7]||(t[7]=o=>a.clientIntegralName=o),placeholder:"默认为积分（注意：这只会改变用户端的展示，管理端依旧使用积分作为标识）",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(I),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"白昼用户端LOGO",prop:"clientLogoPath"},{default:l(()=>[e(b,{class:"avatar-uploader",action:p.value,"show-file-list":!1,"on-success":R,"before-upload":f},{default:l(()=>[a.clientLogoPath?(c(),m("img",{key:0,src:a.clientLogoPath,style:{width:"100px"},class:"avatar"},null,8,ae)):(c(),v(g,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[e(_)]),_:1}))]),_:1},8,["action"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"黑夜用户端LOGO",prop:"darkClientLogoPath"},{default:l(()=>[e(b,{class:"avatar-uploader",action:p.value,"show-file-list":!1,"on-success":o=>{a.darkClientLogoPath=o.data},"before-upload":f},{default:l(()=>[a.darkClientLogoPath?(c(),m("img",{key:0,src:a.darkClientLogoPath,style:{width:"100px"},class:"avatar"},null,8,te)):(c(),v(g,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[e(_)]),_:1}))]),_:1},8,["action","on-success"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"用户端ico",prop:"clientFavoIconPath"},{default:l(()=>[e(b,{class:"avatar-uploader",action:p.value,"show-file-list":!1,"on-success":S,"before-upload":f},{default:l(()=>[a.clientFavoIconPath?(c(),m("img",{key:0,src:a.clientFavoIconPath,style:{width:"100px"},class:"avatar"},null,8,oe)):(c(),v(g,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[e(_)]),_:1}))]),_:1},8,["action"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"设置指定首页",prop:"clientHomePath"},{default:l(()=>[e(E,{modelValue:a.clientHomePath,"onUpdate:modelValue":t[8]||(t[8]=o=>a.clientHomePath=o)},{default:l(()=>[(c(),m(M,null,T(C,o=>e(j,{key:o.path,size:"small",border:"",value:o.path},{default:l(()=>[A(J(o.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(s,{label:"发现页背景",prop:"discoverBg"},{default:l(()=>[e(W,{url:a.discoverBg,"onUpdate:url":t[9]||(t[9]=o=>a.discoverBg=o)},null,8,["url"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof w=="function"&&w(ne);export{ne as default};
