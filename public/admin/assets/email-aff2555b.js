import{d as A,O as q,r as V,y as w,c as u,o as B,e as k,h as e,i as l,f as n,l as E,P as b,E as x,z as C,s as y}from"./index-a2cde0ca.js";const K={class:"flex justify-between"},D=n("b",null,"邮件发送设置",-1),L=n("b",{class:"mb-5"},"注册邮件基础配置",-1),h=n("b",{class:"mb-5 mt-3"},"注册成功页面基础配置",-1),j=n("b",{class:"mb-5 mt-3"},"注册失败页面基础配置",-1),M=A({__name:"email",setup(O){const a=q({emailRegisterStatus:"",emailLoginStatus:"",registerBaseUrl:"",registerVerifyEmailTitle:"",registerVerifyEmailDesc:"",registerVerifyEmailFrom:"",registerVerifyExpir:"",registerSuccessEmailTitle:"",registerSuccessEmailTeamName:"",registerSuccessEmaileAppend:"",registerFailEmailTitle:"",registerFailEmailTeamName:""}),T=V({registerBaseUrl:[{required:!0,trigger:"blur",message:"请填写注册后端服务基础地址！"}],registerVerifyEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱标题"}],registerVerifyEmailFrom:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱来源团队"}],registerVerifyEmailDesc:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱正文内容"}],registerVerifyExpir:[{required:!0,trigger:"blur",message:"请填写注册验证码的过期时间"}],registerSuccessEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册成功页的标题"}],registerSuccessEmailTeamName:[{required:!0,trigger:"blur",message:"请填写注册成功页的团队名称"}],registerSuccessEmaileAppend:[{required:!0,trigger:"blur",message:"请填写注册成功页的正文追加内容"}],registerFailEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册失败页的标题名称"}],registerFailEmailTeamName:[{required:!0,trigger:"blur",message:"请填写注册失败页的团队名称"}]}),g=V();async function c(){const d=await b.queryConfig({keys:["registerBaseUrl","registerVerifyEmailTitle","registerVerifyEmailFrom","registerVerifyEmailDesc","registerVerifyExpir","registerSuccessEmailTitle","registerSuccessEmailTeamName","registerSuccessEmaileAppend","registerFailEmailTitle","registerFailEmailTeamName","emailRegisterStatus","emailLoginStatus"]});Object.assign(a,d.data)}function S(){var d;(d=g.value)==null||d.validate(async r=>{if(r){try{await b.setConfig({settings:F(a)}),x.success("变更配置信息成功")}catch{}c()}else x.error("请填写完整信息")})}function F(d){return Object.keys(d).map(r=>({configKey:r,configVal:d[r]}))}return w(()=>{c()}),(d,r)=>{const f=u("el-alert"),U=C,v=u("el-button"),p=u("el-switch"),_=u("el-tooltip"),s=u("el-form-item"),o=u("el-col"),i=u("el-row"),m=u("el-input"),N=u("el-form"),R=u("el-card");return B(),k("div",null,[e(U,null,{default:l(()=>[e(f,{closable:!1,"show-icon":"",title:"邮件设置说明",description:"这里的邮件设置是作用于注册发送的激活邮件、您需要先在服务的env文件中配置邮件服务信息、后续将迁移至此。",type:"success"})]),_:1}),e(R,{style:{margin:"20px"}},{header:l(()=>[n("div",K,[D,e(v,{class:"button",text:"",onClick:S},{default:l(()=>[E(" 保存设置 ")]),_:1})])]),default:l(()=>[e(N,{ref_key:"formRef",ref:g,rules:T.value,model:a,"label-width":"190px"},{default:l(()=>[e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"是否开启邮箱登录",prop:"emailLoginStatus"},{default:l(()=>[e(_,{class:"box-item",effect:"dark",content:"如您启用当前邮箱登录、则用户端可以通过邮箱登录！",placement:"right"},{default:l(()=>[e(p,{modelValue:a.emailLoginStatus,"onUpdate:modelValue":r[0]||(r[0]=t=>a.emailLoginStatus=t),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"是否开启邮箱注册",prop:"emailRegisterStatus"},{default:l(()=>[e(_,{class:"box-item",effect:"dark",content:"如您启用当前邮箱注册、则用户端可以通过邮箱注册！",placement:"right"},{default:l(()=>[e(p,{modelValue:a.emailRegisterStatus,"onUpdate:modelValue":r[1]||(r[1]=t=>a.emailRegisterStatus=t),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[L]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"后端服务BASE_URL",prop:"registerBaseUrl"},{default:l(()=>[e(m,{modelValue:a.registerBaseUrl,"onUpdate:modelValue":r[2]||(r[2]=t=>a.registerBaseUrl=t),placeholder:"示例地址: http://ai.xxxx.com 后端服务地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册验证码下发邮件标题",prop:"registerVerifyEmailTitle"},{default:l(()=>[e(m,{modelValue:a.registerVerifyEmailTitle,"onUpdate:modelValue":r[3]||(r[3]=t=>a.registerVerifyEmailTitle=t),placeholder:"默认标题: RocKet Ai团队验证码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册验证码下发邮件来源",prop:"registerVerifyEmailFrom"},{default:l(()=>[e(m,{modelValue:a.registerVerifyEmailFrom,"onUpdate:modelValue":r[4]||(r[4]=t=>a.registerVerifyEmailFrom=t),placeholder:"邮件尾部来源 From: (默认： RocKet_Ai_Team)",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册时下发邮件详细内容",prop:"registerVerifyEmailDesc"},{default:l(()=>[e(m,{modelValue:a.registerVerifyEmailDesc,"onUpdate:modelValue":r[5]||(r[5]=t=>a.registerVerifyEmailDesc=t),type:"textarea",rows:3,placeholder:"默认内容(欢迎使用RocKetTeam团队AI团队的产品服务,请在三十分钟内完成你的账号激活,点击以下按钮激活您的账号) | 发送的邮件内容、会追加一个激活按钮、详细内容请查看文档。    ",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册账号验证码有效时间",prop:"registerVerifyExpir"},{default:l(()=>[e(m,{modelValue:a.registerVerifyExpir,"onUpdate:modelValue":r[6]||(r[6]=t=>a.registerVerifyExpir=t),modelModifiers:{number:!0},placeholder:"注册验证码的有效时间（默认 30 * 60 = 30分钟）",clearable:""},{append:l(()=>[E(" s ")]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[h]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册成功通知页标题内容",prop:"registerSuccessEmailTitle"},{default:l(()=>[e(m,{modelValue:a.registerSuccessEmailTitle,"onUpdate:modelValue":r[7]||(r[7]=t=>a.registerSuccessEmailTitle=t),placeholder:"默认标题: RocKetTeam团队账户激活成功",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册成功通知页团队名称",prop:"registerSuccessEmailTeamName"},{default:l(()=>[e(m,{modelValue:a.registerSuccessEmailTeamName,"onUpdate:modelValue":r[8]||(r[8]=t=>a.registerSuccessEmailTeamName=t),placeholder:"邮件尾部来源 From: (默认： RocKet_Ai_Team)",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"通知页邮件详情追加内容",prop:"registerSuccessEmaileAppend"},{default:l(()=>[e(m,{modelValue:a.registerSuccessEmaileAppend,"onUpdate:modelValue":r[9]||(r[9]=t=>a.registerSuccessEmaileAppend=t),type:"textarea",rows:3,placeholder:"默认内容(亲爱的{{ username }},欢迎加入{{ xx }}团队,您是尊贵的{{ 000x }}号用户，你的账号[username] | [email] 已经激活成功)、此处填写内容将追加至默认内容后方。",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[j]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册失败通知页标题内容",prop:"registerFailEmailTitle"},{default:l(()=>[e(m,{modelValue:a.registerFailEmailTitle,"onUpdate:modelValue":r[10]||(r[10]=t=>a.registerFailEmailTitle=t),placeholder:"默认标题: RocKet Team团队账户激活失败",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(s,{label:"注册失败通知页团队名称",prop:"registerFailEmailTeamName"},{default:l(()=>[e(m,{modelValue:a.registerFailEmailTeamName,"onUpdate:modelValue":r[11]||(r[11]=t=>a.registerFailEmailTeamName=t),placeholder:"邮件尾部来源 From: (默认： RocKet_Team_Ai)",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof y=="function"&&y(M);export{M as default};
