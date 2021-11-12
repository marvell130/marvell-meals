import { buatTemplateButtonLike, buatTemplateButtonUnlike } from '../views/templates/like-button';
import { initAlarmError, initAlarmSuccess } from './instal-alarm';

const InstalLikeButton = {
  async init({ containerLikeButton, data, mealIdbFav }) {
    this._containerLikeButton = containerLikeButton;
    this._restaurant = data.restaurant;
    this._mealIdbFav = mealIdbFav;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      const restaurant = await this._mealIdbFav.getMeal(id);

      if (restaurant) {
        this._rendertemplateUnlikeButton();
      } else {
        this._rendertemplateLikeButton();
      }
    } catch (err) {
      console.error(err);
      initAlarmError(err.message);

      throw new Error(err);
    }
  },

  _rendertemplateLikeButton() {
    this._containerLikeButton.innerHTML = buatTemplateButtonLike(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._mealIdbFav.putMeal(this._restaurant);
      initAlarmSuccess('Resto favorited!');
      this._renderButton();
    });
  },

  _rendertemplateUnlikeButton() {
    this._containerLikeButton.innerHTML = buatTemplateButtonUnlike(); // append html

    const unlikeButton = document.querySelector('#unlikeButton');

    unlikeButton.addEventListener('click', async () => {
      await this._mealIdbFav.deleteMeal(this._restaurant.id);
      initAlarmSuccess('Resto unfavorited!');
      this._renderButton();
    });
  }
};

export default InstalLikeButton;
