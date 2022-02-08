const body1 = document.getElementById("bodys2");
const body2=document.getElementById("bodys");
const talk = document.querySelector("#talk");
let play=["놀자","놀고","놀아"];
let walk=["산책","운동","밖에"];
const intext = document.getElementById('inputTxt');
var p=document.getElementsByTagName('p');
function q(){
    var value = document.getElementById("inputTxt").value;

for(var i=0;i<play.length;i++){
if(value.includes(play[i])){
    img_play();
    break;
}
else if(value.includes(walk[i])){
    img_walk();
    break;
}
else if(i==play.length-1){
    img_ori();
    break;
}
}

}

function img_play(){
    document.getElementById("catimage").src="./image/play_cat.jpg";
    p[0].innerHTML="나랑 놀쟈!";
    intext.value=null;
}

function img_walk(){
    document.getElementById("catimage").src="./image/walking_cat.jpg";
    p[0].innerHTML="나랑 산책가쟈!";
    intext.value=null;
}

function img_ori(){
    document.getElementById("catimage").src="./image/cat.jpg";
    p[0].innerHTML="뀨?";
    intext.value=null;

}
function bt(){
    if(document.getElementById('nightb').innerText=="야간모드"){
        night();
    }
    else{
        light();
    }
}
const btext=document.getElementById("nightb");
function light(){
    document.getElementById("catimage").src="./image/morning.png";
    p[0].innerHTML="낮이다냥~";
    p[0].style.color="black";
    intext.value=null;
    
    body2.style.backgroundColor="white";
    body1.style.backgroundColor ="white";
	btext.style.backgroundColor = "black"
    btext.style.color="white";
    btext.innerHTML="야간모드"
    p[1].style.color="black";
}
function night(){
    body2.style.backgroundColor="black";
    body1.style.backgroundColor ="black";
    document.getElementById("catimage").src="./image/night.jpg";
    p[0].innerHTML="밤이다냥~";
    p[0].style.color="white";
    p[1].style.color="white";
    intext.value=null;
    
	btext.style.backgroundColor = "white"
    btext.style.color="black";
    btext.innerHTML="라이트모드"
}



document.getElementById('nightb').addEventListener('click', bt);
document.getElementById('submitButton').addEventListener('click', q);