 try {
  globalThis.await = (promise) => {
    console.log("Attempting to await promise in synchronous context ", promise);
    return promise;
  };

  globalThis.yield = (next) => {
    console.log("Attempting to yield next outside of a generator ", next);
    return next;
  };

  globalThis.async = async (_) => {
    return await _;
  };
  
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
    let funcString = func.toString() + id;
    if ((!(declarationStrings.includes(funcString)))
      ||(!(funcString.includes('declare(')))) {
      globalThis.declarations.push(func);
      globalThis.declarationStrings.push(funcString);
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

    let page_html = document.querySelector("html");

    page_html.setAttribute("window-location", window.location.href);
    declare(() =>
      page_html.updateAttribute("window-location", window.location.href),
    );

    page_html.setAttribute("user-agent", navigator.userAgent);
    declare(() => page_html.updateAttribute("user-agent", navigator.userAgent));
  }

  if (globalThis.window) {
    if (window != window.top) {
      page_html.setAttribute("framed", "true");
    }
  }
  declare(() => {
    if ((window.innerHeight = window.innerWidth)) {
      page_html.updateAttribute("orientation", "square");
    }
    if (window.innerHeight > window.innerWidth) {
      page_html.updateAttribute("orientation", "portrait");
    }
    if (window.innerHeight < window.innerWidth) {
      page_html.updateAttribute("orientation", "landscape");
    }
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
