<template>
  <div>
    <div class="field">
      <label class="label" for="usuario">Usuario:</label>
      <p class="control has-icons-left">
        <input class="input" v-model="usuariom" name="usuario" value="" placeholder="Usuario para ingresar a la aplicación"></input>
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label" for="password">Password:</label>
      <p class="control has-icons-left">
        <input v-on:keyup.13="ingresar()" class="input" v-model="passwordm" name="password" value="" type="password" placeholder="Password para ingresar a la aplicación"></input>
        <span class="icon is-small is-left">
          <i class="fa fa-key"></i>
        </span>
      </p>
      <p class="help is-danger">{{mensajeError}}</p>
    </div>
    <button v-bind:class="{ 'is-loading': isLoading }" class="button is-primary" v-on:click="ingresar()" v-bind:disabled="buttonEnabled === 'disabled'? true: false">
      <span>Ingresar</span>
      <span class="icon is-small">
        <i class="fa fa-send"></i>
      </span>
    </button>
  </div>
</template>

<script>
import Auth from '@/auth';
import router from '@/router';

export default {
  name: 'hello',
  data() {
    return {
      // cambiando los nombres solo para ubicar que se necesita v-model
      usuariom: '',
      passwordm: '',
      mensajeError: '',
      isLoading: false,
    };
  },
  computed: {
    buttonEnabled() {
      if (this.usuariom !== '' && this.passwordm !== '') {
        return 'enabled';
      }
      return 'disabled';
    },
  },
  methods: {
    ingresar() {
      this.isLoading = true;
      this.$http.login(this.usuariom, this.passwordm)
        .then((respuesta) => {
          Auth.establecerToken(respuesta.data.token);
          router.push('/usuariosNominales');
        })
        .catch((err) => {
          this.isLoading = false;
          if (Object.prototype.hasOwnProperty.call(err, 'response')) {
            if (err.response.status === 400) {
              this.mensajeError = 'Usuario o Contraseña Incorrectos';
              return;
            }
          }
          this.mensajeError = 'Ha ocurrido un problema grave, intente de nuevo en unos minutos o contactese con su administrador';
        });
    },
  },
  created() {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
