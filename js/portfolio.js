$(document).on("click", ".thumbnail, .thumbnail-tall", function(){
  $('body').css('overflow', 'hidden');
});

$(document).on("click", ".lightbox", function(el){
  if (el.target.classList.contains('left') || el.target.classList.contains('right') || el.target.classList.contains('fa-angle-left') || el.target.classList.contains('fa-angle-right')) {
    return;
  }
  $('body').css('overflow', 'auto');
});
