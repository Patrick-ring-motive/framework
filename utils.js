
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
