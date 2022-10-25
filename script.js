AOS.init();

const myModal = new bootstrap.Modal('#heroModel', {
    keyboard: false
})
myModal.show()

var audio = document.querySelector('#mosek')
var is_play = true

function mosek(){
    audio.play();
    is_play = true
    document.querySelector('#control_music').innerHTML=`<i class="fas fa-pause"></i>`
    document.querySelector('html').style.overflowX = 'hidden'
}

function sandak(){
    const control = document.querySelector('#control_music');
    const status = document.querySelector('#music_status');
    if(is_play == true){
        audio.pause();
        is_play = false
        control.innerHTML=`<i class="fas fa-play"></i>`
        status.innerHTML = 'Pause'
    }else{
        audio.play();
        is_play = true
        control.innerHTML=`<i class="fas fa-pause"></i>`
        status.innerHTML = 'Playing...'
    }
}

function timer(){
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 30, 2022 08:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Selesai";
    }
    }, 1000);
}

timer();

let param = (new URL(window.location.href)).searchParams;
if(param.get('to')){
    document.getElementById('tujuan').innerHTML = "Untuk " + param.get('to')
    document.getElementById('text-n').classList.add('tuju-ada')
}