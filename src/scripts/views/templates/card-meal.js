/* eslint-disable indent */
import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const cardMeal = (meal) => `
    <div tabindex="0" class="card">
      <a href="#/meal/${meal.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="lazyload card-image" crossorigin="anonymous" alt="${meal.name}" data-src="${CONFIG.BASE_IMAGE_URL + meal.pictureId}"/>
          <span tabindex="0" class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${meal.rating}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <h2 class="card-content-title">${meal.name} - ${meal.city}</h2>
          <p class="truncate">${meal.description}</p>
        </div>
      </a>
    </div>
  `;

export default cardMeal;
