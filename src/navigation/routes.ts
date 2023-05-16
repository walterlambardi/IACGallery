import { Pages } from '../enums/Pages';
import ArtWorkDetails from '../pages/ArtWorkDetails';
import Favorites from '../pages/Favorites';
import Gallery from '../pages/Gallery';

export default {
  [Pages.GALLERY]: Gallery,
  [Pages.ARTWORK_DETAILS]: ArtWorkDetails,
  [Pages.FAVORITES]: Favorites,
};
