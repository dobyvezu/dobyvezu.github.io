function imgWindow() {
  window.open("image") }

function smoothScrollProp(){
    document.querySelector('#propositions').scrollIntoView({
        behavior: 'smooth'
    });
}

function smoothScrollInfo(id){
  let yOffset = -50;
  if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    yOffset = -700;
}
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}

$(document).ready(function () {
  $(document).click(function () {
       $('.navbar-collapse').collapse('hide');

  });
});
