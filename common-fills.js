(() => {
  const Q = fn => {
    try {
      fn?.();
    } catch { }
  };
  (()=>{
    Blob.prototype.clone ??= function clone(){
      return this.slice();
    };
  })();
  [Request, Response, Blob].forEach(res => {
    res.prototype.bytes ??= async function bytes() {
      return new Uint8Array(await this.arrayBuffer());
    };
  });
  (() => {
    if (!new Request("https://test.com", { method: "POST", body: "test" }).body) {
      Object.defineProperty(Request.prototype, "body", {
        get: (function stream(){
          const $this = this.clone();
          const $body = new ReadableStream({
            async pull(controller) {
              controller.enqueue(await $this.bytes());
              controller.close();
            },
          });
          return function body(){
            return $body;
          };
        })()
      });
    }
  })();
  (() => {
    ReadableStreamDefaultReader.prototype.next ??= function next(){
      return this.read();
    };
  })();
  (() => {
    ReadableStreamDefaultReader.prototype[Symbol.asyncIterator] ??= function asyncIterator() {
      return this;
    };
  })();
  (() => {
    ReadableStreamDefaultReader.prototype['return'] ??= function release(reason) {
      Q(() => this.cancel?.(reason));
      Q(() => this.releaseLock?.());
      return { done: true };
    };
  })();
  (() => {
    const _readers = new (globalThis.WeakMap ?? Map);
    ReadableStream.prototype[Symbol.asyncIterator] ??= function asyncIterator() {
      const _reader = _readers.get(this) ?? Q(()=>this?.getReader?.());
      _readers.set(this,_reader);
      return _reader;
    };
  })();
  (() => {
    globalThis.requestAnimationFrame ??= function requestAnimationFrame(fn) { return setTimeout(fn, 0); };
  })();
  (() => {
    globalThis.requestIdleCallback ??= globalThis.requestAnimationFrame;
  })();
  (() => {
    globalThis.cancelAnimationFrame ??= clearTimeout;
  })();
  (() => {
    globalThis.cancelIdleCallback ??= globalThis.cancelAnimationFrame;
  })();
})();
