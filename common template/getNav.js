const bodyEl = document.body

fetch('/template/navbar.html')
  .then((res) => res.text())
  .then((html) => {
    const navEl = document.createElement('header')
    navEl.innerHTML = html
    bodyEl.prepend(navEl)
    carousel()
  })

let slideIndex = 0
function carousel() {
  const x = document.getElementsByClassName('mySlides')

  for (let slide of x) {
    slide.style.display = 'none'
  }
  slideIndex += 1
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = 'block'
  setTimeout(carousel, 2500)
}
