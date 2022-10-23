<!-- Le but est de créer un tableau dans lequels sont classé les utilisateurs qui souhaite acheter le même article en fonction du prix qu'ils dépensent-->
<template>
      <div class="enchere">
        <div class="enchere__header">
            <h1>Enchères de la semaine</h1>
        </div>
        <div class="enchere__body">
             <div class="enchere__body__item">
                <div class="enchere__body__item__image">
                    <img :src="item.image" alt="Item" />
                </div>
                <div class="enchere__body__item__description">
                    <h2 class="text-xl">{{ item.name }}</h2>
                    <br>
                    <p>{{ item.description }}</p>
                </div>
             </div>
             <div class="enchere__body__bids">
                <div class="enchere__body__bids__title">
                    <h2>Classement</h2>
                </div>
                <div class="enchere__body__bids__list">
                    <!--Classe les participants dans l'ordre du meilleur prix-->
                    <div v-for="bid in bids" :key="bid.price" class="enchere__body__bids__list__bid">
                        <div class="enchere__body__bids__list__bid__user">
                            <p class="text-2xl">{{ bid.username }}</p>
                            <p class="enchere__body__bids__list__bid__price">{{ bid.price }}</p>
                        </div>    
                    </div>
                </div>
             </div>
      <!-- Ajouter un formulaire pour ajouter une enchère -->
             <div v-if="isConnected===true" class="enchere__body__form">
                <div class="enchere__body__form__title">
                    <h2>Faire une enchère</h2>
                </div>
                <div class="enchere__body__form__content">
                    <form>
                        <div class="enchere__body__form__content__input">
                            <label class="mr-3 text-lg" for="price">Prix</label>
                            <input type="number" id="price" v-model="price" />
                        </div>
                        <div class="enchere__body__form__content__button">
                            <button @click="addBid" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Ajouter</button>
                        </div>
                    </form>
                </div>
             </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'EnchereView',
    data() {
      return {
        item: {
          id: 1,
          name: 'Tableau',
          description: 'Tableau de Picasso',
          image: 'https://picsum.photos/500/300',
        },
        price: 0,
        isConnected: false,
        bids: []
      }
    },
  mounted() {
    window.addEventListener('user-has-disconnected', (event) => {
      this.isConnected = false;
    });
      fetch('http://localhost:3300/illustrations/bidList', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then((response) => response.json())
      .then (
          response2 => {
            this.bids = response2
          }
      )
      .catch((error) => {
        console.log(error);
      });
      if(localStorage.getItem('token')) {
        this.isConnected = true;
      }
  },
  methods: {
      addBid() {
        fetch(`http://localhost:3300/user/outbid`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({outbid: this.price,})
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
      },
  }
}
</script>

<style scoped>
/* style sobre avec des nuances de gris et dynamique */
.enchere {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #ECFBFF;;
    padding: 0 20px;
}

.enchere__header {
    display: flex;
    justify-content: center;
    align-items: center;
    font:  bold 26px/1 sans-serif;
    text-transform: uppercase;
    width: 50%;
    height: 50px;
    background-color: #ECFBFF;
    color: rgb(5, 4, 4);
    padding: 0 20px;
}

.enchere__body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #ECFBFF;
    padding: 0 20px;
}

.enchere__body__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: #ECFBFF;
    padding: 0 10px;
    margin-left: 20px;
}

.enchere__body__item__image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ECFBFF;
    color: #333;
}

.enchere__body__item__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.enchere__body__item__description {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 90%;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color:#ECFBFF;
    color: #333;
    font:  bold 24px/1 sans-serif;
    padding: 0 20px 10px;
}

.enchere__body__bids__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90%;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__list__bid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__list__bid__user {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__list__bid__price{
    display: flex;
    height: 100%;
    margin-left: 100px;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    color: #333;
    padding: 0 20px;
}
.enchere__body__bids__list__bid__user button {
    display: flex;
    height: 100%;
    margin-left: 65px;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__list__bid__user button:hover {
    color: rgb(151, 142, 142);
}
.enchere__body__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 75%;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #ECFBFF;
    color: #333;
    font:  bold 20px/1 sans-serif;
    padding: 0 20px 10px;
}
.enchere__body__form__content__input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color:#ECFBFF;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__content__input input {
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-color: #333;
    background-color: #fff;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__content__input input[type="number"] {
    width: 50%;
    height: 100%;
    margin-left: 51px;
    border-color: #333;
    background-color: #fff;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__content__button {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-top: 50px;
    background-color: #ECFBFF;
    color: #333;
    padding: 0 20px;
}
</style>