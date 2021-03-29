/**
 * Module loaded on views/spot.pug.
 */

import { post, destroy } from "./webapi.js";

// handle adding spots to user collections
document.addEventListener("DOMContentLoaded", (evt) => {
  // get all buttons that add spots to default collections
  const addToCollectionButtons = document.querySelectorAll(".addToCollection");
  // click event listeners on each button to send a request to
  // the web API to update collection state
  addToCollectionButtons.forEach((btn) => {
    const _cid = btn.getAttribute("collectionId");
    const _sid = btn.getAttribute("spotId");
    const _req = { spotId: _sid, collectionId: _cid };
    btn.addEventListener("click", async (evt) => {
      // class provides styling to disable button during a fetch
      btn.classList.add("fetching");
      // get the current collected state from the attribute
      const _cld = btn.getAttribute("spotIsCollected") === "true";
      // conditionally post or delete collected state
      if (_cld) {
        return await destroy(`/api/collections/spot/${_sid}`, uncollected, error, btn);
      } else return await post("/api/collections/spot", _req, collected, error, btn);
    });
  });
  const collected = (target) => {
    target.classList.remove("fetching");
    target.classList.add("collected");
    target.setAttribute("spotIsCollected", "true");
  };
  const uncollected = (target) => {
    target.classList.remove("fetching");
    target.classList.remove("collected");
    target.setAttribute("spotIsCollected", "false");
  };
  const error = (target) => {
    target.innerHTML = "There was an error";
  };
});
