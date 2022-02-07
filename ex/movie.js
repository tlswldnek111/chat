
var movie1={
	title : " ㅤ제목 : 조작된 도시",
	date : "ㅤ* 개봉일 : 2017.02.09",
	genre : "ㅤ* 장르 : 범죄, 액션",
	actor : "ㅤ* 출연 : 지창욱, 심은경, 안재홍 등",
	time : "ㅤ* 러닝타임 : 126분",
    poster : "img_1.jpg"
}


var movie2={
	title : "ㅤ제목 : 스파이더맨",
	date : "ㅤ* 개봉일 : 2021.12.15",
	genre : "ㅤ* 장르 : 액션, 판타지",
	actor : "ㅤ* 출연 : 톰 홀랜드, 토비 맥과이어 등",
	time : "ㅤ* 러닝타임 : 148분",
    poster : "img_2.jpg"
}


var movie3={
	title : "ㅤ제목 : 미 비포 유",
	date : "ㅤ* 개봉일 : 2016.06.01",
	genre : "ㅤ* 장르 : 멜로, 로맨스",
	actor : "ㅤ* 출연 : 에밀리아 클라크, 샘 클라플린 등",
	time : "ㅤ* 러닝타임 : 110분",
    poster : "img_3.jpg"
}

var h1=document.getElementsByTagName('h1');
var h3=document.getElementsByTagName('h3');
function btn1(){
	document.getElementById("movie").style.backgroundColor = "#e0ffff";
	document.getElementById("btn1").style.borderColor = "black black black #e0ffff";
	document.getElementById("btn2").style.borderColor = "black"
	document.getElementById("btn3").style.borderColor = "black"
	h1[0].innerHTML=movie1.title;
    document.getElementById("image").src = movie1.poster;
	h3[0].innerHTML=movie1.date;
	h3[1].innerHTML=movie1.genre;
	h3[2].innerHTML=movie1.actor;
	h3[3].innerHTML=movie1.time;
}


function btn2(){
	document.getElementById("movie").style.backgroundColor = "#fafad2";
	document.getElementById("btn2").style.borderColor = "black black black #fafad2";
	document.getElementById("btn1").style.borderColor = "black"
	document.getElementById("btn3").style.borderColor = "black"
	h1[0].innerHTML=movie2.title;
    
    document.getElementById("image").src = movie2.poster;
	h3[0].innerHTML=movie2.date;
	h3[1].innerHTML=movie2.genre;
	h3[2].innerHTML=movie2.actor;
	h3[3].innerHTML=movie2.time;
}


function btn3(){
	document.getElementById("movie").style.backgroundColor = "#fff0f5";
	document.getElementById("btn3").style.borderColor = "black black black #fff0f5";
	document.getElementById("btn1").style.borderColor = "black"
	document.getElementById("btn2").style.borderColor = "black"
	h1[0].innerHTML=movie3.title;
    
    document.getElementById("image").src = movie3.poster;
	h3[0].innerHTML=movie3.date;
	h3[1].innerHTML=movie3.genre;
	h3[2].innerHTML=movie3.actor;
	h3[3].innerHTML=movie3.time;
}

function btn4(){
	location.href="https://tlswldnek111.github.io/ex";
}
