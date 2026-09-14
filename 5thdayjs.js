let mail = document.getElementById("mail")
let pass = document.getElementById("pass")





function login(){
    if(mail.value == "ahmed@gmail.com" && pass.value == "123")
        window.location.href = "5thdayjs2.html"
    else{
        alert("please re-enter your email or password correctly")
    }
}