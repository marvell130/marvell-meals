/* eslint-disable indent */
import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Mealdetail = (meal) => `
  <div class="detailMeal">
    <div class="img-container">
        <img class="lazyload detailMeal-img" alt="${meal.name}" data-src ="${CONFIG.BASE_IMAGE_URL + meal.pictureId}"/>
    </div>

    <ul class="detailMeal-info">
      <li>
        <i title="restoMenus" class="fas fa-store-alt icon-primary"></i>
        <p class="detailMeal-nama-alamat-rating">${meal.name}</p>
        </li>

      <li>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detailMeal-nama-alamat-rating">${meal.address}, ${meal.city}</p>
        </li>

      <li>
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <p class="detailMeal-nama-alamat-rating">${meal.rating}</p>
      </li>

      <li><p class="detailMeal-desc">${meal.description}</p></li>
      
      <li>${meal.categories.map((category) => `<span class="category">${category.name}</span>`).join('')}
      
      </li>
    </ul>

    <h3>Menu</h3>

    <div class="detailMeal-menu">
      <div class="detailMeal-food">
        <h4>Food</h4>
        <ul>
          ${meal.menus.foods.map((food, i) => `<li><p>${i + 1}) ${food.name}</p></li>`).join('')}
        <ul>
      </div>

      <div class="detailMeal-drink">
        <h4>Drink</h4>
        <ul>
          ${meal.menus.drinks.map((drink, i) => `<li><p>${i + 1}) ${drink.name}</p></li>`).join('')}
        <ul>
      </div>
    </div>

    <h3 class="title-review">Reviews</h3>

    <div class="detailMeal-review">
    ${meal.customerReviews
      .map(
        (view) => `
          <div class="detailMeal-review-item">
            <div class="reviewHeader">
              <p class="reviewName">${view.name}</p>
              <p class="reviewDate">${view.date}</p>
            </div>
            <div class="reviewBody">
              ${view.review}
            </div>
          </div>`
      )
      .join('')}
    </div>
  </div>
`;

export default Mealdetail;
