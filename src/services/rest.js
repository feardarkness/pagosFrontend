/* eslint class-methods-use-this: 0 */
import axios from 'axios';

export default class RestService {

  constructor() {
    axios.defaults.baseURL = 'http://127.0.0.1:8081';
    axios.defaults.headers.common.Authorization = 'asdsadsadsadsadsadsa';
  }

  login(usuario, password) {
    return axios.post('/autenticacion', {
      usuario,
      password,
    });
  }
}
