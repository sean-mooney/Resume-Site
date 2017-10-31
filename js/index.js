jQuery(document).ready(function($) {
    $("#arrow-down").click(function(event){
        $('html,body').animate({
        	scrollTop:$("#about").offset().top - 10
        }, 750);
        document.location.hash = "";
    });
});
