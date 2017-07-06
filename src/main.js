// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import RestService from '@/services/rest';
import Auth from '@/auth';
import App from './App';
import router from './router';

Auth.verificarLogueado();

Vue.config.productionTip = true;
Vue.prototype.$http = new RestService();
Vue.use(Buefy);

router.beforeResolve((to, from, next) => {
  if (to.meta.necesitaAuth) {
    if (Auth.usuario.autenticado) {
      return next();
    }
    return next('/login');
  }
  if (to.name === null) {
    return next('/login');
  }
  return next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
