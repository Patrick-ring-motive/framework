if(!(globalThis?.JXSLOADER)){
 globalThis.JXSLOADER='loading';
try {
 function defineNonenumerable(obj,prop,val){
     Object.defineProperty(obj, prop, {
     value: val,
     writable: true,
     configurable: true,
     enumerable: false
   });
 }
	defineNonenumerable(Element.prototype,'setTrait' , function(attr, val) {
             const el = this;
		el.setAttribute(attr,val);
		el[attr]=val;
         });
	globalThis.createElement=function(){
		return document.createElement(...arguments);
	}
defineNonenumerable(Object.prototype, 'setValue', function(key, val) {
    this[key] = val;
});
defineNonenumerable(Object.prototype, 'getValue', function(key) {
    return this[key];
});
defineNonenumerable(Object.prototype, 'delValue', function(key) {
    delete this[key];
});
defineNonenumerable(Object.prototype, 'deleteValue', Object.prototype.delValue);
defineNonenumerable(Object.prototype, 'runValue', function(key, args) {
    try {
        return this[key](...args);
    } catch (e) {
        return this[key](args);
    }
});
defineNonenumerable(Object.prototype, 'run', function(obj) {
    if (typeof obj == 'object') {
        const key = Object.keys(obj)[0];
        return this.runValue(key, obj[key]);
    } else {
        return this.runValue(obj);
    }
});
     if(!globalThis.queueMicrotask){
	globalThis.queueMicrotask = setTimeout;
     }
     if(!globalThis.requestAnimationFrame){
	globalThis.requestAnimationFrame = setTimeout;
     }
     if (!globalThis.requestIdleCallback) {
         globalThis.requestIdleCallback = globalThis.requestAnimationFrame;
     }
	globalThis.nextIdle=function(){
		return new Promise((resolve) => {requestIdleCallback(resolve);});  
	}
	globalThis.nextFrame=function(){
		return new Promise((resolve) => {requestAnimationFrame(resolve);});  
	}
	globalThis.nextTask=function(){
		return new Promise((resolve) => {queueMicrotask(resolve);});  
	}
     window.nodeName = 'window';
     window.tagName = 'WINDOW';
     window.tag = 'Window';
     globalThis.doInterval=function(fn,ms){
      setTimeout(fn,0);
      return setInterval(fn,ms);
     }
     globalThis.body = () => document.body || document.firstElementChild;
     globalThis.style = function(selector,obj){
      return new Promise((resolve) => {
      let s = document.createElement('style');
      let css = `${selector}{`;
      s.onload = ()=>resolve(s);
		    s.onerror = ()=>resolve(s);
      for (const property in obj) {
       css += `${property}: ${obj[property]};`;
      }
      css += `}`;
      try{
       s.innerHTML = css;
      }catch(e){
       s.innerText = css;
      }
      body().appendChild(s);
         });
     }
     globalThis.importScript = function(url,bdy){
      return new Promise((resolve) => {
      let s = document.createElement('script');
      s.src=url;
      s.onload = ()=>resolve(s);
      s.onerror = ()=>resolve(s);
	if(!bdy){bdy=body();}
      bdy.appendChild(s);
      });  
     }
     globalThis.importModule = function(url,bdy){
      return new Promise((resolve) => {
      let s = document.createElement('script');
      s.setAttribute('type','module');
      s.type = 'module';
      s.src=url;
      s.onload = ()=>resolve(s);
      s.onerror = ()=>resolve(s);
	      if(!bdy){bdy=body();}
      bdy.appendChild(s);
      });  
     }
     globalThis.importStyle=function(url){
	return new Promise((resolve) => {
		  let l = document.createElement('link');
		  l.rel='stylesheet';
		  l.href=url;
		  l.onload = ()=>resolve(l);
		  l.onerror = ()=>resolve(l);
		  let h = document.createElement('iframe');
		  h.src = url;
		  h.style.border='none';
		  h.style.padding=0;
		  h.style.margin=0;
		  h.style.width=0;
		  h.style.height=0;
		  h.style.visibility='hidden';
		  h.setAttribute('frameborder','0');
		  h.onload = ()=>resolve(l);
		  h.onerror = ()=>resolve(l);
		  body().appendChild(l);
		  body().appendChild(h);
	  });
    };
     globalThis.script = function(fn){
      return new Promise((resolve) => {
      let s = document.createElement('script');
      let js = `(${fn})();`;
      s.onload = ()=>resolve(s);
		    s.onerror = ()=>resolve(s);
      try{ s.innerHTML = js; }catch(e){ s.innerText = js; }
      body().appendChild(s);
        });
     }
	defineNonenumerable(HTMLIFrameElement.prototype, 'iframeDocument', function(obj) {
		return this.contentWindow?.document||this.contentDocument;
	});
	globalThis.hiddenFrame=function(url){
	return new Promise((resolve) => {
		  let h = document.createElement('iframe');
		  h.src = url;
		  h.style.border='none';
		  h.style.padding=0;
		  h.style.margin=0;
		  h.style.width=0;
		  h.style.height=0;
		  h.style.visibility='hidden';
		  h.setAttribute('frameborder','0');
		  h.onload = ()=>resolve(h);
		  h.onerror = ()=>resolve(h);
		  body().appendChild(h);
	  });
    };
	
     globalThis.jot = $ => {
         let obj = Object.create(null);
         obj.$ = $;
         Object.seal(obj);
         return obj;
     };

     globalThis.put = $ => {
         let obj = Object.create(null);
         obj.$ = $;
         Object.seal(obj);
         return obj;
     };

     globalThis.fix = $ => {
         const obj = Object.create(null);
         obj.$ = $;
         Object.freeze(obj);
         return obj;
     };
     globalThis.await = (promise) => {
         console.log("Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules", promise);
         return promise;
     };

     globalThis.yield = (next) => {
         console.log("Uncaught SyntaxError: yield is only valid in generator functions", next);
         return next;
     };

     globalThis.async = async (_) => {
         return await _;
     };

     globalThis.fetchText = async function() {
         return (await fetch(...arguments)).text();
     };

     globalThis.get = key => globalThis[key];
     globalThis.set = (key, val) => globalThis[key] = val;

     globalThis.DOMContentLoaded = (fn) => {
	 if(!fn){fn=()=>{};}
         return new Promise((resolve) => {
		(document || globalThis).addEventListener("DOMContentLoaded", ()=>{
			 try{resolve(fn());}catch(e){resolve(e);}
		 });
	 });
     }
     globalThis.DOMInteractive = (fn) => {
	 if(!fn){fn=()=>{};}
         if ((document.readyState == 'complete') || (document.readyState == 'interactive')) {
             return fn();
         }
         return new Promise((resolve) => {
		(document || globalThis).addEventListener("DOMContentLoaded", ()=>{
			 try{resolve(fn());}catch(e){resolve(e);}
		 });
	 });
     }
     globalThis.DOMComplete = (fn) => {
	 if(!fn){fn=()=>{};}
         if (document.readyState == 'complete') {
             return fn();
         }
	return new Promise((resolve) => {
		 (document || globalThis).addEventListener("load", ()=>{
			 try{resolve(fn());}catch(e){resolve(e);}
		 });
	 });
     }
     globalThis.doDOM = (fn) => {
         try {
           return fn();
         } catch (e) {
	        return new Promise((resolve) => {
			(document || globalThis).addEventListener("DOMContentLoaded", ()=>{
				 try{resolve(fn());}catch(e){resolve(e);}
			 });
		 });
         }
     }


     Object.defineProperty(globalThis, "arguments", {
         get() {
             console.log('Attempting to retrieve arguments in the wrong context');
             return [];
         },
         set(newValue) {

         },
         enumerable: true,
         configurable: true,
     });

     Object.defineProperty(globalThis, "of", {
         get() {
             console.log('Attempting to call "of" in the wrong context');
             return _ => _;
         },
         set(newValue) {
         },
         enumerable: true,
         configurable: true,
     });

     Object.defineProperty(globalThis, "from", {
         get() {
             console.log('Attempting to call "from" in the wrong context');
             return _ => _;
         },
         set(newValue) {
         },
         enumerable: true,
         configurable: true,
     });
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
     Object.defineProperty(globalThis, "as", {
         get() {
             console.log('Attempting to call "from" in the wrong context');
             return _ => _;
         },
         set(newValue) {

         },
         enumerable: true,
         configurable: true,
     });
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

     globalThis.$Q = async (U) => {
         try {
             if ((typeof U) == 'function') {
                 try {
                     return await U();
                 } catch (e) {
                     return undefined;
                 }
             } else if (`${U.constructor}`.includes("romise")) {
                 let U = await U;
                 if ((typeof U) == 'function') {
                     try {
                         return await U();
                     } catch (e) {
                         return undefined;
                     }
                 }
                 return await U;
             }
             return await U;
         } catch (e) {
             return undefined;
         }
     };
     globalThis.AQ = globalThis.$Q;

     globalThis.NoN = function(num) {
         if (isNaN(num)) {
             return 0;
         }
         return num;
     }

     globalThis.extractNum = function(str) {
         if (typeof str == 'number') {
             return str;
         }
         str = str.replace(/[^0-9-.]/g, '');
         if (str.includes('-')) {
             str = '-' + str.replace('-', '');
         }
         if (str.includes('.')) {
             let arr = str.split('.');
             str = arr.shift();
             str = str + '.' + arr.join('');
         }
         return NoN(parseFloat(str));
     }



     globalThis.N = (U) => {
         if ((typeof U) == 'function') {
             try {
                 return extractNum(U()) || 0;
             } catch (e) {
                 return 0;
             }
         } else {
             return extractNum(U()) || 0;
         }
     };

     globalThis.$N = async (U) => {
         try {
             if ((typeof U) == 'function') {
                 try {
                     return extractNum((await U())) || 0;
                 } catch (e) {
                     return 0;
                 }
             } else if (`${U.constructor}`.includes("romise")) {
                 let U = await U;
                 if ((typeof U) == 'function') {
                     try {
                         return extractNum((U())) || 0;
                     } catch (e) {
                         return 0;
                     }
                 }
                 return extractNum(U) || 0;
             }
         } catch (e) {
             return 0;
         }
     };


     globalThis.S = (U) => {
         if ((typeof U) == 'function') {
             try {
                 return `${(U())||''}`;
             } catch (e) {
                 return '';
             }
         } else {
             return `${(U)||''}`;
         }
     };

     globalThis.$S = async (U) => {
         try {
             if ((typeof U) == 'function') {
                 try {
                     return `${((await U()))||''}`;
                 } catch (e) {
                     return '';
                 }
             } else if (`${U.constructor}`.includes("romise")) {
                 let U = await U;
                 if ((typeof U) == 'function') {
                     try {
                         return `${((U()))||''}`;
                     } catch (e) {
                         return '';
                     }
                 }
                 return `${(U)||''}`;
             }
         } catch (e) {
             return '';
         }
     };

     globalThis.A = (U) => {
         if ((typeof U) == 'function') {
             try {
                 return Array.from(U()) || [];
             } catch (e) {
                 return [];
             }
         } else {
             if ((typeof U) == 'string') {
                 try {
                     return Array.from(eval(u)) || [];
                 } catch (e) {
                     return Array.from(U) || [];
                 }
             }
             return Array.from(U) || [];
         }
     };

     globalThis.$A = async (U) => {
         try {
             if ((typeof U) == 'function') {
                 try {
                     return Array.from(await U()) || [];
                 } catch (e) {
                     return [];
                 }
             } else if (`${U.constructor}`.includes("romise")) {
                 let U = await U;
                 if ((typeof U) == 'function') {
                     try {
                         return Array.from(U()) || [];
                     } catch (e) {
                         return [];
                     }
                 }
                 if ((typeof U) == 'string') {
                     try {
                         return Array.from(await eval(u)) || [];
                     } catch (e) {
                         return Array.from(U) || [];
                     }
                 }
                 return Array.from(U) || [];
             }
             if ((typeof U) == 'string') {
                 try {
                     return Array.from(await eval(u)) || [];
                 } catch (e) {
                     return Array.from(U) || [];
                 }
             }
             return Array.from(U) || [];
         } catch (e) {
             return [];
         }
     };

     globalThis.ptr = function(obj) {
         let pointer = Object.create(null);
         pointer["*"] = obj;
         Object.seal(pointer);
         return pointer;
     };

     globalThis.updateProperty = function(obj, prop, val) {
         if (!(obj[prop])) {
             obj[prop] = val;
             return;
         }
         if (obj[prop] != val) {
             obj[prop] = val;
             return;
         }
     }

     globalThis.replaceProperty = function(obj, prop, rep, val) {
         if (!(obj[prop])) {
             return;
         }
         if (obj[prop] != val) {
             updateProperty(obj, prop, obj[prop].replace(rep,val)) ;
             return;
         }
     }

     globalThis.approveProperty = function(obj, prop, val) {
         if (!val) {
             return;
         }
         if (!(obj[prop])) {
             obj[prop] = val;
             return;
         }
         if (obj[prop] != val) {
             obj[prop] = val;
             return;
         }
     }

     console.detail = function(stuff) {
         try {
             stuff.constructor.prototype._log = function() {
                 console.log(this);
             };
             return stuff._log();
         } catch (e) {
             console.log(stuff);
         }
     };
     console.list = function() {
         console.log([...arguments]);
     };

     globalThis.sanitizeAttr = function(str) {
         return str
             .replaceAll(":", "i")
             .replaceAll(".", "o")
             .replaceAll("+", "t")
             .replaceAll(">", "v")
             .replaceAll("<", "v")
             .replaceAll("~", "s")
             .replaceAll("|", "1")
             .replaceAll("(", "l")
             .replaceAll(")", "l")
             .replaceAll("[", "I")
             .replaceAll("]", "I")
             .replaceAll("=", "-")
             .replaceAll("$", "S")
             .replaceAll("^", "A")
             .replaceAll(";", "j")
             .replaceAll("*", "x")
             .replaceAll("/", "X")
             .replaceAll("\\", "X")
             .replaceAll("%", "X")
             .replaceAll("&", "8")
             .replaceAll("@", "a")
             .replaceAll("?", "7")
             .replaceAll("!", "E")
             .replaceAll("#", "H")
             .replaceAll("{", "Q")
             .replaceAll("}", "Q")
             .replaceAll('"', "2q")
             .replaceAll("'", "q")
             .replaceAll(",", "g")
             .replace(/\s/g, "_")
             .replace(/[^a-zA-Z0-9_-]/g, "�");
     };

     defineNonenumerable(EventTarget.prototype,'addDeferEventListener' , function(type, listener, options) {
         const target = this;
         const deferListener = (event) => {
             defer(() => {
                 listener(event);
             }, `${listener}${S(()=>target.outerHTML)}`);
         };
         if (options === undefined) {
             target.addEventListener(type, deferListener);
         } else {
             target.addEventListener(type, deferListener, options);
         }
     });
      defineNonenumerable(Element.prototype,'addDeferEventListener',function(type, listener, options) {
         const target = this;
         const deferListener = (event) => {
             defer(() => {
                 listener(event);
             }, `${listener}${S(()=>target.outerHTML)}`);
         };
         if (options === undefined) {
             target.addEventListener(type, deferListener);
         } else {
             target.addEventListener(type, deferListener, options);
         }
     });
     if (globalThis.Element) {
         defineNonenumerable(Element.prototype,'updateAttribute' , function(attr, val) {
             const el = this;
             if (!el.hasAttribute(attr, val)) {
                 el.setAttribute(attr, val);
             } else {
                 if (el.getAttribute(attr) != val) {
                     el.setAttribute(attr, val);
                 }
             }
         });

          defineNonenumerable(Element.prototype,'replaceAttribute' , function(attr, oldval, newval) {
             const el = this;
             el.updateAttribute(attr,el.getAttribute(attr).replace(oldval,newval));
         });

         defineNonenumerable(Element.prototype,'approveAttribute',function(attr, val) {
             if (!val) {
                 return;
             }
             const el = this;
             if (!el.hasAttribute(attr, val)) {
                 el.setAttribute(attr, val);
             } else {
                 if (el.getAttribute(attr) != val) {
                     el.setAttribute(attr, val);
                 }
             }
         });

         defineNonenumerable(Element.prototype,'getStyle' , function(attribute) {
             try {
                 let compStyles = window.getComputedStyle(this);
                 const out =
                     compStyles.getPropertyValue(attribute) || compStyles[attribute];
                 return out;
             } catch (e) {
                 return undefined;
             }
             return undefined;
         });

         defineNonenumerable(Element.prototype,'updateStyle', function(attr, val) {
             const el = this;
             const elstyle = el.getStyle(attr);
             if (!elstyle) {
                 el.style[attr] = val;
             } else {
                 if (elstyle != val) {
                     el.style[attr] = val;
                 }
             }
         });

	     
         globalThis.helpAppliedFunction=function(func){     
             if(typeof func == 'function'){
                if(func.length == 0){
                  try{func=Function('el',`with(el){(${func})()}`);}catch(e){}
                }
             }
             if(typeof func == 'object'){
              let obj=func;
               try{func=(el)=>el.run(obj);}catch(e){}
             }
          return func;
         }
         globalThis.queryApplyAll = async function(query, func) {
             func=helpAppliedFunction(func);
             let elems = Array.from(document.querySelectorAll(query));
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



          globalThis.selectApplyAll = async function(query, func) {
           func=helpAppliedFunction(func);
           let attr = sanitizeAttr(`${query}${func}`.replaceAll('\n','')).replace(/[^a-zA-Z]/g,'');
           let queryBuilder=`:is(${query}):not([${attr}]),:where(${query}):not([${attr}])`;
             let elems = Array.from(document.querySelectorAll(queryBuilder));
             const elems_length = elems.length;
             for (let i = 0; i < elems_length; i++) {
                 try {
                     func(elems[i]);
                     elems[i].setAttribute(attr,attr);
                 } catch (e) {
                     await async ("selectApplyAll");
                     console.log(e);
                     continue;
                 }
             }
         };
     }

     globalThis.queryApplyAllAwait = async function(query, func) {
         func=helpAppliedFunction(func);
         let elems = Array.from(document.querySelectorAll(query));
         const elems_length = elems.length;
         for (let i = 0; i < elems_length; i++) {
             try {
                 await func(elems[i]);
             } catch (e) {
                 await async ("queryApplyAll");
                 console.log(e);
                 continue;
             }
         }
     };



     globalThis.queryAttrAll = async function(query, attr, val, func) {
         func=helpAppliedFunction(func);
         let elems = Array.from(document.querySelectorAll(query));
         const elems_length = elems.length;
         for (let i = 0; i < elems_length; i++) {
             let elem = elems[i];
             try {
                 func(elem);
                 elem.updateAttribute(attr, val);
             } catch (e) {
                 await async ("queryApplyAll");
                 console.log(e);
                 continue;
             } finally {
                 elem.updateAttribute(attr, val);
             }
         }
     };

     globalThis.queryBindAll = function(query, func) {
         func=helpAppliedFunction(func);
         const attr = "query-" + sanitizeAttr(query) + sanitizeAttr(func.toString());
         query = query + ":not([" + attr + "])";
         console.log(query);
         declare(() => {
             queryAttrAll(query, attr, "bound", func);
         }, query);
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

     globalThis.declareErrorQueue = [];
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

     if (!(globalThis.declarations)) {
         globalThis.declarations = [];
         globalThis.declarationStrings = [];
     }

     globalThis.declare = function(func, id) {
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

     globalThis.declareEvaluator = async function() {
         if (!(globalThis.declareStartup)) {
             globalThis.declareStartup = 0;
         }
         if (declareStartup < 3) {
             declareStartup++;
         } else {
             if ((document.readyState != 'complete') && (Math.floor(Math.random() * 10) < 8)) {
                 return;
             }
             if (draggingSticky) {
                 return;
             }
             if (typingSticky) {
                 return;
             }
             if (clickingSticky) {
                 return;
             }
             if (document.hidden) {
                 return;
             }
             if (document.visibilityState == 'hidden') {
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
                     if ((navigator.userActivation) && (navigator.userActivation?.isActive === false)) {
                         return;
                     }
                     if ((navigator.userActivation) && (navigator.userActivation?.hasBeenActive === false)) {
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

         const declarations_length = declarations.length;
         for (let i = 0; i < declarations_length; i++) {
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

     if (!(globalThis.deferations)) {
         globalThis.deferations = [];
         globalThis.deferationStrings = [];
     }

     globalThis.defer = function(func, id) {
         if (!func) {
             return;
         }
         if ((func.next) && (`${func}` == '[object Generator]')) {
             return (async () => {
                 return defer(await (func), id);
             })();

         }
         if (`${func.constructor}`.includes("romise")) {
             return defer(() => func().next(), id);
         }
         try {
             if (`${func.constructor}`.toLowerCase().includes("generatorfunction")) {
                 return defer(() => func().next(), id);
             }
         } catch (e) {
             console.log(e);
         };
         if (`${func.constructor}`.includes("unction")) {
             let funcString = func.toString() + id;
             if ((!(deferationStrings.includes(funcString))) ||
                 (!(funcString.includes('defer(')))) {
                 globalThis.deferations.push(func);
                 globalThis.deferationStrings.push(funcString);
             }
         } else {
             Q(() => {
                 defer(() => ((eval?.(`${func}`), id) || eval(`${func}`), id));
             });
         }
     };

     globalThis.deferEvaluator = async function() {
         const deferations_length = deferations.length;
         for (let i = 0; i < deferations_length; i++) {
             try {
                 if (`${new Date().getTime()}`.endsWith("10")) {
                     await async ("deferEvaluator");
                 }


                 deferations.shift()?.();
             } catch (e) {
                 await async ("deferEvaluator");
                 console.log(e);
                 continue;
             }
         }
     };

     if (!(globalThis.designations)) {
         globalThis.designations = [];
         globalThis.designationStrings = [];
     }
     globalThis.deliver = function(func){
        setInterval(()=>{
         try{
          func();
         }catch(e){
          console.log(e.message);
         }
        },100);
     };
  
     globalThis.design = function(func, id) {
         if (!func) {
             return;
         }
         if ((func.next) && (`${func}` == '[object Generator]')) {
             return (async () => {
                 return design(await (func), id);
             })();

         }
         if (`${func.constructor}`.includes("romise")) {
             return design(() => func().next(), id);
         }
         try {
             if (`${func.constructor}`.toLowerCase().includes("generatorfunction")) {
                 return design(() => func().next(), id);
             }
         } catch (e) {
             console.log(e);
         };
         if (`${func.constructor}`.includes("unction")) {
             let funcString = func.toString() + id;
             if ((!(designationStrings.includes(funcString))) ||
                 (!(funcString.includes('design(')))) {
                 globalThis.designations.push(func);
                 globalThis.designationStrings.push(funcString);
             }
         } else {
             Q(() => {
                 design(() => ((eval?.(`${func}`), id) || eval(`${func}`), id));
             });
         }
     };

     globalThis.designEvaluator = async function() {
         if (!(globalThis.designStartup)) {
             globalThis.designStartup = 0;
         }
         if (designStartup < 3) {
             designStartup++;
         } else {
             if ((document.readyState != 'complete') && (Math.floor(Math.random() * 10) < 8)) {
                 return;
             }
             if (document.hidden) {
                 return;
             }
             if (document.visibilityState == 'hidden') {
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
                     if ((navigator.userActivation) && (navigator.userActivation.isActive === false)) {
                         return;
                     }
                     if ((navigator.userActivation) && (navigator.userActivation.hasBeenActive === false)) {
                         return;
                     }
                     if (!document.hasFocus()) {
                         return;
                     }
                 }
             }
         }

         const designations_length = designations.length;
         for (let i = 0; i < designations_length; i++) {
             if (`${new Date().getTime()}`.endsWith("10")) {
                 await async ("designEvaluator");
             }
             try {
                 designations[i]();
             } catch (e) {
                 await async ("designEvaluator");
                 console.log(e);
                 continue;
             }
         }
     };

     Q(() => globalThis.declareEvaluator());
     Q(() => globalThis.deferEvaluator());
     Q(() => globalThis.designEvaluator());
     if (globalThis.document) {
         (document || globalThis).addEventListener("DOMContentLoaded", (event) => {
             Q(() => globalThis.declareEvaluator());
             Q(() => globalThis.deferEvaluator());
             Q(() => globalThis.designEvaluator());
         });
         (document || globalThis).addEventListener("readystatechange", (event) => {
             Q(() => globalThis.declareEvaluator());
             Q(() => globalThis.deferEvaluator());
             Q(() => globalThis.designEvaluator());
         });
         window.addEventListener("load", (event) => {
             Q(() => globalThis.declareEvaluator());
             Q(() => globalThis.deferEvaluator());
             Q(() => globalThis.designEvaluator());
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
                     Q(() => globalThis.deferEvaluator());
                     setTimeout(() => globalThis.declareEvaluationInProgress = false, 1);
                 });
             });
         }, 100);
         setInterval(function() {
             if (globalThis.designEvaluationInProgress) {
                 return true;
             }
             globalThis.designEvaluationInProgress = true;
             requestIdleCallback(() => {
                 requestAnimationFrame(async () => {
                     try {
                         await globalThis.designEvaluator();
                     } catch (e) {
                         await console.log(e);
                     }
                     setTimeout(() => globalThis.designEvaluationInProgress = false, 1);
                 });
             });
         }, 101);

         globalThis.page_html = document.querySelector("html") || document.firstElementChild;

         globalThis.page_html.setAttribute("window-location", window.location.href);
         declare(() =>
             globalThis.page_html.updateAttribute("window-location", window.location.href),
         );

         page_html.setAttribute("user-agent", navigator.userAgent);
         declare(() => page_html.updateAttribute("user-agent", navigator.userAgent));
     }

     if (globalThis.window) {
         if (window != window.top) {
             globalThis.page_html.setAttribute("framed", "true");
         }
     }


     declare(() => {
         if ((window.innerHeight == window.innerWidth)) {
             globalThis.page_html.updateAttribute("orientation", "square");
         }
         if (window.innerHeight > window.innerWidth) {
             globalThis.page_html.updateAttribute("orientation", "portrait");
         }
         if (window.innerHeight < window.innerWidth) {
             globalThis.page_html.updateAttribute("orientation", "landscape");
         }
     });

     declare(() => {
         globalThis.page_html.updateAttribute("ready-state", document.readyState);
         globalThis.page_html.updateAttribute("visibility-state", document.visibilityState);
         globalThis.page_html.updateAttribute("character-set", document.characterSet);
         globalThis.page_html.updateAttribute("compat-mode", document.compatMode);
         globalThis.page_html.updateAttribute("content-type", document.contentType);
         globalThis.page_html.updateAttribute("cookie", document.cookie);
         globalThis.page_html.updateAttribute("design-mode", document.designMode);
         globalThis.page_html.updateAttribute("dir", document.dir);
         globalThis.page_html.updateAttribute("doctype", document.doctype);
         globalThis.page_html.updateAttribute("document-uri", document.documentURI);
         globalThis.page_html.updateAttribute("referrer", document.referrer);
         globalThis.page_html.updateAttribute("title", document.title);
         globalThis.page_html.updateAttribute("history-state", (Q(() => JSON.stringify(history.state)) || history.state));
         globalThis.page_html.updateAttribute("online", navigator.onLine);
     });


     declare(() => {
         const untagged = Array.from(document.querySelectorAll(":not([tag-name])"));
         const untagged_length = untagged.length;
         for (let i = 0; i < untagged_length; i++) {
             try {
                 const tagname = untagged[i].outerHTML
                     .toString()
                     .split("<")[1]
                     .split(" ")[0]
                     .split(">")[0];
                 untagged[i].updateAttribute("tag-name", tagname);
             } catch (e) {
                 continue;
             }
         }
     });

     declare(() => {
         const untagged = Array.from(document.querySelectorAll(":not([tag])"));
         const untagged_length = untagged.length;
         for (let i = 0; i < untagged_length; i++) {
             try {
                 untagged[i].updateAttribute("tag", untagged[i].tagName);
             } catch (e) {
                 continue;
             }
         }
     });

     declare(() => {
         const untagged = Array.from(document.querySelectorAll(":not([element-prefix])"));
         const untagged_length = untagged.length;
         for (let i = 0; i < untagged_length; i++) {
             try {
                 untagged[i].approveAttribute("element-prifix", untagged[i].untagged[i].prefix);
             } catch (e) {
                 continue;
             }
         }
     });

     declare(() => {
         const unnamed = Array.from(document.querySelectorAll(":not([namespace-uri])"));
         const unnamed_length = unnamed.length;
         for (let i = 0; i < unnamed_length; i++) {
             try {
                 unnamed[i].updateAttribute("namespace-uri", unnamed[i].namespaceURI);
             } catch (e) {
                 continue;
             }
         }
     });

     /* declare(() => {
        queryApplyAll("*", (el) => {
          const attrs = el.getAttributeNames();
          const attrs_length = attrs.length;
          for (let i = 0; i < attrs_length; i++) {
            try {
              let atr = attrs[i].replaceAll(":", "-");
              if (atr == "xmlns") {
                atr = "xml-ns";
              }
              if (el.matches("[" + atr + "]")) {
                continue;
              }
              el.updateAttribute(atr, el.getAttribute(attrs[i]));
            } catch (e) {
              continue;
            }
          }
        });
      });*/


     declare(() => {
         if (!(document.querySelector('style.has-test'))) {

             let hasTestStyle = document.createElement('style');

             hasTestStyle.className = 'has-test';

             hasTestStyle.innerHTML = '.has-test:has(.supported){--has-supported:true;}';

             doDOM(() => {
                 body().appendChild(hasTestStyle);
             });
         }

         if (!(document.querySelector('span.has-test'))) {

             let hasTestSpan = document.createElement('span');

             hasTestSpan.className = 'has-test';

             hasTestSpan.innerHTML = '<span class="supported"></span>';
             doDOM(() => {
                 body().appendChild(hasTestSpan);
             });
         }

         let hasTest = !!(getComputedStyle(document.querySelector('span.has-test')).getPropertyValue('--has-supported'));
         updateProperty(globalThis, 'hasSupported', hasTest);
         globalThis.page_html.updateAttribute('has-supported', hasTest);
     });

     design(() => {
         queryApplyAll('dynamic-styles', async (el) => {
             let firstRun = false;
             let instructions = el.querySelector('style-json');
             if (!instructions) {
                 firstRun = true;
                 try {
                     if (el.getAttribute('fetching')) {
                         return;
                     }
                     let dataSrc = el.getAttribute('data-src');
                     if (!dataSrc) {
                         return;
                     }
                     if (!dataSrc.startsWith('http')) {
                         let a = document.createElement('a');
                         a.setAttribute('href', dataSrc);
                         dataSrc = a.href;
                     }
                     el.updateAttribute('fetching', 'in progress');
                     let dynSty = await fetchText(dataSrc);
                     let styleJSON = document.createElement('style-json');
                     styleJSON.innerHTML = `<style>${dynSty}</style>`;
                     el.appendChild(styleJSON);
                     el.removeAttribute('fetching');
                     instructions = styleJSON;
                 } catch (e) {
                     el.updateAttribute('ing', 'error');
                     console.log(e);
                     return;
                 }
             }



             const dynamicStylesJSON = JSON.parse(instructions.querySelector('style').innerHTML);
             const dynamicStyles = dynamicStylesJSON["dynamic-styles"];
             if (dynamicStyles) {
                 const dynamicStyleKeys = Object.keys(dynamicStyles);
                 const dynamicStyleKeys_length = dynamicStyleKeys.length;
                 for (let i = 0; i < dynamicStyleKeys_length; i++) {
                     try {
                         let ds = el.querySelector(`[id="${dynamicStyleKeys[i]}"]`);
                         if (!ds) {
                             let dst = document.createElement('style');
                             dst.id = `${dynamicStyleKeys[i]}-transition`;
                             dst.innerHTML = `:root{transition: ${dynamicStyleKeys[i]} 500ms;`;
                             el.appendChild(dst);
                             ds = document.createElement('style');
                             ds.id = dynamicStyleKeys[i];
                             ds.innerHTML = `:root{${dynamicStyleKeys[i]}:${eval(decodeURIComponent(dynamicStyles[dynamicStyleKeys[i]]))};`;
                             el.appendChild(ds);
                         } else {
                             let updatedStyle = `:root{${dynamicStyleKeys[i]}:${eval(decodeURIComponent(dynamicStyles[dynamicStyleKeys[i]]))};`;
                             if ((updatedStyle) && (ds.innerHTML.toString() != updatedStyle)) {
                                 ds.innerHTML = updatedStyle;
                             }

                         }
                     } catch (e) {
                         console.log(e);
                         continue;
                     }
                 }

             }

             const dynamicSelectors = dynamicStylesJSON["dynamic-selectors"];
             if (dynamicSelectors) {
                 const dynamicSelectorKeys = Object.keys(dynamicSelectors);
                 const dynamicSelectorKeys_length = dynamicSelectorKeys.length;
                 for (let i = 0; i < dynamicSelectorKeys_length; i++) {
                     try {
                         let ds = el.querySelector(`[id="${dynamicSelectorKeys[i]}"]`);
                         if (!ds) {
                             ds = document.createElement('style');
                             ds.id = dynamicSelectorKeys[i];
                             ds.innerHTML = `${eval(decodeURIComponent(dynamicSelectorKeys[i]))}{${dynamicSelectors[dynamicSelectorKeys[i]]}}`;
                             el.appendChild(ds);
                         } else {
                             let updatedStyle = `${eval(decodeURIComponent(dynamicSelectorKeys[i]))}{${dynamicSelectors[dynamicSelectorKeys[i]]}}`;
                             if ((updatedStyle) && (ds.innerHTML.toString() != updatedStyle)) {
                                 ds.innerHTML = updatedStyle;
                             }

                         }
                     } catch (e) {
                         console.log(e);
                         continue;
                     }
                 }

             }



         });
     });

     /*
  <dynamic-styles>
<style-json>
<style>
{
"dynamic-styles" : {
"--window-height" : "`${window.innerHeight}px`"
}
}
</style>
</style-json>
<style id="--window-height">
:root{--window.innerHeight:963px;}
</style>
</dynamic-styles>

  */


     declare(() => {
         if (!(document.querySelector('style[template-styles]'))) {
             let sty = document.createElement('style');
             sty.setAttribute('template-styles', true);
             sty.innerHTML = `if,else,for,dynamic-styles{display:none !important;}`;
             doDOM(() => {
                 body().appendChild(sty);
             });
         }
     });

     function applyDynamicStyles(elem) {
         let output = ':root[dynamic-styles]{\n';
         for (const attr of elem.attributes) {
             if (attr.name.startsWith('css-')) {
                 output += `${attr.name.replace('css-','--')}: ${eval?.(attr.value)};\n`;
             }
         }
         output += "}";
         let s = elem.innerHTML.toString();
         if (s.includes(':root[dynamic-styles]{')) {
             s = s.split(':root[dynamic-styles]{')[1].split('}').slice(1).join('}');
         }
         s = output + s;
         if (s != (elem.innerHTML.toString())) {
             elem.innerHTML = s;
         }
     }

     design(() => {
         const dynamicStyles = document.querySelectorAll('style[dynamic]');
         const dynamicStyles_length = dynamicStyles.length;
         for (let i = 0; i < dynamicStyles_length; i++) {
             try {
                 applyDynamicStyles(dynamicStyles[i]);
             } catch (e) {
                 console.log(e);
                 continue;
             }
         }
         document.querySelector(':root').updateAttribute('dynamic-styles', true);
     });

     globalThis.modulesSupported = true;
     globalThis.page_html.updateAttribute('modules-supported', true);

     let nmscript = document.createElement('script');
     nmscript.setAttribute('nomodule', true);
     nmscript.innerHTML = `
globalThis.modulesSupported=false;
globalThis.page_html.updateAttribute('modules-supported',false);
`;
     globalThis.page_html.appendChild(nmscript);

     globalThis.safeFetch = async function() {
	let res;
         try {
             res = await fetch(...arguments);
		 res.requested = arguments
		 return res;
         } catch (e) {
             console.log(e);
             res = new Response(arguments[0]+'\n'+e.message+'\n'+e.stack, {
                 status: 569,
                 statusText: e.message
             });
		res.requested = arguments;
         }
	return res;
     };
     globalThis.unsafeFetch = async function(){
      let res = await fetch(...arguments);
	res.requested = arguments;
      if(res.status>399){
       throw new Error(`${res.status} ${S(()=>res.statusText)}`);
      }
      return res;
     }
     globalThis.fatch = globalThis.safeFetch;
     globalThis.zfetch = globalThis.safeFetch;
     globalThis.frow = globalThis.unsafeFetch
	globalThis.zfetchText = async function(){
		try{
			let res = await fetch(...arguments);
			if(res.status > 399){
				return res.statusText;
			}
			return await res.text();
		}catch(e){
			return e.message;
		}
	}

	JSON.zparse = function(str){
		try{
			return JSON.parse(str);
		}catch(e){
			console.log(e,str);
			e.inputText = str;
			return e;
		}
	}
     globalThis.fetchResponseText = async function() {
         let res = await fetch(...arguments);
         res.fullBody = await res.text();
         return res;
     };



     globalThis.fetchResponseArrayBuffer = async function() {
         let res = await fetch(...arguments);
         res.fullBody = await res.arrayBuffer();
         return res;
     };

     globalThis.fetchArrayBuffer = async function() {
         return (await fetch(...arguments)).arrayBuffer();
     };

     Q(()=>{
      defineNonenumerable(Object.prototype,'Þ' , function() {
         return arguments[0](this, ...Array.from(arguments).slice(1));
     });
     });

     globalThis.console.lag = async function() {
         return console.log(...arguments);
     };

     globalThis.ifTry = (bool, then, elseThen) => {
         if (bool) {
             try {
                 if ((typeof bool) == 'function') {
                     if (bool()) {
                         return then();
                     } else {
                         return elseThen();
                     }
                 } else {
                     return then();
                 }
             } catch (e) {
                 if (elseThen) {
                     return elseThen(e);
                 } else {
                     return;
                 }
             }
         } else {
             if (elseThen) {
                 return elseThen(e);
             } else {
                 return;
             }
         }
     }

     globalThis.$ifTry = async (bool, then, elseThen) => {
         bool = await bool;
         if (bool) {
             try {
                 if (typeof bool == "function") {
                     if (await bool()) {
                         return await then();
                     } else {
                         return await elseThen(e);
                     }
                 } else {
                     return await then();
                 }
             } catch (e) {
                 if (await elseThen) {
                     return await (
                         await elseThen
                     )(e);
                 } else {
                     return;
                 }
             }
         } else {
             if (await elseThen) {
                 return await (
                     await elseThen
                 )(e);
             } else {
                 return;
             }
         }
     };

     /** The ever useful sleep function */
     globalThis.sleep = (ms) => {
         return new Promise((resolve) => {
             setTimeout(resolve, ms);
         });
     };

     /** async function object */
     globalThis.AsyncFunction = async function() {}.constructor;

     /** extract a value from json 
using string manipulation.
Great for malformed json.
*/
     globalThis.JSON.extract = function(json, str) {
         if (typeof json != "string") {
             json = JSON.stringify(json);
         }
         return json.split(str)?.[1]?.split?.('"')?.[2];
     };

     /** change the character of a string at a specific index */
     defineNonenumerable(globalThis.String.prototype,'setCharAt' , function(index, char) {
         let str = this.split("");
         str[index] = char;
         return str.join("");
     });

     defineNonenumerable(String.prototype,'includesAny' , function(arr) {
         let arr_length = arr.length;
         for (let i = 0; i < arr_length; i++) {
             if (this.includes(arr[i])) {
                 return true;
             }
         }
         return false;
     });


     if (!(globalThis.subscriberList)) {
         globalThis.subscriberList = Object.create(null);
     }
     declare(() => {
         const subList = Object.keys(globalThis.subscriberList);
         const subList_length = subList.length;
         for (let i = 0; i < subList_length; i++) {
             try {
                 let s = subList[subList[i]];
                 s.elem.updateAttribute(s.attr, localStorage.getItem(subList[i]));
             } catch (e) {
                 continue;
             }
         }
     });
     globalThis.subscribeState = function(elem, attr, id) {
         let s = Object.create(null);
         s.elem = elem;
         s.attr = attr;
         globalThis.subscriberList[id] = s;
     }

     globalThis.unsubscribeState = function(id) {
         delete globalThis.subscriberList[id];
     }

     localStorage.updateItem = function(key, val) {

         if (!(localStorage.getItem(key))) {
             localStorage.setItem(key, val);
         } else if (localStorage.getItem(key) != val) {
             localStorage.setItem(key, val);
         }

     }

     if (!(globalThis.publisherList)) {
         globalThis.publisherList = Object.create(null);
     }
     declare(() => {
         const pubList = Object.keys(globalThis.publisherList);
         const pubList_length = pubList.length;
         for (let i = 0; i < pubList_length; i++) {
             try {
                 let s = pubList[pubList[i]];
                 localStorage.updateItem(pubList[i], s.elem.getAttribute(s.attr));
             } catch (e) {
                 continue;
             }
         }
     });
     globalThis.publishState = function(elem, attr, id) {
         let s = Object.create(null);
         s.elem = elem;
         s.attr = attr;
         globalThis.pubList[id] = s;
     }

     globalThis.unpublishState = function(id) {
         delete globalThis.publisherList[id];
     }


     globalThis.toSansSerif = function(str) {
         const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
         const xyz = '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓';
         const abc_length = abc.length;
         for (let i = 0; i < abc_length; i++) {
             str = str.replaceAll(abc[i], xyz[i]);
         }
         return str;
     }


     Object.descriptorKeys = function(obj) {
         try {
             return Object.keys(Object.getOwnPropertyDescriptors(obj)) || [];
         } catch (e) {
             return [];
         }
     }


     Object.forInKeys = function(obj) {
         let keys = [];
         for (const i in obj) {
             try {
                 keys.push[i];
             } catch (e) {
                 continue;
             }
         }
         return keys;
     }

     globalThis.assimilate = function(target, source) {
         if (!source) {
             return;
         }
         const objKeys = Object.descriptorKeys(source);
         const objKeys_length = objKeys.length;
         for (let i = 0; i < objKeys_length; i++) {
             try {
                 if ((!target[objKeys[i]]) && (typeof source[objKeys[i]] == 'function')) {
                     target[objKeys[i]] = source[objKeys[i]];
                 }
             } catch (e) {
                 continue;
             }
         }
         return target;
     }
     globalThis.absorb = function(target, source) {
         if (!source) {
             return;
         }
         const objKeys = Object.descriptorKeys(source);
         const objKeys_length = objKeys.length;
         for (let i = 0; i < objKeys_length; i++) {
             try {
                 if ((!target[objKeys[i]]) && (typeof source[objKeys[i]] == 'function')) {
                     target[objKeys[i]] = function() {
                         return source[objKeys[i]](...arguments);
                     }
                 }
             } catch (e) {
                 continue;
             }
         }
         return target;
     }
     globalThis.mimic = function(target, source, proto) {
         if (!source) {
             return;
         }
         if (!proto) {
             return;
         }
         const objKeys = Object.descriptorKeys(proto);
         const objKeys_length = objKeys.length;
         for (let i = 0; i < objKeys_length; i++) {
             try {
                 if ((!target[objKeys[i]]) && (typeof source[objKeys[i]] == 'function')) {
                     target[objKeys[i]] = function() {
                         return source[objKeys[i]](...arguments);
                     }
                 } else if ((!target[objKeys[i]]) && (source[objKeys[i]])) {
                     target[objKeys[i]] = function() {
                         if (arguments.length == 1) {
                             source[objKeys[i]] = arguments[0];
                         }
                         return source[objKeys[i]];
                     }
                 }
             } catch (e) {
                 continue;
             }
         }
         return target;
     }
     Q(() => {
         if (!Atomics) {
             globalThis.Atomics = {};
         }
     });
     Q(() => assimilate(globalThis, Object));
     Q(() => assimilate(globalThis, Reflect));
     Q(() => assimilate(globalThis, Atomics));
     Q(() => assimilate(globalThis, Math));
     Q(() => assimilate(globalThis, JSON));
     Q(() => assimilate(globalThis, BigInt));
     Q(() => assimilate(globalThis, Date));
     Q(() => mimic(globalThis, navigator, Navigator.prototype));
     Q(() => absorb(globalThis, document));
     Q(() => mimic(globalThis, document, Document.prototype));
     Q(() => mimic(globalThis, document, EventTarget.prototype));
     Q(() => globalThis.body = () => document.body || document.firstElementChild);
     Q(() => absorb(globalThis, body()));
     Q(() => mimic(globalThis, body(), HTMLBodyElement.prototype));
     Q(() => mimic(globalThis, body(), HTMLElement.prototype));
     Q(() => mimic(globalThis, body(), Element.prototype));
     Q(() => mimic(globalThis, body(), Node.prototype));
     Q(() => mimic(globalThis, body(), EventTarget.prototype));

     globalThis.select = globalThis.querySelector;
     globalThis.selectAll = globalThis.querySelectorAll;
     document.select = document.querySelector;
     document.selectAll = document.querySelectorAll;
     defineNonenumerable(Element.prototype,'select', Element.prototype.querySelector);
     defineNonenumerable(Element.prototype,'selectAll', Element.prototype.querySelectorAll);
     defineNonenumerable(HTMLCollection.prototype,'querySelector',function(qy){
      if(this.length===undefined){return;}
      for(let i=0;i<this.length;i++){try{
        let el = this[i].querySelector(qy);
        if(el){return el;}
      }catch(e){continue;}}
     });
     defineNonenumerable(HTMLCollection.prototype,'querySelectorAll',function(qy){
      if(this.length===undefined){return;}
      let arr = [];
      if(this.length < 1){return arr;}
      for(let i=0;i<this.length;i++){try{
        arr = arr.concat(Array.from(this[i].querySelectorAll(qy)));
      }catch(e){continue;}}
      return arr;
     });

     Q(()=>{
     defineNonenumerable(Object.prototype,'querySelector', HTMLCollection.prototype.querySelector);
     defineNonenumerable(Object.prototype,'querySelectorAll',HTMLCollection.prototype.querySelectorAll);
     defineNonenumerable(Object.prototype,'select',Object.prototype.querySelector);
     defineNonenumerable(Object.prototype,'selectAll', Object.prototype.querySelectorAll);
     });
 
     globalThis.swapText = function(startText, endText) {
         let el = document.body;
         if (endText.toLowerCase().includes(`${startText}`.toLowerCase())) {
             endText = toSansSerif(endText);
         }
         const reg = new RegExp(startText, "gi")
         if(reg.test(endText)){
             endText = toSansSerif(endText);
         }
         
         if (!el) {
             return;
         }
         var n, a = [],
             walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
         while (n = walk.nextNode()) {
             a.push(n);
             let ntext = n.textContent;

             ntext = ntext.replace(reg, endText);


             updateProperty(n, 'textContent', ntext);



         };
         if (document.title.toLowerCase().includes(startText.toLowerCase())) {
             document.title = document.title
                 .replace(reg, endText);
         }
         return a;
     }


     if (globalThis.XMLHttpRequest) {
         let xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 let headers = xhttp.getAllResponseHeaders().split('\r\n');
                 const headers_length = headers.length;
                 for (let i = 0; i < headers_length; i++) {
                     try {
                         if (!headers[i]) {
                             continue;
                         }
                         const [key, val] = headers[i].split(': ');
                         globalThis.page_html.updateAttribute(`response-header-${key}`, val);
                     } catch (e) {
                         continue;
                     }
                 }
             }
         };
         xhttp.open("GET", window.location.href, true);
         xhttp.send();
     }
     void async function() {
         let myrequest = new Request(window.location.href);
         let myresponse = await fetch(myrequest);
         myrequest.headers.forEach(function() {
             globalThis.page_html.updateAttribute(`fetch-request-header-${arguments[1]}`, arguments[0]);
         });


         myresponse.headers.forEach(function() {
             globalThis.page_html.updateAttribute(`response-header-${arguments[1]}`, arguments[0]);
         })
     }();

     globalThis.mouseX = 0;
     globalThis.mouseY = 0;

     function updateMouseLocation(event) {
         defer(() => {
             globalThis.mouseX = event.pageX;
             globalThis.mouseY = event.pageY;
         });
     }

     window.addEventListener("mousemove", updateMouseLocation, false);
     window.addEventListener("mouseenter", updateMouseLocation, false);
     window.addEventListener("mouseleave", updateMouseLocation, false);

     globalThis.screenX = 0;
     globalThis.screenY = 0;

     function updateTouchScreenLocation(event) {
         defer(() => {
             if (!globalThis.wasFocused) {
                 globalThis.wasFocused = true;
             }
             const event_touches_length = event.touches.length;
             for (let i = 0; i < event_touches_length; i++) {
                 try {
                     globalThis.screenX = event.touches[i].screenX;
                     globalThis.screenY = event.touches[i].screenY;
                 } catch (e) {
                     continue;
                 }
             }
         });
     }

     Q(() => {
         (document || globalThis).addEventListener("DOMContentLoaded", (event) => {
             document.firstElementChild.addEventListener("touchstart", updateTouchScreenLocation, false);
             document.firstElementChild.addEventListener("touchend", updateTouchScreenLocation, false);
             document.firstElementChild.addEventListener("touchmove", updateTouchScreenLocation, false);
             document.firstElementChild.addEventListener("touchcancel", updateTouchScreenLocation, false);

             document.body.addEventListener("touchstart", updateTouchScreenLocation, false);
             document.body.addEventListener("touchend", updateTouchScreenLocation, false);
             document.body.addEventListener("touchmove", updateTouchScreenLocation, false);
             document.body.addEventListener("touchcancel", updateTouchScreenLocation, false);
         });
         document.firstElementChild.addEventListener("touchstart", updateTouchScreenLocation, false);
         document.firstElementChild.addEventListener("touchend", updateTouchScreenLocation, false);
         document.firstElementChild.addEventListener("touchmove", updateTouchScreenLocation, false);
         document.firstElementChild.addEventListener("touchcancel", updateTouchScreenLocation, false);

         document.body.addEventListener("touchstart", updateTouchScreenLocation, false);
         document.body.addEventListener("touchend", updateTouchScreenLocation, false);
         document.body.addEventListener("touchmove", updateTouchScreenLocation, false);
         document.body.addEventListener("touchcancel", updateTouchScreenLocation, false);
     });


     globalThis.clientX = 0;
     globalThis.clientY = 0;

     function updateTouchclientLocation(event) {
         defer(() => {
             if (!globalThis.wasFocused) {
                 globalThis.wasFocused = true;
             }
             const event_touches_length = event.touches.length;
             for (let i = 0; i < event_touches_length; i++) {
                 try {
                     globalThis.clientX = event.touches[i].clientX;
                     globalThis.clientY = event.touches[i].clientY;
                 } catch (e) {
                     continue;
                 }
             }
         });
     }


     Q(() => {
         (document || globalThis).addEventListener("DOMContentLoaded", (event) => {
             document.firstElementChild.addEventListener("touchstart", updateTouchclientLocation, false);
             document.firstElementChild.addEventListener("touchend", updateTouchclientLocation, false);
             document.firstElementChild.addEventListener("touchmove", updateTouchclientLocation, false);
             document.firstElementChild.addEventListener("touchcancel", updateTouchclientLocation, false);

             document.body.addEventListener("touchstart", updateTouchclientLocation, false);
             document.body.addEventListener("touchend", updateTouchclientLocation, false);
             document.body.addEventListener("touchmove", updateTouchclientLocation, false);
             document.body.addEventListener("touchcancel", updateTouchclientLocation, false);
         });
         document.firstElementChild.addEventListener("touchstart", updateTouchclientLocation, false);
         document.firstElementChild.addEventListener("touchend", updateTouchclientLocation, false);
         document.firstElementChild.addEventListener("touchmove", updateTouchclientLocation, false);
         document.firstElementChild.addEventListener("touchcancel", updateTouchclientLocation, false);

         document.body.addEventListener("touchstart", updateTouchclientLocation, false);
         document.body.addEventListener("touchend", updateTouchclientLocation, false);
         document.body.addEventListener("touchmove", updateTouchclientLocation, false);
         document.body.addEventListener("touchcancel", updateTouchclientLocation, false);
     });


     declare(() => {


         queryApplyAll('if:not([evaluation]):not(template if,for if,if if,else if)', async (IF) => {
             IF.setAttribute('evaluation', 'in progress');
             let ELSE = false;
             try {
                 if (IF.nextElementSibling.tagName.toLowerCase() == 'else') {
                     ELSE = IF.nextElementSibling;
                 }
                 let condition = IF.getAttribute('condition');

                 condition = !!(await $Q(async () => await eval(condition)));

                 if (condition) {
                     let template = IF.querySelector('template');

                     if (!template) {
                         template = document.createElement('template');
                         template.innerHTML = IF.innerHTML;
                     }
                     IF.parentElement.insertBefore(template.content, IF);
                     IF.updateAttribute('evaluation', 'done');
                     if (ELSE) {
                         ELSE.updateAttribute('evaluation', 'done');
                     }

                 } else {
                     if (ELSE) {
                         let template = ELSE.querySelector('template');
                         if (!template) {
                             template = document.createElement('template');
                             template.innerHTML = ELSE.innerHTML;
                         }
                         IF.parentElement.insertBefore(template.content, IF);
                         IF.updateAttribute('evaluation', 'done');
                         ELSE.updateAttribute('evaluation', 'done');
                     }
                 }
             } catch (e) {
                 console.log(e);
                 IF.setAttribute('evaluation', 'error');
                 IF.setAttribute('error', e.message);
             }


         });

     });

     declare(() => {


         queryApplyAll('for:not([evaluation]):not(template for,for for,if for,else for)', async (FOR) => {
             FOR.setAttribute('evaluation', 'in progress');
             try {

                 let items = FOR.getAttribute('items');
                 if (!items) {
                     return FOR.updateAttribute('evaluation', 'missing items');
                 }
                 items = await eval(`$A(${items})`);

                 let template = FOR.querySelector('template');
                 if (!template) {
                     template = document.createElement('template');
                     template.innerHTML = FOR.innerHTML;
                 }
                 const fragment = document.createElement('template');
                 const items_length = items.length;
                 for (let i = 0; i < items_length; i++) {
                     try {
                         let temp = template.content.cloneNode(true);
                         Object.assign(temp, items[i]);
                         if ((typeof items[i]) == 'function') {
                             await items[i](temp, i);
                         }
                         let apply = FOR.getAttribute('apply');
                         if (apply) {
                             apply = eval(apply);
                             await apply(temp, i, items);
                         }
                         fragment.content.appendChild(temp)
                     } catch (e) {
                         continue;
                     }
                 }
                 FOR.parentElement.insertBefore(fragment.content, FOR);
                 FOR.updateAttribute('evaluation', 'done');

             } catch (e) {
                 console.log(e);
                 FOR.setAttribute('evaluation', 'error');
                 FOR.setAttribute('error', e.message);
             }


         });

     });

     /*declare(() => {

         queryApplyAll(':is(html,body,head,script,link,style,img,image,source,src,frame,iframe,object,embed):not([load-state])', (el) => {

             el.addDeferEventListener('load', (event) => {
                 el.updateAttribute('load-state', 'loaded');
             });
             el.addDeferEventListener('error', (event) => {
                 el.updateAttribute('load-state', 'error');
             });
             el.updateAttribute('load-state', 'listening');

         });

     });*/

  globalThis.patternReplaceAttr=function(attr, pattern, str, flags) {
  if (!flags) {
    queryApplyAll(`[${attr}="${pattern}"]`, (el) => {
      el.replaceAttribute(attr, pattern, str);
    });
    return;
  }
  let i = "";
  let g = "";
  let v = "";
  let $ = "";
  let eq = "";
  flags = `${flags}`.toLowerCase();
  if (flags.includes("i")) {
    i = "i";
  }
  if (flags.includes("^")) {
    v = "^";
    eq = "^";
  }
  if (flags.includes("$")) {
    v = "";
    $ = "$";
    eq = "$";
  }
  if (flags.includes("*")) {
    v = "";
    $ = "";
    eq = "*";
  }
  if (flags.includes("g")) {
    g = "g";
  }
  let rx = new RegExp(`${v}${pattern}${$}`, `${g}${i}`);
  let selector = `[${attr}${eq}="${pattern}"${i}]`;
  queryApplyAll(selector, (el) => {
    el.replaceAttribute(attr, rx, str);
  });
  return;


};
defineNonenumerable(Element.prototype,'setAttributes',function(attr){
 if(!attr){return;}
 try{
  const attrkeys = Object.keys(attr);
  const attrkeys_length=attrkeys.length;
  for(let i=0;i<attrkeys_length;i++){try{
   const k = attrkeys[i];
   this.updateAttribute(sanitizeAttr(`${k}`),`${attr[k]}`);
  }catch(e){continue;}}
 }catch(e){return;}
});

defineNonenumerable(Element.prototype,'setStyles',function(attr){
 if(!attr){return;}
 try{
  const attrkeys = Object.keys(attr);
  const attrkeys_length=attrkeys.length;
  for(let i=0;i<attrkeys_length;i++){try{
   const k = attrkeys[i];
   this.style[sanitizeAttr(`${k}`)]=`${attr[k]}`;
  }catch(e){continue;}}
 }catch(e){return;}
});

defineNonenumerable(Element.prototype,'setValues',function(attr){
 if(!attr){return;}
 try{
  const attrkeys = Object.keys(attr);
  const attrkeys_length=attrkeys.length;
  for(let i=0;i<attrkeys_length;i++){try{
   const k = attrkeys[i];
   this[k]=attr[k];
  }catch(e){continue;}}
 }catch(e){return;}
});

 defineNonenumerable(Element.prototype,'addChildren',function(lis){
  for(let i = 0;i<lis.length;i++){try{
   if(`${lis[i].constructor}`.toLowerCase().includes('element')){
    try{    
     this.appendChild(lis[i]);
    }catch(e){
     this.appendChild(buildElement(lis[i]));
    }
   }else{
    this.appendChild(buildElement(lis[i]));
   }
  }catch(e){continue;}}
 });
  
 globalThis.buildElement=function(item,options){
  let tag=`${item}`;
  if(item.tag){
   tag=item.tag;
   options=item;
  }else{
   if(item.tagName){
    tag=item.tagName;
    options=item;
   }
  }
  if(tag.startsWith('[object')){
   tag=tag.split('[object ')[1].split(']')[0].trim();
  }
  let el;
  if(item.cloneNode&&(tag.toLowerCase()!='window')){
   el=item.cloneNode(true)
  }else{
   try{
     el = createElement(tag);
   }catch(e){
    el = createElement(`${item.constructor}`.split('(')[0].split(' ')[1].trim());
   }
  }
  if(!options){return el;}
  let opkeys = Object.keys(options);
  for(let i=0;i<opkeys.length;i++){
    if(opkeys[i].toLowerCase().includes('attr')){el.setAttributes(options[opkeys[i]]);}
    if(opkeys[i].toLowerCase().includes('sty')){el.setStyles(options[opkeys[i]]);}
    if(opkeys[i].toLowerCase().includes('val')){el.setValues(options[opkeys[i]]);}
    if(opkeys[i].toLowerCase().startsWith('child')){el.addChildren(options[opkeys[i]]);}
    if(opkeys[i].toLowerCase().includes('trait')){el.setValues(options[opkeys[i]]);{el.setAttributes(options[opkeys[i]]);}  
  }
  return el;
 };

 globalThis.waitExists=async function(query){
  while(!select(query)){await sleep(100);await nextIdle();}
  return true;
 };
 globalThis.onExists=async function(query,func){
  await waitExists(query);
  func=helpAppliedFunction(func);
  return func(select(query));
 };
globalThis.onTrue=async function(bool,func){
  if(!func){func = ()=>{};}
  while(!(await $Q(bool))){await sleep(100);await nextIdle();}
  return func();
 };
     globalThis.JXSLOADER='succeeded';
     console.log("JavaxScript loaded successfully");

 } catch (e) {
      globalThis.JXSLOADER='failed';
     console.log("JavaxScript failed to load: ", e);
 }
}else{
 console.log(`JavaxScript already ${globalThis.JXSLOADER}`);
}
