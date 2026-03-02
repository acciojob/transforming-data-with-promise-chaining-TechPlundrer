//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventlistener("click", function (){
	const value = Number(input.value);

	new Promise(function (resolve) {
		setTimeout(function () {
			output.textContent = "result: " + value;
			resolve(value);
		}, 2000);
	})

	.then(function (num) {
		return new Promise(function (resolve) {
			setTimeout(function (){
				const result = num * 2;
				output.textContent = "Result: " + result;
				resolve(result);
			}, 1000);
		});
	})
	.then(function (num) {
		return new Promise(function () {
			const result = num - 3;
			output.textContent = "Result: " + result;
			resolve(result);
		}, 1000);
	});
})

.then(function (num) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			const result = num / 2;
			output.textContent = "Result: " + result;
			resolve(result);
		}, 1000);
	});
})
.then(function (num) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			const finalResult = num + 10;
			output.textContent = "Final Result: " + finalResult;
			resolve(finalResult);
		}, 1000);
	});
});