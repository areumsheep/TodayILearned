import { $ } from '../utils/dom.js';

export const logger = (data) => {
  console.log(`${new Date().toLocaleString()} / ${data}`);
};

export const showLog = (data) => {
  const $target = $('.logs');
  const message = `사용자 ${data} 이벤트 발생`;
  $target.insertAdjacentHTML('beforeend', `<p>${message}</p>`);
};
