var header = document.querySelector(".header");
var buttonContacts = header.querySelector(".contacts-button");
var contactsList = header.querySelector(".contacts-list");

var route = document.getElementById('section-route');
var itemsRoute = route.querySelectorAll('.item');

var about = document.getElementById('about-us');
var itemsAbout = about.querySelectorAll('.item');

var questions = document.getElementById('questions');
var itemsQuestion = questions.querySelectorAll('.item');


var buttonClickHandler = function( button, block, show, active){
    button.addEventListener('click', function(){
        block.classList.toggle(show);
        button.classList.toggle(active);
    })
}

var itemClickHandler = function( array, hiddenBlock, showBlock, buttonActive){
    for (var i = 0; i < array.length; i ++){
        var itemButton = array[i];
        var desc = array[i].querySelector(hiddenBlock);
        buttonClickHandler( itemButton, desc, showBlock, buttonActive);
    }
}

itemClickHandler(itemsRoute, '.item-desc', 'desc-show');
itemClickHandler(itemsAbout, '.item-desc', 'desc-show', 'button-active');
itemClickHandler(itemsQuestion, '.description', 'desc-show', 'button-active');

buttonClickHandler( buttonContacts, contactsList, 'contacts-show', 'button-active');



// about-us link animation

document.addEventListener("DOMContentLoaded", function () {
    var X = Y = 0;
    var linkForm =  document.querySelector('.link-form');
    var imageWrapper = document.querySelector('.form .image-wrapper');
    var rect = imageWrapper.getBoundingClientRect();
    var linkFormRect = linkForm.getBoundingClientRect();
    var mouseMove = false;
    var newX = 0, newY = 0;

    if(linkForm.length !== 0){
        
         imageWrapper.addEventListener("mousemove", function (evt) {
            rect = imageWrapper.getBoundingClientRect();
            mouseMove = true;
            //linkFormRect = linkForm.getBoundingClientRect();

             X = evt.clientX - linkFormRect.width/2;
             Y = evt.clientY - rect.top - linkFormRect.height/2;
         }, false);

         animate();

         imageWrapper.addEventListener('mouseleave', function(evt){
            
            X = window.innerWidth / 100 * 0.8 * 20.5;
            Y = window.innerWidth / 100 * 0.8 * 20;
         })
    }

    function move() {
        linkForm.style.transform = 'translate('+newX+'px, '+newY+'px)';
        
    
     }

    function animate(){
        if(mouseMove){
            newX += (X - newX)*0.2;
            newY += (Y - newY)*0.2;
            move();
        }
        
        requestAnimationFrame(animate);
    }
});



// slick

$('.section-projects-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    appendArrows: '.section-projects-arrows'
});


//scroll

$(document).ready(function(){
  $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);

  });
});
    