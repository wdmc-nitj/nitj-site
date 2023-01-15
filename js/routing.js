import {
  dateManipulator,
  putCategory,
  pageTitleUpdater,
  getParams,
  normalCaseMaker,
} from './utils/routingUtils.js'

const baseURL = 'https://wdmc.onrender.com'

const [id, category] = getParams()

//   Putting Category in the page
console.log(id, category)

const titleDiv = document.getElementById('title')
const desp = document.getElementById('description')
const imgContainer = document.getElementById('image')
const dateDiv = document.getElementById('date')

if (parseInt(id) === 0) {
  titleDiv.innerHTML = 'All ' + normalCaseMaker(category)
  const list = document.getElementById('list')
  fetch(`${baseURL}/${category}/get/all`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e) => {
        const listItem = document.createElement('li')
        listItem.setAttribute(
          'class',
          'underline underline-offset-4 decoration-accent decoration-0 hover:decoration-2'
        )
        listItem.innerHTML = `  <a
                  href="/template/index.html?id=${e._id}?category=${category}">
                  ${e.title}
                </a>
              `
        list.appendChild(listItem)
      })
    })
    .catch((err) => {
      console.log(err)
    })
} else {
  fetch(`${baseURL}/${category}?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      titleDiv.innerHTML = data[0].title
      if (data[0].desc) desp.innerHTML = data[0].desc
      dateDiv.innerHTML = dateManipulator(data[0].updatedAt)
      if (data[0].image)
        imgContainer.innerHTML = ` <img src = "${data[0].image}" id="image" class="max-w-4xl rounded-xl mt-10 w-full" />`
      pageTitleUpdater(category, data[0].title)
    })
    .catch((err) => {
      console.log(err)
    })
}

putCategory(category)
