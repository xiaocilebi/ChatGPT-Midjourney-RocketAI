import{V as D,d as ie,r as c,W as re,I as j,y as me,c as n,o as m,e as z,h as l,i as t,f as r,l as s,t as _,L as V,F as T,g as L,E as k,z as pe,s as R}from"./index-a2cde0ca.js";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang-f3923d1e.js";import{I as fe}from"./index-97360b7c.js";const C={quertMenu:p=>D.get("menu/query",{params:p}),visibleMenu:p=>D.post("menu/visible",p),setMenu:p=>D.post("menu/setMenu",p),delMenu:p=>D.post("menu/delete",p),updateIcon:p=>D.post("menu/updateIcon",p)},ve={class:"flex justify-between"},_e=r("b",null,"客户端动态菜单设置",-1),ge={class:"flex items-center"},ye={key:1},be={key:1},Ve={class:"flex items-center"},we={class:"dialog-footer"},Te={style:{display:"flex","align-items":"center"}},xe=r("span",{style:{width:"130px"}},"修改ICON编码:",-1),Ie={style:{display:"flex","align-items":"center","margin-top":"12px"}},ke=r("span",{style:{width:"130px"}},"修改菜单名称:",-1),Ce={style:{display:"flex","align-items":"center","margin-top":"12px"}},he=r("span",{style:{width:"130px"}},"修改菜单排序:",-1),Ue={class:"dialog-footer"},Me=ie({__name:"menu",setup(p){const h=c(1),U=c(),x=c(!1),g=c(0),M=c(""),S=c(""),N=c(0),P=c(!1),a=c({menuTipText:"",menuIframeUrl:"",isJump:!1,isShow:!0,menuIcon:"",menuPath:"",order:1e3,isNeedAuth:!1,isSystem:!0,isToolbox:!1,isToolTop:!1,menuImg:"",menuDesc:""}),W={menuTipText:[{required:!0,trigger:"blur",message:"请填写菜单名称"}],menuIframeUrl:[{required:!0,trigger:"blur",message:"请填写三方网页地址"}],isJump:[{required:!0,trigger:"blur",message:"请确认是否跳转"}],isShow:[{required:!0,trigger:"blur",message:"请确认是否打开菜单"}],menuIcon:[{required:!0,trigger:"blur",message:"请填写ICON图标"}],order:[{required:!0,trigger:"blur",message:"请填写排序ID"}],menuPath:[{required:!0,trigger:"blur",message:"请填写菜单路径"}],isSystem:[],isNeedAuth:[{required:!0,trigger:"blur",message:"请确认是否需要权限"}]};re(h,u=>{w()});const G=j(()=>g.value>0?"编辑菜单":"添加菜单"),H=j(()=>g.value>0?"确认修改":"确认添加"),J=c([]);async function w(){const u=await C.quertMenu({menuPlatform:h.value});J.value=u.data}function B(u){u==null||u.resetFields(),g.value=0}async function K(u){const{id:o}=u;await C.visibleMenu({id:o}),k.success("操作成功！"),w()}async function Q(u){await C.delMenu({id:u.id}),k.success("操作成功！"),w()}async function X(){var u;(u=U.value)==null||u.resetFields(),g.value=0,x.value=!0}async function Y(u){u==null||u.validate(async o=>{if(!o)return;const I=Object.assign(a.value,{id:g},{menuPlatform:h.value});await C.setMenu(I),k.success("操作成功！"),u.resetFields(),x.value=!1,w()})}const O=async u=>{await C.setMenu({...u}),k.success("操作成功！"),w()};function Z(u){const{id:o,menuPath:I}=u;g.value=o,a.value={...u},console.log("formInline",a.value),x.value=!0}async function Se(u){console.log("row: ",u);const{id:o,menuIcon:I,menuTipText:A,order:q}=u;M.value=I,S.value=A,N.value=q,g.value=o,P.value=!0}async function E(){if(!M.value||!S.value||!N.value)return k.error("请填写ICON编码");const u={id:g.value,menuIcon:M.value,menuTipText:S.value,order:N.value};await C.updateIcon(u),k.success("操作成功！"),w(),P.value=!1}return me(()=>{w()}),(u,o)=>{const I=n("el-alert"),A=pe,q=n("el-radio-button"),ee=n("el-radio-group"),le=n("Plus"),oe=n("el-icon"),y=n("el-button"),d=n("el-table-column"),$=n("el-tag"),b=n("el-switch"),te=n("el-image"),ae=n("el-text"),ue=n("el-popconfirm"),ne=n("el-table"),se=n("el-card"),i=n("el-form-item"),f=n("el-input"),de=n("el-form"),F=n("el-dialog");return m(),z("div",null,[l(A,null,{default:t(()=>[l(I,{closable:!1,"show-icon":"",title:"动态菜单配置说明",description:"请至少配置一个、如果不配置默认设置对话页面、排序ID越小越靠前、PC和移动端是两套独立的设置、图标选择请在此处： https://icon-sets.iconify.design/ 找到或搜索到喜欢的图标之后可以复制下方的图标编号 例如material-symbols:chat-outline、更加详细文档参考官方演示站公告文档地址！",type:"success"})]),_:1}),l(se,{style:{margin:"20px"}},{header:t(()=>[r("div",ve,[_e,r("div",ge,[l(ee,{modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=e=>h.value=e),size:"large"},{default:t(()=>[l(q,{value:1},{default:t(()=>[s(" PC端 ")]),_:1}),l(q,{value:0},{default:t(()=>[s(" 移动端 ")]),_:1})]),_:1},8,["modelValue"]),l(y,{size:"large",class:"ml-5",onClick:X},{default:t(()=>[s(" 添加菜单 "),l(oe,{class:"ml-3"},{default:t(()=>[l(le)]),_:1})]),_:1})])])]),default:t(()=>[l(ne,{data:J.value,style:{width:"100%"}},{default:t(()=>[l(d,{prop:"menuTipText",label:"菜单文本",fixed:""}),l(d,{prop:"menuType",label:"菜单类型"},{default:t(e=>[l($,{type:e.row.menuType?"success":"danger"},{default:t(()=>[s(_(e.row.menuType===0?"系统预设":"自定义菜单"),1)]),_:2},1032,["type"])]),_:1}),l(d,{prop:"isJump",label:"是否打开新窗口"},{default:t(e=>[l($,{type:e.row.isJump?"success":"danger"},{default:t(()=>[s(_(e.row.isJump?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(d,{prop:"isShow",label:"是否显示菜单"},{default:t(e=>[l($,{type:e.row.isShow?"success":"danger"},{default:t(()=>[s(_(e.row.isShow?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(d,{prop:"isToolbox",label:"是否显示在工具箱"},{default:t(e=>[l(b,{modelValue:e.row.isToolbox,"onUpdate:modelValue":v=>e.row.isToolbox=v,onClick:v=>O(e.row,"isToolbox"),"active-value":!0,"inactive-value":!1},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1}),l(d,{prop:"isToolTop",label:"是否显示在工具箱置顶"},{default:t(e=>[l(b,{modelValue:e.row.isToolTop,"onUpdate:modelValue":v=>e.row.isToolTop=v,onClick:v=>O(e.row,"isToolTop"),"active-value":!0,"inactive-value":!1},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1}),l(d,{prop:"menuImg",label:"工具箱图片"},{default:t(e=>[e.row.menuImg?(m(),V(te,{key:0,src:e.row.menuImg},null,8,["src"])):(m(),z("span",ye,"暂无图片"))]),_:1}),l(d,{prop:"menuDesc",label:"工具箱描述"},{default:t(e=>[e.row.menuDesc?(m(),V(ae,{key:0,class:"",truncated:""},{default:t(()=>[s(_(e.row.menuDesc),1)]),_:2},1024)):(m(),z("span",be,"暂无描述"))]),_:1}),l(d,{prop:"isNeedAuth",label:"是否需要登录访问"},{default:t(e=>[l($,{type:e.row.isNeedAuth?"success":"danger"},{default:t(()=>[s(_(e.row.isNeedAuth?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(d,{prop:"menuIcon",label:"菜单图标"},{default:t(e=>[l(ce,{style:{"font-size":"24px"},icon:e.row.menuIcon},null,8,["icon"])]),_:1}),l(d,{prop:"order",label:"排序"}),l(d,{prop:"menuPath",label:"菜单路径"},{default:t(e=>[s(_(e.row.menuPath||"---"),1)]),_:1}),l(d,{prop:"menuIframeUrl",label:"三方网页链接"},{default:t(e=>[s(_(e.row.menuIframeUrl||"---"),1)]),_:1}),l(d,{label:"操作",fixed:"right",width:"300"},{default:t(e=>[r("div",Ve,[l(y,{size:"small",onClick:v=>Z(e.row)},{default:t(()=>[s(" 编辑菜单 ")]),_:2},1032,["onClick"]),(e.row.menuType,T("",!0)),l(y,{type:e.row.isShow?"danger":"success",size:"small",onClick:v=>K(e.row)},{default:t(()=>[s(_(e.row.isShow?"隐藏菜单":"打开菜单"),1)]),_:2},1032,["type","onClick"]),e.row.menuType?(m(),V(ue,{key:1,title:"是否删除当前菜单？",onConfirm:v=>Q(e.row)},{reference:t(()=>[l(y,{type:"danger",size:"small"},{default:t(()=>[s(" 删除菜单 ")]),_:1})]),_:2},1032,["onConfirm"])):T("",!0)])]),_:1})]),_:1},8,["data"])]),_:1}),l(F,{modelValue:x.value,"onUpdate:modelValue":o[16]||(o[16]=e=>x.value=e),"close-on-click-modal":!1,title:L(G),width:"570",onClose:o[17]||(o[17]=e=>B(U.value))},{footer:t(()=>[r("span",we,[l(y,{onClick:o[14]||(o[14]=e=>x.value=!1)},{default:t(()=>[s("我再想想")]),_:1}),l(y,{type:"primary",onClick:o[15]||(o[15]=e=>Y(U.value))},{default:t(()=>[s(_(L(H)),1)]),_:1})])]),default:t(()=>[l(de,{ref_key:"formRef",ref:U,"label-width":"140",rules:W,model:a.value},{default:t(()=>[l(i,{label:"是否打开菜单",prop:"isShow"},{default:t(()=>[l(b,{modelValue:a.value.isShow,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value.isShow=e)},null,8,["modelValue"])]),_:1}),l(i,{label:"是否属于三方网页",prop:"isSystem"},{default:t(()=>[l(b,{modelValue:a.value.isSystem,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value.isSystem=e)},null,8,["modelValue"])]),_:1}),l(i,{label:"是否显示在工具箱",prop:"isToolbox"},{default:t(()=>[l(b,{modelValue:a.value.isToolbox,"onUpdate:modelValue":o[3]||(o[3]=e=>a.value.isToolbox=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),a.value.isToolbox?(m(),V(i,{key:0,label:"工具箱是否置顶",prop:"isToolTop"},{default:t(()=>[l(b,{modelValue:a.value.isToolTop,"onUpdate:modelValue":o[4]||(o[4]=e=>a.value.isToolTop=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1})):T("",!0),a.value.isToolbox?(m(),V(i,{key:1,label:"工具箱描述",prop:"menuDesc"},{default:t(()=>[l(f,{modelValue:a.value.menuDesc,"onUpdate:modelValue":o[5]||(o[5]=e=>a.value.menuDesc=e),placeholder:"请填写菜单提示文字"},null,8,["modelValue"])]),_:1})):T("",!0),a.value.isToolbox?(m(),V(i,{key:2,label:"工具箱图片",prop:"menuDesc"},{default:t(()=>[l(fe,{url:a.value.menuImg,"onUpdate:url":o[6]||(o[6]=e=>a.value.menuImg=e)},null,8,["url"])]),_:1})):T("",!0),l(i,{label:"菜单文本提示信息",prop:"menuTipText"},{default:t(()=>[l(f,{modelValue:a.value.menuTipText,"onUpdate:modelValue":o[7]||(o[7]=e=>a.value.menuTipText=e),placeholder:"请填写菜单提示文字"},null,8,["modelValue"])]),_:1}),l(i,{label:"菜单图标编号",prop:"menuIcon"},{default:t(()=>[l(f,{modelValue:a.value.menuIcon,"onUpdate:modelValue":o[8]||(o[8]=e=>a.value.menuIcon=e),placeholder:"请填写菜单ICON图标"},null,8,["modelValue"])]),_:1}),a.value.isSystem?(m(),V(i,{key:3,label:"加载三方网页地址",prop:"menuIframeUrl"},{default:t(()=>[l(f,{modelValue:a.value.menuIframeUrl,"onUpdate:modelValue":o[9]||(o[9]=e=>a.value.menuIframeUrl=e),placeholder:"请填写加载的三方网页地址"},null,8,["modelValue"])]),_:1})):T("",!0),l(i,{label:"数字编号排序",prop:"order"},{default:t(()=>[l(f,{modelValue:a.value.order,"onUpdate:modelValue":o[10]||(o[10]=e=>a.value.order=e),type:"number",placeholder:"请填写排序Id、越小越靠前"},null,8,["modelValue"])]),_:1}),a.value.isSystem?T("",!0):(m(),V(i,{key:4,label:"系统内菜单路径",prop:"menuPath"},{default:t(()=>[l(f,{modelValue:a.value.menuPath,"onUpdate:modelValue":o[11]||(o[11]=e=>a.value.menuPath=e),placeholder:"请填写系统内置菜单地址"},null,8,["modelValue"])]),_:1})),l(i,{label:"是否打开新窗口",prop:"isJump"},{default:t(()=>[l(b,{modelValue:a.value.isJump,"onUpdate:modelValue":o[12]||(o[12]=e=>a.value.isJump=e)},null,8,["modelValue"])]),_:1}),l(i,{label:"是否需要登录访问",prop:"isNeedAuth"},{default:t(()=>[l(b,{modelValue:a.value.isNeedAuth,"onUpdate:modelValue":o[13]||(o[13]=e=>a.value.isNeedAuth=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(F,{modelValue:P.value,"onUpdate:modelValue":o[22]||(o[22]=e=>P.value=e),title:"修改默认信息",width:"570",onClose:o[23]||(o[23]=e=>B(U.value))},{footer:t(()=>[r("span",Ue,[l(y,{onClick:o[21]||(o[21]=e=>P.value=!1)},{default:t(()=>[s("我再想想")]),_:1}),l(y,{type:"primary",onClick:E},{default:t(()=>[s(" 确认修改 ")]),_:1})])]),default:t(()=>[r("div",Te,[xe,l(f,{modelValue:M.value,"onUpdate:modelValue":o[18]||(o[18]=e=>M.value=e),placeholder:"请填写要修改的ICON编码"},null,8,["modelValue"])]),r("div",Ie,[ke,l(f,{modelValue:S.value,"onUpdate:modelValue":o[19]||(o[19]=e=>S.value=e),placeholder:"请填写要修改的菜单名称"},null,8,["modelValue"])]),r("div",Ce,[he,l(f,{modelValue:N.value,"onUpdate:modelValue":o[20]||(o[20]=e=>N.value=e),placeholder:"请修改菜单排序 越大越靠前"},null,8,["modelValue"])])]),_:1},8,["modelValue"])])}}});typeof R=="function"&&R(Me);export{Me as default};
