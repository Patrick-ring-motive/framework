globalThis.await=(promise)=>{console.log("Attempting to await promise in synchronous context ",promise);return promise;};

globalThis.yield=(next)=>{console.log("Attempting to yield next outside of a generator ",next);return next;};

globalThis.ptr=function(obj){
 let pointer = Object.create(null);
  pointer['*'] = obj;
  Object.seal(pointer);
  return pointer;
}

globalThis.queryApplyAll=async function(query,func){

let elems=Array.from(document.querySelectorAll(query));
const elems_length=elems.length;
for(let i=0;i<elems_length;i++){try{
  func(elems[i]);
}catch(e){await("queryApplyAll");console.log(e); continue;}}

}

Element.prototype.updateAttribute=function(attr,val){
const el = this;
if(!(el.hasAttribute(attr,val))){
el.setAttribute(attr,val);
}else{
if(el.getAttribute(attr)!=val){
el.setAttribute(attr,val);
}
}
}

if(!(globalThis.declarations)){globalThis.declarations=[];globalThis.declarationStrings=[];}

globalThis.declare=function(func){
    let funcString=func.toString();
    if(!(declarationStrings.includes(funcString))){
     globalThis.declarations.push(func);
     globalThis.declarationStrings.push(funcString);
    }
};

globalThis.declareEvaluator=async function(){

  const declarations_length = declarations.length;
  for(let i = 0;i < declarations_length;i++){try{

    declarations[i]();

  }catch(e){await("declareEvaluator");console.log(e);continue;}}

};



globalThis.declareEvaluator();
document.addEventListener("DOMContentLoaded", (event) => {globalThis.declareEvaluator();});
document.addEventListener("readystatechange", (event) => {globalThis.declareEvaluator();});
window.addEventListener("load", (event) => {globalThis.declareEvaluator();});
setInterval(function(){globalThis.declareEvaluator();},100);



let page_html = document.querySelector('html');

page_html.setAttribute('window-location' , window.location.href);
declare(()=>page_html.updateAttribute('window-location' , window.location.href));

page_html.setAttribute('user-agent' , navigator.userAgent);
declare(()=>page_html.updateAttribute('user-agent' , navigator.userAgent));

if (window!=window.top){
page_html.setAttribute('framed','true');
}

declare(()=>{

  if(window.innerHeight=window.innerWidth){
    page_html.updateAttribute('orientation','square');
  }
  if(window.innerHeight>window.innerWidth){
    page_html.updateAttribute('orientation','portrait');
  }
  if(window.innerHeight<window.innerWidth){
    page_html.updateAttribute('orientation','landscape');
  }

});

declare(()=>{

  const untagged = Array.from(document.querySelectorAll(':not([tag-name])'));
  const untagged_length=untagged.length;
  for(let i=0;i<untagged_length;i++){try{
  const tagname = untagged[i].outerHTML.toString().split('<')[1].split(' ')[0].split('>')[0];
  untagged[i].setAttribute('tag-name',tagname);
  }catch(e){continue;}}

});


declare(()=>{

  queryApplyAll('*',(el)=>{
    
    const attrs=el.getAttributeNames();
    const attrs_length=attrs.length;
    for(let i=0;i<attrs_length;i++){try{
      let atr = attrs[i].replaceAll(':','-');
      if(atr=='xmlns'){atr="xml-ns";}
      if(el.matches('['+ atr +']')){continue;}
      el.updateAttribute(atr,el.getAttribute(attrs[i]));
    }catch(e){continue;}}

  });

});



globalThis.fetchResponseText=async function(){
    let res = await fetch(...arguments);
    res.fullBody = await res.text();
    return res;
}

globalThis.fetchText=async function(){
    return (await fetch(...arguments)).text();
}

globalThis.fetchResponseArrayBuffer=async function(){
    let res = await fetch(...arguments);
    res.fullBody = await res.arrayBuffer();
    return res;
}

globalThis.fetchArrayBuffer=async function(){
    return (await fetch(...arguments)).arrayBuffer();
}

globalThis.Q=U=>{try{return U();}catch(e){return undefined;}};
globalThis.AQ=async (U)=>{try{return await(U());}catch(e){return undefined;}};


globalThis.console.lag=async function(){
  return console.log(...arguments);
}


globalThis.ifTry=(bool,then,elseThen)=>{
    if(bool){
        try{
            if((typeof bool)=='function'){
                if(bool()){
                    return then();
                }else{
                    return elseThen(e);
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



/** The ever useful sleep function */
globalThis.sleep = (ms)=>{
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/** asymc function object */
globalThis.AsyncFunction = async function () {}.constructor;



/** extract a value from json 
using string manipulation.
Great for malformed json.
*/
globalThis.JSON.extract=function(json,str){
  if(typeof json != 'string'){json=JSON.stringify(json);}
  return json.split(str)?.[1]?.split?.('"')?.[2];
}


/** change the character of a string at a specific index */
globalThis.String.prototype.setCharAt=
  function(index,char){
    let str=this.split('');
    str[index]=char;
    return str.join('');
  }


String.prototype.includesAny=function(arr){
  let arr_length=arr.length;
  for(let i=0;i<arr_length;i++){
      if(this.includes(arr[i])){return true;}
  }
return false;
}
