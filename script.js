/*
$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 10;
    $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});
*/
const nav = document.querySelector('nav');
const header = document.querySelector('header')

const options = {
  rootMargin: '-12%'
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting)
    {
      nav.classList.remove('changeColor')
      
    }else{
            nav.classList.add('changeColor')
           
    }
  })
}, options)

observer.observe(header)
