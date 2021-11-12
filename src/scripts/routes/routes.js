import Main from '../views/pages/main';
import Favorit from '../views/pages/favorit';
import Detail from '../views/pages/detail';

const route = {
  '/': Main,
  '/favorit': Favorit,
  '/meal/:id': Detail
};

export default route;
