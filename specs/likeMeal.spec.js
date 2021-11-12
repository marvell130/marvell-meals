import MealIdbFav from '../src/scripts/data/meal-idb';
import * as TestingPabrik from './helper/testPabrik';

const tambahkanContainerTombolLike = () => {
  document.body.innerHTML = '<div id="containerLikeButton"></div>';
};

describe('Suka Restoran', () => {
  beforeEach(() => {
    tambahkanContainerTombolLike();
  });

  it('akan menampilkan tombol like ketika restoran belum pernah di like sebelumnya', async () => {
    await TestingPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="Like Boss"]')).toBeTruthy();
  });

  it('tidak menampilkan tombol unlike ketika restoran sudah pernah di like', async () => {
    await TestingPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike yah"]')).toBeFalsy();
  });

  it('dapat menyukai satu restoran', async () => {
    await TestingPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const meal = await MealIdbFav.getMeal(1);
    expect(meal).toEqual({ id: 1 });

    await MealIdbFav.deleteMeal(1);
  });

  it('tidak dapat menambahkan restoran yang pernah di like', async () => {
    await TestingPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    await MealIdbFav.putMeal({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allMeal = await MealIdbFav.getAllMeal();
    expect(allMeal).toEqual([{ id: 1 }]);

    await MealIdbFav.deleteMeal(1);
  });

  it('tidak dapat menambahkan restoran yang tidak punya id', async () => {
    await TestingPabrik.buatInstalTombolSukaDenganRestoran({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allMeal = await MealIdbFav.getAllMeal();
    expect(allMeal).toEqual([]);
  });
});
