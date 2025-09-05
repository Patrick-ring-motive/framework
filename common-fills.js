(() => {
    const Q = fn => {
        try {
            fn?.();
        } catch {}
    };
    (() => {
        Blob.prototype.clone ??= Object.setPrototypeOf(function clone() {
            return this.slice();
        },Blob);
    })();
    [Request, Response, Blob].forEach(res => {
        res.prototype.bytes ??= Object.setPrototypeOf(async function bytes() {
            return new Uint8Array(await this.arrayBuffer());
        },Uint8Array);
    });
    (() => {
        if (!new Request("https://test.com", {method:"POST",body:"test"}).body) {
            Object.defineProperty(Request.prototype, "body", {
                get: (() => {
                    let $this, $body;
                    return Object.setPrototypeOf(function body() {
                        $this ??= this.clone();
                        $body ??= new ReadableStream({
                            async pull(controller) {
                                controller.enqueue(await $this.bytes());
                                controller.close();
                            },
                        });
                        return $body;
                    },ReadableStream);
                })()
            });
        }
    })();
    (() => {
        ReadableStreamDefaultReader.prototype.next ??= Object.setPrototypeOf(function next() {
            return this.read();
        },ReadableStreamDefaultReader.prototype.read);
    })();
    (() => {
        ReadableStreamDefaultReader.prototype[Symbol.asyncIterator] ??= Object.setPrototypeOf(function asyncIterator() {
            return this;
        },ReadableStreamDefaultReader);
    })();
    (() => {
        ReadableStreamDefaultReader.prototype['return'] ??= Object.setPrototypeOf(function release(reason) {
            Q(() => this.cancel?.(reason));
            Q(() => this.releaseLock?.());
            return {
                done: true
            };
        },ReadableStreamDefaultReader.prototype.releaseLock);
    })();
    (() => {
        const _readers = new(globalThis.WeakMap ?? Map);
        ReadableStream.prototype[Symbol.asyncIterator] ??= Object.setPrototypeOf(function asyncIterator() {
            const _reader = _readers.get(this) ?? Q(() => this?.getReader?.());
            _readers.set(this, _reader);
            return _reader;
        },ReadableStream);
    })();
    (() => {
        globalThis.requestAnimationFrame ??= function requestAnimationFrame(fn) {
            return setTimeout(fn, 0);
        };
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
