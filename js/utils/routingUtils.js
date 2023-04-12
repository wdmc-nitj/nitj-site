export const getParams = () => {
  return window.location.search
    .split('?')
    .filter((n) => n)
    .map((param) => {
      return param.split('=')[1]
    })
}
export function dataFilter(apiData) {
  const data = apiData.filter((n) => n.showviewall === true)
  data.sort((a, b) => {
    return b.order - a.order
  })
  return data
}

export const dateManipulator = (data) => {
  const date = new Date(data)
  const year = date.getFullYear()
  const day = date.getDate()
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC',
  ]
  const month = months[date.getMonth()]
  const FullDate = month + ' ' + day + ',' + year
  return FullDate
}

export function putCategory(category) {
  const titlePlaceholders = document.getElementsByClassName('page-title')

  for (const item of titlePlaceholders) {
    item.innerHTML = normalCaseMaker(category)
  }
}

export function pageTitleUpdater(category, title) {
  const updatedCategory = normalCaseMaker(category)
  document.title = `NITJ | ${updatedCategory + ' - ' + title}`
}

export function normalCaseMaker(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
}

// function titleManipulator(title) {
//   let updatedTitle = title.toLowerCase().split(' ')
//   updatedTitle = updatedTitle.filter(String)
//   console.log(updatedTitle)
//   return updatedTitle.join('-')
// }

// function changeRoute(title) {
//   const updatedTitle = titleManipulator(title)
//   window.history.pushState({}, '', `/${category}/${updatedTitle}`)
// }
