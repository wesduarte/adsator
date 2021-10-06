import axios from 'axios';

import { GET_ADVERTISEMENTS } from './types';

const BASE_ENDPOINT = '/api/advertisements/';

export const getAdvertisements = () => (dispatch) => {
  
  axios
    .get('/api/advertisements')
    .then((res) => {
      dispatch({
        type: GET_ADVERTISEMENTS,
        payload: res.data,
      });
    })
    .catch((err) => { console.log(err)} );
};
