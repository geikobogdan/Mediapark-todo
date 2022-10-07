import {ButtonPrimary} from 'elements';
import {ACCESS_KEY} from 'config';
import {useIsLogIn} from 'hooks/useIsLogIn';

export function AuthBtns({className = ''}) {
  const HOST = window.location.href.split('?')[0];
  const {isLogIn, setIsLogIn} = useIsLogIn();
  return (
    <div className={`${className} flex justify-end`}>
      {!isLogIn ? (
        <a
          href={`https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&response_type=code&redirect_uri=${HOST}&scope=public+write_likes`}
          target="_blank">
          <ButtonPrimary>Login</ButtonPrimary>
        </a>
      ) : (
        <ButtonPrimary
          onClick={() => {
            setIsLogIn(false);
          }}>
          Logout
        </ButtonPrimary>
      )}
    </div>
  );
}
