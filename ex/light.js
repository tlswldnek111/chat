var inp, loop, count=0, printing="", word="", r=0, g=0, b=0;
var h1=document.getElementsByTagName('h1');


function autostart(){
    inp=document.getElementById('inputword').value; //입력된 값 가져옴
    word=inp; //출력할 문구
    loop=setInterval(sign, 500);
}
function start(){
    stop();
    inp=document.getElementById('inputword').value; //입력된 값 가져옴
    word=inp; //출력할 문구
    sign();
}
function stop(){
    clearInterval(loop);
}
function reset(){
    count=0; 
    printing="";
    h1[0].innerHTML=printing;
}
function sign(){
    if(count==word.length) { //문구 한 줄 출력이 끝났으면
        reset(); //처음으로 돌아감
    }
    printing+=word[count];
    randomcolor();
    h1[0].innerHTML=printing;
    count++;
}
function randomcolor(){
    color="#"
    r=Math.floor(Math.random() * 200)+50;
    g=Math.floor(Math.random() * 100)+50;
    b=Math.floor(Math.random() * 100)+50;
    color+=r;
    color+=g;
    color+=b;
    h1[0].style.color=color;
}