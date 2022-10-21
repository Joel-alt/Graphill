<!-- Afficher Home.vue dans l'app -->
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/enchere">Enchères</router-link>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<!-- Ajouter du style à l'app -->
<style scoped>
nav {
  display: flex;
  /*écarter de 30px le texte des liens*/
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  padding: 0 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  color: #ccc;
}
</style>
