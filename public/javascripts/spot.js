/**
 * Module loaded on views/spot.pug.
 */

import { post, get, put, destroy } from './webapi.js';

// handle adding spots to user collections
document.addEventListener('DOMContentLoaded', evt => {
  const addToCollectionButtons = document.querySelectorAll('.addToCollection');
  addToCollectionButtons.forEach(btn => {
    const collectionId = btn.getAttribute('collectionId');
    const spotId = btn.getAttribute('spotId');
    btn.addEventListener('click', async evt => {
      // prevents resubmissions
      if (btn.getAttribute('spotIsCollected') === 'false') {
        return await post(
          '/api/collections/spot',
          { spotId, collectionId },
          success,
          error,
          btn
        );
      }
    });
  });
  const success = target => {
    target.innerHTML += ' ✔';
    target.setAttribute('spotIsCollected', 'true');
  };
  const error = target => {
    target.innerHTML = 'There was an error';
  };
});
