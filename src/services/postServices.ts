/* eslint-disable prettier/prettier */
import axios from 'axios';
import {GetPostResponse} from '../types/servicesTypes';

export const getPostService = async () => {
  try {
    const response = await axios.get<GetPostResponse>(
      'https://jsonplaceholder.typicode.com/posts',
    );
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log({error});
  }
};
