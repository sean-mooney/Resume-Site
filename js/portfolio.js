$(document).on("click", ".thumbnail, .thumbnail-tall", function(){
  $('html, body').css('overflow', 'hidden');
});

$(document).on("click", ".lightbox", function(){
  $('html, body').css('overflow', 'auto');
});
