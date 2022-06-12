// abre e fecha o menu quando clicar no icone: hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item de menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página quando der scroll
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    //scrol é maior do que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  mousewheel: {
    invert: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
})

// ScrollReveal: Mostrar elementos quando fizer scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card, 
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// Botão voltar para o topo
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
