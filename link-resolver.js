void async function LinkResolver(){
if(!globalThis.declare){
await import('https://patrick-ring-motive.github.io/framework/framework.js?');
}
if(!globalThis.hostTargetList){
      globalThis.hostTargetList = ['readallcomics.com','www.readallcomics.com'];
    
    }
    
    

    
 
    
    
    declare(()=>{
    
      transformLinks('href');
      transformLinks('src');
      transformLinks('action');
  
    });
    

    
    async function transformLinks(attr){
    
    
      queryApplyAll('['+attr+'^="/"]:not([backup]),['+attr+'^="./"]:not([backup]),['+attr+'^="../"]:not([backup]),['+attr+']:not(['+attr+'*=":"]):not([backup])',
      (el)=>{
                    el.updateAttribute(attr,el[attr]);
      });
    
      const hostTargetList_length = globalThis.hostTargetList.length;
      for(let i=0;i<hostTargetList_length;i++){
        queryApplyAll('['+attr+'^="https://'+globalThis.hostTargetList[i]+'"]:not([backup])',
        (el)=>{

          let hash='';
          if(el[attr].includes('#')){hash='#'+el[attr].split('#')[1];}
          let char='?';
          if(el[attr].includes('?')){char='&';}
             el.updateAttribute(attr,
                               el[attr].split('#')[0]
                                  .replace('https://'+globalThis.hostTargetList[i],
                                   window.location.origin)+
                                  char+'hostname='+
                                  globalThis.hostTargetList[i]+
                                  '&referer='+window.location.host+
                                  hash);
        });
    
      }
    
      queryApplyAll('['+attr+'^="http://"]:not([backup])',
        (el)=>{
          let char='?';
          if(el[attr].includes('?')){char='&';}
             el.updateAttribute(attr,
                               el[attr].replaceAll("http://","https://"));
        });

        
    }
    
    
}();
  
    
      
    

    
    
    

