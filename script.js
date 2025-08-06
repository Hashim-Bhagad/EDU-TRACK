document.addEventListener("DOMContentLoaded", () => {
    let Log_in_button = document.querySelector(".Log-in"); 
    if (Log_in_button) {
        Log_in_button.addEventListener("click", () => {
            window.location.assign("login.html");
        });
    }

    let Sign_up_button = document.querySelector(".Sign-up"); 
    if (Sign_up_button) {
        Sign_up_button.addEventListener("click", () => {
            window.location.assign("Create.html");
        });
    }
});
