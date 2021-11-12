import MealIdbFav from '../../data/meal-idb';
import cardMeal from '../templates/card-meal';

const Favorit = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Favorited Resto</h2>

        <section id="fav-meal"></section>
      </div>
    `;
  },

  async afterRender() {
    const data = await MealIdbFav.getAllMeal();

    const containerMealFav = document.querySelector('#fav-meal');

    if (data.length === 0) {
      containerMealFav.innerHTML = `
        Empty favorite Resto. Put one, by clicking like button in the detail page.
      `;
    }

    data.forEach((meal) => {
      containerMealFav.innerHTML += cardMeal(meal);
    });
  }
};

export default Favorit;
