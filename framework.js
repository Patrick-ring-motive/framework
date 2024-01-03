 try {
  globalThis.await = (promise) => {
    console.log("Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules", promise);
    return promise;
  };

  globalThis.yield = (next) => {
    console.log("Uncaught SyntaxError: yild is only valid in generator functions", next);
    return next;
  };

  globalThis.async = async (_) => {
    return await _;
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
    if (`${U.constructor}`.includes("unction")) {
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
      if (`${U.constructor}`.includes("unction")) {
        try {
          return await U();
        } catch (e) {
          return undefined;
        }
      } else if (`${U.constructor}`.includes("romise")) {
        let U = await U;
        if (`${U.constructor}`.includes("unction")) {
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
	declare(()=>eval.?(`${func}`),id);
 });
}
  };

  globalThis.declareEvaluator = async function () {
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
        declareAsynt(declarations[i]);
      } catch (e) {
        await async("declareEvaluator");
        console.log(e);
        continue;
      }
    }
  };

  globalThis.declareEvaluator();
  if (globalThis.document) {
    document.addEventListener("DOMContentLoaded", (event) => {
      globalThis.declareEvaluator();
    });
    document.addEventListener("readystatechange", (event) => {
      globalThis.declareEvaluator();
    });
    window.addEventListener("load", (event) => {
      globalThis.declareEvaluator();
    });
    setInterval(function () {
      globalThis.declareEvaluator();
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
   
      globalThis.page_html.updateAttribute("ready-state", "document.readyState");

  });

  declare(() => {
   
      globalThis.page_html.updateAttribute("visibility-state", "document.visibilityState");

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
        untagged[i].setAttribute("tag-name", tagname);
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

  globalThis.fetchText = async function () {
    return (await fetch(...arguments)).text();
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
  globalThis.AsyncFunction = async function () {}.constructor;

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

  console.log("framework loaded successfully");
} catch (e) {
  console.log("framework failed to load: ", e);
}


globalThis.subscribeState=function(elem,attr,str){

 declare(()=>elem.updateAttribute(attr,localStorag.getItem(str)))

}

localStorage.updateItem = function(key,val){

if(!(localStorage.getItem(key))){
localStorage.setItem(key,val);
}else if(localStorage.getItem(key)!=val){
localStorage.setItem(key,val);
}

}

globalThis.publishState=function(elem,attr,str){

declare(()=>localStorage.updateItem(str,elem.getAttribute(attr)))

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
