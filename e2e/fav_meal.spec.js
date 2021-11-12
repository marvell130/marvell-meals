const assert = require('assert');

Feature('Favorite Meal');

Before(({ I }) => {
  I.amOnPage('/#/favorit');
});

const teksFavMealKosong = 'Empty favorite Resto';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#fav-meal');
  I.see(teksFavMealKosong, '#fav-meal');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(teksFavMealKosong, '#fav-meal');

  // URL: /
  I.amOnPage('/');
  I.seeElement('.card a');
  const kartuRestoranPertama = locate('.card-content-title').first();
  const judulKartuRestoranPertama = await I.grabTextFrom(kartuRestoranPertama);
  I.click(kartuRestoranPertama);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.card');
  const judulKartuDisukai = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(judulKartuRestoranPertama, judulKartuDisukai);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.card');
  const judulKartuDisukai = await I.grabTextFrom('.card-content-title');
  I.click(judulKartuDisukai);

  I.seeElement('#unlikeButton');
  I.click('#unlikeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('#fav-meal');
  I.dontSeeElement('.card');
  I.dontSeeElement('.card-content-title');
});
