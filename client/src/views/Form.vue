<template>
    <div class="px-10 pt-8 pb-5 mb-3 flex flex-col items-center max-w-s">
        <form v-if="isConnected" v-on:submit.prevent="onSubmit" class="form"><br />
            <h1
                class="m-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500">
                Formulaire</h1>
            <div class="mb-6 block text-gray-500 text-lg">Veuillez remplir ce formulaire pour
                demander un devis
            </div>
            <input
                class="mb-6 shadow apprearance-none border rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="text" name="lastname" v-model="lastname" placeholder="Nom de famille" required /> <br />
            <input
                class="mb-6 shadow apprearance-none border rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="text" name="firstname" v-model="firstname" placeholder="Prénom" required /> <br />
            <input
                class="mb-6 shadow apprearance-none border rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="text" name="artistname" v-model="artistname" placeholder="Nom d'artiste" required /> <br />
            <input
                class="mb-6 shadow apprearance-none border rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="email" name="email" v-model="email" placeholder="Email" required /> <br />
            <input
                class="mb-6 shadow apprearance-none border rounded-lg w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                type="text" name="hostingTime" v-model="hostingTime" placeholder="Durée de l'hébergement" required />
            <br />
            <button class="submit" @submit.prevent="onSubmit">
                <div class="flex items-center sendanim">
                    <p>Envoyer</p>
                    <img src="@/assets/send-48.png" class="w-6 h-6 ml-3">
                </div>
            </button>
        </form>
        <div v-else class="form z-0" id="container">
            <img class="rounded-xl md:max-w-md hover z-10">
            <a class="connect z-10" href="/login">Connect to submit the form 👀</a>
            <div class="blur">
                <h1
                    class="m-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500">
                    Formulaire</h1>
                <div class="mb-6 block blur-md text-gray-500 text-lg">Veuillez remplir ce formulaire pour
                    demander un devis
                </div>
                <p class="w-full h-10 border-2" /> <br />
                <p class="w-full h-10 border-2" /> <br />
                <p class="w-full h-10 border-2" /> <br />
                <p class="w-full h-10 border-2" /> <br />
                <p class="w-full h-10 border-2" />
                <br />
                <button class="submit cursor-default">
                    <div class="flex items-center">
                        <p>Envoyer</p>
                        <img src="@/assets/send-48.png" class="w-6 h-6 ml-3">
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'FormView',
    data() {
        return {
            lastname: '',
            firstname: '',
            artistname: '',
            email: '',
            hostingTime: '',
            isConnected: false,
        }
    },
    methods: {
        onSubmit() {
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
                  var emailData = {
                    service_id: 'service_bjyjicy',
                    template_id: 'template_jr3rz6m',
                    public_key: 'mYDFRnd_mFESSuUPi',
                    templateParams:{
                       artistname: this.artistname,
                       email: this.email
                    }
              };
              emailjs.send(emailData.service_id,emailData.template_id,emailData.templateParams,emailData.public_key)
              .then((result)=>{console.log('success!', result.text);}, (error) => {console.log('failed...', error.text);});
                  alert("Bonjour, " + this.firstname + " " + this.lastname + ". Votre demande a été prise en compte et vous aurez le devis d'ici quelques jours. Merci !")
                  this.lastname = ''
                  this.firstname = ''
                  this.artistname = ''
                  this.email = ''
                  this.hostingTime = ''
              }
          })
        },
    },
    created() {
        window.addEventListener('user-has-disconnected', (event) => {
            this.isConnected = false;
        });
        if (localStorage.getItem('token')) {
            this.isConnected = true;
        }
    }

}
</script>

<style scoped>
.form,
.submit, .submitfake {
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
}

.submit, .submitfake {
    padding: 1rem 2rem;
    background-color: #8f1dfd;
    color: whitesmoke;
    font-weight: 700;
    font-size: larger;
    transition: all 0.2s ease-in-out;
}

.submitfake {
    cursor: default;
}

.submit:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
}

.connect {
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50%;
    height: fit-content;
    max-height: min-content;
    font-size: 30px;
    display: none;
}

#container {
    position: relative;
}

.connect {
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50%;
    height: fit-content;
    max-height: min-content;
    font-size: 30px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: #242423 4px 4px 0 0;
    color: #242423;
    border: 2px solid #242324;
}

.connect:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
}
</style>
