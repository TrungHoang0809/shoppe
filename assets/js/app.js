"use strict";

function displayModal(formSelector) {
    var modal = document.querySelector(".modal");
    modal.style.display = "flex";

    var formElement = document.querySelector(formSelector);
    formElement.style.display = "none"
}

function closeModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";

    var loginForm = document.querySelector(".login");
    loginForm.style.display = "block";

    var registerForm = document.querySelector(".register");
    registerForm.style.display = "block";
}

var returnBtns = document.querySelectorAll(".btn-normal");

Array.from(returnBtns).forEach(function (btn) {
    btn.onclick = closeModal;
});

var modal = document.querySelector(".modal");
modal.onclick = closeModal;

//prevent event propagation:
var modalBody = document.querySelector(".modal__body");
modalBody.onclick = function(event){
    event.stopPropagation();
}
