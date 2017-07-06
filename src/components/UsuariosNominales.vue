<template>
  <div class="hello">
    <form v-on:submit.prevent>
      <div class="field">
        <label class="label" for="usuario">Usuario:</label>
        <p class="control has-icons-left">
          <input class="input" v-model="usuario.usuarioNominal.usuarioLogin" name="usuario" value="" placeholder="Usuario para ingresar a la aplicación"></input>
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="password">Password:</label>
        <p class="control has-icons-left">
          <input class="input" type="password" v-model="usuario.usuarioNominal.password" name="password" value="" placeholder="Password para ingresar a la aplicación"></input>
          <span class="icon is-small is-left">
            <i class="fa fa-key"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="ci">CI:</label>
        <p class="control has-icons-left">
          <input class="input" v-model="usuario.usuarioNominal.persona.ci" name="ci" value="" placeholder="Cedula de Identidad"></input>
          <span class="icon is-small is-left">
            <i class="fa fa-vcard"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="fecha_nacimiento">Fecha de Nacimiento:</label>
        <p class="control has-icons-left">
          <input class="input" v-model="usuario.usuarioNominal.persona.fechaNacimiento" name="fecha_nacimiento" value="" placeholder="Fecha de nacimiento (dd/mm/yyyy)"></input>
          <span class="icon is-small is-left">
            <i class="fa fa-calendar"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="complemento">Complemento:</label>
        <p class="control has-icons-left">
          <input class="input" v-model="usuario.usuarioNominal.persona.complemento" name="complemento" value="" placeholder="Complemento del Documento de Identidad"></input>
          <span class="icon is-small is-left">
            <i class="fa fa-question"></i>
          </span>
        </p>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="entidad">Entidad:</label>
        </div>
        <div class="field-body">
          <p class="control">
            <span class="select">
              <select v-model="usuario.entidad.id" name="entidad">
                <option value="0">Ninguna Entidad Seleccionada</option>
                <option v-for="entidad of entidades" :value="entidad.id">{{entidad.descripcion}}</option>
              </select>
            </span>
          </p>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="rol">Rol:</label>
        </div>
        <div class="field-body">
          <p class="control">
            <span class="select">
              <select v-model="usuario.rol.id" name="rol">
                <option value="0" selected>Ningún Rol Seleccionado</option>
                <option value="1">Administrador</option>
                <option value="2">Usuario</option>
              </select>
            </span>
          </p>
        </div>
      </div>
      <button v-bind:class="{ 'is-loading': isLoading }" class="button is-primary" v-on:click="registrar()" v-bind:disabled="buttonEnabled === 'disabled'? true: false">
      <span>Registrar</span>
      <span class="icon is-small">
        <i class="fa fa-send"></i>
      </span>
    </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return {
      isLoading: false,
      entidades: [],
      usuario: {
        transicion: '',
        usuarioNominal: {
          usuarioLogin: '',
          password: '',
          persona: {
            ci: '',
            fechaNacimiento: '',
            complemento: '',
          },
        },
        entidad: {
          id: 0,
        },
        rol: {
          id: 0,
        },
      },
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
    registrar() {
      this.isLoading = true;
    },
  },
  created() {
    this.$http.obtenerEntidades()
        .then((result) => {
          this.entidades = result.data.datos;
          console.log('===============================================================');
          console.log(result.data.datos);
          console.log('===============================================================');
        })
        .catch((err) => {
          console.log('===============================================================');
          console.log(err);
          console.log('===============================================================');
        });
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
