const videocon = document.querySelector(`#video-container`)
const playbtn = document.querySelector(`#play`)

videocon.addEventListener(`mouseenter`, function (){
    playbtn.style.opacity = 1;
    playbtn.style.scale = 1;

})