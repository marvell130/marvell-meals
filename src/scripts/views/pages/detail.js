import parseUrl from '../../routes/url-parse';
import Spinner from '../templates/spinner';
import Mealsource from '../../data/meal-source';
import Mealdetail from '../templates/detail-meal';
import InstalLikeButton from '../../utils/instal-like-button';
import lihatPost from '../../utils/review-post';
import { initAlarmError } from '../../utils/instal-alarm';
import { kirimDataKeWebsocket } from '../../utils/instal-websocket';
import mealIdbFav from '../../data/meal-idb';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>

        <div class="like" id="containerLikeButton"></div>

        <div id="container-main">
          <h2 class="title-container">Meal Detail</h2>

          <section id="detail-meal"></section>

          <div class="form-review">
            <form autocomplete="on">
              <div class="mb-3">
                <label for="input-nama" class="form-label">Name</label>
                <input type="text" class="form-control" id="input-nama" minlength="3" placeholder="Your name..." required>
              </div>

              <div class="mb-3">
                <label for="input-review" class="form-label">Review</label>
                <input type="text" class="form-control" id="input-review" minlength="3" placeholder="Your review..." required>
              </div>

              <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = parseUrl.gantiUrlAktifTanpaCombiner();

    const loading = document.querySelector('#loading');
    const containerMain = document.querySelector('#container-main');
    const containerDetail = document.querySelector('#detail-meal');

    containerMain.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await Mealsource.getMealDetail(url.id);

      console.info(data);
      containerDetail.innerHTML += Mealdetail(data.restaurant);

      InstalLikeButton.init({
        data,
        mealIdbFav,
        containerLikeButton: document.querySelector('#containerLikeButton')
      });

      containerMain.style.display = 'block';
      loading.style.display = 'none';

      const btnSubmitReview = document.querySelector('#submit-review');
      const InputNama = document.querySelector('#input-nama');
      const InputReview = document.querySelector('#input-review');

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault();

        await lihatPost(url, InputNama.value, InputReview.value);

        kirimDataKeWebsocket({
          name: InputNama.value,
          review: InputReview.value
        });

        InputNama.value = '';
        InputReview.value = '';
      });
    } catch (err) {
      console.error(err);

      containerMain.style.display = 'block';
      loading.style.display = 'none';
      containerDetail.innerHTML = `Error: ${err.message}`;
      initAlarmError(err.message);
    }
  }
};

export default Detail;
