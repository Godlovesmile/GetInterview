/*
 * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 */
function testMySetInterVal() {
	function mySetInterVal(fn, a, b) {
		this.a = a;
		this.b = b;
		this.timer = -1;
		this.count = 0;
		this.start = () => {
			fn();
			console.log(`${this.a} + ${this.count} * ${this.b}`);
			this.count++;
			this.timer = setTimeout(() => {
				this.start();
			}, this.a + this.count * this.b);
		};
		this.stop = () => {
			clearTimeout(this.timer);
		};
	}
	const test = new mySetInterVal(
		() => {
			console.log('666');
		},
		1000,
		2000
    );
    test.start();
}

// testMySetInterVal();