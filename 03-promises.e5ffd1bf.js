var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");const u={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};function r(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}function l({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function a({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}u.form.addEventListener("submit",(function(e){e.preventDefault();const n=+u.delayInput.value,t=+u.stepInput.value,o=+u.amountInput.value;for(let e=1;e<o+1;e+=1){r(e,+(n+t*(e-1))).then(l).catch(a)}}));
//# sourceMappingURL=03-promises.e5ffd1bf.js.map
