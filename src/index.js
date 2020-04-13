import './assets/css/global.css';
import nav from './views/nav';
import footer from './views/footer';
import home from './views/home';
import menu from './views/menu';
import locHours from './views/locHours';
import newEvents from './views/newEvents';
import privateDining from './views/privateDining';
import about from './views/about';
import reserve from './views/reserve';
import appController from './appController';

const content = document.querySelector('.content');

content.insertAdjacentHTML('beforebegin', nav);
content.insertAdjacentHTML('beforeend', footer);
appController.insertPage(home);

const menuNavbtn = document.querySelector('.menubtn');
const logobtn = document.querySelector('#logo');
const locHoursbtn = document.querySelector('.loc-hours');
const newEventsbtn = document.querySelector('.newEventsbtn');
const privateDiningbtn = document.querySelector('.privateDiningbtn');
const aboutbtn = document.querySelector('.aboutbtn');
const reservebtn = document.querySelector('.reservebtn');

appController.redirectTo(menuNavbtn, menu);
appController.redirectTo(logobtn, home);
appController.redirectTo(locHoursbtn, locHours);
appController.redirectTo(newEventsbtn, newEvents);
appController.redirectTo(privateDiningbtn, privateDining);
appController.redirectTo(aboutbtn, about);
appController.redirectTo(reservebtn, reserve);

appController.changeNavScrolled();
