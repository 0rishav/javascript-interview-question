import { data } from "./data.js";

const faqPage = document.querySelector(".faq-page");

function Question(item,index) {
  const displayQuestion = document.createElement("div");
  displayQuestion.className = "question";
  displayQuestion.innerHTML = `<h2>${item.question}</h2>
            <p class="btn" data-index="${index}">&#43;</p>`;
    faqPage.append(displayQuestion);
}

function Answer(item,index){
    const displayAnswer = document.createElement("h3");
    displayAnswer.className = "answer hidden";
    displayAnswer.innerText = item.answer;
    displayAnswer.setAttribute('data-index', index);
    faqPage.append(displayAnswer);
}

function displayFAQ(data) {
  data.map((item,index) => {
    Question(item,index);
    Answer(item,index);
  });

 const button =  document.querySelectorAll(".btn")
 button.forEach(btn=>{
    btn.addEventListener("click",Toggle)
 })
}

function Toggle(e){
  const index = e.target.getAttribute("data-index");
  const answer = document.querySelector(`.answer[data-index="${index}"]`);
  answer.classList.toggle("hidden");
  e.target.innerHTML = answer.classList.contains("hidden") ? "&#43;" : "&#8722;";
}

displayFAQ(data);
