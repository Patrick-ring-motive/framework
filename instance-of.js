const instanceTry = function instanceTry(inst,type){
  try{
    return (inst == type) || (inst instanceof type);
  }catch(e){
    if(e.message.includes("'instanceof' is not callable"){
      return false;
    }else{
      console.warn(e,...arguments);
    }
  }
};

const constructOf = function constructOf(inst,type){
  return type?.constructor && ((inst == type?.constructor) || (inst?.constructor == type?.constructor) || instanceTry(inst,type?.constructor));
};

const protoOf = function protoOf(inst,type){
  return inst?.__proto__ && ((inst?.__proto__ == type) || (inst?.__proto__ == type?.__proto__) || instanceTry(inst?.__proto__,type));
};

const sameTypeOf = function sameTypeOf(inst,type){
  return (typeof inst) == (typeof type);
};

const specificTypeOf = function specificTypeOf(inst,type){
  return sameTypeOf(inst,type) && !/^(object|function)$/.test(typeof inst)
}

const anyKindOf = function anyKindOf(inst,type){
  try{
    return instanceTry(inst,type) || constructOf(inst,type) || protoOf(inst,type) || specificTypeOf(inst,type);
  }catch(e){
    console.warn(e,...arguments);
    return false;
  }
};
