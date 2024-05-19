
(globalThis.XMLHttpRequest?.prototype??{}).nativeOpen=globalThis.XMLHttpRequest?.prototype?.open;
(globalThis.XMLHttpRequest?.prototype??{}).customOpen=function(method, url, asynch, user, password){
this.method=method;
this.requestURL=url;
this.asynch=asynch;
if(user){this.user=user;}
if(password){this.password=password;}
this.requestHeaders=new Map();
return this.nativeOpen(method, url, asynch, user, password);
}
/*XMLHttpRequest.prototype.open=XMLHttpRequest.prototype.customOpen;*/


(globalThis.XMLHttpRequest?.prototype??{}).nativeSend=globalThis.XMLHttpRequest?.prototype?.send;
(globalThis.XMLHttpRequest?.prototype??{}).customSend=function(body)
{
this.body=body;
return this.nativeSend(body);
}


/*XMLHttpRequest.prototype.send=XMLHttpRequest.prototype.customSend;*/
(globalThis.XMLHttpRequest?.prototype??{}).nativeSetRequestHeader=globalThis.XMLHttpRequest?.prototype?.setRequestHeader;
(globalThis.XMLHttpRequest?.prototype??{}).customSetRequestHeader=function (header,value){
try{
this.nativeSetRequestHeader(header,value);
if(this.requestHeaders.get(header)){
this.requestHeaders.set(header,this.requestHeaders.get(header)+', '+value);
}
else{
this.requestHeaders.set(header,value);
}


}catch(e){

return e;

}

return;
}


/*XMLHttpRequest.prototype.setRequestHeader=XMLHttpRequest.prototype.customSetRequestHeader;*/

(globalThis.Response??{}).nativeRedirect=globalThis.Response?.redirect;

(globalThis.Response??{}).customRedirect=function(url,status){

let red = this.nativeRedirect(url,status);
  red.redirectURL=url;
  if(status){red.redirectStatus=status;}
  red.redirectFrom=this;
  return red;
}

/*window.Response.redirect=window.Response.customRedirect;*/



(globalThis.Response??{}).nativeClone=globalThis.Response?.clone;

(globalThis.Response??{}).customClone=function(){

let cln = this.nativeClone();
  
  cln.cloneFrom=this;
  return cln;
}

/*window.Response.clone=window.Response.customClone;*/



(globalThis.Response??{}).nativeError=globalThis.Response?.error;

(globalThis.Response??{}).customError=function(){

let ero = this.nativeError();
  
  ero.errorFrom=this;
  return ero;
}

/*window.Response.error=window.Response.customError;*/


(globalThis.Response??{}).nativeText=globalThis.Response?.text;

(globalThis.Response??{}).customText=async function(){

let txt = await this.nativeText();
  
  this.responseText=txt;
  return txt;
}

/*window.Response.text=window.Response.customText;*/




(globalThis.Response??{}).nativeJson=globalThis.Response?.json;

(globalThis.Response??{}).customJson=async function(){

let jsn = await this.nativeJson();
  
  this.responseJson=jsn;
  return jsn;
}

/*window.Response.json=window.Response.customJson;*/





(globalThis.Response??{}).nativeBlob=globalThis.Response?.blob;

(globalThis.Response??{}).customBlob=async function(){

let blb = await this.nativeBlob();
  
  this.responseBlob=blb;
  return blb;
}

/*window.Response.blob=window.Response.customBlob;*/



(globalThis.Response??{}).nativeFormData=globalThis.Response?.formData;

(globalThis.Response??{}).customFormData=async function(){

let dta = await this.nativeFormData();
  
  this.responseFormData=dta;
  return dta;
}

/*window.Response.formData=window.Response.customFormData;*/




(globalThis.Response??{}).nativeArrayBuffer=globalThis.Response?.arrayBuffer;

(globalThis.Response??{}).customArrayBuffer=async function(){

let bfr = await this.nativeArrayBuffer();
  
  this.responseArrayBuffer=bfr;
  return bfr;
}

/*window.Response.arrayBuffer=window.Response.customArrayBuffer;*/




(globalThis.Request??{}).nativeClone=globalThis.Request?.clone;

(globalThis.Request??{}).customClone=function(){

let cln = this.nativeClone();
  
  cln.cloneFrom=this;
  return cln;
}

/*window.Request.clone=window.Request.customClone;*/



(globalThis.Request??{}).nativeText=globalThis.Request?.text;

(globalThis.Request??{}).customText=async function(){

let txt = await this.nativeText();
  
  this.requestText=txt;
  return txt;
}

/*window.Request.text=window.Request.customText;*/




(globalThis.Request??{}).nativeJson=globalThis.Request?.json;

(globalThis.Request??{}).customJson=async function(){

let jsn = await this.nativeJson();
  
  this.requestJson=jsn;
  return jsn;
}

/*window.Request.json=window.Request.customJson;*/





(globalThis.Request??{}).nativeBlob=globalThis.Request?.blob;

(globalThis.Request??{}).customBlob=async function(){

let blb = await this.nativeBlob();
  
  this.requestBlob=blb;
  return blb;
}

/*window.Request.blob=window.Request.customBlob;*/



(globalThis.Request??{}).nativeFormData=globalThis.Request?.formData;

(globalThis.Request??{}).customFormData=async function(){

let dta = await this.nativeFormData();
  
  this.requestFormData=dta;
  return dta;
}

/*window.Request.formData=window.Request.customFormData;*/




(globalThis.Request??{}).nativeArrayBuffer=globalThis.Request?.arrayBuffer;

(globalThis.Request??{}).customArrayBuffer=async function(){

let bfr = await this.nativeArrayBuffer();
  
  this.requestArrayBuffer=bfr;
  return bfr;
}

/*window.Request.arrayBuffer=window.Request.customArrayBuffer;*/


globalThis.nativeFetch=globalThis.fetch;

globalThis.customFetch=async function(request,headers){
  var req;
  var response;
  if(typeof request=='string'){
  
    req=new Request(request,headers);
    response = await window.nativeFetch.apply(this,[req]);
  
  }else{
     response = await window.nativeFetch.apply(this,[request,headers]);
  }
  if(typeof request=='object'){
    response.requestInputObject=request;
  }else{
    response.requestInputURL=request;
    response.requestInputObject=req;
  }
  if(headers){response.requestInputHeaders=headers;}
    return response;
}

globalThis.fetch=globalThis.customFetch;

