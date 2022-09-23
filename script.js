/*
$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 10;
    $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});
*/
const nav = document.querySelector('nav');
const header = document.querySelector("#website_head")
const options = {
  rootMargin: '-12%'
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting)
    {
      nav.classList.remove('changeColor')
            nav.classList.add('onHover')


    }else{
            nav.classList.add('changeColor')
                  nav.classList.remove('onHover')

    }
  })
}, options)

observer.observe(header)


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

