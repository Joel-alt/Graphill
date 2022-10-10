<!-- Page d'accueil mettant en avant un artiste, avec sa description afficher sur la page d'accueil-->
<template>
  <div class="home">
    <div class="home__artist">
      <div class="home__artist__image">
        <!--<img :src="artist.image" alt="photo de l'artiste" />-->
      </div>
      <div class="home__artist__description">
        <h1>Henry<!--{{ artist.name }}--></h1>
        <p>C'est le meilleur artiste !<!--{{ artist.description }}--></p>
      </div>
    </div>
    <div class="home__gallery">
      <h2>Gallery</h2>
      <div class="home__gallery__images">
        <!--<div
          v-for="image in artist.gallery"
          :key="image.id"
          class="home__gallery__images__image"
        >
          <img :src="image.url" alt="Image de l'artiste" />
        </div>-->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeView',
}
</script>

<!-- Ajouter du style à la page d'accueil -->
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}

.home__artist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}

.home__artist__image {
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 20px;
}

.home__artist__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home__artist__description {
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 20px;
}

.home__artist__description h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.home__gallery {
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 800px;
  margin-bottom: 20px;
}

.home__gallery h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.home__gallery__images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.home__gallery__images__image {
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  margin: 10px;
}

.home__gallery__images__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

