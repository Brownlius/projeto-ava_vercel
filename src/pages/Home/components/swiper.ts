import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const pagination = {
  // eslint-disable-next-line prettier/prettier
  renderBullet: function(index: number, className: string) {
    return '<span class="' + className + '">' + '</span>';
  }
};

const autoplay = new Swiper('.swiper', {
  autoplay: {
    delay: 5000
  }
});
