import Swiper, {Navigation, Pagination} from 'swiper';
import './scss/index.scss';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

