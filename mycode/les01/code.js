
var quizes =[{
    "question": "What is the capital of Norway?",
    "awnsers": ["Stavanger","Ålesund","Oslo", "Sverge"],
    "correct" : 2
},
{
    "question": "What is the Largest city of Norway?",
    "awnsers": ["Bergen","Stavanger","Oslo", "Sverge"],
    "correct" : 2
},
{
    "question": "Which is NOT a city ",
    "awnsers": ["Stavanger","Ålesund","Oslo", "London"],
    "correct" : 3
}]
var lastIndex = -1 // default value to allow for all quiz items to be selected first time. 


// "main" function
function doneLoading() {

    // get the elements to edit
    var question = document.getElementById("q");
    var awns = document.getElementById("awns");
    
    // to reset values for next question
    var alt = "";
    awns.innerHTML = ""

    // get a random value, but make sure its not the same as last question.
    var index =  Math.floor(Math.random() * 3);// get a random value between 0 and 3
    while (lastIndex ===index ) {
        index =  Math.floor(Math.random() * 3)
    }
    // rember value we get for next round.
    lastIndex = index;
    
    var htmlQ =`${quizes[index].question}`;
    question.innerHTML = htmlQ ;
    // add the awnser alternatives to the page
    for (let i = 0; i < 4 ; i++) {
        alt = `<li id=${i} class="btn"> ${quizes[index].awnsers[i]}</li>`
        awns.innerHTML += alt;
    }

    //add event listner to check if correct awnser was pressed.
    for (let i = 0; i < 4 ; i++) {
        document.getElementById(i).addEventListener('click', function handleClick(event) {
            var correct = quizes[index].correct
            
            if (correct === parseInt(event.target.id)) {
                alert("correct")
                doneLoading();
            } else {
                alert("wrong")
            }        

        })   
    }
   
}
// make sure the page is done loading before running js.
window.onload = doneLoading;