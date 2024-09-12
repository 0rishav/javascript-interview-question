const form = document.querySelector(".form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const dayError = document.querySelector(".day");
const monthError = document.querySelector(".month");
const yearError = document.querySelector(".year");

const displayDay = document.querySelector(".days p");
const displayMonth = document.querySelector(".months p");
const displayYear = document.querySelector(".years p");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    clearErrors();

    const dayValue = parseInt(day.value);
    const monthValue = parseInt(month.value);
    const yearValue = parseInt(year.value);

    if (isNaN(dayValue) || dayValue <= 0 || dayValue > 31) {
        setError(dayError, "Please enter a valid day.");
        valid = false;
    }
    if (isNaN(monthValue) || monthValue <= 0 || monthValue > 12) {
        setError(monthError, "Please enter a valid month.");
        valid = false;
    }
    if (isNaN(yearValue) || yearValue <= 0 || yearValue > new Date().getFullYear()) {
        setError(yearError, "Please enter a valid year.");
        valid = false;
    }

    if (valid) {
        displayAge(dayValue, monthValue, yearValue);
    }
});

function setError(element, message) {
    let errorMessage = document.createElement("p");
    errorMessage.className = "error";
    errorMessage.textContent = message;
    element.append(errorMessage);
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.remove());
}

function displayAge(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    displayYear.textContent = ageYears;
    displayMonth.textContent = ageMonths;
    displayDay.textContent = ageDays;
}
