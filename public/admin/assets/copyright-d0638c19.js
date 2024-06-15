import{d as T,O as k,r as f,y as q,c as n,o as j,e as B,h as e,i as t,f as h,l as E,P as m,E as g,z as N,s as y}from"./index-a2cde0ca.js";const O={class:"flex justify-between"},M=h("b",null,"底部版权设置",-1),R=T({__name:"copyright",setup(z){const r=k({copyrightTitle:"",copyrightUrl:""}),b=f({copyrightUrl:[{required:!0,trigger:"blur",message:"请填写底部版权文字内容"}],copyrightTitle:[{required:!0,trigger:"blur",message:"请填写点击底部版本跳转的地址"}]}),s=f();async function c(){const o=await m.queryConfig({keys:["copyrightUrl","copyrightTitle"]});Object.assign(r,o.data)}function x(){var o;(o=s.value)==null||o.validate(async l=>{if(l){try{await m.setConfig({settings:V(r)}),g.success("变更配置信息成功")}catch{}c()}else g.error("请填写完整信息")})}function V(o){return Object.keys(o).map(l=>({configKey:l,configVal:o[l]}))}return q(()=>{c()}),(o,l)=>{const i=n("el-alert"),U=N,w=n("el-button"),u=n("el-input"),p=n("el-form-item"),_=n("el-col"),d=n("el-row"),C=n("el-form"),v=n("el-card");return j(),B("div",null,[e(U,null,{default:t(()=>[e(i,{closable:!1,"show-icon":"",title:"底部版本参数说明",description:"当前版本的后台版权信息、文字用于展示、地址用于点击文字的跳转地址",type:"success"})]),_:1}),e(v,{style:{margin:"20px"}},{header:t(()=>[h("div",O,[M,e(w,{class:"button",text:"",onClick:x},{default:t(()=>[E(" 保存设置 ")]),_:1})])]),default:t(()=>[e(C,{ref_key:"formRef",ref:s,rules:b.value,model:r,"label-width":"130px"},{default:t(()=>[e(d,null,{default:t(()=>[e(_,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(p,{label:"底部版权文字",prop:"copyrightTitle"},{default:t(()=>[e(u,{modelValue:r.copyrightTitle,"onUpdate:modelValue":l[0]||(l[0]=a=>r.copyrightTitle=a),placeholder:"请填写底部版权文字内容",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(_,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(p,{label:"底部跳转地址",prop:"copyrightUrl"},{default:t(()=>[e(u,{modelValue:r.copyrightUrl,"onUpdate:modelValue":l[1]||(l[1]=a=>r.copyrightUrl=a),placeholder:"请填写点击底部版本跳转的地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof y=="function"&&y(R);export{R as default};
