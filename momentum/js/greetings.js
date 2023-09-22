const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


function onLoginFormSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username",username);
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello! ${username}`;
}


loginForm.addEventListener("submit",onLoginFormSubmit);






savedUserName = localStorage.getItem("username");

if(savedUserName === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginFormSubmit);
}else{
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello! ${savedUserName}`;
}