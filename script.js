 var sec = 00

var min = 00

var setInterval



function start(){
interval=setInterval(counter,100)
}


function pause(){
clearInterval(interval)
}


function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('counter').innerHTML ='00:00'
}



function counter(){
sec++
if(sec == 60){
    min++
    sec=0 
}
document.getElementById('counter').innerHTML = min+':'+sec



}




