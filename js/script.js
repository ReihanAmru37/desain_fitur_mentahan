//cover
const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');
const rootElement = document.querySelector(":root");

//if(!localStorage.getItem('opened')){
//}


//Navbar Offset
offcanvas.addEventListener('show.bs.offcanvas', function() {
    stickyTop.style.overflow = 'visible';
});

offcanvas.addEventListener('hidden.bs.offcanvas', function() {
    stickyTop.style.overflow = 'hidden';
});
disableScroll();

function disableScroll(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 

    window.onscroll = function(){
        window.scrollTo(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehaviour = 'auto';
}

function enableScroll(){
    window.onscroll = function(){ }
    rootElement.style.scrollBehaviour = 'smooth';
    //localStorage.setItem('opened', 'true');
    playAudio();
}

const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const music = document.querySelector('#music');
let isPlaying = false;

function playAudio(){
    music.volume = 1;
    audioIconWrapper.style.display = 'flex';
    music.play();
    isPlaying = true;
}

audioIconWrapper.onclick = function(){
    if (isPlaying){
        music.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    }

    else {
        music.play();
        audioIcon.classList.remove('bi-pause-circle');
        audioIcon.classList.add('bi-disc');
    }

    isPlaying = !isPlaying;
}

//Galeri
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});


//RSVP
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi Kehadiran Berhasil Terkirim.");
      })
    });
  });


//Custom Nama Undangan kudu nggae server
  