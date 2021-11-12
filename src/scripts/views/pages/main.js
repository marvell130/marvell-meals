import Spinner from '../templates/spinner';
import Mealsource from '../../data/meal-source';
import cardMeal from '../templates/card-meal';
import { initAlarmError } from '../../utils/instal-alarm';

const Main = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>

        <div id="container-main">
          <h1 tabindex="0" class="judul-konten_utama">Cari Resto</h1>

          <section id="cari-resto"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const containerMain = document.querySelector('#container-main');
    const containerList = document.querySelector('#cari-resto');

    containerMain.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const info = await Mealsource.getMealList();

      info.restaurants.forEach((restoMenu) => {
        containerList.innerHTML += cardMeal(restoMenu);
      });

      loading.style.display = 'none';
      containerMain.style.display = 'block';
    } catch (err) {
      console.error(err);

      containerMain.style.display = 'block';
      loading.style.display = 'none';
      containerList.innerHTML = `Error: ${err.pesan}`;
      initAlarmError(err.pesan);
    }
  }
};

export default Main;
