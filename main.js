const mainText = document.querySelector('.main-text')
const titleText = document.querySelector('.title')
const button = document.querySelector('.green-icon')

fetchData()

button.addEventListener('click', fetchData)

function fetchData() {
  
fetch('https://api.adviceslip.com/advice')
    .then(res => {
        if (res.status >= 200 && res.status <= 299) {
            return res.json()
        } else {
            throw Error(res.status)
        }
    })
    .then(data => {
        titleText.innerHTML = `Advice #${data.slip.id}`
        mainText.textContent = data.slip.advice
    }).catch(error => {
        titleText.innerHTML = `${error}`
        mainText.innerHTML = `Something went wrong. <br> Please try again.`
    })
  }