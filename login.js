function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ((username == "joel" && password == "joel") || (username == "nikki" && password == "nikki")) {
		window.location.href = "https://jwwitherspoon.gitnikkihub.io/nikki/anniversary.html"
	}
	else {
		document.getElementById("message").innerHTML = "Incorrect login credentials."
	}
}
