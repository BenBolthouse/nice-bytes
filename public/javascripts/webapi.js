/**
 * Utilities to perform RESTful requests to the web API.
 */

/**
 * Sends post request with JSON payload to web API.
 * @param {Relative URI path to API endpoint} endpoint
 * @param {Object payload for the post} payload
 * @param {Callback on 200 range responses} success
 * @param {Callback on 400 and 500-range responses} error
 * @param {DOM event target} target
 */
export const post = async (endpoint, payload, success, error, target) => {
  try {
    if (!endpoint || !payload)
      throw new Error("Arguments endpoint and payload are required");
    await fetch(endpoint, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return success(target);
  } catch (e) {
    return error(target, e);
  }
};

/**
 * Sends get request to web API.
 * @param {Relative URI path to API endpoint} endpoint
 * @param {Callback on 200 range responses} success
 * @param {Callback on 400 and 500-range responses} error
 * @param {DOM event target} target
 */
export const get = async (endpoint, success, error, target) => {
  let data;
  try {
    data = await fetch(endpoint, {
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });
    return success(target, data);
  } catch (e) {
    return error(target, e);
  }
};

/**
 * Sends put request with JSON payload to web API.
 * @param {Relative URI path to API endpoint} endpoint
 * @param {Object payload for the post} payload
 * @param {Callback on 200 range responses} success
 * @param {Callback on 400 and 500-range responses} error
 * @param {DOM event target} target
 */
export const put = async (endpoint, payload, success, error, target) => {
  try {
    await fetch(endpoint, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return success(target);
  } catch (e) {
    return error(target, e);
  }
};

/**
 * Sends delete request to web API.
 * @param {Relative URI path to API endpoint} endpoint
 * @param {Callback on 200 range responses} success
 * @param {Callback on 400 and 500-range responses} error
 * @param {DOM event target} target
 */
export const destroy = async (endpoint, success, error, target) => {
  let data;
  try {
    data = await fetch(endpoint, {
      method: "delete",
      headers: {
        Accept: "application/json",
      },
    });
    return success(target, data);
  } catch (e) {
    return error(target, e);
  }
};
