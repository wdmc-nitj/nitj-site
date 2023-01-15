export const BaseURL = 'https://wdmc.onrender.com'

export default async function notificationTabs(e) {
  let tabcontent = document.getElementsByClassName('notice-content')
  let tablinks = document.getElementsByClassName('notif-link')

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden')
  }
  fetchTabContent(k)
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
  document.getElementById(e.dataset.notif).classList.remove('hidden')
}

async function fetchTabContent(tabName) {
  fetch(`${BaseURL}/${tabName}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
}
