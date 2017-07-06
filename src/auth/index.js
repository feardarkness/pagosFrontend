export default {
  usuario: {
    autenticado: false,
  },
  verificarLogueado() {
    const item = localStorage.getItem('app_token');
    if (item !== null && item !== undefined) {
      this.usuario.autenticado = true;
    }
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
