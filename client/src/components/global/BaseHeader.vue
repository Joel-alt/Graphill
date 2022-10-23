<template>
  <header class="bg-slate-50">
    <div class="flex items-center flex-col sm:flex-row">
      <div>
        <router-link to="/" class="flex flex-1 ">
          <img src="@/assets/graphill-violet.png" class="md:max-w-sm" />
        </router-link>
        <p class="text-center text-lg font-extralight">Votre galerie d'art en ligne</p>
      </div>
      <ul class="flex flex-1 flex-wrap">
        <li class="flex flex-1 justify-end">
          <router-link v-if="username===null" to="/login" class="userbutton">Se connecter
          </router-link>
          <div @mouseover="onDeconnexion = true" @mouseleave="onDeconnexion = false" @click="onDeconnexion = false">
            <div v-if="username!==null && onDeconnexion===false" class="userbutton flex items-center">
              {{username}}
              <img src="@/assets/user-60.png" class="w-5 h-5 ml-5" />
            </div>
            <div v-if="username!==null && onDeconnexion===true" @click="deconnexion" class="userbutton">Se déconnecter
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="my-4" />
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      username: localStorage.getItem('username'),
      onDeconnexion: false,
    }
  },
  mounted() {
    window.addEventListener('localstorage-changed', (event) => {
      this.username = event.detail.storage;
    });
  },
  methods: {
    deconnexion() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.username = null;
      window.dispatchEvent(new CustomEvent('user-has-disconnected'));
    },
  },
}
</script>

<style scoped>
.userbutton {
  margin: 1rem;
  background: #3a42b4;
  background:  #8f1dfd;
  border: 2px solid #242423;
  border-radius: 30px;
  box-shadow: #242423 4px 4px 0 0;
  color: #f3f3f3;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  padding: 0 18px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.userbutton:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}
</style>
