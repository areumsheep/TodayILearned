import Observable from './core/Observable.js';
import { $ } from './utils/dom.js';
import { logger } from './utils/logger.js';

const observable = new Observable();

const button = $('.button');
const p = $('.p');

button.addEventListener('click', () => {
  observable.notify('User Button Clicked');
});

p.addEventListener('click', () => {
  observable.notify('User p Tag Clicked');
});

observable.subscribe(logger);
