
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


document.getElementById('submitButton').addEventListener('click', q);