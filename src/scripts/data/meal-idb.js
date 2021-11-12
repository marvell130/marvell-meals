/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const opendata = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true
    });
  }
});

const MealIdbFav = {
  async getMeal(id) {
    if (!id) {
      return;
    }
    return (await opendata).get(OBJECT_STORE_NAME, id);
  },

  async getAllMeal() {
    return (await opendata).getAll(OBJECT_STORE_NAME);
  },

  async putMeal(meal) {
    if (!meal.hasOwnProperty('id')) {
      return;
    }
    return (await opendata).put(OBJECT_STORE_NAME, meal);
  },

  async deleteMeal(id) {
    return (await opendata).delete(OBJECT_STORE_NAME, id);
  }
};

export default MealIdbFav;
