(() => {
    for(const record of [Request, Response, Blob]){
		(()=>{
	        record.prototype.bytes ??= Object.setPrototypeOf(async function bytes() {
	            return new Uint8Array(await this.arrayBuffer());
	        },Uint8Array);
		})();
    };
	for(const record of [Request, Response]){
		(()=>{
			const Q = fn =>{try{return fn?.()}catch{}};
			const close = ctrl => Q(()=>ctrl.close());
			const cancel = reader => Q(()=>reader.cancel());
			const releaseLock = reader => Q(()=>reader.releaseLock());
			const isPromise = x => x instanceof Promise || x?.constructor?.name === 'Promise' || typeof x?.then === 'function';
			ReadableStream.from ??= Object.setPrototypeOf(function from(obj){
				let $iter;
				return new ReadableStream({
							pull: Object.setPrototypeOf(async function pull(controller) {
								try{
									$iter ??= obj?.[Symbol.iterator]?.() ?? obj?.[Symbol.asyncIterator]?.() ?? [...obj][Symbol.iterator]();
									let chunk = $iter.next();
								    if(isPromise(chunk)){
                                      chunk = await chunk;
									}
									if(chunk?.done === false){
										controller.enqueue(chunk?.value);
									}else{
										close(controller);
									}
								}catch(e){
                                  close(controller);
								  throw e;
								}
						},ReadableStreamDefaultController);
			},ReadableStream);
			if (new record("https://example.com", {method:"POST",body:"test"}).body) {return};
			Object.defineProperty(record.prototype, "body", {
				get: (() => {
					let $this, $body, $stream, $reader;
					return Object.setPrototypeOf(function body() {
						if(/GET|HEAD/.test(this.method))return null;
						$this ??= this.clone();
						$body ??= new ReadableStream({
							start: Object.setPrototypeOf(async function start(controller) {
								try{
									$stream ??= $this.blob();
									if(isPromise($stream)){
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
	}
	(()=>{
		const Q = fn =>{try{return fn?.()}catch{}};
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
})();
