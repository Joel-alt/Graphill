<template>  
<div class="flex flex-col pt-10 mb-8 pl-20 pr-20">
  
  <h2 class="mb-4 text-2xl font-semibold text-center capitalize">
    <img src="../assets/efrei.png" class="max-w-sm h-20 w-100 align-middle inline-block" alt="">
  </h2>

  <div class="mt-10 grid grid-cols-1 gap-20 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100 ">
        <img src="../assets/cat1.png" class="max-w-sm h-11 w-11" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Joël</h2>
        <p class="mt-2 text-sm">Développer connexion et déconnexion...</p>
        <a class="text-blue-600 mt-2 text-sm underline" href="https://github.com/Joel-alt">Savoir plus</a>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat2.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Bastien</h2>
        <p class="mt-2 text-sm">Développer illustrations...</p>
        <a class="text-blue-600 mt-2 text-sm underline" href="https://github.com/bastien707">Savoir plus</a>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat3.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Julien</h2>
        <p class="mt-2 text-sm">Développer système d'enchère...</p>
        <a class="text-blue-600 mt-2 text-sm underline" href="https://github.com/Sl33pyCl0ud">Savoir plus</a>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat4.png" class="max-w-sm h-9 w-9" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Huiting</h2>
        <p class="mt-2 text-sm">Développer form...</p>
        <a class="text-blue-600 mt-2 text-sm underline" href="https://github.com/HuitingFENG">Savoir plus</a>
      </div>
    </div>
  </div>

  <div class="px-10 pt-8 mt-20 pb-5 mb-3 grid-cols-1 gap-5 max-w-s w-full rounded-xl w-full bg-white shadow-lg">
    <div class="mb-4 flex h-12 w-12 flex flex-col items-center justify-center rounded-full border border-100"><img src="../assets/member.png" class="max-w-sm h-9 w-9" alt=""></div>
    <div class="block text-gray-700 text-base font-semibold">Contactez-nous ici (efrei.graphill@gmail.com) :</div>
    <form v-on:submit.prevent="onSubmit"><br />
        <select class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" name='genre' v-model="genre" placeholder="genre" required>
          <option value="Madame">Madame</option>
          <option value="Monsieur">Monsieur</option>
        </select>
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastname" v-model="lastname" placeholder="Nom de famille" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="firstname" v-model="firstname" placeholder="Prénom" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" v-model="email" placeholder="Email" required/> <br />
        <textarea class="mb-6 h-100 shadow apprearance-none border rounded w-full py-3 px-3 text-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="message" v-model="message" placeholder="Message" required/> <br />
        <button class="mb-6 bg-blue-500 hover:bg-footerBlue text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" @submit.prevent="onSubmit"> Envoyer </button> 
    </form>
  </div>
 
</div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'AboutView',
  components: {
  },
  methods: {
      onSubmit(){
          var emailData = {
              service_id: 'service_bjyjicy',
              template_id: 'template_x9ctxin',
              public_key: 'mYDFRnd_mFESSuUPi',
              templateParams:{
                  firstname: this.firstname,
                  lastname: this.lastname,
                  email: this.email,
                  message: this.message,
                  genre: this.genre,
              }
          };
          emailjs.send(emailData.service_id,emailData.template_id,emailData.templateParams,emailData.public_key)
          .then((result)=>{
              console.log('success!', result.text);
          }, (error) => {console.log('failed...', error.text);});
          alert("Bonjour, " + this.genre + " " + this.firstname + " " + this.lastname + ". Votre message a été reçu par l'équipe Graphill et vous aurez la réponse d'ici quelques jours. Merci !")
          this.lastname = ''
          this.firstname = ''
          this.email = ''
          this.message = ''
          this.genre = ''
      },
  }
}
</script>
