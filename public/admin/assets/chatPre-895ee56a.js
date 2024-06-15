import{d as Ce,r as c,O as I,I as D,y as xe,c as n,Q as we,o as V,e as Z,h as e,i as t,l as m,t as k,g as r,M as S,w as E,L as A,f as $,J as Be,K as Ve,E as U,S as ee,z as ke,s as te}from"./index-a2cde0ca.js";import{A as b}from"./chatgpt-578817a1.js";import{_ as Te}from"./index.vue_vue_type_script_setup_true_lang-f3923d1e.js";const Pe=$("div",{style:{width:"250px"}}," 关闭当前分类、用户端将不再展示！ ",-1),qe={class:"flex justify-end mr-5"},Ie=$("div",{style:{width:"250px"}}," 关闭当前子项、用户端将不再展示！ ",-1),De={class:"flex justify-end mr-5"},Ue=Ce({__name:"chatPre",setup($e){const T=c(!1),P=c(!1),C=c(),le=c(),_=c(0),v=c(0),u=I({status:!0,name:"",order:100,icon:""}),d=I({typeId:"",status:!0,title:"",order:100,prompt:""}),ae=I({status:[{required:!0,message:"请选择开启状态",trigger:"change"}],name:[{required:!0,message:"请填写分类名称",trigger:"blur"}],icon:[{required:!0,message:"请填写分类图标",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}]}),oe=I({typeId:[{required:!0,message:"请选择分类",trigger:"change"}],status:[{required:!0,message:"请选择开启状态",trigger:"change"}],title:[{required:!0,message:"请填写标题名称",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}],prompt:[{required:!1,message:"请填写快捷描述语",trigger:"blur"}]});function ne(o){_.value=0,o==null||o.resetFields()}function se(o){v.value=0,o==null||o.resetFields()}const g=c(!1),y=c(!1),x=c("chatBoxType"),re=D(()=>_.value?"更新分类":"新增分类"),ue=D(()=>v.value?"更新子项":"新增子项"),F=D(()=>_.value?"确认更新":"确认新增"),z=c([]),J=c([]);async function q(){try{T.value=!0;const o=await b.queryChatPreTypes();T.value=!1,z.value=o.data}catch{T.value=!1}}async function O(){try{P.value=!0;const o=await b.queryChatPres();P.value=!1,J.value=o.data}catch{P.value=!1}}async function de(o){const{id:l}=o;await b.delChatPreType({id:l}),U({type:"success",message:"操作完成！"}),q()}async function ie(o){const{id:l}=o;await b.delChatPre({id:l}),U({type:"success",message:"操作完成！"}),O()}function pe(o){_.value=o.id;const{status:l,name:s,icon:w,order:h}=o;ee(()=>{Object.assign(u,{status:l,name:s,icon:w,order:h})}),g.value=!0}function ce(o){v.value=o.id;const{title:l,order:s,status:w,typeId:h,prompt:i}=o;ee(()=>{Object.assign(d,{title:l,order:s,status:w,typeId:h,prompt:i})}),y.value=!0}function me(o){o==="chatBoxType"?q():O()}async function fe(o){o==null||o.validate(async l=>{if(l){const s=JSON.parse(JSON.stringify(u));delete s.id,_.value&&(s.id=_.value),await b.setChatPreType(s),U({type:"success",message:"操作成功！"}),_.value=0,g.value=!1,q()}})}async function _e(o){o==null||o.validate(async l=>{if(l){const s=JSON.parse(JSON.stringify(d));console.log("params: ",s),delete s.id,v.value&&(s.id=v.value),await b.setChatPre(s),U({type:"success",message:"操作成功！"}),v.value=0,y.value=!1,O()}})}const ge=D(()=>x.value==="chatBoxType"?"添加快问分类":"添加预设问题");function ye(){x.value==="chatBoxType"?g.value=!0:y.value=!0}return xe(()=>{q()}),(o,l)=>{const s=n("el-alert"),w=n("Plus"),h=n("el-icon"),i=n("el-button"),R=ke,j=n("el-tag"),p=n("el-table-column"),M=n("el-popconfirm"),Q=n("el-table"),L=n("el-tab-pane"),he=n("el-tabs"),K=n("el-switch"),G=n("QuestionFilled"),H=n("el-tooltip"),f=n("el-form-item"),B=n("el-input"),W=n("el-form"),X=n("el-dialog"),ve=n("el-option"),be=n("el-select"),Y=we("loading");return V(),Z("div",null,[e(R,{class:"header"},{default:t(()=>[e(s,{"show-icon":"",title:"快问说明",description:"此处设置用于对话窗口的左下角、点击可以快速打开我们创建的分类、每个分类下我们可以预设一些提问、只需要在提问的地方 补充其他内容即可完成快速提问！",type:"success"}),e(i,{type:"success",class:"ml-3",size:"large",onClick:ye},{default:t(()=>[m(k(ge.value)+" ",1),e(h,{class:"ml-3"},{default:t(()=>[e(w)]),_:1})]),_:1})]),_:1}),e(R,{style:{width:"100%"}},{default:t(()=>[e(he,{modelValue:r(x),"onUpdate:modelValue":l[0]||(l[0]=a=>S(x)?x.value=a:null),type:"border-card",onTabChange:me},{default:t(()=>[e(L,{name:"chatBoxType",label:"分类管理"},{default:t(()=>[E((V(),A(Q,{border:"",data:r(z),style:{width:"100%"},size:"large"},{default:t(()=>[e(p,{prop:"status",align:"center",label:"分类状态"},{default:t(a=>[e(j,{type:a.row.status?"success":"danger"},{default:t(()=>[m(k(a.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),e(p,{prop:"name",label:"分类名称"}),e(p,{prop:"order",label:"排序ID"}),e(p,{prop:"icon",label:"分类图标"},{default:t(a=>[e(Te,{style:{"font-size":"24px"},icon:a.row.icon},null,8,["icon"])]),_:1}),e(p,{fixed:"right",label:"操作",align:"center",width:"180"},{default:t(a=>[e(i,{link:"",type:"primary",size:"small",onClick:N=>pe(a.row)},{default:t(()=>[m(" 变更 ")]),_:2},1032,["onClick"]),e(M,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:N=>de(a.row)},{reference:t(()=>[e(i,{link:"",type:"danger",size:"small"},{default:t(()=>[m(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Y,r(T)]])]),_:1}),e(L,{name:"chatBox",label:"子类管理"},{default:t(()=>[E((V(),A(Q,{border:"",data:r(J),style:{width:"100%"},size:"large"},{default:t(()=>[e(p,{prop:"typeInfo.name",label:"所属分类",width:"120",align:"center"}),e(p,{prop:"status",label:"开启状态",width:"120",align:"center"},{default:t(a=>[e(j,{type:a.row.status?"success":"danger"},{default:t(()=>[m(k(a.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),e(p,{prop:"title",label:"标题名称",width:"180",align:"center"}),e(p,{prop:"order",label:"排序ID",width:"90",align:"center"}),e(p,{prop:"prompt",label:"快捷预问题"}),e(p,{fixed:"right",label:"操作",align:"center",width:"180"},{default:t(a=>[e(i,{link:"",type:"primary",size:"small",onClick:N=>ce(a.row)},{default:t(()=>[m(" 变更 ")]),_:2},1032,["onClick"]),e(M,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:N=>ie(a.row)},{reference:t(()=>[e(i,{link:"",type:"danger",size:"small"},{default:t(()=>[m(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Y,r(P)]])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(X,{modelValue:r(g),"onUpdate:modelValue":l[6]||(l[6]=a=>S(g)?g.value=a:null),"close-on-click-modal":!1,title:re.value,width:"770",onClose:l[7]||(l[7]=a=>ne(r(C)))},{footer:t(()=>[$("span",qe,[e(i,{onClick:l[4]||(l[4]=a=>g.value=!1)},{default:t(()=>[m("取消")]),_:1}),e(i,{type:"primary",onClick:l[5]||(l[5]=a=>fe(r(C)))},{default:t(()=>[m(k(F.value),1)]),_:1})])]),default:t(()=>[e(W,{ref_key:"formPackageChatBoxTypeRef",ref:C,"label-position":"right","label-width":"120px",model:u,rules:ae},{default:t(()=>[e(f,{label:"分类启用状态",prop:"status"},{default:t(()=>[e(K,{modelValue:u.status,"onUpdate:modelValue":l[1]||(l[1]=a=>u.status=a)},null,8,["modelValue"]),e(H,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Pe]),default:t(()=>[e(h,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(G)]),_:1})]),_:1})]),_:1}),e(f,{label:"排序Order",prop:"order"},{default:t(()=>[e(B,{modelValue:u.order,"onUpdate:modelValue":l[2]||(l[2]=a=>u.order=a),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),e(f,{label:"分类名称",prop:"name"},{default:t(()=>[e(B,{modelValue:u.name,"onUpdate:modelValue":l[3]||(l[3]=a=>u.name=a),placeholder:"请填写提示词名称（用户看到的名称）"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(X,{modelValue:r(y),"onUpdate:modelValue":l[15]||(l[15]=a=>S(y)?y.value=a:null),"close-on-click-modal":!1,title:ue.value,width:"770",onClose:l[16]||(l[16]=a=>se(r(le)))},{footer:t(()=>[$("span",De,[e(i,{onClick:l[13]||(l[13]=a=>y.value=!1)},{default:t(()=>[m("取消")]),_:1}),e(i,{type:"primary",onClick:l[14]||(l[14]=a=>_e(r(C)))},{default:t(()=>[m(k(F.value),1)]),_:1})])]),default:t(()=>[e(W,{ref_key:"formPackageChatBoxTypeRef",ref:C,"label-position":"right","label-width":"120px",model:d,rules:oe},{default:t(()=>[e(f,{label:"启用状态",prop:"status"},{default:t(()=>[e(K,{modelValue:u.status,"onUpdate:modelValue":l[8]||(l[8]=a=>u.status=a)},null,8,["modelValue"]),e(H,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ie]),default:t(()=>[e(h,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(G)]),_:1})]),_:1})]),_:1}),e(f,{label:"选择分类",prop:"typeId"},{default:t(()=>[e(be,{modelValue:d.typeId,"onUpdate:modelValue":l[9]||(l[9]=a=>d.typeId=a),placeholder:"请选择分类状态",clearable:"",style:{width:"100%"}},{default:t(()=>[(V(!0),Z(Be,null,Ve(r(z),a=>(V(),A(ve,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"标题名称",prop:"title"},{default:t(()=>[e(B,{modelValue:d.title,"onUpdate:modelValue":l[10]||(l[10]=a=>d.title=a),placeholder:"请填写子项标题名称"},null,8,["modelValue"])]),_:1}),e(f,{label:"排序Order",prop:"order"},{default:t(()=>[e(B,{modelValue:d.order,"onUpdate:modelValue":l[11]||(l[11]=a=>d.order=a),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),e(f,{label:"预设问题",prop:"prompt"},{default:t(()=>[e(B,{modelValue:d.prompt,"onUpdate:modelValue":l[12]||(l[12]=a=>d.prompt=a),type:"textarea",rows:5,placeholder:"请填写预设问题、如果设置了应用、那么点击优先跳转应用、如果未设置、点击则会直接在对话中发当前填写预设内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof te=="function"&&te(Ue);export{Ue as default};
