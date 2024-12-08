import RestaurantSource from '../../data/restaurant-source';
import { menuListTemplate } from '../templates/template-creator';

const Menu = {
  async render(){
    return `
      <h2 class="menu_title">Menu</h2>
      <section id="menu" class="menu">
      
      </section>
    `;
  },

  async afterRender() {
    const restaurantMenu = await RestaurantSource.menus();
    console.log(restaurantMenu);

    const displaymenu = document.querySelector('#menu');
    restaurantMenu.forEach((menu) =>{
      displaymenu.innerHTML += menuListTemplate(menu);
    });
  },
};

export default Menu;