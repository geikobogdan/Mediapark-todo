import {fetchData} from './basicFetch';

export const getPhotoBySearch = (query = '') => fetchData({url: 'search/photos', params: `&query=${query}`});
export const updatePhotoLike = (method, id) => fetchData({url: `photos/${id}/like`, method});
