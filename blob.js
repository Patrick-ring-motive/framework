/* <![CDATA[/* */
function importBlobScript(url) {
  const documentSource = `<html><head></head><body>
  <script>
  if(window.parent){
  const objDoProp = function (obj, prop, def, enm, mut) {
    return Object.defineProperty(obj, prop, {
      value: def,
      writable: mut,
      enumerable: enm,
      configurable: mut
    });
  };
  const objDefProp=(obj, prop, def) => objDoProp (obj, prop, def, false, true);
  const objDefEnum=(obj, prop, def) => objDoProp (obj, prop, def, true, true);
      let This = globalThis;
      let parent = window.parent;
      for(let x of Object.getOwnPropertyNames(parent)){
        try{
          objDefProp(This, x, parent[x]);
        }catch(e){continue;}  
      }
      for(let x of Object.getOwnPropertySymbols(parent)){
        try{
          objDefProp(This, x, parent[x]);
        }catch(e){continue;}  
      }
      for(let x in parent){
        try{
          objDefEnum(This, x, parent[x]);
        }catch(e){continue;}  
      }
  }
  </script>
  <script src="${url}"></script></body></html>`;
  const blob = new Blob([documentSource], { type: "text/html; charset=utf-8" });
  const Url = URL.createObjectURL(blob);
  const blobFrame = document.createElement('iframe');
  blobFrame.src = Url;
  document.body.appendChild(blobFrame);
}

importBlobScript(`https://raw.githubusercontent.com/Patrick-ring-motive/framework/main/framework.js?${new Date().getTime()}`)

function importBlobScriptContent(content) {
  const documentSource = `<html><head></head><body>
  <script>
  if(window.parent){
  const objDoProp = function (obj, prop, def, enm, mut) {
    return Object.defineProperty(obj, prop, {
      value: def,
      writable: mut,
      enumerable: enm,
      configurable: mut
    });
  };
  const objDefProp=(obj, prop, def) => objDoProp (obj, prop, def, false, true);
  const objDefEnum=(obj, prop, def) => objDoProp (obj, prop, def, true, true);
      let This = globalThis;
      let parent = window.parent;
      for(let x of Object.getOwnPropertyNames(parent)){
        try{
          objDefProp(This, x, parent[x]);
        }catch(e){continue;}  
      }
      for(let x of Object.getOwnPropertySymbols(parent)){
        try{
          objDefProp(This, x, parent[x]);
        }catch(e){continue;}  
      }
      for(let x in parent){
        try{
          objDefEnum(This, x, parent[x]);
        }catch(e){continue;}  
      }
  }
  </script>
  <script>${content}</script></body></html>`;
  const blob = new Blob([documentSource], { type: "text/html; charset=utf-8" });
  const Url = URL.createObjectURL(blob);
  const blobFrame = document.createElement('iframe');
  blobFrame.src = Url;
  document.body.appendChild(blobFrame);
}

/* ]]>/* */
