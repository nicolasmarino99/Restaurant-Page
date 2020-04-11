import nav from './views/nav'
import footer from './views/footer'
import home from './views/home'
import menu from './views/menu'
//import locHours from './views/locHours'
//import newEvents from './views/newEvents'
//import privateDining from './views/privateDining'
//import about from './views/about'
//import reserve from './views/reserve'


//import _ from 'lodash';

const content = document.querySelector(".content")
content.insertAdjacentHTML('beforebegin', nav)
content.insertAdjacentHTML('beforeend',footer)


const insertPage = (node) => {
  content.insertAdjacentHTML("afterbegin",node)
}

content.insertAdjacentHTML("afterbegin",home)

const changeNavScrolled = () => {
    const option1 = document.querySelector(".option1")
    const trigger = document.querySelector(".trigger")

    const triggerOptions = {}

    const triggerObserver = new IntersectionObserver((entries,triggerObserver)=>{
      entries.forEach(entry => {
        alert(entry.target)
        !entry.isIntersecting ? option1.classList.add('scrolled-nav') : option1.classList.remove('scrolled-nav')
      })
    },triggerOptions)
  
   triggerObserver.observe(trigger)
    
    
  
    
}

const clearContent = () => {
  content.innerHTML = "";
}

const menuNavbtn = document.querySelector('.menubtn')
const logo = document.querySelector('#logo')
const locHoursbtn = document.querySelector('')



menuNavbtn.addEventListener('click', () =>{
  clearContent()
  insertPage(menu)

})
logo.addEventListener('click', ()=>{
  clearContent()
  insertPage(home)
})


//clearContent()
changeNavScrolled()
