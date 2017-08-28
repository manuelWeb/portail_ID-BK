$(".js-carousel").each(function(){
  var $carousel = $(this),
    $carouselContainer = $carousel.find(".js-carousel-container"),
    $carouselList = $carousel.find(".js-carousel-list"),
    $carouselItem = $carousel.find(".js-carousel-item"),
    $carouselMarg = 20,
    $carouselButton = $carousel.find(".js-carousel-button"),
    setItemWidth = function(){
      $carouselList.removeAttr("style");
      var curWidth = $($carouselItem[0]).outerWidth() * $carouselItem.length + ($carouselItem.length-1) * 20;
      // console.log(curWidth)
      $carouselList.css("width", curWidth);
    },
    slide = function(){
      var $button = $(this),
        dir = $button.data("dir"),
        curPos = parseInt($carouselList.css("left")) || 0,
        moveto = 0,
        containerWidth = $carouselContainer.outerWidth(),
        listWidth = $carouselList.outerWidth(),
        before = (curPos + containerWidth),
        after = listWidth + (curPos - containerWidth);
        console.log(listWidth)
      if(dir=="next"){
        moveto = (after < containerWidth) ? curPos - after : curPos - containerWidth - 20;
      } else {
        moveto = (before >= 0) ? 0 : curPos + containerWidth + 20;
      }
      
      $carouselList.animate({
        left: moveto
      });
    };
  $(window).resize(function(){
    setItemWidth();
  });
  setItemWidth();
  
  $carouselButton.on("click", slide);
})