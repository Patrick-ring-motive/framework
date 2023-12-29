void async function LinkResolver(){

await import('https://patrick-ring-motive.github.io/framework/framework.js?');
    
if(!globalThis.hostTargetList){
      globalThis.hostTargetList = ['readallcomics.com','www.readallcomics.com'];
    
    }
    
    

    
 
    
    
    declare(()=>{
    
      transformLinks('href');
      transformLinks('src');
      transformLinks('action');
  
    });
    
    
    
    async function transformLinks(attr){
    
    
     let pkgs = document.querySelectorAll('['+attr+'^="/"]:not([backup]),['+attr+'^="./"]:not([backup]),['+attr+'^="../"]:not([backup]),['+attr+']:not(['+attr+'*=":"]):not([backup])');
      let pkgs_length = pkgs.length;
      for(let i=0;i<pkgs_length;i++){
           pkgs[i].setAttribute(attr,pkgs[i][attr]);
      }
    
      const hostTargetList_length = globalThis.hostTargetList.length;
      for(let i=0;i<hostTargetList_length;i++){
        pkgs = document.querySelectorAll('['+attr+'^="https://'+globalThis.hostTargetList[i]+'"]:not([backup])');
        pkgs_length = pkgs.length;
        for(let x=0;x<pkgs_length;x++){
          let hash='';
          if(pkgs[x][attr].includes('#')){hash='#'+pkgs[x][attr].split('#')[1];}
          let char='?';
          if(pkgs[x][attr].includes('?')){char='&';}
             pkgs[x].setAttribute(attr,
                               pkgs[x][attr].split('#')[0]
                                  .replace('https://'+globalThis.hostTargetList[i],
                                   window.location.origin)+
                                  char+'hostname='+
                                  globalThis.hostTargetList[i]+
                                  '&referer='+window.location.host+
                                  hash);
        }  
    
      }
    
      pkgs = document.querySelectorAll('['+attr+'^="http://"]:not([backup])');
        pkgs_length = pkgs.length;
        for(let x=0;x<pkgs_length;x++){
          let char='?';
          if(pkgs[x][attr].includes('?')){char='&';}
             pkgs[x].setAttribute(attr,
                               pkgs[x][attr].replaceAll("http://","https://"));
        }
    
    let downloads = document.querySelectorAll('a[href*=".tar.xz"]:not(a[href*="www.nodejs.org"])');
    let downloads_length = downloads.length;
    for(let i=0;i<downloads_length;i++){try{
      downloads[i].href=downloads[i].href.replace(window.location.hostname,'www.nodejs.org');
    }catch(e){continue;}}
    
    let slashLinks = document.querySelectorAll('a[href^="http"]:not([href$="/"],[href*=".html"],[href*=".tar.xz"],[href*=".json"],[href*=".jsml"],[href*=".css"],[href*=".woff"],[backup])');
    
    
    let slashLinks_length = slashLinks.length;
    for(let x=0;x<slashLinks_length;x++){try{
    slashLinks[x].href=slashLinks[x].href+'/';
    }catch(e){continue;}}
    
    let logos = document.querySelectorAll('img[src*="logo"]');
    let logos_length=logos.length;
    
    for(let x=0;x<logos_length;x++){try{
    logos[x].src='/mode.svg';
    }catch(e){continue;}}
        let localhostname = globalThis.proxyhost;
        if(window.location.href.includes('hostname=')){
        localhostname = window.location.href.split('hostname=')[1].split('&')[0].split('?')[0].split('#')[0];
        }else{
          if(!(globalThis.proxyhost)){return;}
        }
        pkgs = document.querySelectorAll('['+attr+'^="'+window.location.origin+'"]:not(['+attr+'*="hostname="],['+attr+'$="tour"],['+attr+'$="tour/"])');
        pkgs_length = pkgs.length;
        for(let x=0;x<pkgs_length;x++){
          let hash='';
          if(pkgs[x][attr].includes('#')){hash='#'+pkgs[x][attr].split('#')[1];}
          let char='?';
          if(pkgs[x][attr].includes('?')){char='&';}
             pkgs[x].setAttribute(attr,
                               pkgs[x][attr].split('#')[0]+char+'hostname='+localhostname+'&referer='+window.location.host+hash);
        }
    
    
    }
    
    
}();
  
    
      
    

    
    
    

