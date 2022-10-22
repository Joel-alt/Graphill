<template>
  <div class="flex flex-1 justify-center bg-white border-2 border-gray-200 shadow-2xl">
    <div class="max-w-3xl flex flex-1 flex-col justify-center">
      <h1 class="text-center text-4xl font-semibold pb-8">Connexion</h1>
      <form v-on:submit.prevent="onSubmit" class="flex flex-col">
        <label>Nom d'utilisateur</label>
        <input v-model="username" class="border-2 border-black">
        <label>Mot de passe</label>
        <input v-model="password" type="password" class="border-2 border-black">
        <button class="bg-footerBlue text-white" v-if="password === '' || username===''" disabled>Valider</button>
        <button v-else class="bg-footerBlue text-white" @submit.prevent="onSubmit">Valider</button>
        <div>Vous n'avez pas de compte ?<RouterLink class="text-blue-500" to="/signup"> En créer un !</RouterLink></div>
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
              router.push({ path: '/' });
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