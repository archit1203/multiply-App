const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const q=document.getElementById("question");

const inputEl = document.getElementById("input");

const form=  document.getElementById("form");

const scoreEl= document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));


if(!score){
    score=0;
}

scoreEl.innerText = `score: ${score}`;

q.innerText = `What is ${num1} multiply by ${num2}?`

const ans =  num1*num2;

form.addEventListener("submit",()=>{
    const userAns=+inputEl.value;
    if(userAns === ans){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }

