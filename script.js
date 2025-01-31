let menu = document.querySelector('.menu');
let navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', (e)=>{
    navLinks.classList.toggle('showMenu');
})



let sliderTab = document.querySelectorAll('.sliderTab');
sliderTab.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('nav-item')){
            
            let lastActive = document.querySelector('li.active')
            let newActive = event.target;

            lastActive.classList.remove('active');
            newActive.classList.add('active');


            let lastContentActive = document.querySelector('.tab.active');
            let newContentActive = document.getElementById(newActive.dataset.target);

            lastContentActive.classList.remove('active');
            newContentActive.classList.add('active');
        }
    })
})


// carousel slider 
// vars
'use strict'
var testim = document.getElementById('testim'),
testimDots = Array.prototype.slice.call(document.getElementById('testim-dots').children),
testimContent = Array.prototype.slice.call(document.getElementById('testim-content').children),
testimLeftArrow = document.getElementById('left-arrow'),
testimRightArrow = document.getElementById('right-arrow'),
testimSpeed = 4500,
currentSlide = 0,
currentActive = 0,
testimTimer
;

window.onload = function () {

    //testim Script {
        function playSlide(slide) {
            for (var k = 0; k < testimDots.length; k++) {
                testimContent[k].classList.remove("active");
                testimContent[k].classList.remove("inactive");
                testimDots[k].classList.remove('active');
            }
            if (slide < 0) {
                slide = currentSlide = testimContent.length - 1;
            }
            if (slide > testimContent.length - 1) {
                slide = currentSlide = 0;
            }
            if (currentActive != currentSlide) {
                testimContent[currentActive].classList.add('inactive');
            }
            testimContent[slide].classList.add("active");
            testimDots[slide].classList.add("active");

            currentActive = currentSlide;

            clearTimeout(testimTimer);
            testimTimer = setTimeout(function () {
                playSlide(currentSlide += 1);
            }, testimSpeed)
        }

        testimLeftArrow.addEventListener("click", function () {
            playSlide(currentSlide -= 1);
        })
        testimRightArrow.addEventListener("click", function () {
            playSlide(currentSlide += 1);
        })

        for (var l = 0; l < testimDots.length; l++) {
            testimDots[l].addEventListener("click", function () {
                playSlide(currentSlide = testimDots.indexOf(this));
            })
        }
        playSlide(currentSlide);
    }
