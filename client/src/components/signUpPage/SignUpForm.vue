<template>
  <div class="flex flex-1 justify-center">
    <div class="max-w-3xl flex flex-1 flex-col justify-center">
      <h1 class="text-center text-4xl font-semibold pb-6">Inscription</h1>
      <form v-on:submit.prevent="onSubmit" class="flex flex-col">
        <label>Nom d'utilisateur</label>
        <input v-model="username" class="form">
        <label>Mot de passe</label>
        <input v-model="password" type="password" class="form">
        <label>Confirmation du mot de passe</label>
        <input v-model="passwordConfirmation" type="password" class="form">
        <br>
        <button class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-400 rounded" v-if="username==='' || password==='' || passwordConfirmation===''" disabled>Valider</button>
        <button v-else class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-400 rounded" @submit.prevent="onSubmit">Valider</button>
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
</style>