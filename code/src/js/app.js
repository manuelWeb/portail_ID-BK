// script détection langage navigateur utilisateur
function change() {
  var btnBk = document.getElementById('BK_country_browser_origin');
  var btnId = document.getElementById('ID_country_browser_origin');
  if (navigator.language == "fr" || navigator.language == "fr-FR" || navigator.language == "fr-be") {
    btnId.innerHTML = "<img alt=\"\" src=\"img/flag_BF.png\" />Accéder directement au site";
    btnBk.innerHTML = "<img alt=\"\" src=\"img/flag_BF.png\" />Accéder directement au site";
    btnId.href = 'http://bakkercomfort.be/';
    btnBk.href = 'http://bakkercomfort.be/';
  }else if (navigator.language == "en" || navigator.language == "en-US" || navigator.language == "en-GB") {
    btnId.innerHTML = "<img alt=\"\" src=\"img/flag_UK.png\" />Direct access to the site";
    btnBk.innerHTML = "<img alt=\"\" src=\"img/flag_UK.png\" />Direct access to the site";
    btnId.href = 'lien/fr';
    btnBk.href = 'lien/fr';
  }else if (navigator.language == "de" || navigator.language == "dei-DE" || navigator.language == "dsb-DE") {
    btnId.innerHTML = "<img alt=\"\" src=\"img/flag_DE.png\" />Direkter Zugang auf die Internetseite";
    btnBk.innerHTML = "<img alt=\"\" src=\"img/flag_DE.png\" />Direkter Zugang auf die Internetseite";
    btnId.href = 'lien/fr';
    btnBk.href = 'lien/fr';
  }else if (navigator.language == "nl" || navigator.language == "nl-BE" || navigator.language == "fy-NL") {
    btnId.innerHTML = "<img alt=\"\" src=\"img/flag_NL.png\" />Directe toegang tot de website";
    btnBk.innerHTML = "<img alt=\"\" src=\"img/flag_NL.png\" />Directe toegang tot de website";
    btnId.href = 'lien/fr';
    btnBk.href = 'lien/fr';
  }else if (navigator.language == "nl-be") {
    btnId.innerHTML = "<img alt=\"\" src=\"img/flag_BV.png\" />Directe toegang tot de website";
    btnBk.innerHTML = "<img alt=\"\" src=\"img/flag_BV.png\" />Directe toegang tot de website";
    btnId.href = 'lien/fr';
    btnBk.href = 'lien/fr';
  }
  // var userLang = navigator.language || navigator.userLanguage; 
  // alert ("The language is: " + userLang);
}
change()

// script carousel (jquery)
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
        // console.log(listWidth)
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