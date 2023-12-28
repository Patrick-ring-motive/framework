
globalThis.If=(bool,then,elseThen)=>{

    if(bool){

                                if((typeof bool)=='function'){

                                                if(bool()){

                                                                return then();

                                                }else{

                                                                if(elseThen){

                                                                                return elseThen(e);

                                                                }else{

                                                                                return;

                                                                }

                                                }

                                }else{

                                                return then();

                                }

    }else{

        if(elseThen){

            return elseThen(e);

        }else{

            return;

        }

    }

}

 

globalThis.Var=(name,value)=>{

                globalThis[name]=value;

}

globalThis.Let=(name,value)=>{

                globalThis[name]=value;

}

globalThis.Const=(name,value)=>{

                globalThis[name]=value;

                Object.freeze(globalThis[name]);

}

globalThis.__=(comments)=>globalThis.__;

globalThis.Assign=(name,value)=>{

                globalThis[name]=value;

}

globalThis.Put=(obj,name,value)=>{

                obj[name]=value;

}

globalThis.Add=(num1,num2)=>{

                return num1 + num2;

}

globalThis.Multiply=(num1,num2)=>{

                return num1 * num2;

}

globalThis.Exponentiate=(num1,num2)=>{

                return num1 ** num2;

}

globalThis.Divide=(num1,num2)=>{

                return num1 / num2;

}

globalThis.Modulus=(num1,num2)=>{

                return num1 % num2;

}

globalThis.Increment=(num)=>{

                return num++;

}

globalThis.Decrement=(num)=>{

                return num--;

}

globalThis.BitwiseAnd=(a,b)=>{

                return a & b;

}

globalThis.BitwiseOr=(a,b)=>{

                return a | b;

}

globalThis.Xor=(a,b)=>{

                return a ^ b;

}

globalThis.BitwiseNot=(a)=>{

                return ~a;

}

globalThis.Minus=(a)=>{

                return -a;

}

globalThis.Plus=(a)=>{

                return +a;

}

globalThis.LeftShift=(a,b)=>{

                return a << b;

}

globalThis.RightShift=(a,b)=>{

                return a >> b;

}

globalThis.ZeroRightShift=(a,b)=>{

                return a >>> b;

}

globalThis.And=(a,b)=>{

                return a && b;

}

globalThis.Or=(a,b)=>{

                return a || b;

}

globalThis.Not=(a)=>{

                return !a;

}

globalThis.Ternary=(condition,val1,val2)=>{

                return condition ? val1 : val2;

}

globalThis.Comma=(a,b)=>{

                return b;

}

globalThis.Delete=(a,b)=>{

                delete a[b];

}

globalThis.Get=(a,b)=>{

                return a[b];

}

globalThis.TypeOf=(a)=>{

                return typeof a;

}

globalThis.In=(a,b)=>{

                return a in b;

}

globalThis.InstanceOf=(a,b)=>{

                return a instanceof b;

}

globalThis.Equal=(a,b)=>{

                return a == b;

}

globalThis.NotEqual=(a,b)=>{

                return a != b;

}

globalThis.StrictEqual=(a,b)=>{

                return a === b;

}

globalThis.StrictNotEqual=(a,b)=>{

                return a !== b;

}

globalThis.GreaterThan=(a,b)=>{

                return a > b;

}

globalThis.GreaterThanEqual=(a,b)=>{

                return a >= b;

}

globalThis.LessThan=(a,b)=>{

                return a < b;

}

globalThis.LessThanEqual=(a,b)=>{

                return a <= b;

}

globalThis.Coalesce=(a,b)=>{

                return a ?? b;

}

globalThis.Option=(a,b)=>{

                return a?.[b];

}

/*globalThis.Spread=(a)=>{

                return ...a;

}*/

globalThis.Run=(a,b)=>{

                if(b){

                                return a(...b);

                }

                return a();

}

globalThis.Funtion=(a)=>{

                return ()=>a;

}

globalThis.For=function(a,b,c,d){

                this.breakVal=false;

                this.Break=()=>breakVal=true;

                this.Continue=()=>null;

                let e;

                for(a();b();c()){

                                if(breakVal){break;}

                                e=d();

                }

                return e;

}

globalThis.ForIn=function(b,d){

                this.breakVal=false;

                this.Break=()=>breakVal=true;

                this.Continue=()=>null;

                let e;

                for(const a in b){

                                if(breakVal){break;}

                                e=d(a);

                }

                return e;

}

 

globalThis.ForOf=function(b,d){

                this.breakVal=false;

                this.Break=()=>breakVal=true;

                this.Continue=()=>null;

                let e;

                for(const a of b){

                                if(breakVal){break;}

                                e=d(a);

                }

                return e;

}

 

globalThis.While=function(b,d){

                this.breakVal=false;

                this.Break=()=>breakVal=true;

                this.Continue=()=>null;

                let e;

                while(b()){

                                if(breakVal){break;}

                                e=d();

                }

                return e;

}

globalThis.Do=function(b,d){

                this.breakVal=false;

                this.Break=()=>breakVal=true;

                this.Continue=()=>null;

                let e;

                do{

                                if(breakVal){break;}

                                e=d();

                }while(b())

                return e;

}

globalThis.With=function(b,d){

                let e;

                with(b){

                                e=d();

                }

                return e;

}

globalThis.Try=(t,c,f)=>{

                let g;

                try{

                                g=t();

                }catch(e){

                                g=c(e);

                }

                finally{

                                if(f){

                                f();

                                }

                }

                return g;

}

globalThis.Throw=(e)=>{

                throw e;

}

globalThis.FUNCTION=(arguments,block)=>{

                return (...arguments)=>{

                                for(let i = 0;i<block.length;i++){

                                                block[i][0](...block[i][1]);

                                }

                };

}

globalThis.ASYNC_FUNCTION=(arguments,block)=>{

                return async (...arguments)=>{

                                for(let i = 0;i<block.length;i++){

                                                block[i][0](...block[i][1]);

                                }

                };

}

