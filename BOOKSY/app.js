// window.change = function(event){
//     const color = event.target.textContent.toLowerCase();
//     document.body.style.backgroundColor  = color;
// }

function add(){
    var a = document.getElementById("value");
    var holder = document.getElementById("holder");
    var sample = document.createElement("div");
    sample.classList.add("sample");

    var left = document.createElement("div");
    left.classList.add("left");
    left.textContent = a.value;

    var right = document.createElement("div");
    right.classList.add("right");

    var delbtn = document.createElement("button");
    delbtn.classList.add("btn");
    delbtn.innerHTML = "&#x2714;";

    right.appendChild(delbtn);
    sample.appendChild(left);
    sample.appendChild(right);
    holder.prepend(sample);
    a.value = ""

    delbtn.onclick = function() {
        sample.remove();
    }
}

function checker(){
    var x = document.getElementById("checker")
    var y = x.value
    var z = y.split("").reverse().join("")
    var res = document.getElementById("result")
    if(y==z){
        res.textContent = "yes"
    }
    else{
        res.textContent = "no"
    }

        
}

const a  = ["good morning" , "hello there" , "how are you ?"]

function random(){
    var x = a.length;
    var para = document.getElementById("gen")
    var ran = Math.floor(Math.random(x)*10)+1;
    var text = a[ran];
    para.textContent = text;




}





// function change(){
//     document.body.style.backgroundColor = "red";
// }