"use strict";var e=require("react"),t=require("prop-types");function i(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var n="index-module_tabs__rs-IT",o="index-module_tab__OjowT",l="index-module_activeTab__0TJNk";function r({children:t,style:i,activeTab:r,tabHandler:d,indicatorColor:a,activeTabStyle:s,deActiveTabStyle:c}){const[u,p]=e.useState([]);return e.useEffect((()=>{try{const e=t.map((e=>e));p(e)}catch(e){throw"Opps please pass the children in Tab component"}}),[]),e.createElement("div",{style:i,className:n},u.map(((t,i)=>{const n=a&&r===i?s?{borderBottom:`2px solid ${a}`,...s}:{borderBottom:`2px solid ${a}`}:s&&r===i?s:c||{};return e.createElement("div",{key:i,onClick:()=>d(i),style:n,className:r==i?l:o},t)})))}i(".index-module_tabs__rs-IT{background-color:#f0f1f5;border-bottom:1px solid #f0f1f5;box-sizing:border-box;display:flex;gap:20px;width:100%}.index-module_tab__OjowT{font-weight:400}.index-module_activeTab__0TJNk,.index-module_tab__OjowT{box-sizing:border-box;color:#000;cursor:pointer;font-family:Inter;font-size:15px;font-style:normal;height:100%;line-height:18px;width:fit-content}.index-module_activeTab__0TJNk{border-bottom:2px solid #4285fa;font-weight:600}");const d=({children:t,label:i,tabStyle:n})=>t||e.createElement("span",{style:n},i),a=({children:e,activeTab:t,index:i})=>{if(t===i)return e};r.propTypes={style:t.object,activeTab:t.number,tabHandler:t.func},d.propTypes={label:t.string},a.propTypes={activeTab:t.number,index:t.number};var s="index-module_container__gLUc2",c="index-module_container2__ILQUt",u="index-module_file__TEMf0",p="index-module_defaultPlaceHolderComponent__c5SUD";i(".index-module_container__gLUc2{background:#f2f2f2;border:1px dashed #37404d;border-radius:10px;padding:5px}.index-module_container2__ILQUt,.index-module_container__gLUc2{box-sizing:border-box;height:fit-content;position:relative;width:100%}.index-module_file__TEMf0{background-color:transparent;color:transparent;cursor:pointer;height:100%;left:0;outline:none;position:absolute;top:0;width:100%;z-index:2}.index-module_file__TEMf0::-webkit-file-upload-button{visibility:hidden}.index-module_defaultPlaceHolderComponent__c5SUD{align-items:center;background-color:#4287f5;box-sizing:border-box;display:flex;height:30px;justify-content:space-between;padding:10px;width:100%}");function m({getFiles:t,style:i,PlaceHolderComponent:n,multiple:o}){const[l,r]=e.useState([]),[d,a]=e.useState(!1),p=e=>{const t=l.filter((t=>t.id!==e));r(t)};return e.createElement("div",{style:i,className:n?c:s},e.createElement("input",{onChange:e=>{let i=l;for(let t of e.target.files){let e;e=t.type.includes("image")?"image":t.type.includes("video")?"video":"doc";const n={url:URL.createObjectURL(t),name:t.name,id:Math.ceil(1e6*Math.random(9)),size:t.size/1e3,type:e};o?i.push(n):i=[n]}r(i),t(i),a(!0)},className:u,type:"file",multiple:o}),n?e.createElement(n,{forceUpdate:d,files:l,deleteFile:p}):e.createElement(f,{forceUpdate:d,files:l,deleteFile:p}))}function f({files:t,deleteFile:i}){return e.createElement("div",{onClick:()=>i(t[0].id),className:p},1===t.length?t[0].name:"Upload file",e.createElement("img",{src:'<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.5 1.07031V15.0703" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M1.5 8.07031H15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',width:22,height:22,alt:"Add Icon"}))}f.propTypes={deleteFile:t.func,files:t.array},m.propTypes={getFiles:t.func,style:t.object,multiple:t.bool,PlaceHolderComponent:t.element};var h="index-module_fileContainer__qLKpZ",_="index-module_container__Avu-p",g="index-module_files__c8kEJ",x="index-module_upload__2vPae",b="index-module_hover__rksO8",v="index-module_hoverOverLay__krbBw",y="index-module_file__H5G-y";i(".index-module_fileContainer__qLKpZ{border:1px solid #000;height:90px;padding:2px;width:108px}.index-module_container__Avu-p{background:#f2f2f2;border:1px dashed #37404d;border-radius:10px;box-sizing:border-box;min-height:100px;padding:10px;width:100%}.index-module_files__c8kEJ{display:flex;flex-direction:row;flex-wrap:wrap;gap:10px}.index-module_files__c8kEJ div{border-radius:10px;height:90px;max-width:160px;min-width:108px}.index-module_files__c8kEJ div img{border-radius:10px}.index-module_hover__rksO8,.index-module_upload__2vPae{cursor:pointer;display:grid;height:100%;left:0;place-items:center;position:absolute;top:0;width:100%}.index-module_hover__rksO8{background-color:rgba(41,41,41,.5)}.index-module_hoverOverLay__krbBw{background-color:#04aa6d;height:100%;left:0;opacity:.7;position:absolute;top:0;width:100%}.index-module_file__H5G-y{background-color:transparent;color:transparent;cursor:pointer;height:100%;left:0;outline:none;position:absolute;top:0;width:100%;z-index:2}.index-module_file__H5G-y::-webkit-file-upload-button{visibility:hidden}");function w({deleteFile:t,file:i}){const[n,o]=e.useState(!1),l=e.useRef(null);let r;switch(e.useEffect((()=>{const e=()=>{n||o(!0)},t=()=>{o(!1)};return l?.current?.addEventListener("mouseover",e),l?.current?.addEventListener("mouseout",t),()=>{l?.current?.removeEventListener("mouseover",e),l?.current?.removeEventListener("mouseout",t)}}),[]),i.type){case"image":r=()=>e.createElement("div",{className:h},e.createElement("img",{alt:"file icon",layout:"fixed",width:"100%",height:"100%",src:i.url}));break;case"video":r=()=>e.createElement("div",{className:h},e.createElement("video",{width:"100%",height:"100%",controls:!0},e.createElement("source",{src:i.url,type:"video/mp4"})));break;default:r=()=>e.createElement("div",{className:h},e.createElement("iframe",{src:i.url,style:{width:"100%",height:"100%",border:"none",borderRadius:10}}))}return e.createElement("div",{ref:l,style:{position:"relative"},onClick:()=>t(i.id)},e.createElement(r,null),n&&e.createElement("div",{className:b},e.createElement("img",{alt:"file icon",layout:"fixed",width:32,height:32,src:'<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="12.25" cy="12.0703" r="12" fill="#F9F9F9"/>\n<path d="M10.4688 8.22656H10.375C10.4266 8.22656 10.4688 8.18437 10.4688 8.13281V8.22656H14.0312V8.13281C14.0312 8.18437 14.0734 8.22656 14.125 8.22656H14.0312V9.07031H14.875V8.13281C14.875 7.71914 14.5387 7.38281 14.125 7.38281H10.375C9.96133 7.38281 9.625 7.71914 9.625 8.13281V9.07031H10.4688V8.22656ZM16.375 9.07031H8.125C7.91758 9.07031 7.75 9.23789 7.75 9.44531V9.82031C7.75 9.87188 7.79219 9.91406 7.84375 9.91406H8.55156L8.84102 16.043C8.85977 16.4426 9.19023 16.7578 9.58984 16.7578H14.9102C15.3109 16.7578 15.6402 16.4438 15.659 16.043L15.9484 9.91406H16.6562C16.7078 9.91406 16.75 9.87188 16.75 9.82031V9.44531C16.75 9.23789 16.5824 9.07031 16.375 9.07031ZM14.8199 15.9141H9.68008L9.39648 9.91406H15.1035L14.8199 15.9141Z" fill="black"/>\n</svg>'})))}function C({getFiles:t,style:i}){const[n,o]=e.useState([]),[l,r]=e.useState(!1),[d,a]=e.useState(!0),s=e.useRef(null),c=()=>Math.ceil(1e6*Math.random(9)),u=(e,i)=>{const l=n;if(i){for(let t of e.dataTransfer.files){let e;e=t.type.includes("image")?"image":t.type.includes("video")?"video":"doc",l.push({url:URL.createObjectURL(t),name:t.name,id:c(),size:t.size/1e3,type:e})}return o(l),t(l),void a(0===l.length)}for(let t of e.target.files){let e;e=t.type.includes("image")?"image":t.type.includes("video")?"video":"doc",l.push({url:URL.createObjectURL(t),name:t.name,id:c(),size:t.size/1e3,type:e})}o(l),t(l),a(0===l.length)},p=e=>{const t=n.filter((t=>t.id!==e));o(t),a(0===t.length)};return e.useEffect((()=>{const e=e=>{e.preventDefault(),r(!0)};s?.current?.addEventListener("dragover",e);const t=e=>{e.preventDefault(),r(!1)};s?.current?.addEventListener("dragleave",t);const i=e=>{e.preventDefault(),u(e,!0),r(!1)};return s?.current?.addEventListener("drop",i),()=>{s?.current?.removeEventListener("dragover",e),s?.current?.removeEventListener("dragleave",t),s?.current?.removeEventListener("drop",i)}}),[]),e.createElement("div",{ref:s,style:{position:"relative",...i},className:_},l&&e.createElement("div",{className:v}),d?e.createElement("div",{className:x},e.createElement("img",{alt:"file icon",width:32,height:32,src:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.25763 9.01146C6.17933 8.92367 6.92028 8.21474 7.04867 7.29781C7.38869 4.86953 9.47771 3 12 3C14.0101 3 15.7474 4.18626 16.542 5.90556C16.8225 6.51241 17.3877 6.93898 18.0482 7.04239C19.7203 7.30417 21 8.7545 21 10.5C21 11.8067 20.2839 12.9461 19.2228 13.5473C18.8165 13.7775 18.5 14.1752 18.5 14.6422C18.5 15.3015 19.1051 15.8035 19.7089 15.5385C21.6466 14.6878 23 12.7519 23 10.5C23 7.75413 20.9878 5.47824 18.3575 5.06645C17.2479 2.66574 14.8185 1 12 1C8.46644 1 5.54439 3.6182 5.06799 7.02047C2.78538 7.23788 1 9.16044 1 11.5C1 13.6444 2.4999 15.4384 4.50781 15.8903C5.04662 16.0115 5.5 15.5523 5.50001 15C5.50001 14.4477 5.03487 14.0186 4.52627 13.8033C3.62931 13.4236 3 12.5353 3 11.5C3 10.2014 3.99164 9.13204 5.25763 9.01146Z" fill="black"/>\n<path d="M14.586 17.0001L13.0001 15.4142V21C13.0001 21.5523 12.5524 22 12.0001 22C11.4478 22 11.0001 21.5523 11.0001 21V15.4142L9.41441 16.9999C9.02389 17.3904 8.39072 17.3904 8.0002 16.9999C7.60967 16.6094 7.60967 15.9762 8.0002 15.5857L11.293 12.2929C11.6835 11.9024 12.3167 11.9024 12.7072 12.2929L16.0002 15.5859C16.3907 15.9764 16.3907 16.6096 16.0002 17.0001C15.6097 17.3906 14.9765 17.3906 14.586 17.0001Z" fill="black"/>\n</svg>'}),e.createElement("input",{onChange:u,className:y,type:"file",multiple:!0})):e.createElement("div",{className:g},n.map(((t,i)=>e.createElement(e.Fragment,{key:i},e.createElement(w,{file:t,deleteFile:p}))))))}function E({multiple:t=!1,getFiles:i,style:n,PlaceHolderComponent:o,draging:l=!1}){return l&&t?e.createElement(C,{style:n,getFiles:i}):e.createElement(m,{PlaceHolderComponent:o,style:n,getFiles:i,multiple:t})}w.propTypes={deleteFile:t.func,file:t.object},C.propTypes={getFiles:t.func,style:t.object},E.propTypes={getFiles:t.func,multiple:t.bool,draging:t.bool},exports.Tab=d,exports.TabPanel=a,exports.Tabs=r,exports.UploadMedia=E;
