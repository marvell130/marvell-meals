const bertindakSebagaiModelRestoran = (mealIdbFav) => {
  it('akan mengembalikan restoran yang telah ditambahkan', async () => {
    mealIdbFav.putMeal({ id: 1 });
    mealIdbFav.putMeal({ id: 2 });

    expect(await mealIdbFav.getMeal(1)).toEqual({ id: 1 });
    expect(await mealIdbFav.getMeal(2)).toEqual({ id: 2 });
    expect(await mealIdbFav.getMeal(3)).toEqual(undefined);
  });

  it('akan menolak penambahan restoran apabila salah properti', async () => {
    mealIdbFav.putMeal({ aProperty: 'property' });

    expect(await mealIdbFav.getAllMeal()).toEqual([]);
  });

  it('dapat mengembalikan seluruh restoran yang telah ditambahkan', async () => {
    mealIdbFav.putMeal({ id: 1 });
    mealIdbFav.putMeal({ id: 2 });

    expect(await mealIdbFav.getAllMeal()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('akan menghapus restoran favorit', async () => {
    mealIdbFav.putMeal({ id: 1 });
    mealIdbFav.putMeal({ id: 2 });
    mealIdbFav.putMeal({ id: 3 });

    await mealIdbFav.deleteMeal(1);

    expect(await mealIdbFav.getAllMeal()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('akan mengendalikan request untuk menghapus restoran yang mana restoran belum pernah ditambahkan', async () => {
    mealIdbFav.putMeal({ id: 1 });
    mealIdbFav.putMeal({ id: 2 });
    mealIdbFav.putMeal({ id: 3 });

    await mealIdbFav.deleteMeal(4);

    expect(await mealIdbFav.getAllMeal()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { bertindakSebagaiModelRestoran };
