import FavoriteRestaurantIdb from '../data/favorite-restaurant';
import { likedButtonTemplate, likeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }){
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton(){
    const { id } = this._restaurant;

    if (await this._isMenuExist(id)){
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMenuExist(id){
    const menu = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!menu;
  },

  _renderLike(){
    this._likeButtonContainer.innerHTML = likeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked(){
    this._likeButtonContainer.innerHTML = likedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  }
};

export default LikeButtonInitiator;