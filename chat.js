const body1 = document.getElementById("bodys2");
const body2=document.getElementById("bodys");
const talk = document.querySelector("#talk");
let play=["놀자","놀고","놀아"];
let walk=["산책","운동","밖에"];
const intext = document.getElementById('inputTxt');
var p=document.getElementsByTagName('p');
const btext=document.getElementById("nightb");
var value = document.getElementById("inputTxt").value;
var i=0;
var num=0;
var json = 
[
	{
		"question" : "안녕",
		"answer" : "안냥!"
	},
	{
		"question" : "나이?",
		"answer" : "비밀이다 냥!"
	},
	{
		"question" : "이름?",
		"answer" : "가바~!"
	}
]

var check=0;
var question="";
var answer="";


function text_check(){
    if(num==0){//처음 들어옴
        console.log(num);
    check=0;
    for(i=0;i<json.length;i++){
        if(value == json[i].question){
            p[0].innerHTML=json[i].answer;
            num=0;
            return;
        }
    }//json값이 있는경우
    num+=1;//json값에 없는경우
    }
    else if(num==1){
        p[0].innerHTML= value+" 에 대한 말을 가르쳐 주실래요?(네 or 아니요)";
        question=value;
        num+=1;
    }
    else if(num==2){//말가르치기
        if(value=="네"){
            p[0].innerHTML="대답을 입력해 주세요";
            num+=1;
            answer=value;
            text_push();
        }
        else{
            p[0].innerHTML="뀨";
            num=0;
        }
    }
}
function text_push(){
    if(num==3){
    json.push({question:`${question}`,answer:`${answer}`});
    p[0].innerHTML="말을 배웠당!";
    num=0;
    }
}


function q(){
    value = document.getElementById("inputTxt").value;
for(i=0;i<play.length;i++){
if(value.includes(play[i])){
    img_play();
    num=0;
    break;
}
else if(value.includes(walk[i])){
    img_walk();
    num=0;
    break;
}
else if(i==play.length-1){//말배우기
  
    img_ori();
    text_check();
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
}
function bt(){
    if(document.getElementById('nightb').innerText=="야간모드"){
        night();
    }
    else{
        light();
    }
}
function light(){
    document.getElementById("catimage").src="./image/morning.png";
    p[0].innerHTML="낮이다냥~";
    p[0].style.color="black";
    intext.value=null;
    num=0;
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
    num=0;
	btext.style.backgroundColor = "white"
    btext.style.color="black";
    btext.innerHTML="라이트모드"
}



document.getElementById('nightb').addEventListener('click', bt);
document.getElementById('submitButton').addEventListener('click', q);