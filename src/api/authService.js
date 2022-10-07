export const postAuth = (params = '') =>
  fetch(`https://unsplash.com/oauth/token${params}`, {method: 'post'})
    // eslint-disable-next-line no-console
    .catch(err => console.warn(err))
    .then(response => response.json());
