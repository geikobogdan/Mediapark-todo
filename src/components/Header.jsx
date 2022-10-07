import {ButtonPrimary, Input} from 'elements';
import {useState, useEffect, useRef} from 'react';
import {setSearchQuery} from 'helpers';
import {InputSearchSelect} from './InputSearchSelect';

export function Header({className = '', handleGetPhotos, isLoading = false}) {
  const [previousInputValue, setPreviousInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const divRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [previousSearchQueries, setPreviousSearchQueries] = useState(
    window.localStorage.getItem('searchQueries')?.split(',') || [],
  );
  useEffect(() => {
    if (inputValue && isLoading) {
      const searchQueries = setSearchQuery(inputValue);
      setPreviousSearchQueries(searchQueries);
    }
  }, [isLoading, inputValue]);

  const handleOutsideClick = e => {
    const path = e.path || (e.composedPath && e.composedPath()); // for firefox
    if (!path.includes(divRef.current)) setInputFocus(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearch = async value => {
    if (previousInputValue !== value && value) {
      setPreviousInputValue(value);
      await handleGetPhotos(value);
    }
  };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div ref={divRef} className="w-[50%] relative">
        <Input onFocus={() => setInputFocus(true)} value={inputValue} setValue={setInputValue} />
        {inputFocus && previousSearchQueries.length ? (
          <InputSearchSelect
            items={previousSearchQueries}
            setInputValue={setInputValue}
            setInputFocus={setInputFocus}
            handleSearch={handleSearch}
          />
        ) : (
          ''
        )}
      </div>
      <ButtonPrimary disabled={isLoading} onClick={() => handleSearch(inputValue)} className="ml-10">
        Search
      </ButtonPrimary>
    </div>
  );
}
