const clearUsername = document.getElementsByClassName("input");

function closeForm() {
	document.getElementById("logsign").style.display = "none";
	for (let i = 0; i < 5; i++) {
		clearUsername[i].value = "";
	}
}

function showFormLogin() {
	document.getElementById("logsign").style.display = "flex";
	document.querySelector("#login").style.display = "flex";
	document.querySelector("#login").style.display = "flex";
	document.querySelector("#sign-up").style.display = "none";
}
function showFormSignup() {
	document.getElementById("logsign").style.display = "flex";
	document.querySelector("#sign-up").style.display = "flex";
	document.querySelector("#login").style.display = "none";
}

// LOGIN
function myLogin() {
	var user = document.forms["inputuserform"]["uname"].value;
	// var pw = document.forms["inputuserform"]["psw"].value;
	if (user == user) {
		document.write("<html><body><h1><center>");
		document.write("HI." + " ");
		document.write(user);
		document.write("</center></h1></body></html");
	}
}
