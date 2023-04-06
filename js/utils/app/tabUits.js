export const BaseURL = 'https://wdmc-vsj1.onrender.com'

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

const loadingSkeleton = `
<li class="py-4 w-full space-y-1">
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-[80%]"></div>
                </li>
                <li class="py-4 w-full space-y-1">
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-[80%]"></div>
                </li>
                <li class="py-4 w-full space-y-1">
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-[80%]"></div>
                </li>
                <li class="py-4 w-full space-y-1">
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-full"></div>
                  <div class="bg-slate-300 rounded-md animate-pulse h-4 w-[80%]"></div>
                </li>`

export default async function notificationTabs(e, subscribed) {
  let tablinks = document.getElementsByClassName('notif-link')
  const tabContainer = document.getElementById('updates')
  const currentTab = e.dataset.notif

  tabContainer.innerHTML = loadingSkeleton

  fetchTabContent(e.dataset.notif, tabContainer)

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
}

async function fetchTabContent(tabName, tabContainer) {
  fetch(`${BaseURL}/${tabName}`)
    .then((res) => res.json())
    .then((data) => {
      tabContainer.innerHTML = ''
      const viewAll = document.getElementById('tab-view-all')
      data.forEach((e) => {
        let title = e.title
        if (tabName == 'tender') {
          title = e.desc
        } else title = e.title
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
