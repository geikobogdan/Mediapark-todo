import {useState} from 'react';
import {AuthBtns, Header, ItemsList} from 'components';
import {LoadingSpinner} from 'elements';
import {getPhotoBySearch} from 'api';

export function MainLayout({className}) {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const handleGetPhotos = async inputValue => {
    firstLoad && setFirstLoad(false);
    setIsLoading(true);
    try {
      const response = await getPhotoBySearch(inputValue);
      response?.results && response?.results.length ? setItems(response?.results) : setItems([]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`flex flex-col bg-lightBlue p-10 ${className}`}>
      <AuthBtns className="mb-10" />
      <Header handleGetPhotos={handleGetPhotos} isLoading={isLoading} />
      <div className="min-h-[50vh] mt-10 flex items-center justify-center">
        {isLoading ? <LoadingSpinner /> : <ItemsList firstLoad={firstLoad} items={items} />}
      </div>
    </div>
  );
}
