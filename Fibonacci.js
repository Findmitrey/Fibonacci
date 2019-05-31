/*
 * New algorithm for finding Fibonacci numbers
 * =====================================================
 * File Name : fibonacci.js
 *
 * Creation Date : 31-05-2019
 *
 * Created By : Finogeev Dmitriy (dima.finogeev@mail.ru)
 * =====================================================
 */
/*
 * Copyright (c) 2019 Finogeev Dmitriy.
 */


;
function fibonacci(n){

	let step = 10;
	let result = 0;
	let arr = [0, 1];

	if (n <= step){
		for (let i = 2; i <= n; i++) {
			arr.push(arr[i-1] + arr[i-2]);
		}

		result = arr[n];
	}
	else {
		let t = n%step;
		let numStep = (n-t)/step;
		let next, prev;

		for (let i = 2; i <= step; i++) {
			arr.push(arr[i-1] + arr[i-2]);
		}

		next = arr[t];

		if(!(t%2)) prev = ~arr[10-t]+1;
		else prev = arr[10-t];
		
		for(let i = 0; i<numStep; i++){
			result = next*0x7B - prev;
			prev = next;
			next = result;
		}
	}

	return result;
};