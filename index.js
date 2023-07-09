
const url = "https://opentdb.com/api.php";
const submitB = document.querySelector('button');
const main = document.querySelector('.centered');

//placeholder
submitB.addEventListener("click", e => onSubmit(e));

function onSubmit(e){
    e.preventDefault();
    
    fetch(`${url}?amount=10`).then(data => data.json()).then(json => showTrivia(json));
}

function showTrivia(json) {
    for(let index of json.results){
        const div = document.createElement('div');
        const category = document.createElement('h2');
        const question = document.createElement('p');    
        const answerB = document.createElement('button');
        const answer = document.createElement('p');
        
        div.className = "card";
        answer.className = "hidden";

        category.innerText = index.category;
        question.innerText = index.question;
        answer.innerText = index.correct_answer;

        answerB.addEventListener("click", () => { 
            if(answer.className == "hidden"){
                answer.className = "show";
            }
            else{
                answer.className = "hidden";
        }});

        div.appendChild(category);
        div.appendChild(question);
        div.appendChild(answerB);
        div.appendChild(answer);
        
        main.appendChild(div);
    }

}