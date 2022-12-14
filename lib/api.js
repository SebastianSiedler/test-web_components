'use strict';

/**
 *
 * @param {Object} params
 * @param {string} params.baseURL
 */
const useFetchApi = (params) => {
  const { baseURL } = params;

  const headers = { 'Content-Type': 'application/json' };

  /**
   *
   * @param {string} path
   */
  const get = async (path) => {
    return fetch(path);
  };

  return {
    defaults: {
      baseURL,
    },
    get,
  };
};

const stub = async () => {
  return {
    a: 4,
  };
};

export const api = useFetchApi({ baseURL: 'my/api/...' });
