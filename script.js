function closeForm() {
	document.querySelector(".blur").style.display = "none";
}
function showFormLogin() {
	document.querySelector(".blur").style.display = "flex";
	document.querySelector("#login").style.display = "flex";
	document.querySelector("#sign-up").style.display = "none";
}
function showFormSignup() {
	document.querySelector(".blur").style.display = "flex";
	document.querySelector("#sign-up").style.display = "flex";
	document.querySelector("#login").style.display = "none";
}
