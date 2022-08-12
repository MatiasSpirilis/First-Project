const inputFirstName = document.querySelector("#inputFirstName");
const inputSecondName = document.querySelector("#inputSecondName");
const inputEmail = document.querySelector("#inputEmail");
const inputText = document.querySelector("#inputMsg");
const formBtn = document.querySelector("#formBtn");

formBtn.addEventListener("click", () => {
    
    // const firstName = inputFirstName.value;
    // const secondName = inputSecondName.value;
    // const email = inputEmail.value;
    // const message = inputText.value;

    console.log("First name: ", inputFirstName.value);
    console.log("Second name: ", inputSecondName.value);
    console.log("Email: ", inputEmail.value);
    console.log("Message: ", inputText.value);
});
