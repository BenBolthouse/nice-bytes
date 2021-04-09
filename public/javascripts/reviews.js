/**
 * Module loaded on views/includes/reviews.pug
 */

import { destroy } from "./webapi.js";

// sync form to javascript
document.addEventListener("DOMContentLoaded", () => {
  const deleteReviewBtn = document.getElementById("deleteReviewBtn");

  if (deleteReviewBtn) {
    deleteReviewBtn.addEventListener("click", async () => {
      const reviewId = deleteReviewBtn.getAttribute("reviewId");

      return await destroy(
        `/api/spots/review/${reviewId}`,
        success,
        error,
        reviewId
      );
    });

    const success = (reviewId) => {
      const review = document.getElementById(`review__${reviewId}`);
      review.parentNode.removeChild(review);
    };
    const error = () => {};
  }

  const editReviewBtn = document.getElementById('editReviewBtn');
  const editReviewForm = document.getElementById('editReviewForm');
  const editCancelBtn = document.getElementById('editCancel');
  const editSubmitBtn = document.getElementById('editSubmit');

  if(editReviewBtn) {
    editReviewBtn.addEventListener('click', () => {
      editReviewForm.classList.toggle('hidden')
    })
    editCancelBtn.addEventListener('click', () => {
      editReviewForm.classList.toggle('hidden')
    })
  }
});
