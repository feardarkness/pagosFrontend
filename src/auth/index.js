export default {
  usuario: {
    autenticado: false,
  },
  verificarLogueado() {
    const token = this.obtenerToken();
    if (token !== null && token !== undefined) {
      this.usuario.autenticado = true;
    }
  },
  obtenerToken() {
    return localStorage.getItem('app_token');
  },
  establecerToken(token) {
    localStorage.setItem('app_token', token);
    this.usuario.autenticado = true;
  },
  removerToken() {
    localStorage.removeItem('app_token');
    this.usuario.autenticado = false;
  },
};
