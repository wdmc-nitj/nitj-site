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
  const FullDate = month + ' ' + day + ', ' + year
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
  fetch(`${BaseURL}/${tabName}/get/all`)
    .then((res) => res.json())
    .then((apidata) => {
      // console.log(data)
      const data = dataFilter(apidata)
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
          <div>
            <a
              ${
                e.newPage
                  ? `target = "_blank" href= "${e.pdfLink}"`
                  : `href = "/template/index.html?id=${e._id}?category=${tabName}"`
              }
            class="text-xl font-semibold text-accent line-clamp-3">
            <p class="inline w-auto line-clamp-3">${title}&nbsp; 
            </p>
              </a>
            <div
            class="flex flex-col md:flex-row w-full justify-between mt-2"
            >
           ${
             e.new &&
             `
          <span id="new-tag" class="flex text-base text-accent-orange space-x-2">
            <span class="text-base material-symbols-outlined text-accent-orange">
              auto_awesome
            </span>
            <p class="font-bold uppercase text-accent-orange">
              New
            </p>
          </span>`
           }
        
            
              
          
          ${
            tabName === 'upcomingEvent'
              ? `<div id="date-tag" class="text-slate-600 font-normal text-base inline-flex items-center justify-start space-x-2">
              ${tabName === 'upcomingEvent' ? 'Event Date:&nbsp;' : ''}
                      
              <span class="material-symbols-outlined text-lg">
                calendar_month
              </span>
              <p>
              ${dateManipulator(e?.startDate || e.updatedAt)}
              </p>
             ${
               e?.endDate
                 ? ` <p>
              -
              </p>
              <span class="material-symbols-outlined text-lg">
                calendar_month
              </span>
              <p>
              ${dateManipulator(e?.endDate)}
              </p>`
                 : ''
             }
          </div>`
              : ''
          }
          </div>
          </div>
        `
        tabContainer.appendChild(newUpdate)
      })
      viewAll.href = `/template/index.html?id=0?category=${tabName}`
    })
    .catch((err) => {
      console.log(err)
    })
}
