/**
 * Client-side utilities for ajax requests to NiceBytes collection API.
 */

document.addEventListener('DOMContentLoaded', evt => {
  const addToCollectionButtons = document.querySelectorAll('.addToCollection');

  addToCollectionButtons.forEach(elem => {
    // console.log(elem);
    const collectionId = elem.getAttribute('collectionId');
    const spotId = elem.getAttribute('spotId');
    elem.addEventListener('click', evt =>
      addToCollection(collectionId, spotId)
    );
  });

  const addToCollection = async (collectionId, spotId) => {
    const result = await fetch('http://localhost:8080/api/collections/spot', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        collectionId,
        spotId,
      }),
    });
    // console.log("collectionId", collectionId, "spotId", spotId)
  };
});
