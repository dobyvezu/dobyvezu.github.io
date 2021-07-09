function imgWindow() {
  window.open("image") }

function smoothScrollProp(){
    document.querySelector('#propositions').scrollIntoView({
        behavior: 'smooth'
    });
}

function smoothScrollInfo(){
    document.querySelector('#info').scrollIntoView({
        behavior: 'smooth'
    });
}

$('.nav-link').click(function(e){
    let divCoords = $(e.target.hash).offset();
    let height = $('header').height();
    e.preventDefault();
    window.scrollTo({
    left: divCoords.left,
    top: divCoords.top - height,
    behavior: 'smooth'
    });
});