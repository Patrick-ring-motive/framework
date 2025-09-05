(() => {
    const Q = fn =>{try{return fn?.()}catch{}};
	const close = ctrl => Q(()=>ctrl.close());
	const cancel = reader => Q(()=>reader.cancel());
	const releaseLock = reader => Q(()=>reader.releaseLock());
	
    [Request, Response, Blob].forEach(res => {
        res.prototype.bytes ??= Object.setPrototypeOf(async function bytes() {
            return new Uint8Array(await this.arrayBuffer());
        },Uint8Array);
    });
(()=>{
	if (new Request("https://example.com", {method:"POST",body:"test"}).body) {return};
	Object.defineProperty(Request.prototype, "body", {
		get: (() => {
			if(/GET|HEAD/.test(this.method))return null;
			let $this, $body, $stream, $reader;
			return Object.setPrototypeOf(function body() {
				$this ??= this.clone();
				$body ??= new ReadableStream({
					start: Object.setPrototypeOf(async function start(controller) {
						try{
							$stream ??= $this.blob();
							if($stream instanceof Promise || $stream?.prototype?.constructor === 'Promise'){
								$stream = (await $stream).stream();
								$reader ??= $stream.getReader();
							}
							let chunk = await $reader.read();
							while(chunk?.done === false){
								controller.enqueue(chunk?.value);
								chunk = await $reader.read();
							}
						}catch(e){
							console.error(e);
						}finally{
							releaseLock($reader);
							close(controller);
							cancel($reader);
							cancel($stream);
						}
					},ReadableStreamDefaultController)
				});
				return $body;
			},ReadableStream);
		})(),
		configurable:true,
		enumerable:true,
	});
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
})();
