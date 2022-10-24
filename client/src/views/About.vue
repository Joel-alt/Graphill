<template>  
<div class="flex flex-col pt-10 mb-8 pl-20 pr-20">
  
  <h2 class="mb-4 text-2xl font-semibold text-center capitalize">
    <img src="../assets/efrei.png" class="max-w-sm h-20 w-100 align-middle inline-block" alt="">
  </h2>

  <div class="mt-10 grid grid-cols-1 gap-20 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
    <div class="flex items-start border-4 border-neutral-800 rounded-2xl shadow-thick p-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100 ">
        <img src="../assets/cat1.png" class="max-w-sm h-11 w-11" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-extrabold text-2xl">Joël</h2>
        <p class="mt-2 text-md">Développer connexion et déconnexion...</p>
        <a class="mt-2 text-sm hover:text-violet-600" href="https://github.com/Joel-alt">👉 En savoir plus</a>
      </div>
    </div>

    <div class="flex items-start border-4 border-neutral-800 rounded-2xl shadow-thick p-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat2.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-extrabold text-2xl">Bastien</h2>
        <p class="mt-2 text-md">Développer illustrations...</p>
        <a class="mt-2 text-sm hover:text-violet-600" href="https://github.com/bastien707">👉 En savoir plus</a>
      </div>
    </div>

    <div class="flex items-start border-4 border-neutral-800 rounded-2xl shadow-thick p-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat3.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-extrabold text-2xl ">Julien</h2>
        <p class="mt-2 text-md">Développer système d'enchère...</p>
        <a class="mt-2 text-sm hover:text-violet-600" href="https://github.com/Sl33pyCl0ud">👉 En savoir plus</a>
      </div>
    </div>

    <div class="flex items-start border-4 border-neutral-800 rounded-2xl shadow-thick p-4 ">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat4.png" class="max-w-sm h-9 w-9" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-extrabold text-2xl">Huiting</h2>
        <p class="mt-2 text-md">Développer form...</p>
        <a class="mt-2 text-sm hover:text-violet-600" href="https://github.com/HuitingFENG">👉 En savoir plus</a>
      </div>
    </div>
  </div>

  <div class="px-10 pt-8 mt-20 pb-5 mb-3 grid-cols-1 gap-5 max-w-s w-full border-4 border-neutral-800 rounded-3xl shadow-thick">
    <div class="mb-4 flex h-12 w-12 flex-col items-center justify-center rounded-full border border-100"><img src="../assets/member.png" class="max-w-sm h-9 w-9" alt=""></div>
    <div class="block text-gray-700 text-base font-semibold">Contactez-nous ici (graphill.efrei@gmail.com) :</div>
    <form v-on:submit.prevent="onSubmit"><br />
        <select class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3  text-black leading-tight focus:outline-none focus:shadow-outline" name='genre' v-model="genre" placeholder="genre" required>
          <option value="Madame">Madame</option>
          <option value="Monsieur">Monsieur</option>
        </select>
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3  text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastname" v-model="lastname" placeholder="Nom de famille" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3  text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="firstname" v-model="firstname" placeholder="Prénom" required/> <br />
        <input class="mb-6 shadow apprearance-none border rounded w-full py-3 px-3  text-black leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" v-model="email" placeholder="Email" required/> <br />
        <textarea class="mb-6 h-100 shadow apprearance-none border rounded w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" name="message" v-model="message" placeholder="Message" required/> <br />
        <button class="submit" @submit.prevent="onSubmit"> Envoyer </button> 
    </form>
  </div>
 
  <Modal v-show="showModal" @close-modal="showModal = false"/>
</div>
</template>

<script>
import emailjs from '@emailjs/browser';
import Modal from '@/components/submit/Modal.vue'

export default {
  name: 'AboutView',
  components: {
    Modal,
  },
  data(){
      return {
          lastname: '',
          firstname: '',
          email: '',
          message: '',
          genre: '',
          showModal: false,
      }
  },
  methods: {
      onSubmit(){
          var emailData = {
              service_id: 'service_y0ttors',
              template_id: 'template_mhmqb3s',
              public_key: 'IjkwnJhq__n82EB-v',
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
          //alert("Bonjour, " + this.genre + " " + this.firstname + " " + this.lastname + ". Votre message a été reçu par l'équipe Graphill et vous aurez la réponse d'ici quelques jours. Merci !")
          this.lastname = ''
          this.firstname = ''
          this.email = ''
          this.message = ''
          this.genre = ''
          this.showModal = true
      },
  }
}
</script>

<style scoped>
.submit {
    margin: 1rem;
    border: 2px solid #242324;
    border-radius: 1.5rem;
    box-shadow: #242423 4px 4px 0 0;
    color: #242423;
    padding: 0 18px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    padding: 1rem 2rem;
    background-color: #8f1dfd;
    color: whitesmoke;
    font-weight: 700;
    font-size: larger;
}

.submit:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
}
</style>