let score = 0
let qIndex = 0
let question; // don't define question as a string , it is an object in your code
let HscoreArray=[];//an array of object for the high score
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
                }else{
                    $('.questions-page').hide();
                    $('#scoreVal').text(score)
                    $('.score-page').show()
                }
            }
            
            //This click is for when the user selects an option
            $('.questions-page ul').on('click','li',function(){
                $('.user-answer').removeClass('user-answer')
                $(this).addClass('user-answer');
            })
            
            //when they submit an answer
            $('#submit').click(function(){
                let userAnswer=$(".user-answer").text().slice(2).trim()
                if (userAnswer==""){ //alert if user didnt choose an answer and submit
                    alert("Please choose an answer")
                } else { //check the user answer and jump to the next question 
                    if(userAnswer===question.correctanswer){
                    $('#status').text("correct")
                    score++
                    }else {
                    $("#status").text("wrong")
                    
                    }
                    displayQuestions();
                }
                
            //this code contains what happens when they submit the form
            $('#userInfo').on('submit', function(e){
                e.preventDefault(); 
                getHighScore()
            })
            })

            $('#submitButton').click(function(e){//click on the restart link
                e.preventDefault();
                getHighScore();
              })
              
              $('#startOver').click(function(e){//click on the restart link
                e.preventDefault();
                startOver();
                score = 0;
                qIndex = 0;
                $("#status").text("")
              })
              

        
        })

        function getHighScore(){
            
            $('.score-page').hide()
            name = $('input#fname').val(); //to get the name of the user
            let userData = {Player:name , playerScore: score} //store the code in the userData object
            HscoreArray.push(userData) // push the object into the array
            HscoreArray.sort((a,b) => b.score - a.score)
            HscoreArray.splice(5) //to cut off after the first 5
            //to store in local storage: store the highscore array
            localStorage.setItem('Highscores', JSON.stringify(HscoreArray));
            //get highscorelist and populate it with players hoghscore
            let highscoresList = document.getElementById('highscoreList');
            HscoreArray = JSON.parse(localStorage.getItem("Highscores"))
    //         highscoresList.innerHTML =(HscoreArray.map(playerStats =>{
    //          return `<li class="HighScore"> ${playerStats.Player} -  ${playerStats.playerScore}</li>`;
    //       }).join(""));
            $("#highscoreList").html("")
            
            HscoreArray.map(playerStats =>{
               $("#highscoreList").append(`<li class="HighScore"> ${playerStats.Player} -  ${playerStats.playerScore}</li>`);
          });
          $('.HighScore').show()
        }

        function startOver(){
            $('.start-page').show()
            $('.HighScore').hide()

        }
        
    
