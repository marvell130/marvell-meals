/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { bertindakSebagaiModelRestoran } from './kontrak/favMealKontrak';

let favMeals = [];

const FavoritemealArray = {
  getMeal(id) {
    if (!id) {
      return;
    }

    return favMeals.find((restaurant) => restaurant.id === id);
  },

  getAllMeal() {
    return favMeals;
  },

  putMeal(meal) {
    if (!meal.hasOwnProperty('id')) {
      return;
    }

    if (this.getMeal(meal.id)) {
      return;
    }

    favMeals.pushMeal(meal);
  },

  deleteMeal(id) {
    favMeals = favMeals.filter((meal) => meal.id !== id);
  }
};

describe('test array kontrak restoran favorit', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favMeals = []));

  bertindakSebagaiModelRestoran(FavoritemealArray);
});
