"use strict";

function oneUp() {
	var value = parseInt(document.getElementById('amountOne').value);
	const Ether = document.getElementById("EthValue").value;
	value = isNaN(value) ? 1 : value;
	value++;
	if (value > 3) {
		//alert("Maximum amount is 5!")
		value = 3;
		//window.location.href = "";
	}
	document.getElementById('amountOne').innerHTML = value;
	document.getElementById('price').innerHTML = (value * Ether).toFixed(2);
	document.getElementById('amountOne').value = value;
	console.log(value)
}

function oneDown() {
	var value = parseInt(document.getElementById('amountOne').value);
	const Ether = document.getElementById("EthValue").value;
	value = isNaN(value) ? 1 : value;
	value--;
	if (value < 1) {
		//alert("Minimum mint amount is 1!")
		value = 1;
		//window.location.href = "";
	}
	document.getElementById('amountOne').innerHTML = value;
	document.getElementById('price').innerHTML = (value * Ether).toFixed(2);
	document.getElementById('amountOne').value = value;
	console.log(value)
}

window.addEventListener('load', async() => {
	document.getElementById("amountOne").value = "1";
	document.getElementsByName("oneUp")[0].addEventListener("click", oneUp);
	document.getElementsByName("oneDown")[0].addEventListener("click", oneDown);
});