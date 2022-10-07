import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import like from 'icons/icons8-like-50.png';
import dislike from 'icons/icons8-dislike-50.png';
import {useIsLogIn} from 'hooks/useIsLogIn';
import {updatePhotoLike} from 'api';
import {useState} from 'react';

export function Item({item, className = ''}) {
  const {isLogIn} = useIsLogIn();
  const [liked, setLiked] = useState(item.liked_by_user);
  const handleClick = () => {
    const method = liked ? 'delete' : 'post';
    setLiked(!liked);
    updatePhotoLike(method, item.id);
  };
  return (
    <div className={`flex ${className}`}>
      <a href={item.urls.full} target="_blank">
        <div className="hover:scale-105 transition duration-500 cursor-pointer">
          <LazyLoadImage src={item.urls.regular} width={240} height={240} alt="Item Image" effect="blur" />
        </div>
      </a>
      {isLogIn ? (
        <div onClick={handleClick} className="w-8 h-8 ml-5 cursor-pointer">
          <img src={liked ? dislike : like} alt="like" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
