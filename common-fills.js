(() => {
  for (const record of [Request, Response, Blob]) {
    (() => {
      record.prototype.bytes ??= Object.setPrototypeOf(async function bytes() {
        return new Uint8Array(await this.arrayBuffer());
      }, Uint8Array);
    })();
  };
  (() => {
    const Q = fn => {
      try {
        return fn?.()
      } catch {}
    };
    class StreamParts{
      record;
      body;
      stream;
      reader;
    };
    const close = ctrl => Q(() => ctrl.close());
    const cancel = reader => Q(() => reader.cancel());
    const releaseLock = reader => Q(() => reader.releaseLock());
    const isPromise = x => x instanceof Promise || x?.constructor?.name === 'Promise' || typeof x?.then === 'function';
    ReadableStream.from ??= Object.setPrototypeOf(function from(obj) {
      let $iter, $readableStream;
      $readableStream = new ReadableStream({
        pull: Object.setPrototypeOf(async function pull(controller) {
          try {
            $iter ??= obj?.[Symbol.iterator]?.() ?? obj?.[Symbol.asyncIterator]?.() ?? [...obj][Symbol.iterator]();
            let chunk = $iter.next();
            if (isPromise(chunk)) {
              chunk = await chunk;
            }
            if (chunk?.done === false) {
              controller.enqueue(chunk?.value);
            } else {
              close(controller);
            }
          } catch (e) {
            close(controller);
            cancel($readableStream);
            throw e;
          }
        }, ReadableStreamDefaultController),
      });
      return $readableStream
    }, ReadableStream);
    for (const record of [Request, Response]) {
      (() => {
        if (new record("https://example.com", {
            method: "POST",
            body: "test"
          }).body) {
          return
        };
        Object.defineProperty(record.prototype, "body", {
          get: (() => {
            const $bodies = new(globalThis.WeakMap ?? Map);
            return Object.setPrototypeOf(function body() {
              if (/GET|HEAD/.test(this.method)) return null;
              const $streamParts = $bodies.get(this) ?? new StreamParts();
              $bodies.set(this,$streamParts);
              $streamParts.record ??= this.clone();
              $streamParts.body ??= new ReadableStream({
                start: Object.setPrototypeOf(async function start(controller) {
                  try {
                    $streamParts.stream ??= $streamParts.record.blob()?.then?.(Object.setPrototypeOf(function stream(blob){
                      return blob?.stream?.();
                    },ReadableStream);
                    if (isPromise($streamParts.stream)) {
                      $streamParts.stream = await $streamParts.stream;
                      $streamParts.reader ??= $streamParts.stream.getReader();
                    }
                    let chunk = await $streamParts.reader.read();
                    while (chunk?.done === false) {
                      controller.enqueue(chunk?.value);
                      chunk = await $streamParts.reader.read();
                    }
                  } catch (e) {
                    console.error(e);
                  } finally {
                    releaseLock($streamParts.reader);
                    close(controller);
                    cancel($streamParts.reader);
                    cancel($streamParts.stream);
                  }
                }, ReadableStreamDefaultController),
              });
              return $streamParts.body;
            }, ReadableStream);
          })(),
          configurable: true,
          enumerable: true,
        });
      })();
    }
  })();
  (() => {
    const Q = fn => {
      try {
        return fn?.()
      } catch {}
    };
    (() => {
      ReadableStreamDefaultReader.prototype.next ??= Object.setPrototypeOf(function next() {
        return this.read();
      }, ReadableStreamDefaultReader.prototype.read);
    })();
    (() => {
      ReadableStreamDefaultReader.prototype[Symbol.asyncIterator] ??= Object.setPrototypeOf(function asyncIterator() {
        return this;
      }, ReadableStreamDefaultReader);
    })();
    (() => {
      ReadableStreamDefaultReader.prototype['return'] ??= Object.setPrototypeOf(function release(reason) {
        Q(() => this.cancel?.(reason));
        Q(() => this.releaseLock?.());
        return {
          done: true
        };
      }, ReadableStreamDefaultReader.prototype.releaseLock);
    })();
    (() => {
      const $readers = new(globalThis.WeakMap ?? Map);
      ReadableStream.prototype[Symbol.asyncIterator] ??= Object.setPrototypeOf(function asyncIterator() {
        const $reader = $readers.get(this) ?? Q(() => this?.getReader?.());
        $readers.set(this, $reader);
        return $reader;
      }, ReadableStream);
      ReadableStream.prototype.values ??= Object.setPrototypeOf(function values() {
        return this[Symbol.asyncIterator]();
      }, ReadableStream);
    })();
  })();
})();
