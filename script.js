var timer = 60;
var scoree = 0;
var hitrn = 0;

function increaseScore() {
    scoree += 10;
    document.querySelector("#scorevalue").textContent = scoree;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = hitrn;
}

function makeBubble(){
    var clutter = " ";

for(var i = 0; i<=113 ; i++){
    var rn = Math.floor(Math.random()*10);
   clutter +=  `<div class="bubble">${rn}</div>`;
}

document.querySelector("#panelbottom").innerHTML = clutter
}


function runTimer(){
   var removetimer =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(removetimer);
            document.querySelector("#panelbottom").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}

document.querySelector("#panelbottom").addEventListener('click',function(details){
     var clickedNUm = Number(details.target.textContent); 
     if(clickedNUm == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
     }
})

runTimer();
makeBubble();
getNewHit();
// increaseScore();
