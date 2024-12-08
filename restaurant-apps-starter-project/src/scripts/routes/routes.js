import Menu from '../views/pages/menu';
import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';

const routes = {
  '/': Menu,
  '/menu': Menu,
  '/detail/:id' : Detail,
  '/fav' : Favourite,
};

export default routes;
