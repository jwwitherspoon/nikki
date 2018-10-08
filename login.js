function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (((username == "joel" || username == "Joel") && password == "joel") || ((username == "nikki" || username == "Nikki") && password == "nikki")) {
		window.location.href = "https://jwwitherspoon.github.io/nikki/anniversary.html"
	}
	else {
		document.getElementById("message").innerHTML = "Incorrect login credentials."
	}
}
