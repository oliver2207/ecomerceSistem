import axios from 'axios';
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from './types';

import { REACT_APP_API_URL } from '../../../const/Const';

export const get_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
  
        const res = await axios.get(`${REACT_APP_API_URL}/api/category/list`, config)
         
        if(res.status === 200){
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}