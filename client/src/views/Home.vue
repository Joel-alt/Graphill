<!-- Page d'accueil mettant en avant un artiste, avec sa description afficher sur la page d'accueil-->
<template>
  <div class="home">
    <div class="home__artist">
      <div class="home__artist__image">
        <p>Image</p>
        <!--<img :src="artist.image" alt="photo de l'artiste" />-->
      </div>
      <div class="home__artist__description">
        <h1>Henry<!--{{ artist.name }}--></h1>
        <p>C'est le meilleur artiste !<!--{{ artist.description }}--></p>
      </div>
      <div class="home__artist__reseaux">
        <a href="https://www.instagram.com/?hl=fr">Mon Instagram</a>
        <a href="https://www.facebook.com/">Mon Facebook</a>
        <a href="https://twitter.com/home?lang=fr">Mon Twitter</a>
        <a href="https://www.artstation.com/?sort_by=community">Mon ArtStation</a>
        <div class="home__artist__reseaux__twitter">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
          <path id="Logo_00000038394049246713568260000012923108920998390947_" d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"/></svg>
        </div>
        <div class="home__artist__reseaux__instagram">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
            <g>
	            <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
	            <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
	            <circle cx="18.406" cy="5.594" r="1.44"/>
            </g>
          </svg>
        </div>
        <div class="home__artist__reseaux__artstation">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
            <g>
	            <path d="M0,17.725l2.031,3.504l0,0c0.396,0.793,1.222,1.335,2.169,1.335l0,0l0,0h13.457l-2.792-4.839H0z"/>
	            <path d="M24,17.749c0-0.485-0.146-0.939-0.388-1.311L15.73,2.723c-0.405-0.769-1.214-1.287-2.144-1.287H9.419l12.178,21.103   l1.918-3.326C23.903,18.575,24,18.299,24,17.749z"/>
	            <polygon points="12.874,14.286 7.428,4.851 1.982,14.286  "/>
            </g>
          </svg>
        </div>
        <div class="home__artist__reseaux__facebook">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="512" height="512">
            <g>
	            <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="home__gallery">
      <div class="home__gallery__images">
        <p>Image</p>
        <!--<img :src="image1.url" alt="photo de l'artiste" />-->
      </div>
      <div class="home__gallery__acces">
        <a href="/illustration" class="link">
          <span class="mask">
            <div class="link-container">
              <span class="link-title1 title">Accéder à la gallerie de notre Artiste</span>
              <span class="link-title2 title">Accéder à la gallerie de notre Artiste</span>
            </div>
          </span>
          <div class="link-icon">
            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </a>
      </div>
      <div class="home__gallery__images">
        <p>Image</p>
        <!--<img :src="image2.url" alt="photo de l'artiste" />-->
      </div>
    </div>
    <div class="home__support">
      <div class="home__support__text">
        <h2>Vous souhaitez me supporter ?</h2>
        <p>
          N'hésiter pas à venir me soutenir en cliquant sur mon lien Patreons <br> <a href="https://www.patreon.com/fr-FR" class="underline">https://www.patreon.com/fr-FR</a>
        </p>  
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeView',
  data() {
    return{
      artist: [],
      image1: [],
      image2: [],
    }
  },
  methods: {
    getArtist() {
      fetch('' , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.artist = data;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    getImage() {
      fetch('http://localhost:3300/illustrations/hasLiked' , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.image1 = data[1];
          this.image2 = data[2];
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  },
}   
</script>

<!-- Ajouter du style à la page d'accueil -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

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
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}
.home__artist__image {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  max-height: 400px;
  margin-top: 40px;
}
.home__artist__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home__artist__description {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  max-height: 400px;
}
.home__artist__description h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  margin-top: 30px;
}
.home__artist__description p {
  font-size: 1rem;
}
.home__artist__reseaux {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 0px;
  max-width: 600px;
  max-height: 400px;
}
.home__artist__reseaux a {
  font-size: 20px;
  margin-top: 20px;
  margin-left: 100px;
}
.home__artist__reseaux a:hover {
  color: rgb(77, 76, 76);
}

.home__artist__reseaux__instagram {
  display: flex;
  width: 2%;
  height: 2%;
  position: absolute;
  top: -60px;
  right: 250px;
}
.home__artist__reseaux__facebook {
  display: flex;
  width: 2%;
  height: 2%;
  position: absolute;
  top: -12px;
  right: 250px;
}
.home__artist__reseaux__twitter {
  display: flex;
  width: 2%;
  height: 2%;
  position: absolute;
  top: 38px;
  right: 275px;
}
.home__artist__reseaux__artstation {
  display: flex;
  width: 2%;
  height: 2%;
  position: absolute;
  top: 90px;
  right: 250px;
}
.home__gallery {
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.home__gallery__acces {
  width: 100%;
  height: 100%;
  text-align: center;
  max-width: 600px;
  max-height: 400px;
  color: rgb(3, 3, 3);
  margin-top: 100px;
}
.home__gallery__acces a {
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  margin-left: 20px;
  cursor: pointer;
}
.home__gallery__images {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  max-height: 400px;
  width: 100%;
  height: 100%;
}
.home__gallery__images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.link {
  height: 30px;
  align-items: center;
  color: #000;
  text-decoration: none;
  display: flex;
}

/* Hide extra text */
.mask {
  position: relative;
  padding: 0;
  height: 20px;

  /*  Remove overflow to see how it works　:) */
  overflow: hidden;
}

.link-container {
  transition: transform 0.4s ease;
}

.title {
  display: block;

  /*  Set same font-size and line height  */
  font-size: 20px;
  line-height: 20px;

  transition: transform 0.4s ease;
}

.link-title1 {
  transform-origin: right center;
}

.link-title2 {
  transform-origin: left center;
  transform: rotate(20deg);
}

.link-icon {
  position: relative;
  width: 35px;
  height: 35px;
  background: #f8f8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  /*  Remove overflow to see how it works　:) */
  overflow: hidden;
}

.icon {
  display: block;
  position: absolute;
  transition: transform 0.4s ease;
}

.icon:nth-child(2) {
  transform: translate(-40px);
}


/* Hover Action*/

/* Move up two texts (20px = font-size) */
.link:hover .link-container {
  transform: translateY(-20px);
}

/* Rotate texts a little bit */
.link:hover .link-title1 {
  transform: rotate(20deg);
}

.link:hover .link-title2 {
  transform: rotate(0);
}

/* Move arrows to right */
.link:hover .icon:first-child {
  transform: translate(40px);
}

.link:hover .icon:nth-child(2) {
  transform: translate(0px);
}

.home__support__text h2{
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
}
.home__support__text p{
  text-align: center;
  font-family: "Quicksand", sans-serif;
}

.home__support__text a{
  text-decoration: none;
  color: #5c0417;
}

.underline{
  position: relative;
}

.underline::before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: #0074D9;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
  .underline:hover::before{
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>
