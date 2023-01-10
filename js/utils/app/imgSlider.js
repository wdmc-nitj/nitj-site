const mainImg = document.getElementById('main-image')
const slider = [
  ['The Place of transformation', '/public/assets/images/IMG_0196.JPG'],
  ['78th IN OVERALL NIRF RANKING', '/public/assets/images/IMG_0198.JPG'],
  ['49th IN ENGINEERING NIRF', '/public/assets/images/IMG_0195.JPG'],
]

let i = 0
const imgSlider = () => {
  // mainText.innerText = slider[i % slider.length][0]
  mainImg.style.backgroundImage = `url('${slider[i % slider.length][1]}')`
  i++
}

export default imgSlider
