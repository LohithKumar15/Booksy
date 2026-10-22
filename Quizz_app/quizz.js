

const questions = [{
    question: "What is the best IPL team?",
    a: "RCB",
    b: "MI",
    c: "CSK",
    d: "KKR",
    correct: "CSK"
  },
  {
    question: "Who won IPL 2021?",
    a: "RCB",
    b: "CSK",
    c: "DC",
    d: "MI",
    correct: "CSK"
  },
  {
    question: "Most fanbase IPL team?",
    a: "MI",
    b: "CSK",
    c: "RR",
    d: "RCB",
    correct: "CSK"
  },{
    question: "What is the best IPL team?",
    a: "RCB",
    b: "MI",
    c: "CSK",
    d: "KKR",
    correct: "CSK"
  },
  {
    question: "Who won IPL 2021?",
    a: "RCB",
    b: "CSK",
    c: "DC",
    d: "MI",
    correct: "CSK"
  },
  {
    question: "Most fanbase IPL team?",
    a: "MI",
    b: "CSK",
    c: "RR",
    d: "RCB",
    correct: "CSK"
  },{
    question: "What is the best IPL team?",
    a: "RCB",
    b: "MI",
    c: "CSK",
    d: "KKR",
    correct: "CSK"
  },
  {
    question: "Who won IPL 2021?",
    a: "RCB",
    b: "CSK",
    c: "DC",
    d: "MI",
    correct: "CSK"
  },
  {
    question: "Most fanbase IPL team?",
    a: "MI",
    b: "CSK",
    c: "RR",
    d: "RCB",
    correct: "CSK"
  }];

var count = 0;
var score = 0;

var question_ = document.getElementById("questions");
var a_ = document.getElementById("a_opt");
var b_ = document.getElementById("b_opt");
var c_ = document.getElementById("c_opt");
var d_ = document.getElementById("d_opt");


var _a = document.getElementById("a");
var _b = document.getElementById("b");
var _c = document.getElementById("c");
var _d = document.getElementById("d");

var scoreb = document.getElementById("score");



change();

function change(){
    
    var select = questions[count];

    question_.textContent = select.question;
    a_.textContent = select.a;
    b_.textContent = select.b;
    c_.textContent = select.c;
    d_.textContent = select.d;

    a.value = select.a;
    b.value = select.b;
    c.value = select.c;
    d.value = select.d;

    document.querySelectorAll("input[name='option']").forEach(r => r.checked = false);

}
submit.addEventListener("click",()=>{
    
    if(count==questions.length){
        scoreb.textContent = "your done lil bro , go study! and your score : " + score;
        
    }
    if(count<questions.length){
    
        var selected = document.querySelector("input[name='option']:checked");

        if(selected.value==questions[count].correct){
            score = score + 1;

        }
        else{
            scoreb.textContent = ":(";
        }
        count = count + 1;
        change();
    }
  
    
    
});

















// const questions = [{question : "which is the best ipl team" , a:"csk", b:"csk" ,c:"csk", d:"csk"},
//     {question : "which is the best team" , a:"csk", b:"csk" ,c:"csk", d:"csk"},
//     {question : "which is the  team" , a:"csk", b:"csk" ,c:"csk", d:"csk"}];
// var count = 0


// var question_ = document.getElementById("questions")
// var a_ = document.getElementById("a_opt");
// var b_ = document.getElementById("b_opt");
// var c_ = document.getElementById("c_opt"); 
// var d_ =  document.getElementById("d_opt"); 
// change();

// function change(){
//     var pickset = questions[count];
//     question_.textContent = pickset.question;
//     a_.textContent = pickset.a;
//     b_.textContent = pickset.b;
//     c_.textContent = pickset.c;
//     d_.textContent = pickset.d;

// }


// submit.addEventListener("click",()=>{
//     count = count +1;
//     change();
// })