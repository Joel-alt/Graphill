<template>
<div class="px-10 pt-8 pb-5 mb-3 flex flex-col items-center max-w-s">
  <form v-on:submit.prevent="onSubmit" class="bg-white shadow-md rounded px-10 pt-8 pb-5 mb-3"><br />
        <div class="mb-6 block text-gray-700 text-base font-semibold capitalize">Veuillez remplir ce formulaire pour demander de devis :</div>
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastname" v-model="lastname" placeholder="Nom de famille" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="firstname" v-model="firstname" placeholder="Prénom" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="artistname" v-model="artistname" placeholder="Nom d'artiste" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" v-model="email" placeholder="Email" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="hostingTime" v-model="hostingTime" placeholder="Durée de l'hébergement" required/> <br />
        <button class="mb-6 bg-blue-500 hover:bg-footerBlue text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" @submit.prevent="onSubmit"> Envoyer </button> 
  </form>
</div>
</template>

<script>
export default {
  name: 'FormView',
  components: {
  },
  data(){
      return {
          lastname: '',
          firstname: '',
          artistname: '',
          email: '',
          hostingTime: '',
      }
  },
  methods: {
      onSubmit(){
          fetch('http://localhost:3300/forms/all', {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  lastname: this.lastname,
                  firstname: this.firstname,
                  artistname: this.artistname,
                  email: this.email,
                  hostingTime: this.hostingTime,
              }),
          }).then((res) => res.json())
          .then((data) => {
              if (data.message==="Form submited !"){
                  router.push({path: '/all'});
              }
          })
          alert("Bonjour, " + this.artistname + ". Votre demande a été prise en compte et vous aurez le devis d'ici quelques jours. Merci !")
          this.lastname = ''
          this.firstname = ''
          this.artistname = ''
          this.email = ''
          this.hostingTime = ''
      },
  }
}
</script>

