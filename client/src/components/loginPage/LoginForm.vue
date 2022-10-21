<template>
  <div class="flex flex-col bg-white border-2 border-gray-200 shadow-2xl">
    <h1 class="text-center flex-1 text-4xl font-semibold">Connexion</h1>
    <form v-on:submit.prevent="onSubmit" class="flex flex-col">
      <label>Username</label>
      <input v-model="username" class="border-2 border-black">
      <label>Password</label>
      <input v-model="password" type="password" class="border-2 border-black">
      <button class="bg-footerBlue text-white" v-if="password === '' || username===''" disabled>Submit</button>
      <button v-else class="bg-footerBlue text-white" @click="onSubmit">Submit</button>
      <div class="text-red-500" v-if="error">{{error}}</div>
    </form>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'LoginForm',
  /*props: {
    login: {
      type: Function,
      required: true,
    },
  },*/
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
              router.push({ path: '/' });
            }
            else{
              console.log(data);
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