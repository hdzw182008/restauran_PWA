import RestaurantSource from '../../data/restaurant-source';
import urlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import  { menuDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content_detail">
    </div>
    <div class="likeButtonContainer">
    </div>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailMenu(url.id);
    const displayDetailMenu = document.querySelector('.content_detail');
    displayDetailMenu.innerHTML = menuDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
    console.log(restaurant);
  },
};

export default Detail;