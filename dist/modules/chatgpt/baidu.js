'use strict';const _0x1d493e=_0x3d7f;(function(_0x40eda9,_0x110e73){const _0x184bb8=_0x3d7f,_0x1309f6=_0x40eda9();while(!![]){try{const _0x553c3c=parseInt(_0x184bb8(0x165))/0x1*(-parseInt(_0x184bb8(0x16e))/0x2)+parseInt(_0x184bb8(0x15f))/0x3+-parseInt(_0x184bb8(0x159))/0x4+parseInt(_0x184bb8(0x158))/0x5*(-parseInt(_0x184bb8(0x156))/0x6)+parseInt(_0x184bb8(0x16c))/0x7+parseInt(_0x184bb8(0x168))/0x8+parseInt(_0x184bb8(0x14b))/0x9;if(_0x553c3c===_0x110e73)break;else _0x1309f6['push'](_0x1309f6['shift']());}catch(_0x554570){_0x1309f6['push'](_0x1309f6['shift']());}}}(_0x17af,0xe9fe5));Object[_0x1d493e(0x153)](exports,_0x1d493e(0x162),{'value':!![]}),exports[_0x1d493e(0x163)]=exports[_0x1d493e(0x14c)]=void 0x0;const axios=require('axios'),getApiModelMaps=()=>{const _0x3efba7=_0x1d493e,_0xacd1c2={},_0x1ae541={'ERNIE-Bot':_0x3efba7(0x151),'ERNIE-Bot-turbo':'eb-instant','BLOOMZ-7B':_0x3efba7(0x154),'ERNIE-Bot-4':_0x3efba7(0x148),'Llama-2-7b-chat':_0x3efba7(0x15e),'Llama-2-13b-chat':_0x3efba7(0x157),'ChatGLM2-6B-32K':_0x3efba7(0x14f),'Qianfan-Chinese-Llama-2-7B':_0x3efba7(0x16a)};return Object['keys'](_0x1ae541)[_0x3efba7(0x14a)](_0x44dd77=>{const _0xb77117=_0x3efba7;_0xacd1c2[''+_0x44dd77[_0xb77117(0x150)]()]=_0x1ae541[_0x44dd77];}),_0xacd1c2;};function getAccessToken(_0x82ff0a,_0x187309){const _0x2dbc8f=_0x1d493e,_0x57ed3f='https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+_0x82ff0a+_0x2dbc8f(0x166)+_0x187309;return new Promise((_0x25d39b,_0x5eab18)=>{const _0x3d36ea=_0x2dbc8f;axios[_0x3d36ea(0x15b)](_0x57ed3f)[_0x3d36ea(0x15a)](_0x23b2c7=>{const _0x1a5ce7=_0x3d36ea;_0x25d39b(_0x23b2c7[_0x1a5ce7(0x152)][_0x1a5ce7(0x160)]);})[_0x3d36ea(0x16d)](_0x57e606=>{_0x5eab18(_0x57e606);});});}function _0x3d7f(_0x20b979,_0x48ac13){const _0x17af2a=_0x17af();return _0x3d7f=function(_0x3d7f42,_0xea854d){_0x3d7f42=_0x3d7f42-0x148;let _0x4fe05b=_0x17af2a[_0x3d7f42];return _0x4fe05b;},_0x3d7f(_0x20b979,_0x48ac13);}exports[_0x1d493e(0x14c)]=getAccessToken;function _0x17af(){const _0x1e7520=['trim','chatglm2_6b_32k','toLowerCase','completions','data','defineProperty','bloomz_7b1','toString','6NzYMZS','llama_2_13b','264235YpyqgH','7227976CDxKIy','then','post','application/json','data:\x20','llama_2_7b','1791765QicGeh','access_token','https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/','__esModule','sendMessageFromBaidu','replace','78315wDQgUi','&client_secret=','split','11651120PIYmEp','parse','qianfan_chinese_llama_2_7b','end','10341366mGihCN','catch','30eElhsS','completions_pro','?access_token=','map','4158180bZnRkZ','getAccessToken','stream'];_0x17af=function(){return _0x1e7520;};return _0x17af();}function sendMessageFromBaidu(_0x104043,{onProgress:_0x2258d0,accessToken:_0x23243b,model:_0x596db4,temperature:temperature=0.95}){const _0x38e0c2=_0x1d493e,_0x253de5=getApiModelMaps()[_0x596db4[_0x38e0c2(0x14e)]()['toLowerCase']()];return new Promise((_0x2b0027,_0x437b2a)=>{const _0x1e27af=_0x38e0c2,_0x505949=_0x1e27af(0x161)+_0x253de5+_0x1e27af(0x149)+_0x23243b,_0x1c56f5={'method':'POST','url':_0x505949,'responseType':_0x1e27af(0x14d),'headers':{'Content-Type':_0x1e27af(0x15c)},'data':{'stream':!![],'messages':_0x104043}};axios(_0x1c56f5)[_0x1e27af(0x15a)](_0x16b43a=>{const _0x136ea9=_0x1e27af,_0x2da2f6=_0x16b43a[_0x136ea9(0x152)];let _0x1dd9a5={},_0x1e1174='',_0x43de55='';_0x2da2f6['on'](_0x136ea9(0x152),_0x4e0110=>{const _0x4651f9=_0x136ea9,_0x4e19e7=_0x4e0110[_0x4651f9(0x155)]()[_0x4651f9(0x167)]('\x0a\x0a')['filter'](_0x144b9f=>_0x144b9f[_0x4651f9(0x14e)]()!=='');for(const _0xbed9b2 of _0x4e19e7){const _0x448a76=_0xbed9b2[_0x4651f9(0x164)](_0x4651f9(0x15d),'');try{const _0x420b30=_0x1e1174+_0x448a76,_0x4df7d2=JSON[_0x4651f9(0x169)](_0x420b30);_0x1e1174='';const {is_end:_0xcf1527,result:_0x27a2b3}=_0x4df7d2;_0x27a2b3&&(_0x43de55+=_0x27a2b3),_0xcf1527&&(_0x1dd9a5=_0x4df7d2,_0x1dd9a5['text']=_0x43de55),_0x2258d0(_0x4df7d2);}catch(_0x399606){_0x1e1174=_0x448a76;}}}),_0x2da2f6['on'](_0x136ea9(0x16b),()=>{_0x43de55='',_0x1e1174='',_0x2b0027(_0x1dd9a5);});})[_0x1e27af(0x16d)](_0x4fa974=>{_0x437b2a(new Error(_0x4fa974));});});}exports[_0x1d493e(0x163)]=sendMessageFromBaidu;