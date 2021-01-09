/**
 * Module loaded on views/includes/reviews.pug
 */

import { post } from './webapi.js';

// sync form to javascript
document.addEventListener('DOMContentLoaded', evt => {
  // handles the DOM star selection experience
  let rating;

  userReviewStarColor = document.getElementById('userReviewStarColor');

  [
    document.getElementById('userReviewStar1Selection'),
    document.getElementById('userReviewStar2Selection'),
    document.getElementById('userReviewStar3Selection'),
    document.getElementById('userReviewStar4Selection'),
    document.getElementById('userReviewStar5Selection'),
  ].forEach((star, i) => {
    const pos = i + 1;
    star.addEventListener('mouseover', evt => {
      userReviewStarColor.classList.add(`star${pos}Active`);
    });
    star.addEventListener('mouseout', evt => {
      userReviewStarColor.classList.remove(`star${pos}Active`);
    });
    star.addEventListener('click', evt => {
      if (!rating) {
        userReviewStarColor.classList.remove(`star${pos}Active`);
        userReviewStarColor.classList.add(`star${pos}ActivePermanent`);
        userReviewForm.classList.add('selected');
        userReviewForm.classList.remove('notSelected');
        rating = pos;
      }
      else {
        userReviewStarColor.classList.remove(`star${pos}ActivePermanent`);
        userReviewStarColor.classList.add(`star${pos}Active`);
        userReviewForm.classList.add('notSelected');
        userReviewForm.classList.remove('selected');
        rating = null;
      }
    });
  });

  // TODO gather form data and handle submit
  const userReviewForm = document.getElementById('userReviewForm');

  userReviewForm.addEventListener('submit', evt => {
      evt.preventDefault();
  });


  
});
