<!-- Page d'accueil mettant en avant un artiste, avec sa description afficher sur la page d'accueil-->
<template>
  <div id="home">
    <div class="home">
      <div class="home__artist">
        <div class="home__artist__name">
          <h1>Artist Name :{{ artist.name }}</h1>
        </div>
        <div class="home__artist__description">
          <p>Artist Description :{{ artist.description }}</p>
        </div>
      </div>
      <div class="home__artist__image">
        <img :src="artist.image" alt="image de l'artiste" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeView',
}
</script>

