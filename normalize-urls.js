  void async function NormalizeURLs() {

      await import(`https://www.unpkg.com/javaxscript/framework.js`);
      declare(() => {
          const attrs = ['src', 'href'];
          const attrs_length = attrs.length;
          for (let x = 0; x < attrs_length; x++) {
              const attr = attrs[x];
              queryApplyAll(`[${attr}]:not([${attr}^="${location.protocol.split(':')[0]}"],[${attr}^="blob"],[${attr}^="chrome"],[${attr}^="data"])`, (el) => {
                  try {
                      el.updateAttribute(attr, el[attr]);
                  } catch (e) {
                      console.log(e.message);
                  }

              });
          }
      });
    
  }();
