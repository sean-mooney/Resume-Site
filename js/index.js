jQuery(document).ready(function($) {
    $("#arrow-down").click(function(event){
        $('html,body').animate({
            scrollTop:$("#about").offset().top - 10
        }, 750);
        document.location.hash = "";
    });
    
});
var currentCard = null;

function flipCard(card, type) {
    if (type) {
        switch(type) {
            case "javascript":
            alert('i know javascript');
            break;
            default:
            console.log('unknown type');
            break;
        }
        return;
    }
    if (currentCard !== null) {
        currentCard.classList.toggle('rotate-card');
        if (currentCard === card) {
            currentCard = null;
            return;
        }
    }
    currentCard = card;
    currentCard.classList.toggle('rotate-card');
}

$(document).on("click", ".thumbnail", function () {
    $('body').css('overflow', 'hidden');
});

$(document).on("click", ".lightbox", function () {
    $('body').css('overflow', 'auto');
});
