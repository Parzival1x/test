// optional
$('#blogCarousel').carousel({
    interval: 5000
});

//floating button

$(document).ready(function(){
    $( ".icon" ).click(function(){
    $('.box').toggleClass( "open-more");
    $(this).toggleClass( "button");
    });
    });