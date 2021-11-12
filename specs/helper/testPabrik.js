import InstalLikeButton from '../../src/scripts/utils/instal-like-button';
import MealIdbFav from '../../src/scripts/data/meal-idb';

const buatInstalTombolSukaDenganRestoran = async (restaurant) => {
  await InstalLikeButton.init({
    containerLikeButton: document.querySelector('#containerLikeButton'),
    mealIdbFav: MealIdbFav,
    data: {
      restaurant
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { buatInstalTombolSukaDenganRestoran };
