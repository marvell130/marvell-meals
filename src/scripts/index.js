import 'regenerator-runtime';
import '../styles/normalisasi.css';
import '../styles/root.css';
import '../styles/navbar.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/myFooter.css';
import '../styles/responsif.css';
import '../styles/spinner.css';
import '../styles/detail-meal.css';
import '../styles/favorit.css';
import App from './views/app';
import regisSw from './utils/regis-sw';
import './components/navbar';
import './components/hero';
import './components/myfooter';

const app = new App({
  tombol: document.querySelector('.menu'),
  drawer: document.querySelector('.navbar-list'),
  konten: document.querySelector('#content-main')
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  regisSw();
});
