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
