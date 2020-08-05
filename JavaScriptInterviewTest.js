/*
 * 1. 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
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

/*
 * 2. 多种方式实现斐波那契数列
 * 1 1 2 3 5 8 13
 */
function testFibonacci(n) {
	// 1>. 普通递归
	// 缺点: 20 以内快, 50 多就会爆栈
	// 普通递归的问题在于展开的时候会产生非常大的中间缓存，而每一层的中间缓存都会占用我们宝贵的栈上空间，所有导致了当这个 n 很大的时候，栈上空间不足则会产生“爆栈”的情况
	function fibonacci1(n) {
		if (n == 1 || n == 2) return 1;
		return fibonacci1(n - 2) + fibonacci1(n - 1);
	}
	// return fibonacci1(n);

	// 2>. 尾递归
	// 尾递归函数因为在展开的过程中计算并且缓存了结果; 尾递归函数依然还是递归函数，如果不优化依然跟普通递归函数一样会爆栈，该展开多少层依旧是展开多少层。不会爆栈是因为语言的编译器或者解释器所做了“尾递归优化”，才让它不会爆栈的。
	function fibonacci2(n, sum1 = 1, sum2 = 1) {
		if (n == 1 || n == 2) return sum2;
		return fibonacci2(n - 1, sum2, sum1 + sum2);
	}
	// return fibonacci2(n);

	// 3>.
	function fibonacci3(n) {
		let pre = 1,
			cur = 1;
		if (n == 1 || n == 2) return 1;
		for (let i = 3; i <= n; i++) {
			[pre, cur] = [cur, pre + cur];
		}
		return cur;
	}
	return fibonacci3(n);
}
// console.log(testFibonacci(3));

/*
 * 3. 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）
 *
 */
// 把 N 个数尽量分成 K 组，使每组数字的和尽量接近
function testGetEqualArr(arr, n = 3) {
	/*
	 * 数组排序
	 * @arr 排序的数组
	 */
	const arrSort = (arr) => {
		return arr.sort((a, b) => b - a);
	};
	/*
	 * 数组求和
	 * @arr 求和数组
	 */
	const sumTotal = (arr) => eval(arr.join('+'));

	/*
	 * getEqualArr 获取均分的结果
	 * @arr 均分的整数数组
	 * @n 均分的份数
	 */
	const getEqualArr = (arr, n = 3) => {
		const sortArr = arrSort(arr);
		const arrSum = sumTotal(arr);
		let result = [];
		(getEachArr = () => {
			let startNum = 0;
			let eactArr = [];
			// 如果是最后一组，就直接push
			if (result.length === n - 1) {
				result.push(sortArr);
				return result;
			}
			sortArr.map((num, index) => {
				if (startNum + num <= Math.ceil(arrSum / n)) {
					startNum = startNum + num;
					eactArr.push(...sortArr.splice(index, 1));
				}
			});
			result.push(eactArr);
			// 提取完一组接着再进行提取下一组
			getEachArr();
		})();
		return result;
	};
	return getEqualArr(arr, n);
}
console.log(testGetEqualArr([1, 2, 3, 4, 5, 6, 7, 8]));
