/**
 * Module loaded on views/includes/reviews.pug
 */

 import { post, get, put, destroy } from './webapi.js';


// sync form to javascript
document.addEventListener('DOMContentLoaded', evt => {
  // handles the DOM star selection experience
  // let rating;

  // const userReviewStarColor = document.getElementById('userReviewStarColor');

  // [
  //   document.getElementById('userReviewStar1Selection'),
  //   document.getElementById('userReviewStar2Selection'),
  //   document.getElementById('userReviewStar3Selection'),
  //   document.getElementById('userReviewStar4Selection'),
  //   document.getElementById('userReviewStar5Selection'),
  // ].forEach((star, i) => {
  //   const pos = i + 1;
  //   star.addEventListener('mouseover', evt => {
  //     userReviewStarColor.classList.add(`star${pos}Active`);
  //   });
  //   star.addEventListener('mouseout', evt => {
  //     userReviewStarColor.classList.remove(`star${pos}Active`);
  //   });
  //   star.addEventListener('click', evt => {
  //     if (!rating) {
  //       userReviewStarColor.classList.remove(`star${pos}Active`);
  //       userReviewStarColor.classList.add(`star${pos}ActivePermanent`);
  //       // userReviewForm.classList.add('ratingSelected');
  //       // userReviewForm.classList.remove('ratingNotSelected');
  //       rating = pos;
  //     }
  //     else {
  //       userReviewStarColor.classList.remove(`star${pos}ActivePermanent`);
  //       userReviewStarColor.classList.add(`star${pos}Active`);
  //       // userReviewForm.classList.add('ratingNotSelected');
  //       // userReviewForm.classList.remove('ratingSelected');
  //       rating = null;
  //     }
  //   });
  // });

  // TODO gather form data and handle submit
  const userReviewForm = document.getElementById('userReviewForm');

  // userReviewForm.addEventListener('submit', evt => {
  //     evt.preventDefault();
  // });

  const editReviewBtn = document.getElementById('editReviewBtn')
  const deleteReviewBtn = document.getElementById('deleteReviewBtn')

  
  deleteReviewBtn.addEventListener('click', async e => {
    const reviewId = deleteReviewBtn.getAttribute('reviewId')

    return await destroy(`/api/spots/review/${reviewId}`);
  })
  
  

  
});
