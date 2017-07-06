import Vue from 'vue';
import Router from 'vue-router';
import UsuariosNominales from '@/components/UsuariosNominales';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/usuariosNominales',
      name: 'usuariosNominales',
      component: UsuariosNominales,
      meta: {
        necesitaAuth: true,
      },
    },
    {
      path: '/',
      redirect: '/usuariosNominales',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        necesitaAuth: false,
      },
    },
  ],
});
