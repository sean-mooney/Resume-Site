$(document).on("click", ".thumbnail, .thumbnail-tall", function(){
  $('html, body').css('overflow', 'hidden');
});

$(document).on("click", ".lightbox", function(el){
  console.log(el);
  if (el.target.classList.contains('left') || el.target.classList.contains('right') || el.target.classList.contains('fa-angle-left') || el.target.classList.contains('fa-angle-right')) {
    return;
  }
  $('html, body').css('overflow', 'auto');
});
