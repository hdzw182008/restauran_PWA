import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async menus() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responeJSON = await response.json();
    return responeJSON.restaurants;
  }
  static async detailMenu(id){
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;