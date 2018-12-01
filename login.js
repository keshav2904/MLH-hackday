// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Login click
function check(form) { /*function to check userid & password*/
    /*the following code checkes whether the entered userid and password are matching*/
    if(form.uname.value == "admin" && form.psw.value == "admin") {
        window.open("main.html")/*opens the target page while Id & password matches*/
    }
    else {
        alert("Error Password or Username")/*displays error message*/
    }
}