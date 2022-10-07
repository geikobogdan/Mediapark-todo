export const setSearchQuery = inputValue => {
  const searchQueriesStr = window.localStorage.getItem('searchQueries');
  let searchQueriesArr = [];
  if (searchQueriesStr) {
    searchQueriesArr = searchQueriesStr.split(',');
    if (searchQueriesArr.includes(inputValue)) {
      const index = searchQueriesArr.findIndex(value => value === inputValue);
      searchQueriesArr.splice(index, 1);
      searchQueriesArr.unshift(inputValue);
    } else if (searchQueriesArr.length < 5) {
      searchQueriesArr.unshift(inputValue);
    } else {
      searchQueriesArr.unshift(inputValue);
      searchQueriesArr.pop();
    }
  } else {
    searchQueriesArr.push(inputValue);
  }
  window.localStorage.setItem('searchQueries', searchQueriesArr.join(','));
  return searchQueriesArr;
};
