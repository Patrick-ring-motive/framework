
globalThis.If = (bool, then, elseThen) => {
  if (bool) {
    if ((typeof bool) == 'function') {
      if (bool()) {
        return then();
      } else {
        if (elseThen) {
          return elseThen(e);
        } else {
          return;
        }
      }
    } else {
      return then();
    }
  } else {
    if (elseThen) {
      return elseThen(e);
    } else {
      return;
    }
  }
}
Object.prototype.If=function(then,elseThen){return If(this,then,elseThen);}
globalThis.Var = (name, value) => {
  globalThis[name] = value;
}
globalThis.Let = (name, value) => {
  globalThis[name] = value;
}
globalThis.Const = (name, value) => {
  globalThis[name] = value;
  Object.freeze(globalThis[name]);
}
globalThis.__ = (comments) => globalThis.__;
globalThis.Assign = (name, value) => {
  globalThis[name] = value;
}
globalThis.Put = (obj, name, value) => {
  obj[name] = value;
}
globalThis.Add = (num1, num2) => {
  return num1 + num2;
}
Object.prototype.Add=function(num2){return Add(this,num2);}
globalThis.Multiply = (num1, num2) => {
  return num1 * num2;
}
Object.prototype.Multiply=function(num2){return Multiply(this,num2);}
globalThis.Exponentiate = (num1, num2) => {
  return num1 ** num2;
}
Object.prototype.Exponentiate=function(num2){return Exponentiate(this,num2);}
globalThis.Divide = (num1, num2) => {
  return num1 / num2;
}
Object.prototype.Divide=function(num2){return Divide(this,num2);}
globalThis.Modulus = (num1, num2) => {
  return num1 % num2;
}
Object.prototype.Modulus=function(num2){return Modulus(this,num2);}
globalThis.Increment = (num) => {
  return num++;
}
Object.prototype.Increment=function(){return Increment(this);}
globalThis.Decrement = (num) => {
  return num--;
}
Object.prototype.Decrement=function(){return Decrement(this);}
globalThis.BitwiseAnd = (a, b) => {
  return a & b;
}
Object.prototype.BitwiseAnd=function(num2){return BitwiseAnd(this,num2);}
globalThis.BitwiseOr = (a, b) => {
  return a | b;
}
Object.prototype.BitwiseOr=function(num2){return BitwiseOr(this,num2);}
globalThis.Xor = (a, b) => {
  return a ^ b;
}
Object.prototype.Xor=function(num2){return Xor(this,num2);}
globalThis.BitwiseNot = (a) => {
  return ~a;
}
Object.prototype.BitwiseNot=function(){return BitwiseNot(this);}
globalThis.Minus = (a) => {
  return -a;
}
Object.prototype.Minus=function(){return Minus(this);}
globalThis.Plus = (a) => {
  return +a;
}
Object.prototype.Plus=function(){return Plus(this);}
globalThis.LeftShift = (a, b) => {
  return a << b;
}
Object.prototype.LeftShift=function(num2){return LeftShift(this,num2);}
globalThis.RightShift = (a, b) => {
  return a >> b;
}
Object.prototype.RightShift=function(num2){return RightShift(this,num2);}
globalThis.ZeroRightShift = (a, b) => {
  return a >>> b;
}
Object.prototype.ZeroRightShift=function(num2){return ZeroRightShift(this,num2);}
globalThis.And = (a, b) => {
  return a && b;
}
Object.prototype.And=function(num2){return And(this,num2);}
globalThis.Or = (a, b) => {
  return a || b;
}
Object.prototype.Or=function(num2){return Or(this,num2);}
globalThis.Not = (a) => {
  return !a;
}
Object.prototype.Not=function(){return Not(this);}
globalThis.Ternary = (condition, val1, val2) => {
  return condition ? val1 : val2;
}
Object.prototype.Ternary=function(num2){return Ternary(this,num2);}
globalThis.Comma = (a, b) => {
  return b;
}
Object.prototype.Comma=function(num2){return Comma(this,num2);}
globalThis.Delete = (a, b) => {
  delete a[b];
}
Object.prototype.Delete=function(num2){return Delete(this,num2);}
globalThis.Get = (a, b) => {
  return a[b];
}
Object.prototype.Get=function(num2){return Get(this,num2);}
globalThis.TypeOf = (a) => {
  return typeof a;
}
Object.prototype.TypeOf=function(num2){return TypeOf(this);}
globalThis.In = (a, b) => {
  return a in b;
}
Object.prototype.In=function(num2){return In(this,num2);}
globalThis.InstanceOf = (a, b) => {
  return a instanceof b;
}
Object.prototype.InstanceOf=function(num2){return InstanceOf(this,num2);}
globalThis.Equal = (a, b) => {
  return a == b;
}
Object.prototype.Equal=function(num2){return Equal(this,num2);}
globalThis.eq=Equal;
Object.prototype.eq=Object.prototype.Equal;
globalThis.NotEqual = (a, b) => {
  return a != b;
}
globalThis.neq=NotEqual;
Object.prototype.neq=Object.prototype.NotEqual;
Object.prototype.NotEqual=function(num2){return NotEqual(this,num2);}
globalThis.StrictEqual = (a, b) => {
  return a === b;
}
Object.prototype.StrictEqual=function(num2){return StrictEqual(this,num2);}
globalThis.seq=StrictEqual;
Object.prototype.seq=Object.prototype.StrictEqual;
globalThis.StrictNotEqual = (a, b) => {
  return a !== b;
}
Object.prototype.StrictNotEqual=function(num2){return StrictNotEqual(this,num2);}
globalThis.sneq=StrictNotEqual;
Object.prototype.sneq=Object.prototype.StrictNotEqual;
globalThis.GreaterThan = (a, b) => {
  return a > b;
}
Object.prototype.GreaterThan=function(num2){return GreaterThan(this,num2);}
globalThis.gt=GreaterThan;
Object.prototype.gt=Object.prototype.GreaterThan;
globalThis.GreaterThanEqual = (a, b) => {
  return a >= b;
}
Object.prototype.GreaterThanEqual=function(num2){return GreaterThanEqual(this,num2);}
globalThis.gte=GreaterThanEqual;
Object.prototype.gte=Object.prototype.GreaterThanEqual;
globalThis.LessThan = (a, b) => {
  return a < b;
}
Object.prototype.LessThan=function(num2){return LessThan(this,num2);}
globalThis.lt=LessThan;
Object.prototype.lt=Object.prototype.LessThan;
globalThis.LessThanEqual = (a, b) => {
  return a <= b;
}
Object.prototype.LessThanEqual=function(num2){return LessThanEqual(this,num2);}
globalThis.lte=LessThanEqual;
Object.prototype.lte=Object.prototype.LessThanEqual;
globalThis.Coalesce = (a, b) => {
  return a ?? b;
}
Object.prototype.Coalesce=function(num2){return Coalesce(this,num2);}
globalThis.Option = (a, b) => {
  return a?.[b];
}
Object.prototype.Option=function(num2){return Option(this,num2);}
/*globalThis.Spread=(a)=>{
                return ...a;
}*/
globalThis.Run = (a, b) => {
  if (b) {
    return a(...b);
  }
  return a();
}
globalThis.Funtion = (a) => {
  return () => a;
}
globalThis.For = function(a, b, c, d) {
  this.breakVal = false;
  this.Break = () => breakVal = true;
  this.Continue = () => null;
  let e;
  for (a(); b(); c()) {
    if (breakVal) { break; }
    e = d();
  }
  return e;
}
globalThis.ForIn = function(b, d) {
  this.breakVal = false;
  this.Break = () => breakVal = true;
  this.Continue = () => null;
  let e;
  for (const a in b) {
    if (breakVal) { break; }
    e = d(a);
  }
  return e;
}
globalThis.ForOf = function(b, d) {
  this.breakVal = false;
  this.Break = () => breakVal = true;
  this.Continue = () => null;
  let e;
  for (const a of b) {
    if (breakVal) { break; }
    e = d(a);
  }
  return e;
}
globalThis.While = function(b, d) {
  this.breakVal = false;
  this.Break = () => breakVal = true;
  this.Continue = () => null;
  let e;
  while (b()) {
    if (breakVal) { break; }
    e = d();
  }
  return e;
}
globalThis.Do = function(b, d) {
  this.breakVal = false;
  this.Break = () => breakVal = true;
  this.Continue = () => null;
  let e;
  do {
    if (breakVal) { break; }
    e = d();
  } while (b())
  return e;
}
globalThis.With = function(b, d) {
  let e;
  with (b) {
    e = d();
  }
  return e;
}
globalThis.Try = (t, c, f) => {
  let g;
  try {
    g = t();
  } catch (e) {
    g = c(e);
  }
  finally {
    if (f) {
      f();
    }
  }
  return g;
}
globalThis.Throw = (e) => {
  throw e;
}
globalThis.FUNCTION = (arguments, block) => {
  return (...arguments) => {
    for (let i = 0; i < block.length; i++) {
      block[i][0](...block[i][1]);
    }
  };
}
globalThis.ASYNC_FUNCTION = (arguments, block) => {
  return async (...arguments) => {
    for (let i = 0; i < block.length; i++) {
      block[i][0](...block[i][1]);
    }
  };
}
