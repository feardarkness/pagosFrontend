import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import UsuarioNominal from '@/components/UsuarioNominal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/usuarioNominal',
      name: 'usuarioNominal',
      component: UsuarioNominal,
    },
  ],
});
