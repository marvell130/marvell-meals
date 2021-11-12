import MealIdbFav from '../src/scripts/data/meal-idb';
import * as testPabrik from './helper/testPabrik';

const tambahkanContainerTombolLike = () => {
  document.body.innerHTML = '<div id="containerLikeButton"></div>';
};

describe('Batal Like Restoran', () => {
  beforeEach(async () => {
    tambahkanContainerTombolLike();
    await MealIdbFav.putMeal({ id: 1 });
  });

  afterEach(async () => {
    await MealIdbFav.deleteMeal(1);
  });

  it('akan menampilkan widget unlike ketika restoran di like', async () => {
    await testPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike yah"]')).toBeTruthy();
  });

  it('tidak akan menampilkan widget unlike ketika restoran telah di like', async () => {
    await testPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="Like Boss"]')).toBeFalsy();
  });

  it('akan dapat menghapus restoran disukai dari list', async () => {
    await testPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    document.querySelector('[aria-label="Unlike yah"]').dispatchEvent(new Event('click'));
    const allResto = await MealIdbFav.getAllMeal();

    expect(allResto).toEqual([]);
  });

  it('tidak akan menampilkan error jika restoran yang tidak disukai tidak ada di list', async () => {
    await testPabrik.buatInstalTombolSukaDenganRestoran({ id: 1 });

    await MealIdbFav.deleteMeal(1);
    document.querySelector('[aria-label="Unlike yah"]').dispatchEvent(new Event('click'));
    const allResto = await MealIdbFav.getAllMeal();

    expect(allResto).toEqual([]);
  });
});
