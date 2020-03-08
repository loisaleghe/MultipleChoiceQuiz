let score = 0
let qIndex = 0
let question = ''
let MyQuestions = [
    {
        title: 'What is 2 + 2?',
        answers: [
            "a:  4",
            "b:  9",
            "c:  6",
            "d:  8"
        ],
        correctanswer: "4"
    },

    {
        title: 'What is 2 x 3?',
        answers: [
            "a: 10",
            "b: 12",
            "c: 6",
            "d: 5"
        ],
        correctanswer: "6"
    },

    {
        title: 'How many vowels are in Lois?',
        answers: [
            "a: 4",
            "b: 2",
            "c: 3",
            "d: 0"
        ],
        correctanswer: "2"
    },

    {
        title:'How many consonants are in Wendy?',
        answers: [
            "a: 4",
            "b: 8",
            "c: 5",
            "d: 2"
        ],
        correctanswer: "4"
    } 
    ];

    $(document).ready(function(){
        //event handler for what happens when the start button is clicked
        $('#startbutton').click(function(e){
            e.preventDefault()
            $('.start-page').hide()
            $('.questions-page').show()
            displayQuestions()
        })

        $('#submit').click(function(){
            
        })

    })

    

    
function displayQuestions(){
//the condition is to ensure it iterates through each question until it gets to the last one 
    if(qIndex < MyQuestions.length){
         question = MyQuestions[qIndex]
         $('.questions-page h2').text(question.title); //add the question to the question page
         $('.questions-page ul').html(''); //first clear the options page
         //loop through the array of options and add it to the list created for the options in the questions-page class
         for(let i=0; i< question.answers.length; i++){
            $('.questions-page ul').append("<li id='" + i + "'>" + question.answers[i] + "</li>");
       }
       qIndex++; //to iterate the index

    }
}

//This click is for when the user selects an option
$('.questions-page ul').on('click','li',function(){
    $('.user-answer').removeClass('user-answer')
    $(this).addClass('user-answer');
})

