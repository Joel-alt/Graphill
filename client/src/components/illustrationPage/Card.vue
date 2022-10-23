<template>
  <div class="flex flex-col items-center">
    <span class="border-4 border-neutral-800 rounded-2xl shadow-thick overflow-hidden">
      <div v-if="isConnected">
        <Modal :mId=id :mUrl=url :mTitle=title :mDesc=desc :mLikes=likes />
      </div>
      <div v-else id="container">
        <img class="rounded-xl md:max-w-md hover" :src="url" >
        <a class="connect" href="/login">Connect to go further 👀</a>
      </div>
    </span>
    <div v-if="isConnected" class="flex items-center likeButton cursor-pointer">
      <span class="text-lg md:text-xl tracking-wide font-medium text-red-500">{{newLikes}}</span>
      <div v-if="likeStatus">
        <button class="text-white rounded-xl m-2 h-10">
          <img class="w-8 inline-block hover:scale-125 duration-150" src="../../assets/like-64.png" @click="unlike"
            alt="unlike">
        </button>
      </div>
      <div v-else>
        <button class="text-white rounded-xl m-2 h-10">
          <img class="w-8 inline-block hover:scale-125 duration-150" src="../../assets/notliked-64.png" @click="like"
            alt="like">
        </button>
      </div>
    </div>
    <div v-else class="flex items-center likeButton blur-sm cursor-default">
      <span class="text-lg md:text-xl tracking-wide font-medium text-red-500">{{randInt}}</span>
      <div>
        <button class="text-white rounded-xl m-2 h-10">
          <img class="w-8 inline-block cursor-default" src="../../assets/like-64.png">
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'CardView',
  props: {
    id: Number,
    url: String,
    likes: Number,
    isLiked: '',
    title: '',
    desc: '',
  },
  components: {
    Modal,
  },
  data() {
    return {
      newLikes: this.likes,
      likeStatus: this.isLiked,
      isConnected: false,
      randInt: Math.floor(Math.random() * 1000000),
    }
  },
  methods: {
    like() {
      fetch(`http://localhost:3300/illustrations/${this.id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
      this.newLikes++;
      this.likeStatus = true;
    },
    unlike() {
      fetch(`http://localhost:3300/illustrations/${this.id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
      if (this.newLikes > 0) {
        this.newLikes--;
      }
      this.likeStatus = false;
    },
  },
  created() {
    window.addEventListener('user-has-disconnected', (event) => {
      this.isConnected = false;
    });
    if (localStorage.getItem('token')) {
      this.isConnected = true;
    }
  },
}
</script>

<style scoped>
.likeButton, .connect {
  margin: 1rem;
  background-color: rgb(255, 255, 255);
  border: 2px solid #242423;
  border-radius: 30px;
  box-shadow: #242423 4px 4px 0 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  padding: 0 18px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
}

#container {
  position: relative;
}
.connect {
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
  position:absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 50% ;
  height: fit-content;
  max-height: min-content;
  font-size: 30px;
  display:none;
}
#container:hover .connect {
  background-color: #ffffff;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
