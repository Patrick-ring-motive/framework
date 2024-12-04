globalThis.objDoProp = function (obj, prop, def, enm, mut) {
  return Object.defineProperty(obj, prop, {
    value: def,
    writable: mut,
    enumerable: enm,
    configurable: mut,
  });
};
globalThis.objDefProp = (obj, prop, def) => objDoProp(obj, prop, def, false, true);
globalThis.objDefEnum = (obj, prop, def) => objDoProp(obj, prop, def, true, true);
globalThis.objFrzProp = (obj, prop, def) => objDoProp(obj, prop, def, false, false);
globalThis.objFrzEnum = (obj, prop, def) => objDoProp(obj, prop, def, true, false);
  globalThis.queueMicrotask ??= setTimeout;
	globalThis.requestAnimationFrame ??= setTimeout;
	globalThis.requestIdleCallback ??= globalThis.requestAnimationFrame;
	globalThis.nextIdle=function nextIdle(){
		return new Promise((resolve) => {requestIdleCallback(resolve);});  
	}
	globalThis.nextFrame=function nextFrame(){
		return new Promise((resolve) => {requestAnimationFrame(resolve);});  
	}
	globalThis.nextTask=function nextTask(){
		return new Promise((resolve) => {queueMicrotask(resolve);});  
	}

(globalThis.window??{}).DOMContentLoaded = (fn) => {
	       fn??=()=>{};
         return new Promise((resolve) => {
		(document || globalThis).addEventListener("DOMContentLoaded", ()=>{
			 try{resolve(fn());}catch(e){resolve(e);}
		 });
	 });
     }
     (globalThis.window??{}).DOMInteractive = (fn) => {
	       fn??=()=>{};
         if ((globalThis.document?.readyState == 'complete') || (globalThis.document?.readyState == 'interactive')) {
             return fn();
         }
         return new Promise((resolve) => {
		(globalThis.document || globalThis).addEventListener("DOMContentLoaded", ()=>{
			 try{resolve(fn());}catch(e){resolve(e);}
		 });
	 });
     }
     (globalThis.window??{}).DOMComplete = (fn) => {
	       fn??=()=>{};
         if (document.readyState == 'complete') {
             return fn();
         }
	return new Promise((resolve) => {
		 let resolved = false;
		 globalThis?.document?.addEventListener?.("load", ()=>{
			if(!resolved){try{resolve(fn());}catch(e){resolve(e);}finally{resolved = true;}}
		 });
		 globalThis?.addEventListener?.("load", ()=>{
			if(!resolved){try{resolve(fn());}catch(e){resolve(e);}finally{resolved = true;}}
		 });
		const intID = setInterval(()=>{
			if (document.readyState == 'complete') {
				if(!resolved){try{resolve(fn());}catch(e){resolve(e);}finally{resolved = true;}}
				clearIntID();
			}
		},100);
		function clearIntID(){
			clearInterval(intID);
		}
	 });
     }
     (globalThis.window??{}).doDOM = (fn) => {
         try {
           return fn();
         } catch (e) {
	        return new Promise((resolve) => {
			(globalThis.document || globalThis).addEventListener("DOMContentLoaded", ()=>{
				 try{resolve(fn());}catch(e){resolve(e);}
			 });
		 });
         }
     }


     globalThis.draggingSticky = false;
     globalThis.dragging = false;
     globalThis.addEventListener("dragstart", (event) => {
     globalThis.dragging = true;
     globalThis.draggingSticky = true;
     });
     globalThis.addEventListener("dragend", (event) => {
         globalThis.dragging = false;
         setTimeout(() => {
             if (!globalThis.dragging) {
                 globalThis.draggingSticky = false;
             }
         }, 200);
     });
     globalThis.typingSticky = false;
     globalThis.typing = false;
     document.addEventListener("keydown", (event) => {
         globalThis.typing = true;
         globalThis.typingSticky = true;
     });
     document.addEventListener("keyup", (event) => {
         globalThis.typing = false;
         setTimeout(() => {
             if (!globalThis.typing) {
                 globalThis.typingSticky = false;
             }
         }, 200);
     });
     globalThis.clickingSticky = false;
     globalThis.clicking = false;
     document.addEventListener("mousedown", (event) => {
         globalThis.clicking = true;
         globalThis.clickingSticky = true;
     });
     document.addEventListener("mouseup", (event) => {
         globalThis.clicking = false;
         setTimeout(() => {
             if (!globalThis.clicking) {
                 globalThis.clickingSticky = false;
             }
         }, 200);
     });
     globalThis.coinflip = () => Math.floor(Math.random() * 2);
     globalThis.nineflip = () => (Math.floor(Math.random() * 10) == 9);
     globalThis.asynt = (fn) => {
         setTimeout(fn, 0);
     }

globalThis.Q = (U) => {
         if ((typeof U) == 'function') {
             try {
                 return U();
             } catch (e) {
                 return undefined;
             }
         } else {
             return U;
         }
     };

globalThis.declareErrorQueue ??= [];
     globalThis.wrapDeclare = (fn) => {
         let wrapper = () => {
             try {
                 fn();
             } catch (e) {
                 declareErrorQueue.push(e);
             }
         }
         return wrapper;
     }

     globalThis.declareAsynt = (fn) => {
         asynt(wrapDeclare(fn));
     }
         globalThis.declarations ??= [];
         globalThis.declarationStrings ??= [];
     globalThis.declare = function declare(func, id) {
         if (!func) {
             return;
         }
         if ((func.next) && (`${func}` == '[object Generator]')) {
             return (async () => {
                 return declare(await (func), id);
             })();

         }
         if (`${func.constructor}`.includes("romise")) {
             return declare(() => func().next(), id);
         }
         try {
             if (`${func.constructor}`.toLowerCase().includes("generatorfunction")) {
                 return declare(() => func().next(), id);
             }
         } catch (e) {
             console.log(e);
         };
         if (`${func.constructor}`.includes("unction")) {
             let funcString = func.toString() + id;
             if ((!(declarationStrings.includes(funcString))) ||
                 (!(funcString.includes('declare(')))) {
                 globalThis.declarations.push(func);
                 globalThis.declarationStrings.push(funcString);
             }
         } else {
             Q(() => {
                 declare(() => ((eval?.(`${func}`), id) || eval(`${func}`), id));
             });
         }
     };

     globalThis.declareEvaluator = async function declareEvaluator() {
     if((new Date().getTime() - globalThis.declareEvaluator.lastRun)<100){return;}
         globalThis.declareStartup ??= 0;
         if (declareStartup < 3) {
             declareStartup++;
         } else {
             if ((document.readyState != 'complete') && (Math.floor(Math.random() * 10) < 8)) {
                 return;
             }
             if (draggingSticky||typingSticky||clickingSticky||document.hidden) {
                 return;
             }
             if (document.visibilityState == 'hidden') {
                 return;
             }
	     if (globalThis.navigator?.scheduling?.isInputPending?.()) {
		return;
	     }
             if (idleDetectionAllowed) {
                 if (detector.userState == 'idle') {
                     return;
                 }
                 if (detector.screenState == 'locked') {
                     return;
                 }
             }
             if (document.readyState == 'complete') {
                 if (globalThis.wasFocused) {
                     if (globalThis.navigator?.userActivation?.isActive === false){
                         return;
                     }
                     if (globalThis.navigator?.userActivation?.hasBeenActive === false){
                         return;
                     }
                     if (!document.hasFocus()) {
                         return;
                     }
                     const sizeThrottle = Math.floor(document.querySelectorAll('*').length / 1000);
                     for (let i = 0; i < sizeThrottle; i++) {
                         if (nineflip()) {
                             return;
                         }
                     }
                 }
             }
         }
	globalThis.declareEvaluator.lastRun = new Date().getTime();
         const declarations_length = declarations.length;
         for (let i = 0; i !== declarations_length; i++) {
             if((Math.random*10001)<2){break;}
             if (`${new Date().getTime()}`.endsWith("10")) {
                 await async ("declareEvaluator");
             }
             try {
                 const declareErrorQueue_length = declareErrorQueue.length;
                 for (let x = 0; x < declareErrorQueue_length; x++) {
                     try {
                         await async ("ErrorQueue");
                         console.log(declareErrorQueue.shift());
                     } catch (e) {
                         await async ("ErrorQueue");
                         console.log(e);
                         continue;
                     }
                 }
                 //declareAsynt(declarations[i]);
                 declarations[i]();
             } catch (e) {
                 await async ("declareEvaluator");
                 console.log(e);
                 continue;
             }
         }
     };
     globalThis.declareEvaluator.lastRun = new Date().getTime();
     Q(() => globalThis.declareEvaluator());
         (globalThis.document || globalThis).addEventListener("DOMContentLoaded", (event) => {
             Q(() => globalThis.declareEvaluator());
         });
         (globalThis.document || globalThis).addEventListener("readystatechange", (event) => {
             Q(() => globalThis.declareEvaluator());
         });
         globalThis.window?.addEventListener?.("load", (event) => {
             Q(() => globalThis.declareEvaluator());
             Q(() => globalThis.deferEvaluator());
         });
         setInterval(function() {
             if (globalThis.declareEvaluationInProgress) {
                 return true;
             }
             globalThis.declareEvaluationInProgress = true;
             requestIdleCallback(() => {
                 requestAnimationFrame(async () => {
                     try {
                         await globalThis.declareEvaluator();
                     } catch (e) {
                         await console.log(e);
                     }
                     setTimeout(() => globalThis.declareEvaluationInProgress = false, 1);
                 });
             });
         }, 100);


         globalThis.queryApplyAll = async function queryApplyAll(query, func) {
	           const sel = globalThis.selectAll||document.querySelectorAll;
             func=helpAppliedFunction(func);
             let elems = Array.from(sel(query));
             const elems_length = elems.length;
             for (let i = 0; i < elems_length; i++) {
                 try {
                     func(elems[i]);
                 } catch (e) {
                     await async ("queryApplyAll");
                     console.log(e);
                     continue;
                 }
             }
         };

     globalThis.idleDetectionAllowed = false;
     Q(() => {
         globalThis.detector = new IdleDetector();
         void async function() {
             try {
                 await detector.start();
                 idleDetectionAllowed = true;
             } catch (e) {
                 idleDetectionAllowed = false;
             }
         }();
     });
     globalThis.wasFocused = false;
     Q(() => {
         if (document.body) {
             document.body.addEventListener("focusin", (event) => {
                 if (document.readyState == 'complete') {
                     globalThis.wasFocused = true;
                 }
             });
             document.body.addEventListener('mousedown', (event) => {
                 if (document.readyState == 'complete') {
                     globalThis.wasFocused = true;
                 }
             });
         } else {
             (document || globalThis).addEventListener("DOMContentLoaded", (event) => {
                 document.body.addEventListener("focusin", (event) => {
                     if (document.readyState == 'complete') {
                         globalThis.wasFocused = true;
                     }
                 });
                 document.body.addEventListener('mousedown', (event) => {
                     if (document.readyState == 'complete') {
                         globalThis.wasFocused = true;
                     }
                 });
             });
         }
         if (document.firstElementChild) {
             document.firstElementChild.addEventListener("focusin", (event) => {
                 if (document.readyState == 'complete') {
                     globalThis.wasFocused = true;
                 }
             });
             document.firstElementChild.addEventListener('mousedown', (event) => {
                 if (document.readyState == 'complete') {
                     globalThis.wasFocused = true;
                 }
             });
         } else {
             (document || globalThis).addEventListener("DOMContentLoaded", (event) => {
                 document.firstElementChild.addEventListener("focusin", (event) => {
                     if (document.readyState == 'complete') {
                         globalThis.wasFocused = true;
                     }
                 });
                 document.firstElementChild.addEventListener('mousedown', (event) => {
                     if (document.readyState == 'complete') {
                         globalThis.wasFocused = true;
                     }
                 });
             });
         }
     });
         objDefProp(globalThis.Element?.prototype??{},'updateAttribute' , function updateAttribute(attr, val) {
             if (`${this.getAttribute(`${attr}`)}` != `${val}`) {
               this.setAttribute(`${attr}`, `${val}`);
             }
         });
