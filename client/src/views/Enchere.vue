<!-- Le but est de créer un tableau dans lequels sont classé les utilisateurs qui souhaite acheter le même article en fonction du prix qu'ils dépensent-->
<template>
      <div class="enchere">
        <div class="enchere__header">
            <h1>Enchères de la semaine</h1>
        </div>
        <div class="enchere__body">
             <div class="enchere__body__item">
                <div class="enchere__body__item__image">
                    <img class="flex md:flex-row flex-col gap-14 md:gap-24 snap-x overflow-auto border-4 border-neutral-800 shadow-thick rounded-3xl" :src="item.url" alt="Item" />
                </div>
                <div class="enchere__body__item__description">
                    <h2 class="text-xl">{{ item.title }}</h2>
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
                        <p class="enchere__body__bids__list__bid__user">{{ bid.username }}</p>
                        <p class="enchere__body__bids__list__bid__price">{{ bid.price }} $</p> 
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
                            <input type="number" id="price" v-model="price"/>
                        </div>
                        <div class="enchere__body__form__content__button">
                            <button @click="addBid" type="submit">Ajouter</button>
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
        item: [],
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
    this.getImage();
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
      getImage() {
        fetch('http://localhost:3300/illustrations/all?cat=title&sortBy=asc' , {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((response) => response.json())
            .then((data) => {;
            this.item = data[7];
            console.log(data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
      },
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
.enchere {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
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
    color: rgb(0, 0, 0);
    padding: 0 1rem;
    margin: 2rem 0;
}

.enchere__body {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 0 20px;
}

.enchere__body__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 30px;
}

.enchere__body__item__image {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    max-width: 500px;
    max-height: 300px;
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
    color: #333;
    padding: 0 20px;
}
.enchere__body__item__description h2{
    font:  bold 24px/1 sans-serif;
}
.enchere__body__bids {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 90%;
    border: 4px solid #333;
    border-radius: 50px;
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
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
    color: #333;
    padding: 0 20px;
}

.enchere__body__bids__list__bid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #333;

}

.enchere__body__bids__list__bid__user {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 28px;
    font:  italic 24px/1 sans-serif;
    color: #333;
}

.enchere__body__bids__list__bid__price{
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    color: #333;
    margin-bottom: 2%;
}
.enchere__body__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 75%;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    color: #333;
    font:  bold 24px/1 sans-serif;
    padding: 0 20px 10px;
}
.enchere__body__form__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
}
.enchere__body__form__content__input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #333;
    padding: 1rem;
    height: 70%;
    background-color: #ffffff;
    border: 2px solid #333;
    box-shadow: #242423 4px 4px 0 0;
    border-radius: 1rem;

}

.enchere__body__form__content__input input {
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-color: #333;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__content__input input[type="number"] {
    width: 50%;
    height: 100%;
    margin-left: 51px;
    border-color: #8f1dfd;
    border-radius: 0.75rem;
    color: #333;
    padding: 0 20px;
}

.enchere__body__form__content__button {
    display: flex;
    margin: 1rem;
    width: 50%;
    margin-left: 25%;
    justify-content: center;
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
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.enchere__body__form__content__button:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
}
</style>