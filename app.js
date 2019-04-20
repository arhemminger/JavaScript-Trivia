/*
============================================
; Title:  JavaScript Trivia
; Author: Team Commit to Master
; Date:   23 March 2019
; Description: JavaScript Trivia single page application.
;===========================================
*/
// Rank functions
function openRank() {
    document.getElementById('rank-container').style.display = "block";
    document.getElementById('home-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('bio-container').style.display = "none";
    document.getElementById('title').style.display = "none";
};

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

function startQuiz() {
    document.getElementById('q1').style.display = "block";
    document.getElementById('start-quiz').style.display = "none";
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
