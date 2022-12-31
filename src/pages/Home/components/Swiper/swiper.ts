import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const pagination = {
  // eslint-disable-next-line prettier/prettier
  renderBullet: function(index: number, className: string) {
    return '<span class="' + className + '">' + '</span>';
  }
};
export const customSwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }
});
