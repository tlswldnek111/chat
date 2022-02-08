
var h1 = document.getElementsByTagName('h1')[0];
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function call_click(){
    setTimeout(()=>{
        document.getElementById("profile").style.display="none";
        document.getElementById("calling").style.display="block";
        timer();
    }, 1000)
    
}
function stop_click(){
        document.getElementById("profile").style.display="block";
        document.getElementById("calling").style.display="none";
        clear();
  
}


document.getElementById('icon1').addEventListener('click', call_click);
document.getElementById('icon2').addEventListener('click', stop_click);
document.getElementById('icon3').addEventListener('click', stop_click);

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
function clear(){
    h1.textContent = "00:00:00";
    clearTimeout(t);
    sec = 0; min = 0; hrs = 0;
    
}