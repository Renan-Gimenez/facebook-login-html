function check() {

    var password = document.querySelector(".password");
    var email = document.querySelector(".email");

    var Cpassword = false;
    var Cemail = false;

    if (password.value.length < 8) {
        Cpassword = false;
    } else {
        Cpassword = true;
    }

    if (email.value == "" || email.value.indexOf('@gmail.com') == -1 || email.value.length < 15) {
        Cemail = false
    } else {
        Cemail = true;
    }

    if (!Cpassword || !Cemail) {
        alert("Email ou senha incorretos");
    }
}