<template>
  <div class="flex flex-1 flex-col bg-white ">
      <h1 class="text-center flex-1 text-4xl font-semibold">Connexion</h1>
    <form v-on:submit.prevent="onSubmit" class="flex flex-col">
      <label for="fname">Username</label>
      <input v-model="username" class="border-2 border-black">
      <label for="lname">Password</label>
      <input v-model="password"  class="border-2 border-black">
      <button class="bg-footerBlue" @click="onSubmit" >Submit</button>
    </form>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    onSubmit() {
      try{
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
              console.log(data)
              console.log("oue")
            })
      }catch (e) {
        e.preventDefault()
        console.log(e)
      }
    }
  }
}
</script>