var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequirea73d;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequirea73d=r);var a=r("kEUo3"),l=r("ak03H");const n=document.querySelector(".feedback-form"),s=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),d=l.toggleDarkMode;n.addEventListener("input",(0,a.throttle)((e=>{const t={email:s.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),n.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:s.value,message:i.value}),n.reset(),localStorage.removeItem("feedback-form-state")}));const u=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");u&&(s.value=u.email,i.value=u.message),console.log(d);
//# sourceMappingURL=03-feedback.6c00f852.js.map
