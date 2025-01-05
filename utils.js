
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

export const serializeXML = node => serializer?.serializeToString?.(node);

export const bytes = buff => new Uint8Array(buff);

const encoder = newQ(globalThis.TextEncoder);

export const encode = s => encoder?.encode?.(s) ?? bytes([...s].map(x => x.charCodeAt()));

export const buffer = s => encode(s).buffer;

const decoder = newQ(globalThis.TextDecoder);

export const decode = byte => decoder?.decode?.(byte) ?? String.fromCharCode(...byte);

export const text = buff => decode(bytes(buff));

const parser = newQ(globalThis.DOMParser);

export const parseHTML = x => parser.parseFromString(x, 'text/html');
