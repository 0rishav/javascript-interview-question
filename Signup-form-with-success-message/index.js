const form = document.querySelector(".form");
const error = document.querySelector(".error")
const card = document.querySelector(".card")
const submit = document.querySelector(".submit")
const dismiss = document.querySelector(".dismiss");
const updateEmail = document.querySelector(".updateEmail")

submit.style.display = "none";

form.addEventListener("submit",(e)=>{
    let valid = true;
    e.preventDefault();
    const email = document.getElementById("email")
    if(!validateEmail(email.value.trim())){
        error.innerText = "valid email required!"
        valid = false;
    }
    if(valid){
        error.innerText = ""
        card.style.display = "none"
        submit.style.display = "block"
        
    }
    setTimeout(() => {
        error.innerText = ""
    },3000)
    updateEmail.innerText = email.value

})

dismiss.addEventListener("click",()=>{
    submit.style.display = "none"
    card.style.display = ""
})

function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}