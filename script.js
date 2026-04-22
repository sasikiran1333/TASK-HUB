/*show password*/
function show(icon){
let pass=icon.previousElementSibling;
    if(pass.type==="password"){
        pass.type="text";
        icon.innerHTML="🔓";
    }else{
        pass.type="password";
        icon.innerHTML="🔒";

    }
    }

/*password match*/
function pass(){
    let pa=document.getElementById("pass1");
    let ps=document.getElementById("pass2");
    if (pa.value===ps.value){
        return true;
    }else{
        alert("passwords do not match ❌");
            return false;
    }
}

/*captcha*/
let captchaText = "";

function generateCaptcha(){
let canvas = document.getElementById("captcha");
let ctx = canvas.getContext("2d");

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
captchaText = "";

for(let i=0;i<5;i++){
captchaText += chars[Math.floor(Math.random()*chars.length)];
}

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.font = "22px Arial";
ctx.fillStyle = "black";
ctx.fillText(captchaText,20,25);
}

function verifyCaptcha(){
let input = document.getElementById("captchaInput").value;

if(input === captchaText){
return true;
}else{
alert("Captcha incorrect ❌");
generateCaptcha();
return false;
}
}
window.onload = generateCaptcha;


/*loin btn*/
function menu(){
let list=document.getElementById("menu");
    if(list.style.display==="block"){
    list.style.display="none";
    }else{
    list.style.display="block";
    }

}
/* show first letter after login */
window.onload = function(){

let email = localStorage.getItem("email");

if(email){
let firstLetter = email.charAt(0).toUpperCase();
document.getElementById("loginbtn").innerHTML = firstLetter;
}

}


/* save login */
function login(){

let email = document.getElementById("email").value;

localStorage.setItem("email", email);

window.location.href = "main.html";

return false; 
}

/*add to list*/
function add(){
let input=document.getElementById("input").value;
if(input==="")return;
let li=document.createElement("li");
li.innerHTML=input;
document.getElementById("list").appendChild(li);

document.getElementById("input").value = "";


}

/*click to change table*/
function ope(){
style.display="block";
alert("hello");
}


