/**
 * Utilities to perform RESTful requests to the web api.
 */

/**
 * Asynchronously adds a spot to a collection. User must be authenticated.
 * Invokes optional callbacks on success or error.
 * @param {Integer id value of the collection to add to} collectionId
 * @param {Integer id value of the spot to add to a collection} spotId
 * @param {DOM event target} target
 * @param {Callback on 200 range responses} success
 * @param {Callback on 400 and 500-range responses} error
 */
const post = async (collectionId, spotId, target, success, error) => {
  try {
    await fetch('/api/collections/spot', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        collectionId,
        spotId,
      }),
    });
    return success(target);
  } catch (e) {
    return error(target, e);
  }
};

export { post };
