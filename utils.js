
export const q = (varFn) => {
  try{
    return varFn?.();
  }catch(e){
    if(e.name != "ReferenceError"){
      throw e;
    }
  }
};

export const newQ = (...args) => {
  const fn = args?.shift?.();
  return fn && new fn(...args);
};

export const callQ = (...args) => args?.[0]?.call?.(...args);

export const instanceOf = function instanceOf(x,y){
  try{
    return x instanceof y;
  }catch{
    return false;
  }
};

export const str = (x) => {
  try{
    String(String(x?.description ?? x?.source ?? x?.name) || x);
  }catch(e){
    return String(e?.name);
  }
};
  
export const isNullish = function isNullish(x){
  return x === undefined || x === null;
};
    
export const isBoolean = function isBoolean(x){
  return typeof x === 'boolean' || x instanceof Boolean;
};

export const isNumber = function isNumber(x){
  return typeof x === 'number' || x instanceof Number;
};

export const isBigInt = function isBigInt(x){
  return typeof x === 'bigint' || x instanceof BigInt;
};

export const isString = function isString(x){
  return typeof x === 'string' || x instanceof String;
};

export const isSymbol = function isSymbol(x){
  return typeof x === 'symbol' || x instanceof Symbol;
};

export const isObject = function isObject(x){
  return typeof x === 'object' && x !== null;
};

export const isArray = function isArray(x){
  return Array.isArray(x) || x instanceof Array;
};

const serializer = newQ(globalThis.XMLSerializer);

export const serializeXML = function serializeXML(node){
  return serializer?.serializeToString?.(node);
};

export const bytes = function bytes(buff){
  return new Uint8Array(buff);
};

const encoder = newQ(globalThis.TextEncoder);

export const encode = function encode(s){
  return encoder?.encode?.(s) ?? bytes([...s].map(x => x.charCodeAt()));
};

export const buffer = function buffer(s){
  return encode(s).buffer;
};

const decoder = newQ(globalThis.TextDecoder);

export const decode = function decode(byte){
  return decoder?.decode?.(byte) ?? String.fromCharCode(...byte);
};

export const text = function text(buff){
  return decode(bytes(buff));
};

export const stream = function stream(x){
  try{
    return new Response(x).body;
  }catch(e){
    try{
      return ReadableStream.from(x);
    }catch{
      throw e;
    }
  }
};

const parser = newQ(globalThis.DOMParser);

export const parseHTML = function parseHTML(x){
  return parser?.parseFromString?.(x, 'text/html');
};

export const parseXML = function parseXML(x){
  return parser?.parseFromString?.(x, 'text/xml');
};

