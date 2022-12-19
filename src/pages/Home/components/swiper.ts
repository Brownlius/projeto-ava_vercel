import 'swiper/css';
import 'swiper/css/pagination';

export const pagination = {
  clickable: true,
  // eslint-disable-next-line prettier/prettier
  renderBullet: function(index: number, className: string) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  }
};
