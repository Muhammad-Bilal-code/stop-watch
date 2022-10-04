
var minElm = document.getElementsByClassName("min")[0];
// console.log(minElm)
var secElm = document.getElementsByClassName("sec")[0];
// console.log(secElm)
var milisecElm = document.getElementsByClassName("milli-sec")[0];
// console.log(milisecElm)

var min = 00 ;
// minElm.innerHTML = min
var sec = 00 ;
// secElm.innerHTML = sec
var milisec = 00 ;
// milisecElm.innerHTML = milisec



var clearIntrval;
var btnStartStop = document.getElementById("start")
var boolStrStp = true;
function handleStartStop(){
    console.log("test")
    if(boolStrStp === true){
        btnStartStop.innerText = "Stop";
        /****************start wala kam*****************/
        clearIntrval = setInterval(handleStart,10)
    }
    else{
        btnStartStop.innerText = "Start";
        /****************stop wala kam*****************/
        clearInterval(clearIntrval);
    }
    boolStrStp = !boolStrStp
}
btnStartStop.addEventListener("click",handleStartStop)


function handleStart(){
    milisec++;
    if(milisec <= 9){
        milisecElm.innerHTML = "0" + milisec   
    }
    if(milisec > 9){
        milisecElm.innerHTML = milisec   
        
    }
    if(milisec >= 99){
        milisec = 0;
        // milisecElm.innerHTML = "0" + milisec   
        sec++;
        secElm.innerHTML = "0" + sec  + ":" 
    }
    if(sec > 9){
        secElm.innerHTML =  sec   + ":"
        
    }
    if(sec === 10){
        sec = 0;
        secElm.innerHTML = "0" + sec
        min++;
        minElm.innerHTML = "0" + min + ":"
    }
    if(min > 9 ){
        minElm.innerHTML =  min + ":"
        
    }
}

function handleReset(){
    clearInterval(clearIntrval);
    min = 0;
    sec=0;
    milisec=0;
    minElm.innerHTML = "00:"
    secElm.innerHTML = "00:"
    milisecElm.innerHTML = "00";
    boolStrStp = true;
    
    btnStartStop.innerText = "Start";
    
}
var btnReset = document.getElementById("reset");
btnReset.addEventListener("click",handleReset)