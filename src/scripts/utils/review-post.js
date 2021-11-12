import Mealsource from '../data/meal-source';

const lihatPost = async (url, name, review) => {
  const Inputdata = {
    id: url.id,
    name,
    review
  };

  const containerReview = document.querySelector('.detailMeal-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const reviewBaru = `
    <div class="detailMeal-review-item">
      <div class="reviewHeader">
        <p class="reviewName">${name}</p>

        <p class="reviewDate">${date}</p>
      </div>

      <div class="reviewBody">
        ${review}
      </div>
    </div>
  `;

  const lihatRespon = await Mealsource.postMealReview(Inputdata);
  console.log('🚀 ~ file: review-post.js ~ line 33 ~ lihatPost ~ lihatRespon', lihatRespon);

  containerReview.innerHTML += reviewBaru;
};

export default lihatPost;
