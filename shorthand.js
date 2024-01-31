

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
globalThis.assimilate=function(target,source){
const objKeys=Object.descriptorKeys(source);
const objKeys_length = objKeys.length;
	 for(let i=0;i<objKeys_length;i++){try{
		if((!target[objKeys[i]])&&(typeof source[objKeys[i]]=='function')){
			target[objKeys[i]]=source[objKeys[i]];
		}
	 }catch(e){continue;}}
return target;
}
globalThis.absorb=function(target,source){
const objKeys=Object.descriptorKeys(source);
const objKeys_length = objKeys.length;
	 for(let i=0;i<objKeys_length;i++){try{
		if((!target[objKeys[i]])&&(typeof source[objKeys[i]]=='function')){
			target[objKeys[i]]=function(){
			 return source[objKeys[i]](...arguments);
			}
		}
	 }catch(e){continue;}}
return target;
}
globalThis.mimic=function(target,source,proto){
const objKeys=Object.descriptorKeys(proto);
const objKeys_length = objKeys.length;
	 for(let i=0;i<objKeys_length;i++){try{
		if((!target[objKeys[i]])&&(typeof source[objKeys[i]]=='function')){
			target[objKeys[i]]=function(){
			 return source[objKeys[i]](...arguments);
			}
		}else if((!target[objKeys[i]])&&(source[objKeys[i]])){
			target[objKeys[i]]=function(){
			if(arguments.length==1){
			  source[objKeys[i]]=arguments[0];
			}
			 return source[objKeys[i]];
			}
		}
	 }catch(e){continue;}}
return target;
}
assimilate(globalThis,Object);
assimilate(globalThis,Reflect);
assimilate(globalThis,Atomics);
assimilate(globalThis,Math);
assimilate(globalThis,JSON);
assimilate(globalThis,BigInt);
assimilate(globalThis,Date);
mimic(globalThis,navigator,Navigator.prototype);
absorb(globalThis,document);
mimic(globalThis,document,Document.prototype);
mimic(globalThis,document,EventTarget.prototype);
globalThis.body =()=>document.body||document.firstElementChild;
absorb(globalThis,body());
mimic(globalThis,body(),HTMLBodyElement.prototype);
mimic(globalThis,body(),HTMLElement.prototype);
mimic(globalThis,body(),Element.prototype);
mimic(globalThis,body(),Node.prototype);
mimic(globalThis,body(),EventTarget.prototype);

globalThis.select = globalThis.querySelector;
globalThis.selectAll = globalThis.querySelectorAll;
