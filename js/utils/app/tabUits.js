export const BaseURL = 'https://wdmc.onrender.com'

function dateManipulator(data) {
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

export default async function notificationTabs(e) {
  // let tabcontent = document.getElementsByClassName('notice-content')
  let tablinks = document.getElementsByClassName('notif-link')
  const tabContainer = document.getElementById('updates')
  const currentTab = e.dataset.notif
  // for (let i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].classList.add('hidden')
  // }
  // console.log(tabContainer.innerHTML.length)
  // if (tabContainer.innerHTML.length !== 0) {
  //   localStorage.setItem(currentTab, tabContainer.innerHTML)
  // }
  tabContainer.innerHTML = ''

  // if (
  // localStorage.getItem(currentTab) &&
  // localStorage.getItem(currentTab).length !== 0
  // ) {
  // tabContainer.innerHTML = localStorage.getItem(currentTab)
  // } else {
  fetchTabContent(e.dataset.notif, tabContainer)
  // }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.add('hover:bg-blue-50', 'text-slate-400')
    tablinks[i].classList.remove(
      'bg-blue-100',
      'text-accent',
      'hover:bg-blue-200'
    )
  }
  e.classList.remove('hover:bg-blue-50', 'text-slate-400')
  e.classList.add('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
  // document.getElementById(e.dataset.notif).classList.remove('hidden')
}

async function fetchTabContent(tabName, tabContainer) {
  fetch(`${BaseURL}/${tabName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const viewAll = document.getElementById('tab-view-all')
      data.forEach((e) => {
        let title=e.title;
        if(tabName=="tender"){
            title=e.desc;
        }
        else title=e.title;
        const newUpdate = document.createElement('li')
        newUpdate.setAttribute('class', 'py-4 w-full')
        newUpdate.innerHTML = `
          <div class="inline-flex flex-col items-start justify-start space-y-4">
            <a
            href = "/template/index.html?id=${e._id}?category=${tabName}"
            class="text-xl font-semibold text-accent line-clamp-3">
              ${title}
            </a>
            ${
              e.new
                ? `<div id="new-tag" class="inline-flex items-center justify-start space-x-2">
            <span class="material-symbols-outlined text-accent-orange">
              auto_awesome
            </span>
            <p class="text-lg font-bold uppercase text-accent-orange">
              New
            </p>
          </div>`
                : `<div id="date-tag" class="inline-flex items-center justify-start space-x-2">
        <span class="material-symbols-outlined" style="font-size: 24px">
          calendar_month
        </span>
        <p class="text-lg text-dark-purple/80">
          ${dateManipulator(e.updatedAt)}
        </p>
      </div>`
            }
          </div>
        `
        tabContainer.appendChild(newUpdate)
      })
      viewAll.href = `/template/index.html?id=0?category=${tabName}`
    })
}
