import CONFIG from '../../globals/config';

const menuDetailTemplate = (menu) => `
        <h2 class="menu_detail_title">${menu.restaurant.name}</h2>
        
          <img src="${CONFIG.BASE_IMAGE_LARGE_URL + menu.restaurant.pictureId}" alt="${menu.restaurant.name}" class="menu_detail_poster">
          <div class="menu_detail_list">
            <div class="menu_detail_drink">
              <h3>Drinks</h3>
              <p> ${menu.restaurant.menus.drinks.reduce((show, value) => show.concat(`<i>${value.name}</i>`), '')}</p>
            </div>
            <div class="menu_detail_food">
              <h3>Foods</h3>
              <p> ${menu.restaurant.menus.foods.reduce((show, value) => show.concat(`<i>${value.name}</i>`), '')}</p>
            </div>
          </div>
        <div class="menu_detail_info">
          <div class="menu_detail_head">
            <div class="menu_detail_city">
              <h4>City</h4>
              <p>${menu.restaurant.address}, ${menu.restaurant.city}</p>
           </div>
            <div class="menu_detail_rating">
              <h4>Rating</h4>
            <p>⭐ ${menu.restaurant.rating}</p>
           </div>
          </div>
          <h4>Description</h4>
          <p>${menu.restaurant.description}</p>
        </div>
        <div class="menu_detail_review">
        <ul>
        ${menu.restaurant.customerReviews.reduce((show, value) => show.concat(`
          <li><p>${value.name}</p>
              <p>${value.review}</p>
              <p>${value.date}</p>
          </li>
          <br>
          `), '<h4>Customer Reviews:</h4>')}
        <ul>
        </div>
`;

const menuListTemplate = (menu) => `
    <article class="menu_item">
      <img src="${CONFIG.BASE_IMAGE_LARGE_URL + menu.pictureId}" alt="${menu.name}" class="menu_pic">
      <div class="menu_detail">
        <h3 class="menu_name"><a href="/#/detail/${menu.id}">${menu.name}</a></h3>
        <span class="menu_rating">⭐ ${menu.rating}</span>
        <p class="menu_desc">${menu.description}</p>
        <p class="menu_city">${menu.city}</p>
      </div>
    </article>
`;

const likeButtonTemplate = () =>`
  <button aria-label="like this menu" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>`;

const likedButtonTemplate = () => `
  <button aria-label="unlike this menu" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
export { menuDetailTemplate, menuListTemplate, likeButtonTemplate, likedButtonTemplate };