<template>
  <div class="flex flex-1 justify-center">
    <div class="max-w-3xl flex flex-1 flex-col justify-center">
      <h1 class="text-center text-4xl font-semibold pb-8">Connexion</h1>
      <form v-on:submit.prevent="onSubmit" class="flex flex-col">
        <label>Nom d'utilisateur</label>
        <input v-model="username" class="form">
        <label>Mot de passe</label>
        <input v-model="password" type="password" class="form">
        <br>
        <button class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-400 rounded" v-if="password === '' || username===''" disabled>Valider</button>
        <button v-else class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-400 rounded" @submit.prevent="onSubmit">Valider</button>
        <div class="text">Vous n'avez pas de compte ?<RouterLink class="text-blue-500" to="/signup"> En créer un !</RouterLink></div>
        <div class="text-red-500" v-if="error">{{error}}</div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    onSubmit() {
      fetch('http://localhost:3300/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      })
          .then((res) => res.json())
          .then((data) => {
            if(data.token){
              localStorage.setItem('username', this.username);
              localStorage.setItem('token', data.token);
              window.dispatchEvent(new CustomEvent('localstorage-changed', {
                detail: {
                  storage: localStorage.getItem('username')
                }
              }));
              router.go(-1);
            }
            else{
              if(data.error==="User does not exist !"){
                this.error= "L'utilisateur n'existe pas !";
              }
              else if(data.error==="Wrong password !"){
                this.error= "Mot de passe incorrect";
              }
            }
          })
    }
  }
}
</script>

<style scoped>
.form {
    width: 100%;
    height: 40px;
    border: 1px solid rgb(39, 37, 49);
    border-radius: 7px;
    background-color: #e8e8f3;
    color: #000000;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

label{
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}
.text{
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  text-align: center;
  padding-top: 10px;
}
</style>