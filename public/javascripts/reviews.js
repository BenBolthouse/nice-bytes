/**
 * Module loaded on views/includes/reviews.pug
 */

import { post, get, put, destroy } from "./webapi.js";

// sync form to javascript
document.addEventListener("DOMContentLoaded", (evt) => {
  const editReviewBtn = document.getElementById("editReviewBtn");
  const deleteReviewBtn = document.getElementById("deleteReviewBtn");

  deleteReviewBtn.addEventListener("click", async (e) => {
    const reviewId = deleteReviewBtn.getAttribute("reviewId");
    const spotId = deleteReviewBtn.getAttribute("spotId");
    return await destroy(
      `/api/spots/review/${reviewId}`,
      success,
      error,
      reviewId
    );
  });

  const success = (reviewId, data) => {
    const review = document.getElementById(`review__${reviewId}`);
    review.parentNode.removeChild(review);
  };
  const error = (target, error) => {
    console.log("delete error");
  };
});
