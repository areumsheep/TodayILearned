import Observable from './core/Observable.js';
import { $ } from './utils/dom.js';
import { logger, showLog } from './utils/logger.js';

const observable = new Observable();

const button = $('.button');
const p = $('.p');

button.addEventListener('click', () => {
  observable.notify('Button Tag Click');
});

p.addEventListener('mouseover', () => {
  observable.notify('p Tag Mouse Over');
});

observable.subscribe(logger);
observable.subscribe(showLog);
