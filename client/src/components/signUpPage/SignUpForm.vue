<template>
  <div class="flex flex-1 justify-center bg-white border-2 border-gray-200 shadow-2xl">
    <div class="max-w-3xl flex flex-1 flex-col justify-center">
      <h1 class="text-center text-4xl font-semibold pb-8">Inscription</h1>
      <form v-on:submit.prevent="onSubmit" class="flex flex-col">
        <label>Nom d'utilisateur</label>
        <input v-model="username" class="border-2 border-black">
        <label>Mot de passe</label>
        <input v-model="password" type="password" class="border-2 border-black">
        <label>Confirmation du mot de passe</label>
        <input v-model="passwordConfirmation" type="password" class="border-2 border-black">
        <button class="bg-footerBlue text-white" v-if="username==='' || password==='' || passwordConfirmation===''" disabled>Valider</button>
        <button v-else class="bg-footerBlue text-white" @submit.prevent="onSubmit">Valider</button>
        <div class="text-red-500" v-if="error">{{error}}</div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      error: '',
    }
  },
  methods: {
    onSubmit() {
      if(this.password!==this.passwordConfirmation){
        this.error="Le mot de passe et la confirmation doivent être identiques";
        return;
      }
      fetch('http://localhost:3300/user/signup', {
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
            if(data.message==="User created !"){
              router.push({ path: '/login' });
            }
            else if(data.error==="User already exist !"){
              this.error= "Cet utilisateur existe déjà !";
            }
          })
    }
  }
}
</script>