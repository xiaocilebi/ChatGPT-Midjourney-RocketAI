import{d as e,r as t,A as a,c as o,e as l,o as n,_ as i,ay as r,T as s}from"./index-62750275.js";const u={class:"relative w-full h-full flex"},h=["width","height"],d=["width","height"],p=i(e({__name:"index",props:{src:String,width:Number,height:Number,max:{type:Number,default:500},exportMaskBackgroundColor:{type:String,default:"black"},exportMaskColor:{type:String,default:"white"},penColor:{type:String,default:"white"},penWidth:{type:Number,default:20},updateFileInfo:Function},setup(e,{expose:i}){const r=e,s=t(null),p=t(null),g=t([]);let v=!1,c=[],f=new Image;const y=t(!1),w=t(0),m=t(0),x=t(0);a((()=>{var e;s.value.getContext("2d");const t=null==(e=p.value)?void 0:e.getContext("2d");f.src=r.src,f.onload=()=>{var e;const a=Math.min(r.max/f.width,r.max/f.height);x.value=a,w.value=r.width||(a<1?f.width*a:f.width),m.value=r.height||(a<1?f.height*a:f.height),null==(e=r.updateFileInfo)||e.call(r,{width:f.width,height:f.height,scaleRatio:a.toFixed(3)}),s.value.width=w.value,p.value.width=w.value,s.value.height=m.value,p.value.height=m.value,t.drawImage(f,0,0,w.value,m.value)},s.value.addEventListener("mousedown",b),s.value.addEventListener("mousemove",k),s.value.addEventListener("mouseup",C)}));const b=e=>{v=!0;const t=s.value.getContext("2d");t.beginPath(),t.moveTo(e.offsetX,e.offsetY),c=[{type:y.value?"erase":"draw",x:e.offsetX,y:e.offsetY}]},k=e=>{if(!v)return;const t=s.value.getContext("2d");t.lineTo(e.offsetX,e.offsetY),y.value?(t.globalCompositeOperation="destination-out",t.lineWidth=2*r.penWidth):(t.globalCompositeOperation="source-over",t.strokeStyle=r.penColor,t.lineWidth=r.penWidth),t.stroke(),c.push({type:y.value?"erase":"draw",x:e.offsetX,y:e.offsetY})},C=()=>{v=!1,g.value.push([...c,{type:"end"}]),c=[]};return i({getBase:async function(){return await new Promise(((e,t)=>{const a=document.createElement("canvas"),o=f;a.width=o.width,a.height=o.height;const l=a.getContext("2d");if(l){l.fillStyle=r.exportMaskBackgroundColor,l.fillRect(0,0,a.width,a.height),l.beginPath();const t=o.width/w.value,n=o.height/m.value;l.beginPath(),g.value.forEach((e=>{e.forEach(((a,o)=>{"begin"!==a.type&&"draw"!==a.type||(0!==o&&e[o-1].type===a.type||l.beginPath(),l.lineTo(a.x*t,a.y*n),l.strokeStyle=r.exportMaskColor,l.lineWidth=r.penWidth*t),"erase"===a.type&&(0!==o&&e[o-1].type===a.type||l.beginPath(),l.lineTo(a.x*t,a.y*n),l.strokeStyle=r.exportMaskBackgroundColor),o<e.length-1&&e[o+1].type!==a.type&&l.stroke()})),"begin"!==e[e.length-1].type&&l.stroke()})),e(a.toDataURL("image/png"))}else t(new Error("无法获取canvas的2D渲染上下文"))}))},undo:function(){g.value.length>0&&(g.value.pop(),function(){const e=s.value.getContext("2d");e.clearRect(0,0,s.value.width,s.value.height),e.drawImage(f,0,0,w.value,m.value),g.value.forEach((t=>{t.forEach(((a,o)=>{0!==o&&t[o-1].type===a.type||e.beginPath(),"erase"===a.type?(e.globalCompositeOperation="destination-out",e.strokeStyle="rgba(0,0,0,0)"):(e.globalCompositeOperation="source-over",e.strokeStyle="white"),e.lineWidth="erase"===a.type?2*r.penWidth:r.penWidth,e.lineTo(a.x,a.y),e.stroke(),o!==t.length-1&&t[o+1].type===a.type||e.closePath()}))})),e.globalCompositeOperation="source-over"}())},clear:function(){g.value=[],s.value.getContext("2d").clearRect(0,0,s.value.width,s.value.height)},toggleEraser:()=>{y.value=!y.value}}),(t,a)=>(n(),o("div",u,[l("canvas",{ref_key:"backgroundCanvas",ref:p,class:"absolute left-0 top-0",width:e.width,height:e.height},null,8,h),l("canvas",{ref_key:"canvas",ref:s,class:"absolute left-0 top-0",width:e.width,height:e.height},null,8,d)]))}}),[["__scopeId","data-v-a0d99c6e"]]);function g(e){return r({url:"/queue/addMjDrawQueue",data:e})}function v(e){return s({url:"/midjourney/proxy",data:e,headers:{responseType:"arraybuffer"}})}export{p as C,v as a,g as f};
