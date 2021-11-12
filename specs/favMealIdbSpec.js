import { bertindakSebagaiModelRestoran } from './kontrak/favMealKontrak';
import MealIdbFav from '../src/scripts/data/meal-idb';

describe('Implementasi test kontrak idb favorit restoran', () => {
  afterEach(async () => {
    (await MealIdbFav.getAllMeal()).forEach(async (meal) => {
      await MealIdbFav.deleteMeal(meal.id);
    });
  });

  bertindakSebagaiModelRestoran(MealIdbFav);
});
