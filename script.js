window.onload = () =>
	{
		document.querySelector("#Calculate").onclick = CalculateAmt;
	}

function CalculateAmt() {
	let amount = document.querySelector("#amount").value;
	let people = document.querySelector("#people").value;
	let service = document.querySelector("#services").value;

	console.log(service);
	if (amount === '' && service === "Select") {
		alert("Enter valid values");
		return;
	}


	if (people === "1")
		document.querySelector("#each").style.display = "none";
	else
		document.querySelector("#each").style.display = "block";

	let total = (amount * service/100) / people;
	total = total.toFixed(2);

	document.querySelector("#tip").style.display = "block";
	document.querySelector("#total").innerHTML = total;
}