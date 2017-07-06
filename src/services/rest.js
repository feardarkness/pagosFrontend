/* eslint class-methods-use-this: 0 */
import axios from 'axios';
import Auth from '@/auth';

export default class RestService {

  RUTA = '';

  constructor() {
    axios.defaults.baseURL = `http://127.0.0.1:8081${this.RUTA}`;
  }

  login(usuario, password) {
    return axios.post('/autenticacion', {
      usuario,
      password,
    });
  }

  obtenerEntidades() {
    // return axios.get('/entidades?estado=VERIFICADO&limite=-1', {
    return axios.get('/entidades?estado=VERIFICADO', {
      headers: {
        Authorization: `JWT ${Auth.obtenerToken()}`,
      },
    });
  }
}
