$(document).on("click", "a", function(){
  $('html, body').css('overflow', 'hidden');
});

$(document).on("click", ".lightbox", function(){
  $('html, body').css('overflow', 'auto');
});
