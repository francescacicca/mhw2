/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const scelta = src = 'images/checked.png';
const nonScelta = src = 'images/unchecked.png';


const answers = {
    one: null,
    two: null,
    three: null
}


function resetAnswers() {
    answers.one = null;
    answers.two = null;
    answers.three = null;

    console.log(answers);
   
    const boxes = document.querySelectorAll('.choice-grid div');
    for (const box of boxes) {
       box.classList.remove('choice');
       box.classList.remove('hidden');
       const img = box.querySelector('.checkbox');
       img.src = nonScelta;
      }

      console.log("tutte le classi rimosse");

const resultContainer = document.querySelector('#results');
resultContainer.innerHTML = '';

console.log("dati risultato azzerati");
}



function restartQuiz (event) {
    
    const ricomincia = event.currentTarget;

    resetAnswers(); 
    
    const boxes1 = document.querySelectorAll('.choice-grid div');
    for (const box of boxes1) {
    box.addEventListener("click", onClick);
    }  

  
}


//funzione che stabilisce il risultato

function getResult() {
    for (let i = 0; i < 3; i++) {
        if (answers.one === answers.two || answers.one === answers.three) {
            return answers.one;
            c
         }
     
        else if (answers.two === answers.three) {
            return answers.two;

         }
 
        else {
            return answers.one;
            
         }
     } 
      
     
 }


// funzione che mostra il risultato

function displayResult() 
{ 
        

        const resultContainer = document.querySelector('#results');
        const result = getResult();

        
        const header = document.createElement('h1');
        const description = document.createElement('p');
        header.innerHTML = ' ';
        header.classList.add('resultTitle');
        description.innerHTML = ' ';
        header.textContent = RESULTS_MAP[result].title;
        description.textContent = RESULTS_MAP[result].contents;
        
        resultContainer.appendChild(header);
        resultContainer.appendChild(description);

        
        const restart = document.createElement('div');
        restart.classList.add('restartButton');
        restart.textContent = 'Ricomincia il quiz';
        
        resultContainer.appendChild(restart);

        const resbutton = document.querySelector('.restartButton');
        resbutton.addEventListener("click", restartQuiz);

        
}











function onClick(event) {

    const element = event.currentTarget;
    answers[element.dataset.questionId] = element.dataset.choiceId;
    const boxes = element.parentNode.querySelectorAll('div');

    for(const box of boxes) {
        box.classList.add('hidden');
        box.classList.remove('choice');
        box.addEventListener('click', onClick);
        const img = box.querySelector('.checkbox');
        img.src = nonScelta;
    }
    

    
    element.classList.add('choice');
    element.classList.remove('hidden');
   


   const img = event.currentTarget.querySelector('.checkbox');
   img.src = scelta;


   if (answers.one !== null && 
   answers.two !== null && 
   answers.three !== null) {

    displayResult();
       
    const boxes = document.querySelectorAll('.choice-grid div');
    for (const box of boxes) {
       
       box.removeEventListener("click", onClick); 
    }
    console.log(answers);
       
   }

    
   
}



const images = document.querySelectorAll('.choice-grid div');
for (const img of images) {
    img.addEventListener("click", onClick);
}



