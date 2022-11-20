import Observable from './core/Observable.js';
import { $ } from './utils/dom.js';
import { logger } from './utils/logger.js';

const observable = new Observable();

const button = $('.button');
const p = $('.p');

button.addEventListener('click', () => {
  observable.notify('Button Clicked');
});

p.addEventListener('mouseover', () => {
  observable.notify('p Tag Mouse Over');
});

observable.subscribe(logger);
