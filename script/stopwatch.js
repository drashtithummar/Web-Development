var msec=0;
var sec=0;
var min=0;
var d=0;
var e=0;
var z=0;
var check=true;
var clear=0;
var stopwatch=document.getElementById('display');
stopwatch.innerHTML='00:00:00';
function start(){
    msec=addZeroMsec(msec+1);
    if(msec>99){
        sec=addZeroSec(sec+1);
        msec=addZeroMsec(0);
    }
    if(sec>59){
        sec=addZeroSec(0);
        msec=addZeroMsec(0);
        min=addZeroMin(min+1);
    }
    stopwatch.innerHTML=''+z+min+':'+e+sec+':'+d+msec;
}

function initiate(){
    if(check===true){
        check=false;
        clear=setInterval(start,1000);
    }
}

function stop(){
    check=true;
    clearInterval(clear);
}

function reset(){
    msec=0;
    sec=0;
    min=0;
    check=true;
    clearInterval(clear);
    stopwatch.innerHTML='00:00:00';
}

function addZeroMsec(time){
    var length= time.toString().length;
    if(length<2){
        d=0;
    }
    else{
        d='';
    }
    return time;
}

function addZeroSec(time){
    var length=time.toString().length;
    if(length<2){
        e=0;
    }
    else{
        e='';
    }
    return time;
}

function addZeroMin(time){
    var length=time.toString().length;
    if(length<2){
        z=0;
    }
    else{
        z='';
    }
    return time;
}
  