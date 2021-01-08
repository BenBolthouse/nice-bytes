/**
 * Module loaded on views/index.pug.
 */

import { get } from './webapi.js';

// handle loading overlay on dom load
document.addEventListener('DOMContentLoaded', evt => {
  const pageAwaiting = document.getElementById('pageAwaiting');
  pageAwaiting.classList.remove('page__awaiting--show');
  pageAwaiting.classList.add('page__awaiting--hide');
});
