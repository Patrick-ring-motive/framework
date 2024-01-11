 try {

	 
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

  globalThis.fetchText = async function () {
    return (await fetch(...arguments)).text();
  };

globalThis.get=key=>globalThis[key];
globalThis.set=(key,val)=>globalThis[key]=val;
	 
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
    return _=>_;
  },
  set(newValue) {
    
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(globalThis, "from", {
  get() {
	console.log('Attempting to call "from" in the wrong context');
    return _=>_;
  },
  set(newValue) {
    
  },
  enumerable: true,
  configurable: true,
});


Object.defineProperty(globalThis, "as", {
  get() {
	console.log('Attempting to call "from" in the wrong context');
    return _=>_;
  },
  set(newValue) {
    
  },
  enumerable: true,
  configurable: true,
});


	 
  globalThis.asynt = (fn) => {
   setTimeout(fn,0);
  }

  globalThis.Q = (U) => {
    if ((typeof U)=='function') {
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
      if ((typeof U)=='function') {
        try {
          return await U();
        } catch (e) {
          return undefined;
        }
      } else if (`${U.constructor}`.includes("romise")) {
        let U = await U;
        if ((typeof U)=='function') {
          try {
            return U();
          } catch (e) {
            return undefined;
          }
        }
        return U;
      }
    } catch (e) {
      return undefined;
    }
  };
  globalThis.AQ = globalThis.$Q;

  globalThis.N = (U) => {
    if ((typeof U)=='function') {
      try {
        return (U()*1)||0;
      } catch (e) {
        return 0;
      }
    } else {
      return (U*1)||0;
    }
  };

    globalThis.$N = async (U) => {
    try {
      if ((typeof U)=='function') {
        try {
          return ((await U())*1)||0;
        } catch (e) {
          return 0;
        }
      } else if (`${U.constructor}`.includes("romise")) {
        let U = await U;
        if ((typeof U)=='function') {
          try {
            return ((U())*1)||0;
          } catch (e) {
            return 0;
          }
        }
        return (U*1)||0;
      }
    } catch (e) {
      return 0;
    }
  };


  globalThis.S = (U) => {
    if ((typeof U)=='function') {
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
      if ((typeof U)=='function') {
        try {
          return `${((await U()))||''}`;
        } catch (e) {
          return '';
        }
      } else if (`${U.constructor}`.includes("romise")) {
        let U = await U;
        if ((typeof U)=='function') {
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
    if ((typeof U)=='function') {
      try {
        return Array.from(U())||[];
      } catch (e) {
        return [];
      }
    } else {
	 if ((typeof U)=='string') {
		try{
		 return Array.from(eval(u))||[];
		}catch(e){
		 return Array.from(U)||[];	
		}
	 }
      return Array.from(U)||[];
    }
  };

    globalThis.$A = async (U) => {
    try {
      if ((typeof U)=='function') {
        try {
          return Array.from(await U())||[];
        } catch (e) {
          return [];
        }
      } else if (`${U.constructor}`.includes("romise")) {
        let U = await U;
        if ((typeof U)=='function') {
          try {
            return Array.from(U())||[];
          } catch (e) {
            return [];
          }
        }
      if ((typeof U)=='string') {
		try{
		 return Array.from(await eval(u))||[];
		}catch(e){
		 return Array.from(U)||[];	
		}
	 }
      return Array.from(U)||[];
      }
	if ((typeof U)=='string') {
		try{
		 return Array.from(await eval(u))||[];
		}catch(e){
		 return Array.from(U)||[];	
		}
	 }
      return Array.from(U)||[];
    } catch (e) {
      return [];
    }
  };

  globalThis.ptr = function (obj) {
    let pointer = Object.create(null);
    pointer["*"] = obj;
    Object.seal(pointer);
    return pointer;
  };

globalThis.updateProperty=function(obj,prop,val){

if(!(obj[prop])){
 obj[prop]=val;
 return;
}
if(obj[prop]!=val){
 obj[prop]=val;
 return;
}
 
}
	 
globalThis.approveProperty=function(obj,prop,val){
if(!val){return;}
if(!(obj[prop])){
 obj[prop]=val;
 return;
}
if(obj[prop]!=val){
 obj[prop]=val;
 return;
}
 
}
  
  console.detail = function (stuff) {
    try {
      stuff.constructor.prototype._log = function () {
        console.log(this);
      };
      return stuff._log();
    } catch (e) {
      console.log(stuff);
    }
  };
  console.list = function () {
    console.log([...arguments]);
  };

  globalThis.sanitizeAttr = function (str) {
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

    EventTarget.prototype.addDeferEventListener = function (type, listener, options) {
      const target = this;
	const deferListener = (event)=>{
		defer(()=>{
			listener(event);
		},`${listener}`);
	};
	if(options === undefined){
		target.addEventListener(type, deferListener);
	}else{
		target.addEventListener(type, deferListener, options);
	}

    };
  if (globalThis.Element) {
    Element.prototype.updateAttribute = function (attr, val) {
      const el = this;
      if (!el.hasAttribute(attr, val)) {
        el.setAttribute(attr, val);
      } else {
        if (el.getAttribute(attr) != val) {
          el.setAttribute(attr, val);
        }
      }
    };

Element.prototype.approveAttribute = function (attr, val) {
	if(!val){return;}
      const el = this;
      if (!el.hasAttribute(attr, val)) {
        el.setAttribute(attr, val);
      } else {
        if (el.getAttribute(attr) != val) {
          el.setAttribute(attr, val);
        }
      }
    };

    Element.prototype.getStyle = function (attribute) {
      try {
        let compStyles = window.getComputedStyle(this);
        const out =
          compStyles.getPropertyValue(attribute) || compStyles[attribute];
        return out;
      } catch (e) {
        return undefined;
      }
      return undefined;
    };

    Element.prototype.updateStyle = function (attr, val) {
      const el = this;
      const elstyle = el.getStyle(attr);
      if (!elstyle) {
        el.style[attr] = val;
      } else {
        if (elstyle != val) {
          el.style[attr] = val;
        }
      }
    };

    globalThis.queryApplyAll = async function (query, func) {
      let elems = Array.from(document.querySelectorAll(query));
      const elems_length = elems.length;
      for (let i = 0; i < elems_length; i++) {
        try {
          func(elems[i]);
        } catch (e) {
          await async("queryApplyAll");
          console.log(e);
          continue;
        }
      }
    };
  }

  globalThis.queryAttrAll = async function (query, attr, val, func) {
    let elems = Array.from(document.querySelectorAll(query));
    const elems_length = elems.length;
    for (let i = 0; i < elems_length; i++) {
      let elem = elems[i];
      try {
        func(elem);
        elem.updateAttribute(attr, val);
      } catch (e) {
        await async("queryApplyAll");
        console.log(e);
        continue;
      } finally {
        elem.updateAttribute(attr, val);
      }
    }
  };

  globalThis.queryBindAll = function (query, func) {
    const attr = "query-" + sanitizeAttr(query) + sanitizeAttr(func.toString());
    query = query + ":not([" + attr + "])";
    console.log(query);
    declare(() => {
      queryAttrAll(query, attr, "bound", func);
    }, query);
  };
  
  globalThis.declareErrorQueue=[];
  globalThis.wrapDeclare = (fn) => {
   let wrapper = () => {
    try{
     fn();
    }catch(e){
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

  globalThis.declare = function (func, id) {
if(!func){return;}
if((func.next)&&(`${func}`=='[object Generator]')){
return (async()=>{return declare(await (func),id);})();

}
if(`${func.constructor}`.includes("romise")) {
  return declare(()=>func().next(),id);
}
try{
if(`${func.constructor}`.toLowerCase().includes("generatorfunction")) {
  return declare(()=>func().next(),id);
}
}catch(e){console.log(e);};
if (`${func.constructor}`.includes("unction")) {
    let funcString = func.toString() + id;
    if ((!(declarationStrings.includes(funcString)))
      ||(!(funcString.includes('declare(')))) {
      globalThis.declarations.push(func);
      globalThis.declarationStrings.push(funcString);
    }
}else{
 Q(()=>{
	declare(()=>eval?.(`${func}`),id);
 });
}
  };

  globalThis.declareEvaluator = async function () {
    if(!(globalThis.declareStartup)){
      globalThis.declareStartup=0;
      }
      if(declareStartup<3){
        declareStartup++;
        }else{
          if((!(document.readyState=='complete'))&&(Math.floor(Math.random() * 10) < 8)){return;}
        }
    const declarations_length = declarations.length;
    for (let i = 0; i < declarations_length; i++) {
      if (`${new Date().getTime()}`.endsWith("10")) {
        await async("declareEvaluator");
      }
      try {
         const declareErrorQueue_length = declareErrorQueue.length;
         for(let x = 0;x < declareErrorQueue_length;x++){try{
           await async("ErrorQueue");
           console.log(declareErrorQueue.shift());
         }catch(e){
          await async("ErrorQueue");
          console.log(e);
          continue;
         }
        }
        //declareAsynt(declarations[i]);
	declarations[i]();
      } catch (e) {
        await async("declareEvaluator");
        console.log(e);
        continue;
      }
    }
  };

if (!(globalThis.deferations)) {
    globalThis.deferations = [];
    globalThis.deferationStrings = [];
  }

globalThis.defer = function (func, id) {
if(!func){return;}
if((func.next)&&(`${func}`=='[object Generator]')){
return (async()=>{return defer(await (func),id);})();

}
if(`${func.constructor}`.includes("romise")) {
  return defer(()=>func().next(),id);
}
try{
if(`${func.constructor}`.toLowerCase().includes("generatorfunction")) {
  return defer(()=>func().next(),id);
}
}catch(e){console.log(e);};
if (`${func.constructor}`.includes("unction")) {
    let funcString = func.toString() + id;
    if ((!(deferationStrings.includes(funcString)))
      ||(!(funcString.includes('defer(')))) {
      globalThis.deferations.push(func);
      globalThis.deferationStrings.push(funcString);
    }
}else{
 Q(()=>{
	defer(()=>eval?.(`${func}`),id);
 });
}
  };

globalThis.deferEvaluator = async function () {
    const deferations_length = deferations.length;
    for (let i = 0; i < deferations_length; i++) {try{
      if (`${new Date().getTime()}`.endsWith("10")) {
        await async("deferEvaluator");
      }
   
        
	deferations.shift()?.();
      } catch (e) {
        await async("deferEvaluator");
        console.log(e);
        continue;
      }
    }
  };

  Q(()=>globalThis.declareEvaluator());
  Q(()=>globalThis.deferEvaluator());
  if (globalThis.document) {
    document.addEventListener("DOMContentLoaded", (event) => {
      Q(()=>globalThis.declareEvaluator());
       Q(()=>globalThis.deferEvaluator());
    });
    document.addEventListener("readystatechange", (event) => {
      Q(()=>globalThis.declareEvaluator());
      Q(()=>globalThis.deferEvaluator());
    });
    window.addEventListener("load", (event) => {
      Q(()=>globalThis.declareEvaluator());
      Q(()=>globalThis.deferEvaluator());
    });
    setInterval(function () {
      Q(()=>globalThis.declareEvaluator());
      Q(()=>globalThis.deferEvaluator());
    }, 100);

    globalThis.page_html = document.querySelector("html")||document.firstElementChild;

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
      globalThis.page_html.updateAttribute("history-state", (Q(()=>JSON.stringify(history.state))||history.state));
      globalThis.page_html.updateAttribute("online",navigator.onLine);
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
        untagged[i].updateAttribute("tag",untagged[i].tagName);
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
        untagged[i].approveAttribute("element-prifix",untagged[i].untagged[i].prefix);
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

  declare(() => {
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
  });


  declare(() => {
   if(!(document.querySelector('style.has-test'))){

     let hasTestStyle = document.createElement('style');
 
     hasTestStyle.className = 'has-test';
 
     hasTestStyle.innerHTML = '.has-test:has(.supported){--has-supported:true;}';
 
     document.body.appendChild(hasTestStyle);

  }

  if(!(document.querySelector('span.has-test'))){
 
     let hasTestSpan = document.createElement('span');
 
     hasTestSpan.className = 'has-test';
 
     hasTestSpan.innerHTML = '<span class="supported"></span>';
 
     document.body.appendChild(hasTestSpan);
 
  }

  let hasTest = !!(getComputedStyle(document.querySelector('span.has-test')).getPropertyValue('--has-supported'));
  updateProperty(globalThis,'hasSupported',hasTest);
  globalThis.page_html.updateAttribute('has-supported',hasTest);
  });

declare(()=>{
	queryApplyAll('dynamic-styles',async (el)=>{
  let firstRun = false;
	let instructions = el.querySelector('style-json');
	if(!instructions){
    firstRun=true;
	try{
	   if(el.getAttribute('fetching')){return;}
	   let dataSrc = el.getAttribute('data-src');
	   if(!dataSrc){return;}
		if(!dataSrc.startsWith('http')){
		  let a = document.createElement('a');
  			a.setAttribute('href',dataSrc);
			dataSrc = a.href;	
		}
		el.updateAttribute('fetching','in progress');
		let dynSty = await fetchText(dataSrc);
		let styleJSON = document.createElement('style-json');
		styleJSON.innerHTML = `<style>${dynSty}</style>`;
		el.appendChild(styleJSON);
		el.removeAttribute('fetching');
		instructions = styleJSON;
	}catch(e){
		el.updateAttribute('fetching','error');
		console.log(e);
		return;
	}	
	}
  
  //if((!firstRun)&&(!(document.readyState=='complete'))&&(Math.floor(Math.random() * 10) < 8)){return;}


  
	const dynamicStyles = JSON.parse(instructions.querySelector('style').innerHTML)["dynamic-styles"];
	const dynamicStyleKeys = Object.keys(dynamicStyles);
		const dynamicStyleKeys_length = dynamicStyleKeys.length;
		for(let i=0;i<dynamicStyleKeys_length;i++){try{
		let ds = el.querySelector(`[id="${dynamicStyleKeys[i]}"]`);
		if(!ds){
		let dst = document.createElement('style');
		dst.id = `${dynamicStyleKeys[i]}-transition`;
		dst.innerHTML = `:root{transition: ${dynamicStyleKeys[i]} 100ms;`;
		el.appendChild(dst);
		ds = document.createElement('style');
		ds.id = dynamicStyleKeys[i];
		ds.innerHTML = `:root{${dynamicStyleKeys[i]}:${eval(dynamicStyles[dynamicStyleKeys[i]])};`;
		el.appendChild(ds);
		}else{
			let updatedStyle=`:root{${dynamicStyleKeys[i]}:${eval(dynamicStyles[dynamicStyleKeys[i]])};`;
			if((updatedStyle)&&(ds.innerHTML.toString()!=updatedStyle)){
				ds.innerHTML=updatedStyle;
			}
			
		}
		}catch(e){console.log(e);continue;}}


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


declare(()=>{
	if(!(document.querySelector('style[template-styles]'))){
		let sty = document.createElement('style');
		sty.setAttribute('template-styles',true);
		sty.innerHTML=`if,else,for,dynamic-styles{display:none !important;}`;
		document.body.appendChild(sty);
	}
});

function applyDynamicStyles(elem){
	let output = ':root[dynamic-styles]{\n';
        for (const attr of elem.attributes) {
		if(attr.name.startsWith('css-')){
           	output += `${attr.name.replace('css-','--')}: ${eval?.(attr.value)};\n`;
		}
         }
	output += "}";
	let s = elem.innerHTML.toString();
	if(s.includes(':root[dynamic-styles]{')){
		s=s.split(':root[dynamic-styles]{')[1].split('}').slice(1).join('}');
	}
	s=output+s;
	if(s!=(elem.innerHTML.toString())){
		elem.innerHTML = s;
	}
}
	 
declare(()=>{
const dynamicStyles = document.querySelectorAll('style[dynamic]');
const dynamicStyles_length = dynamicStyles.length;
	for(let i=0;i<dynamicStyles_length;i++){try{
		applyDynamicStyles(dynamicStyles[i]);
	}catch(e){console.log(e);continue;}}
	document.querySelector(':root').updateAttribute('dynamic-styles',true);
});

globalThis.modulesSupported=true;
globalThis.page_html.updateAttribute('modules-supported',true);

let nmscript = document.createElement('script');
nmscript.setAttribute('nomodule',true);
nmscript.innerHTML=`
globalThis.modulesSupported=false;
globalThis.page_html.updateAttribute('modules-supported',false);
`;
globalThis.page_html.appendChild(nmscript);
	 
  globalThis.safeFetch = async function () {
    try {
      return await fetch(...arguments);
    } catch (e) {
      console.log(e);
      return new Response(e.toString(), { status: 569, statusText: e.message });
    }
  };

  globalThis.fetchResponseText = async function () {
    let res = await fetch(...arguments);
    res.fullBody = await res.text();
    return res;
  };



  globalThis.fetchResponseArrayBuffer = async function () {
    let res = await fetch(...arguments);
    res.fullBody = await res.arrayBuffer();
    return res;
  };

  globalThis.fetchArrayBuffer = async function () {
    return (await fetch(...arguments)).arrayBuffer();
  };

  Function.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  String.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  Array.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  Boolean.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  Number.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  BigInt.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  Symbol.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };
  if (globalThis.node) {
  Q(
    (U) =>
      (Node.prototype.X = function () {
        return arguments[0](this, ...Array.from(arguments).slice(1));
      }),
  );
  Q(
    (U) =>
      (Window.prototype.X = function () {
        return arguments[0](this, ...Array.from(arguments).slice(1));
      }),
  );
  }
  Map.prototype.X = function () {
    return arguments[0](this, ...Array.from(arguments).slice(1));
  };

  globalThis.console.lag = async function () {
    return console.log(...arguments);
  };

 globalThis.ifTry=(bool,then,elseThen)=>{
    if(bool){
        try{
            if((typeof bool)=='function'){
                if(bool()){
                    return then();
                }else{
                    return elseThen();
                }
            }else{
                return then();
            }
        }catch(e){
            if(elseThen){
                return elseThen(e);
            }else{
                return;
            }
        }
    }else{
        if(elseThen){
            return elseThen(e);
        }else{
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
  globalThis.AsyncFunction = async function(){}.constructor;

  /** extract a value from json 
using string manipulation.
Great for malformed json.
*/
  globalThis.JSON.extract = function (json, str) {
    if (typeof json != "string") {
      json = JSON.stringify(json);
    }
    return json.split(str)?.[1]?.split?.('"')?.[2];
  };

  /** change the character of a string at a specific index */
  globalThis.String.prototype.setCharAt = function (index, char) {
    let str = this.split("");
    str[index] = char;
    return str.join("");
  };

  String.prototype.includesAny = function (arr) {
    let arr_length = arr.length;
    for (let i = 0; i < arr_length; i++) {
      if (this.includes(arr[i])) {
        return true;
      }
    }
    return false;
  };


if(!(globalThis.subscriberList)){
	globalThis.subscriberList=Object.create(null);
}
declare(()=>{
	const subList = Object.keys(globalThis.subscriberList);
	const subList_length = subList.length;
	for(let i = 0;i<subList_length;i++){try{
		let s = subList[subList[i]];
		s.elem.updateAttribute(s.attr,localStorage.getItem(subList[i]));
	}catch(e){continue;}}
 });
globalThis.subscribeState=function(elem,attr,id){
let s = Object.create(null);
s.elem=elem;
s.attr=attr;
globalThis.subscriberList[id] = s;
}

globalThis.unsubscribeState=function(id){
	delete globalThis.subscriberList[id];
}

localStorage.updateItem = function(key,val){

if(!(localStorage.getItem(key))){
localStorage.setItem(key,val);
}else if(localStorage.getItem(key)!=val){
localStorage.setItem(key,val);
}

}

if(!(globalThis.publisherList)){
  globalThis.publisherList=Object.create(null);
}
declare(()=>{
  const pubList = Object.keys(globalThis.publisherList);
  const pubList_length = pubList.length;
  for(let i = 0;i<pubList_length;i++){try{
    let s = pubList[pubList[i]];
    localStorage.updateItem(pubList[i],s.elem.getAttribute(s.attr));
  }catch(e){continue;}}
 });
globalThis.publishState=function(elem,attr,id){
let s = Object.create(null);
s.elem=elem;
s.attr=attr;
globalThis.pubList[id]=s;
}

globalThis.unpublishState=function(id){
	delete globalThis.publisherList[id];
}
	 

globalThis.toSansSerif=function(str){
const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const xyz = '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓';
const abc_length = abc.length;
 for(let i = 0;i<abc_length;i++){
  str=str.replaceAll(abc[i],xyz[i]);
 }
return str;
}


Object.descriptorKeys=function(obj){
try{
return Object.keys(Object.getOwnPropertyDescriptors(obj))||[];
}catch(e){return [];}
}

Object.forInKeys=function(obj){
let keys = [];
for(const i in obj){try{
keys.push[i];
}catch(e){continue;}}
return keys;
}

  globalThis.swapText=function(startText,endText){
      let el=document.body;
      if(endText.toLowerCase().includes(startText.toLowerCase())){
       endText=toSansSerif(endText);
      }
      const reg = new RegExp(startText, "gi")
      if(!el){return;}
      var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
      while(n=walk.nextNode()){
      a.push(n);
        let ntext=n.textContent;

      ntext=ntext.replace(reg,endText);

      
        updateProperty(n,'textContent',ntext);
      


      };
      if(document.title.toLowerCase().includes(startText.toLowerCase())){
        document.title=document.title
          .replace(reg,endText);
         }
      return a;
      }


if(globalThis.XMLHttpRequest){
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	let headers = xhttp.getAllResponseHeaders().split('\r\n');
		const headers_length = headers.length;
		for(let i = 0;i < headers_length;i++){try{
			if(!headers[i]){continue;}
			const [key,val]=headers[i].split(': ');
			globalThis.page_html.updateAttribute(`response-header-${key}`,val);
		}catch(e){continue;}}
    }
};
xhttp.open("GET", window.location.href, true);
xhttp.send();
}
void async function(){
let myrequest = new Request(window.location.href);
let myresponse = await fetch(myrequest);
myrequest.headers.forEach(function(){
globalThis.page_html.updateAttribute(`fetch-request-header-${arguments[1]}`,arguments[0]);
});


myresponse.headers.forEach(function(){
globalThis.page_html.updateAttribute(`response-header-${arguments[1]}`,arguments[0]);
})
}();

globalThis.mouseX = 0;
globalThis.mouseY = 0;
function updateMouseLocation(event) {
  defer(()=>{
    globalThis.mouseX = event.pageX;
    globalThis.mouseY = event.pageY;
  });
}

window.addEventListener("mousemove",updateMouseLocation, false);
window.addEventListener("mouseenter", updateMouseLocation, false);
window.addEventListener("mouseleave", updateMouseLocation, false);	 

globalThis.screenX = 0;
globalThis.screenY = 0;
function updateTouchScreenLocation(event) {
  defer(()=>{
	const event_touches_length = event.touches.length;
    for (let i = 0; i < event_touches_length; i++) {try{
     globalThis.screenX = event.touches[i].screenX;
     globalThis.screenY = event.touches[i].screenY;
    }catch(e){continue;}}
  });
}

document.firstElementChild.addEventListener("touchstart",updateTouchScreenLocation, false);
document.firstElementChild.addEventListener("touchend", updateTouchScreenLocation, false);
document.firstElementChild.addEventListener("touchmove", updateTouchScreenLocation, false);	 
document.firstElementChild.addEventListener("touchcancel", updateTouchScreenLocation, false);

globalThis.clientX = 0;
globalThis.clientY = 0;
function updateTouchclientLocation(event) {
  defer(()=>{
	const event_touches_length = event.touches.length;
    for (let i = 0; i < event_touches_length; i++) {try{
     globalThis.clientX = event.touches[i].clientX;
     globalThis.clientY = event.touches[i].clientY;
    }catch(e){continue;}}
  });
}

document.firstElementChild.addEventListener("touchstart",updateTouchclientLocation, false);
document.firstElementChild.addEventListener("touchend", updateTouchclientLocation, false);
document.firstElementChild.addEventListener("touchmove", updateTouchclientLocation, false);	 
document.firstElementChild.addEventListener("touchcancel", updateTouchclientLocation, false);	 


declare(()=>{


queryApplyAll('if:not([evaluation])',async (IF)=>{
IF.setAttribute('evaluation','in progress');
let ELSE = false;
try{
if(IF.nextElementSibling.tagName.toLowerCase()=='else'){
	ELSE = IF.nextElementSibling;
}
let condition = IF.getAttribute('condition');
if(IF.hasAttribute('async')){
condition = !!(await $Q(async ()=>await eval(condition)));
}else{
condition = !!(Q(()=>eval(condition)));
}
if(condition){
	let template = IF.querySelector('template');
  if(template){
  	IF.replaceWith(template.content);
  }else{
    IF.outerHTML = IF.innerHTML;
  }
  if(ELSE){
    ELSE.remove();
  }
}else{
	let template = ELSE.querySelector('template');
  if(template){
  	ELSE.replaceWith(template.content);
  }else{
    ELSE.outerHTML = ELSE.innerHTML;
  }
  IF.remove();
}
}catch(e){
console.log(e);
IF.setAttribute('evaluation','error');
}

	
});
	
});

declare(()=>{


queryApplyAll('for:not([evaluation])',async (FOR)=>{
FOR.setAttribute('evaluation','in progress');
try{

let items = FOR.getAttribute('items');
if(!items){return FOR.remove();}
if(FOR.hasAttribute('async')){
items = await eval(`$A(${items})`);
}else{
items = eval(`A(${items})`);
}
	let template = FOR.querySelector('template');
  if(!template){
  template = document.createElement('template');
  template.innerHTML = FOR.innerHTML;
  }
  	const fragment = document.createElement('template');
  	const items_length = items.length;
    for(let i = 0;i<items_length;i++){try{
      let temp = template.content.cloneNode(true);
    //  Object.assign(temp,items[i]);
	if ((typeof items[i])=='function') {
	  await items[i](temp,i);
	}
      fragment.content.appendChild(temp)
    }catch(e){continue;}}
    FOR.parentElement.insertBefore(fragment.content, FOR);
		FOR.remove();

}catch(e){
console.log(e);
FOR.setAttribute('evaluation','error');
}

	
});
	
});
	 
  console.log("JavaxScript loaded successfully");

	 } catch (e) {
  console.log("JavaxScript failed to load: ", e);
}
