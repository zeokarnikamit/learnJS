
function greet(){

    var name = document.getElementById('name').value;
    var nameLength = name.length;
    if (nameLength>0){
    if (name === "Amit"){
    var msg = "Hello " + name +", I'm Javis!"
    }
    else{
    var msg = "Go home kid!"
    };
    document.getElementById("say").innerHTML=msg
    }
};

function isEvenNumber(){
    var num = document.getElementById("number").value;
    if (num % 2 == 0){
        var ans ="yes, it is an Even number"
    }
    else{
        var ans = "No! it is not an Even number!"
    }
    document.getElementById("answer").innerHTML = ans
};

function jarvis(){
    var user = document.getElementById("name").value
    window.alert("okay "+ user +", Lets check for Even or Odd number!")
};

function welcome(){
  window.alert("Welcome, I am Jarvis!")
};