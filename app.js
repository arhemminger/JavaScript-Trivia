/*
============================================
; Title:  JavaScript Trivia
; Author: Team Commit to Master
; Date:   23 March 2019
; Description: JavaScript Trivia single page application.
;===========================================
*/
// Bio functions
function openBio() {
    document.getElementById('bio-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('rank-container').style.display = "none";
    document.getElementById('title').style.display = "none";
    document.getElementById('jordanBio').style.display = "none";
    document.getElementById('gabrielBio').style.display = "none";
    document.getElementById('andrewBio').style.display = "none";
    document.getElementById('group-bio').style.display = "block";
};

function andrewOpen() {
    document.getElementById('group-bio').style.display = "none";
    document.getElementById('andrewBio').style.display = "block";
    document.getElementById('jordanBio').style.display = "none";
    document.getElementById('gabrielBio').style.display = "none";
};

function jordanOpen() {
    document.getElementById('group-bio').style.display = "none";
    document.getElementById('jordanBio').style.display = "block";
    document.getElementById('gabrielBio').style.display = "none";
    document.getElementById('andrewBio').style.display = "none";
};

function gabrielOpen() {
    document.getElementById('group-bio').style.display = "none";
    document.getElementById('gabrielBio').style.display = "block";
    document.getElementById('jordanBio').style.display = "none";
    document.getElementById('andrewBio').style.display = "none";
};

// Home functions
function openHome() {
    document.getElementById('home-container').style.display = "block";
    document.getElementById('rank-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "block";
};

// Quiz functions
function openQuiz() {
    document.getElementById('quiz-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('rank-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "none";
};

// Function to set username based off user entry. If no entry default to: User1
function username() {
    var name = document.getElementById('UserName').value;
    if (name != "")
    document.getElementById('person').innerHTML = "Name: " + name;
    else 
    document.getElementById('person').innerHTML = "Name: User1";
}

function startQuiz() {
    document.getElementById('q1').style.display = "block";
    document.getElementById('start-quiz').style.display = "none";
    username();
};

function preQuest1() {
    document.getElementById('q1').style.display = "block";
    document.getElementById('q2').style.display = "none";
};

function nextQuest1() {
    document.getElementById('q2').style.display = "block";
    document.getElementById('q1').style.display = "none";
};

function preQuest2() {
    document.getElementById('q2').style.display = "block";
    document.getElementById('q3').style.display = "none";
};

function nextQuest2() {
    document.getElementById('q3').style.display = "block";
    document.getElementById('q2').style.display = "none";
};

function preQuest3() {
    document.getElementById('q3').style.display = "block";
    document.getElementById('q4').style.display = "none";
};

function nextQuest3() {
    document.getElementById('q4').style.display = "block";
    document.getElementById('q3').style.display = "none";
};

function preQuest4() {
    document.getElementById('q4').style.display = "block";
    document.getElementById('q5').style.display = "none";
};

function nextQuest4() {
    document.getElementById('q5').style.display = "block";
    document.getElementById('q4').style.display = "none";
};

function preQuest5() {
    document.getElementById('q5').style.display = "block";
    document.getElementById('q6').style.display = "none";
};

function nextQuest5() {
    document.getElementById('q6').style.display = "block";
    document.getElementById('q5').style.display = "none";
};

function preQuest6() {
    document.getElementById('q6').style.display = "block";
    document.getElementById('q7').style.display = "none";
};

function nextQuest6() {
    document.getElementById('q7').style.display = "block";
    document.getElementById('q6').style.display = "none";
};

function preQuest7() {
    document.getElementById('q7').style.display = "block";
    document.getElementById('q8').style.display = "none";
};

function nextQuest7() {
    document.getElementById('q8').style.display = "block";
    document.getElementById('q7').style.display = "none";
};

function preQuest8() {
    document.getElementById('q8').style.display = "block";
    document.getElementById('q9').style.display = "none";
};

function nextQuest8() {
    document.getElementById('q9').style.display = "block";
    document.getElementById('q8').style.display = "none";
};

function preQuest9() {
    document.getElementById('q9').style.display = "block";
    document.getElementById('q10').style.display = "none";
};

function nextQuest9() {
    document.getElementById('q10').style.display = "block";
    document.getElementById('q9').style.display = "none";
};

function nextQuest10() {
    document.getElementById('q10').style.display = "block";
    document.getElementById('Answers').style.display = "none";
};

/*
function myRank() {
    var score = 0;
    if (score < 6) {
        document.getElementById('rankDisplay').innerHTML = "Rank: Beginner";  //(Less than 6 correct answers)
    }
    if (score >= 6 && <= 8) {
        document.getElementById('rankDisplay').innerHTML = "Rank: Novice";  //(6-8 correct answers)
    }
    if (score > 8) {
        document.getElementById('rankDisplay').innerHTML = "Rank: Expert";  //(8-10 correct answers)
    }
    else {}
};
function myRank() {
    //var score = 0;
    var score = this.checkAnswer1();
    document.getElementById('rankDisplay').innerHTML = "Rank: " + score;
};
*/
// Rank functions
function openRank() {
    document.getElementById('rank-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "none";
    // Score function
    function myScore() {
    var total = 0;
    if (this.checkAnswer1() == "c") {
        var total = total + 1;
    }
    if (this.checkAnswer2() == "c") {
        var total = total + 1;
    }
    if (this.checkAnswer3() == "b") {
        var total = total + 1;
    }
    if (this.checkAnswer4() == "a") {
        var total = total + 1;
    }
    if (this.checkAnswer5() == "a") {
        var total = total + 1;
    }
    if (this.checkAnswer6() == "b") {
        var total = total + 1;
    }
    if (this.checkAnswer7() == "b") {
        var total = total + 1;
    }
    if (this.checkAnswer8() == "d") {
        var total = total + 1;
    }
    if (this.checkAnswer9() == "c") {
        var total = total + 1;
    }
    if (this.checkAnswer10() == "a") {
        var total = total + 1; 
    }
    var total = total * 10;
    document.getElementById('scoreDisplay').innerHTML = "Score: " + total + "%";
    };
    myScore();
    myRank();
};

