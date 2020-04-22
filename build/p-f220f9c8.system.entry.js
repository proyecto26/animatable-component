var __awaiter=this&&this.__awaiter||function(t,n,e,a){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function o(t){try{c(a.next(t))}catch(n){r(n)}}function s(t){try{c(a["throw"](t))}catch(n){r(n)}}function c(t){t.done?e(t.value):i(t.value).then(o,s)}c((a=a.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(n){return c([t,n])}}function c(o){if(a)throw new TypeError("Generator is already executing.");while(e)try{if(a=1,i&&(r=o[0]&2?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;if(i=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;i=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1];r=o;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(o);break}if(r[2])e.ops.pop();e.trys.pop();continue}o=n.call(t,e)}catch(s){o=[6,s];i=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-3a5dcfb3.system.js","./p-e90c83a5.system.js"],(function(t){"use strict";var n,e,a,i,r,o,s,c;return{setters:[function(t){n=t.r;e=t.c;a=t.h;i=t.g;r=t.H},function(t){o=t.K;s=t.a;c=t.g}],execute:function(){var u=function(t){return t.shadowRoot!==null?t:t.firstElementChild||t.children.length&&t.children[0]||t};function m(t,n){var e=n.keyFrames||n.animation&&o[n.animation]||n.keyFramesData&&JSON.parse(n.keyFramesData)||[];var a=l(n);var i=t.animate(e,a);i.pause();if(n.currentTime!==undefined)i.currentTime=n.currentTime;if(n.startTime!==undefined)i.startTime=n.startTime;return i}function f(t,n){for(var e in n){if(n.hasOwnProperty(e)){if(e==="id"){t.animateId=undefined}else{t[e]=undefined}}}}function l(t){var n=t.options||t.optionsData&&JSON.parse(t.optionsData)||{};if(t.delay!==undefined)n.delay=t.delay;if(t.duration!==undefined)n.duration=t.duration;if(t.direction!==undefined)n.direction=t.direction;if(t.composite!==undefined)n.composite=t.composite;var e=t.easing||n.easing;n.easing=s[e]||e;if(t.endDelay!==undefined)n.endDelay=t.endDelay;if(t.fill!==undefined)n.fill=t.fill;if(t.animateId!==undefined)n.id=t.animateId;if(t.iterations!==undefined)n.iterations=t.iterations;if(t.iterationStart!==undefined)n.iterationStart=t.iterationStart;if(t.iterationComposite!==undefined)n.iterationComposite=t.iterationComposite;return n}var d=function(){function t(t){var n=this;this.animation=null;this.onStartAnimation=function(){n.state.onStart.emit(n.element);if(n.state.fromClassName!==undefined){n.className=n.element.className;n.element.className=n.state.fromClassName}};this.onCancelAnimation=function(){n.state.onCancel.emit(n.element);if(n.state.fromClassName!==undefined&&n.className!==undefined){n.element.className=n.className}};this.onFinishAnimation=function(){var t=n,e=t.element,a=t.state;a.onFinish.emit(e);if(a.toClassName!==undefined){e.className=a.toClassName}};this.state=t}Object.defineProperty(t.prototype,"currentAnimation",{get:function(){return this.animation||this.loadAnimation()},set:function(t){this.animation=t},enumerable:true,configurable:true});t.prototype.loadAnimation=function(){var t=this,n=t.element,e=t.state;var a=m(n,e);a.addEventListener("finish",this.onFinishAnimation);a.addEventListener("cancel",this.onCancelAnimation);return this.animation=a};t.prototype.clearAnimation=function(){if(this.animation===null)return;this.animation.removeEventListener("finish",this.onFinishAnimation);this.animation.removeEventListener("cancel",this.onCancelAnimation);this.animation=null};t.prototype.destroyAnimation=function(){if(this.animation===null)return;var t=this.animation;this.clearAnimation();t.cancel()};t.prototype.playAnimation=function(){if(this.currentAnimation.playState==="running"&&!this.isUpdatingState)return;if(this.isUpdatingState){this.destroyAnimation()}this.currentAnimation.play();this.onStartAnimation()};t.prototype.setState=function(t,n){this.isUpdatingState=true;this.element=t;this.state=n};t.prototype.savedState=function(){if(this.state.autoPlay){this.playAnimation()}this.isUpdatingState=false};return t}();var p=t("animatable_component",function(){function t(t){n(this,t);this.autoPlay=false;this.onStart=e(this,"start",3);this.onFinish=e(this,"finish",3);this.onCancel=e(this,"cancel",3)}Object.defineProperty(t.prototype,"element",{get:function(){return u(this.el)},enumerable:true,configurable:true});t.prototype.animationDidChangeHandler=function(t){this.keyFrames=c(t)};t.prototype.keyFramesDidChangeHandler=function(t){if(t!==undefined)this.keyFrames=JSON.parse(t)};t.prototype.optionsDidChangeHandler=function(t){f(this,t)};t.prototype.optionsDataDidChangeHandler=function(t){if(t!==undefined)this.options=JSON.parse(t)};t.prototype.setCurrenTime=function(t){this.manager.currentAnimation.currentTime=t};t.prototype.getCurrentTime=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.currentTime)]}))}))};t.prototype.setStartTime=function(t){this.manager.currentAnimation.startTime=t};t.prototype.getStartTime=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.startTime)]}))}))};t.prototype.getPending=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.pending)]}))}))};t.prototype.setPlaybackRate=function(t){this.manager.currentAnimation.playbackRate=t};t.prototype.getPlaybackRate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.playbackRate)]}))}))};t.prototype.getPlayState=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.playState)]}))}))};t.prototype.cancel=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.cancel();return[2]}))}))};t.prototype.finish=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.finish();return[2]}))}))};t.prototype.pause=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.pause();return[2]}))}))};t.prototype.play=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.playAnimation();return[2]}))}))};t.prototype.reverse=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.reverse();return[2]}))}))};t.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.clearAnimation();return[2]}))}))};t.prototype.destroy=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.destroyAnimation();return[2]}))}))};t.prototype.componentWillLoad=function(){this.manager=new d(this);this.manager.setState(this.element,this)};t.prototype.componentDidLoad=function(){this.manager.savedState()};t.prototype.componentWillUpdate=function(){this.manager.setState(this.element,this)};t.prototype.componentDidUpdate=function(){this.manager.savedState()};t.prototype.componentDidUnload=function(){this.destroy()};t.prototype.render=function(){return a("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{animation:["animationDidChangeHandler"],keyFramesData:["keyFramesDidChangeHandler"],options:["optionsDidChangeHandler"],optionsData:["optionsDataDidChangeHandler"],currentTime:["setCurrenTime"],startTime:["setStartTime"],playbackRate:["setPlaybackRate"]}},enumerable:true,configurable:true});return t}());var h=":host{--size:var(--animatable-cube-size, 100px);--perspective:var(--animatable-cube-perspective, 1000px);--perspective-origin:var(--animatable-cube-perspective-origin, 50% 50%);--display:var(--animatable-cube-display, flex);--transition-property:var(--animatable-cube-transition-property, (width, height));--transition-duration:var(--animatable-cube-transition-duration, 0);--transition-delay:var(--animatable-cube-transition-delay, 0);--transition-timing-function:var(--animatable-cube-transition-timing-function, initial);--align-items:var(--animatable-cube-align-items, center);--justify-content:var(--animatable-cube-justify-content, center);--margin:var(--animatable-cube-margin, 0);--padding:var(--animatable-cube-padding, 0);--border:var(--animatable-cube-face-border, none);--background:var(--animatable-cube-face-background, white);--background-size:var(--animatable-cube-face-background-size, 100% 100%);--animation:var(\n    --animatable-cube-face-animation,\n    backgroundAnimation\n    var(--animatable-cube-face-animation-duration, 0s)\n    var(--animatable-cube-face-animation-timing-function, initial)\n    var(--animatable-cube-face-animation-delay, 0s)\n    var(--animatable-cube-face-animation-iteration-count, infinite)\n    var(--animatable-cube-face-animation-direction, alternate)\n  );-webkit-perspective:var(--perspective);perspective:var(--perspective);-webkit-perspective-origin:var(--perspective-origin);perspective-origin:var(--perspective-origin);padding:var(--padding);margin:var(--margin);display:var(--display);-ms-flex-align:var(--align-items);align-items:var(--align-items);-ms-flex-pack:var(--justify-content);justify-content:var(--justify-content);width:var(--size);height:var(--size);-webkit-transition-property:var(--transition-property);transition-property:var(--transition-property);-webkit-transition-duration:var(--transition-duration);transition-duration:var(--transition-duration);-webkit-transition-delay:var(--transition-delay);transition-delay:var(--transition-delay);-webkit-transition-timing-function:var(--transition-timing-function);transition-timing-function:var(--transition-timing-function)}.cube{display:block;height:100%;width:100%;max-width:100%;position:relative;background:transparent;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(-calc(var(--size)/2));transform:translateZ(-calc(var(--size)/2));-webkit-transition:-webkit-transform var(--transition-duration);transition:-webkit-transform var(--transition-duration);transition:transform var(--transition-duration);transition:transform var(--transition-duration), -webkit-transform var(--transition-duration)}.face{background:var(--animatable-cube-face-background, transparent);position:absolute;height:100%;width:100%;border:var(--border);-webkit-transition:-webkit-transform var(--transition-duration);transition:-webkit-transform var(--transition-duration);transition:transform var(--transition-duration);transition:transform var(--transition-duration), -webkit-transform var(--transition-duration)}.front{-webkit-transform:rotateY(0deg)\n    translateZ(calc(var(--size)/2));transform:rotateY(0deg)\n    translateZ(calc(var(--size)/2));will-change:transform;background:var(--animatable-cube-front-face-background, var(--background));background-size:var(--animatable-cube-front-face-background-size, var(--background-size));-webkit-animation:var(--animatable-cube-front-face-animation, var(--animation));animation:var(--animatable-cube-front-face-animation, var(--animation))}.back{-webkit-transform:rotateY(180deg)\n    translateZ(calc(var(--size)/2));transform:rotateY(180deg)\n    translateZ(calc(var(--size)/2));will-change:transform;background:var(--animatable-cube-back-face-background, var(--background));background-size:var(--animatable-cube-back-face-background-size, var(--background-size));-webkit-animation:var(--animatable-cube-back-face-animation, var(--animation));animation:var(--animatable-cube-back-face-animation, var(--animation))}.right{-webkit-transform:rotateY(90deg)\n    translateZ(calc(var(--size)/2));transform:rotateY(90deg)\n    translateZ(calc(var(--size)/2));will-change:transform;background:var(--animatable-cube-right-face-background, var(--background));background-size:var(--animatable-cube-right-face-background-size, var(--background-size));-webkit-animation:var(--animatable-cube-right-face-animation, var(--animation));animation:var(--animatable-cube-right-face-animation, var(--animation))}.left{-webkit-transform:rotateY(-90deg)\n    translateZ(calc(var(--size)/2));transform:rotateY(-90deg)\n    translateZ(calc(var(--size)/2));will-change:transform;background:var(--animatable-cube-left-face-background, var(--background));background-size:var(--animatable-cube-left-face-background-size, var(--background-size));-webkit-animation:var(--animatable-cube-left-face-animation, var(--animation));animation:var(--animatable-cube-left-face-animation, var(--animation))}.top{-webkit-transform:rotateX(90deg)\n    translateZ(calc(var(--size)/2));transform:rotateX(90deg)\n    translateZ(calc(var(--size)/2));will-change:transform;background:var(--animatable-cube-top-face-background, var(--background));background-size:var(--animatable-cube-top-face-background-size, var(--background-size));-webkit-animation:var(--animatable-cube-top-face-animation, var(--animation));animation:var(--animatable-cube-top-face-animation, var(--animation))}.bottom{-webkit-transform:rotateX(-90deg)\n    translateZ(calc(var(--size)/2));transform:rotateX(-90deg)\n    translateZ(calc(var(--size)/2));will-change:transform;background:var(--animatable-cube-bottom-face-background, var(--background));background-size:var(--animatable-cube-bottom-face-background-size, var(--background-size));-webkit-animation:var(--animatable-cube-bottom-face-animation, var(--animation));animation:var(--animatable-cube-bottom-face-animation, var(--animation))}@-webkit-keyframes backgroundAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes backgroundAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}";var b=t("animatable_cube",function(){function t(t){n(this,t);this.autoPlay=false;this.onStart=e(this,"start",3);this.onFinish=e(this,"finish",3);this.onCancel=e(this,"cancel",3)}Object.defineProperty(t.prototype,"element",{get:function(){return this.el.shadowRoot.querySelector(".cube")},enumerable:true,configurable:true});t.prototype.animationDidChangeHandler=function(t){this.keyFrames=c(t)};t.prototype.keyFramesDidChangeHandler=function(t){if(t!==undefined)this.keyFrames=JSON.parse(t)};t.prototype.optionsDidChangeHandler=function(t){f(this,t)};t.prototype.optionsDataDidChangeHandler=function(t){if(t!==undefined)this.options=JSON.parse(t)};t.prototype.setCurrenTime=function(t){this.manager.currentAnimation.currentTime=t};t.prototype.getCurrentTime=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.currentTime)]}))}))};t.prototype.setStartTime=function(t){this.manager.currentAnimation.startTime=t};t.prototype.getStartTime=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.startTime)]}))}))};t.prototype.getPending=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.pending)]}))}))};t.prototype.setPlaybackRate=function(t){this.manager.currentAnimation.playbackRate=t};t.prototype.getPlaybackRate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.playbackRate)]}))}))};t.prototype.getPlayState=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this.manager.currentAnimation.playState)]}))}))};t.prototype.cancel=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.cancel();return[2]}))}))};t.prototype.finish=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.finish();return[2]}))}))};t.prototype.pause=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.pause();return[2]}))}))};t.prototype.play=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.playAnimation();return[2]}))}))};t.prototype.reverse=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.currentAnimation.reverse();return[2]}))}))};t.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.clearAnimation();return[2]}))}))};t.prototype.destroy=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.manager.destroyAnimation();return[2]}))}))};t.prototype.componentWillLoad=function(){this.manager=new d(this)};t.prototype.componentDidLoad=function(){this.manager.setState(this.element,this);this.manager.savedState()};t.prototype.componentWillUpdate=function(){this.manager.setState(this.element,this)};t.prototype.componentDidUpdate=function(){this.manager.savedState()};t.prototype.componentDidUnload=function(){this.destroy()};t.prototype.render=function(){return a(r,null,a("div",{class:"cube"},a("div",{class:"front face"},a("slot",{name:"front-face"})),a("div",{class:"back face"},a("slot",{name:"back-face"})),a("div",{class:"right face"},a("slot",{name:"right-face"})),a("div",{class:"left face"},a("slot",{name:"left-face"})),a("div",{class:"top face"},a("slot",{name:"top-face"})),a("div",{class:"bottom face"},a("slot",{name:"bottom-face"})),a("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{animation:["animationDidChangeHandler"],keyFramesData:["keyFramesDidChangeHandler"],options:["optionsDidChangeHandler"],optionsData:["optionsDataDidChangeHandler"],currentTime:["setCurrenTime"],startTime:["setStartTime"],playbackRate:["setPlaybackRate"]}},enumerable:true,configurable:true});return t}());b.style=h}}}));