const loginForm = document.getElementById("login-form"); //przypisuje tekst z formularza i przypisuje do zmiennej
const loginButton = document.getElementById("login-form-submit"); //przypisuje tekst z formularza i przypisuje do zmiennej
const loginErrorMsg = document.getElementById("login-error-msg"); //przypisuje tekst z formularza i przypisuje do zmiennej

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value; //przypisuje tekst z formularza i przypisuje do zmiennej
    const password = loginForm.password.value; //przypisuje tekst z formularza i przypisuje do zmiennej

    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
	//jeżeli pola logowania są puste, logowanie się powiedzie. Jeżeli przynajmniej 1 pole jest niepuste, 
		//ustawiana jest widoczność komunikatu o błędzie logowania
        
})