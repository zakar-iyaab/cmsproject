!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.blocksyCustomizerSync;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}var n=window.ctEvents;function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var n,s,c;n=e,s=t,c=r[t],(s=o(s))in n?Object.defineProperty(n,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[s]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}e.n(n)().on("ct:customizer:sync:collect-variable-descriptors",(function(e){e.result=c(c(c({},e.result),{},{newsletter_subscribe_title_color:{selector:".ct-newsletter-subscribe-container",variable:"theme-heading-color",type:"color:default",responsive:!0},newsletter_subscribe_content:[{selector:".ct-newsletter-subscribe-container",variable:"text-color",type:"color:default"},{selector:".ct-newsletter-subscribe-container",variable:"theme-link-hover-color",type:"color:hover"}],newsletter_subscribe_button:[{selector:".ct-newsletter-subscribe-container",variable:"theme-button-background-initial-color",type:"color:default"},{selector:".ct-newsletter-subscribe-container",variable:"theme-button-background-hover-color",type:"color:hover"}],newsletter_subscribe_input_font_color:[{selector:".ct-newsletter-subscribe-container",variable:"theme-form-text-initial-color",type:"color:default"},{selector:".ct-newsletter-subscribe-container",variable:"theme-form-text-focus-color",type:"color:focus"}],newsletter_subscribe_border_color:[{selector:".ct-newsletter-subscribe-container",variable:"theme-form-field-border-initial-color",type:"color:default"},{selector:".ct-newsletter-subscribe-container",variable:"theme-form-field-border-focus-color",type:"color:focus"}],newsletter_subscribe_input_background:[{selector:".ct-newsletter-subscribe-container",variable:"theme-form-field-background-initial-color",type:"color:default"},{selector:".ct-newsletter-subscribe-container",variable:"theme-form-field-background-focus-color",type:"color:focus"}]},(0,t.handleBackgroundOptionFor)({id:"newsletter_subscribe_container_background",selector:".ct-newsletter-subscribe-container",responsive:!0})),{},{newsletter_subscribe_container_border:{selector:".ct-newsletter-subscribe-container",variable:"newsletter-container-border",type:"border",responsive:!0,skip_none:!0},newsletter_subscribe_shadow:{selector:".ct-newsletter-subscribe-container",type:"box-shadow",variable:"theme-box-shadow",responsive:!0},newsletter_subscribe_container_spacing:{selector:".ct-newsletter-subscribe-container",type:"spacing",variable:"padding",responsive:!0},newsletter_subscribe_container_border_radius:{selector:".ct-newsletter-subscribe-container",type:"spacing",variable:"theme-border-radius",responsive:!0}})})),wp.customize("newsletter_subscribe_subscribe_visibility",(function(e){return e.bind((function(e){var r=document.querySelector(".ct-newsletter-subscribe-container");(0,t.responsiveClassesFor)("newsletter_subscribe_subscribe_visibility",r)}))})),(document.body.classList.contains("single")||document.body.classList.contains("page"))&&(0,t.watchOptionsWithPrefix)({getPrefix:function(){return""},getOptionsForPrefix:function(){return["newsletter_subscribe_button_text","newsletter_subscribe_title","newsletter_subscribe_text","newsletter_subscribe_name_label","newsletter_subscribe_mail_label"]},render:function(){if(document.body.classList.contains("single")||document.body.classList.contains("page")){var e=document.querySelector(".ct-newsletter-subscribe-container");e&&((0,t.responsiveClassesFor)("newsletter_subscribe_subscribe_visibility",e),e.querySelector('[name="FNAME"]')&&e.querySelector('[name="FNAME"]').setAttribute("placeholder","".concat(wp.customize("newsletter_subscribe_name_label")())),e.querySelector('[name="EMAIL"]').setAttribute("placeholder","".concat(wp.customize("newsletter_subscribe_mail_label")()," *")),e.querySelector("button").innerHTML=wp.customize("newsletter_subscribe_button_text")(),e.querySelector("h3").innerHTML=wp.customize("newsletter_subscribe_title")(),e.querySelector(".ct-newsletter-subscribe-container > p").innerHTML=wp.customize("newsletter_subscribe_text")())}}})}();