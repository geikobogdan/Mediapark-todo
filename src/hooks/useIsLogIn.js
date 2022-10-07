import {useEffect, useState} from 'react';
import {SECRET_KEY, ACCESS_KEY} from 'config';
import {postAuth} from 'api';

const HOST = window.location.href.split('?')[0];
const unsplashToken = window.localStorage.getItem('unsplashToken');
const params = new URLSearchParams(window.location.search);

export const useIsLogIn = () => {
  const [isLogIn, setIsLogIn] = useState(null);
  useEffect(() => {
    const codeParam = params.get('code');
    if (unsplashToken) {
      setIsLogIn(true);
    } else if (codeParam && !unsplashToken) {
      const params = `?client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}&code=${codeParam}&grant_type=authorization_code&redirect_uri=${HOST}`;
      try {
        postAuth(params).then(response => {
          if (response && response?.access_token) {
            window.localStorage.setItem('unsplashToken', response.access_token);
            setIsLogIn(true);
          }
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    }
  }, []);
  useEffect(() => {
    if (isLogIn === false) {
      window.localStorage.removeItem('unsplashToken');
      setIsLogIn(null);
      window.location.href = HOST;
    }
  }, [isLogIn]);
  return {isLogIn, setIsLogIn};
};
