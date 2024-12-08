import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

/* alternatif pemanggilan image hero  */
const hero = document.querySelector('.hero_img');
hero.style.backgroundImage = 'url(./images/heros/hero-image_4.jpg)';

const app = new App({
  hamburger: document.querySelector('.hamburger'),
  nav: document.querySelector('nav'),
  main: document.querySelector('main'),
});

window.addEventListener('hashchange', ()=>{
  app.renderPage();
});

window.addEventListener('load', ()=>{
  app.renderPage();
  swRegister();
});