// script détection langage navigateur utilisateur
var requestURL = 'js/translate.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);request.responseType = 'json';
request.send();
request.onload = function() {
  var trad = request.response;
  change(trad);
}
// inject trad en fct nav.lang
function change(jsonObj) {

  var logoID = document.querySelectorAll(".header > img")[0];
  var intro = document.querySelectorAll(".intro > p")[0];
  var id_h1 = document.querySelectorAll(".id > h1")[0];
  var df_opt = document.querySelectorAll('option[value=default]');
  var formId = document.querySelectorAll('form')[0];
  var formBk = document.querySelectorAll('form')[1];
  var submit_id = document.querySelectorAll(".country > input")[0];
  var submit_bk = document.querySelectorAll(".country > input")[1];
  var btnBk = document.getElementById('BK_country_browser_origin');
  var btnId = document.getElementById('ID_country_browser_origin');
  var coverId = document.querySelectorAll(".cover > img")[0];
  var coverBk = document.querySelectorAll(".cover > img")[1];
  
  if (navigator.language == "fr" || navigator.language == "fr-FR" || navigator.language == "fr-be") {
    logoID.src = jsonObj['logo_ID']['bf'];
    intro.innerHTML = jsonObj['intro']['bf'];
    id_h1.innerHTML = jsonObj['id_h1']['bf'];
    btnId.innerHTML = jsonObj['flag']['bf']+jsonObj['btn']['bf'][0];
    btnBk.innerHTML = jsonObj['flag']['bf']+jsonObj['btn']['bf'][0];
    // document.querySelectorAll('option[value=BF]')[0].selected = 'selected';
    // document.querySelectorAll('option[value=BF]')[1].selected = 'selected';
    df_opt[0].text = jsonObj['default_opt']['bf'];
    df_opt[1].text = jsonObj['default_opt']['bf'];
    btnId.href = jsonObj['id_link']['bf'];
    btnBk.href = jsonObj['bk_link']['bf'];
    coverId.src = jsonObj['cover']['bf']['0'];
    coverBk.src = jsonObj['cover']['bf']['1'];
  }else if (navigator.language == "nl-be" || navigator.language == "nl-BE") {
    logoID.src = jsonObj['logo_ID']['bv'];
    intro.innerHTML = jsonObj['intro']['bv'];
    id_h1.innerHTML = jsonObj['id_h1']['bv'];
    btnId.innerHTML = jsonObj['flag']['bv']+jsonObj['btn']['bv'][0];
    btnBk.innerHTML = jsonObj['flag']['bv']+jsonObj['btn']['bv'][0];
    // document.querySelectorAll('option[value=BV]')[0].selected = 'selected';
    // document.querySelectorAll('option[value=BV]')[1].selected = 'selected';
    df_opt[0].text = jsonObj['default_opt']['bv'];
    df_opt[1].text = jsonObj['default_opt']['bv'];
    btnId.href = jsonObj['id_link']['bv'];
    btnBk.href = jsonObj['bk_link']['bv'];
    coverId.src = jsonObj['cover']['bv']['0'];
    coverBk.src = jsonObj['cover']['bv']['1'];
  }else if (navigator.language == "de" || navigator.language == "dei-DE" || navigator.language == "dsb-DE") {
    logoID.src = jsonObj['logo_ID']['de'];
    intro.innerHTML = jsonObj['intro']['de'];
    id_h1.innerHTML = jsonObj['id_h1']['de'];
    submit_id.value = jsonObj['submit']['de'];
    submit_bk.value = jsonObj['submit']['de'];
    btnId.innerHTML = jsonObj['flag']['de']+jsonObj['btn']['de'][0];
    btnBk.innerHTML = jsonObj['flag']['de']+jsonObj['btn']['de'][0];
    // document.querySelectorAll('option[value=DE]')[0].selected = 'selected';
    // document.querySelectorAll('option[value=DE]')[1].selected = 'selected';
    df_opt[0].text = jsonObj['default_opt']['de'];
    df_opt[1].text = jsonObj['default_opt']['de'];
    btnId.href = jsonObj['id_link']['de'];
    btnBk.href = jsonObj['bk_link']['de'];
    coverId.src = jsonObj['cover']['de']['0'];
    coverBk.src = jsonObj['cover']['de']['1'];
  }else if (navigator.language == "nl" || navigator.language == "fy-NL") {
    logoID.src = jsonObj['logo_ID']['nl'];
    intro.innerHTML = jsonObj['intro']['nl'];
    id_h1.innerHTML = jsonObj['id_h1']['nl'];
    btnId.innerHTML = jsonObj['flag']['nl']+jsonObj['btn']['nl'][0];
    btnBk.innerHTML = jsonObj['flag']['nl']+jsonObj['btn']['nl'][0];
    // document.querySelectorAll('option[value=NL]')[0].selected = 'selected';
    // document.querySelectorAll('option[value=NL]')[1].selected = 'selected';
    df_opt[0].text = jsonObj['default_opt']['nl'];
    df_opt[1].text = jsonObj['default_opt']['nl'];
    btnId.href = jsonObj['id_link']['nl'];
    btnBk.href = 'http://bakkercomfort.nl/';
    coverId.src = jsonObj['cover']['nl']['0'];
    coverBk.src = jsonObj['cover']['nl']['1'];
  }else if (navigator.language == "en" || navigator.language == "en-US" || navigator.language == "en-GB") {
    logoID.src = jsonObj['logo_ID']['uk'];
    intro.innerHTML = jsonObj['intro']['uk'];
    id_h1.innerHTML = jsonObj['id_h1']['uk'];
    btnId.innerHTML = jsonObj['flag']['uk']+jsonObj['btn']['uk'][0];
    btnBk.innerHTML = jsonObj['flag']['uk']+jsonObj['btn']['uk'][0];
    // document.querySelectorAll('option[value=UK]')[0].selected = 'selected';
    // document.querySelectorAll('option[value=UK]')[1].selected = 'selected';
    df_opt[0].text = jsonObj['default_opt']['uk'];
    df_opt[1].text = jsonObj['default_opt']['uk'];
    btnId.href = jsonObj['id_link']['uk'];
    btnBk.href = jsonObj['bk_link']['uk'];
    coverId.src = jsonObj['cover']['uk']['0'];
    coverBk.src = jsonObj['cover']['uk']['1'];
  }
  
  const onCh = (id) => {

    return document.getElementById(id).onchange = function(e) {
    
      console.log(this.value + ' ID');
      
      var sel = this.value;

      switch (sel) {
        case 'BF':
          logoID.src = jsonObj['logo_ID']['bf'];
          intro.innerHTML = jsonObj['intro']['bf'];
          id_h1.innerHTML = jsonObj['id_h1']['bf'];
          btnId.innerHTML = jsonObj['flag']['bf']+jsonObj['btn']['bf'][0];
          btnBk.innerHTML = jsonObj['flag']['bf']+jsonObj['btn']['bf'][0];
          formId.action = jsonObj['id_link']['bf'];
          formBk.action = jsonObj['bk_link']['bf'];
          btnId.href = jsonObj['id_link']['bf'];
          btnBk.href = jsonObj['bk_link']['bf'];
          coverId.src = jsonObj['cover']['bf']['0'];
          coverBk.src = jsonObj['cover']['bf']['1'];
          if( id === 'ID_country' ) {
            document.querySelectorAll('option[value=BF]')[1].selected = 'selected';
          }else {
            document.querySelectorAll('option[value=BF]')[0].selected = 'selected';
            document.querySelectorAll('option[value=BF]')[0].selected = 'selected';
          }
          break;
        case 'BV':
          logoID.src = jsonObj['logo_ID']['bv'];
          intro.innerHTML = jsonObj['intro']['bv'];
          id_h1.innerHTML = jsonObj['id_h1']['bv'];
          btnId.innerHTML = jsonObj['flag']['bv']+jsonObj['btn']['bv'][0];
          btnBk.innerHTML = jsonObj['flag']['bv']+jsonObj['btn']['bv'][0];
          formId.action = jsonObj['id_link']['bv'];
          formBk.action = jsonObj['bk_link']['bv'];
          btnId.href = jsonObj['id_link']['bv'];
          btnBk.href = jsonObj['bk_link']['bv'];
          coverId.src = jsonObj['cover']['bv']['0'];
          coverBk.src = jsonObj['cover']['bv']['1'];
          if( id === 'ID_country' ) {
            document.querySelectorAll('option[value=BV]')[1].selected = 'selected';
          }else {
            document.querySelectorAll('option[value=BV]')[0].selected = 'selected';          
          }
          break;
        case 'DE':
          logoID.src = jsonObj['logo_ID']['de'];
          intro.innerHTML = jsonObj['intro']['de'];
          id_h1.innerHTML = jsonObj['id_h1']['de'];
          btnId.innerHTML = jsonObj['flag']['de']+jsonObj['btn']['de'][0];
          btnBk.innerHTML = jsonObj['flag']['de']+jsonObj['btn']['de'][0];
          formId.action = jsonObj['id_link']['de'];
          formBk.action = jsonObj['bk_link']['de'];
          btnId.href = jsonObj['id_link']['de'];
          btnBk.href = jsonObj['bk_link']['de'];
          coverId.src = jsonObj['cover']['de']['0'];
          coverBk.src = jsonObj['cover']['de']['1'];
          if( id === 'ID_country' ) {
            document.querySelectorAll('option[value=DE]')[1].selected = 'selected';
          }else {
            document.querySelectorAll('option[value=DE]')[0].selected = 'selected';          
          }
          break;
        case 'NL':
          logoID.src = jsonObj['logo_ID']['nl'];
          intro.innerHTML = jsonObj['intro']['nl'];
          id_h1.innerHTML = jsonObj['id_h1']['nl'];
          btnId.innerHTML = jsonObj['flag']['nl']+jsonObj['btn']['nl'][0];
          btnBk.innerHTML = jsonObj['flag']['nl']+jsonObj['btn']['nl'][0];
          formId.action = jsonObj['id_link']['nl'];
          formBk.action = jsonObj['bk_link']['nl'];
          btnId.href = jsonObj['id_link']['nl'];
          btnBk.href = jsonObj['bk_link']['nl'];
          coverId.src = jsonObj['cover']['nl']['0'];
          coverBk.src = jsonObj['cover']['nl']['1'];
          if( id === 'ID_country' ) {
            document.querySelectorAll('option[value=NL]')[1].selected = 'selected';
          }else {
            document.querySelectorAll('option[value=NL]')[0].selected = 'selected';          
          }
          break;
        case 'UK':
          logoID.src = jsonObj['logo_ID']['uk'];
          intro.innerHTML = jsonObj['intro']['uk'];
          id_h1.innerHTML = jsonObj['id_h1']['uk'];
          btnId.innerHTML = jsonObj['flag']['uk']+jsonObj['btn']['uk'][0];
          btnBk.innerHTML = jsonObj['flag']['uk']+jsonObj['btn']['uk'][0];
          formId.action = jsonObj['id_link']['uk'];
          formBk.action = jsonObj['bk_link']['uk'];
          btnId.href = jsonObj['id_link']['uk'];
          btnBk.href = jsonObj['bk_link']['uk'];
          coverId.src = jsonObj['cover']['uk']['0'];
          coverBk.src = jsonObj['cover']['uk']['1'];
          if( id === 'ID_country' ) {
            document.querySelectorAll('option[value=UK]')[1].selected = 'selected';
          }else {
            document.querySelectorAll('option[value=UK]')[0].selected = 'selected';          
          }
          break;
        default:
          console.log('case default!')
          break;
      }

    }
    
  };
  onCh('ID_country')
  onCh('BK_country')


  
} // fct change lancée par evt request.onload

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