import axios from 'axios';
import { BASE_URL } from '../constants/api_const';

export const getFromServer = async () => {
  const responce = await axios.get(BASE_URL);
  const users = responce.data;
  return users;
};
