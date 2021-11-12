import CONFIG from '../global/config';
import API_ENDPOINT from '../global/endpointApi';

class Mealsource {
  static async getMealList() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async getMealDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postMealReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

export default Mealsource;
