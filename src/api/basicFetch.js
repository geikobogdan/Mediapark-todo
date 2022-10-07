import {ACCESS_KEY, API_URL} from 'config';

export const fetchData = ({url, params = '', method = 'get', _body}) => {
  const unsplashToken = window.localStorage.getItem('unsplashToken');
  const headers = {};
  if (unsplashToken) headers.Authorization = `Bearer ${unsplashToken}`;
  return (
    fetch(`${API_URL}/${url}?client_id=${ACCESS_KEY}${params}`, {
      method,
      headers,
    })
      // eslint-disable-next-line no-console
      .catch(err => console.warn(err))
      .then(response => response.json())
  );
};
