<template>
  <div class="flex flex-col items-center">
    <span class="border-4 border-neutral-800 rounded-2xl shadow-thick overflow-hidden">
      <Modal :mId=id :mUrl=url :mTitle=title :mDesc=desc :mLikes=likes />
    </span>
    <div class="flex items-center likeButton">
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
      likeStatus: this.isLiked
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
}
</script>

<style scoped>
.likeButton {
  margin: 1rem;
  background-color: rgb(255, 255, 255);
  border: 2px solid #242423;
  border-radius: 30px;
  box-shadow: #242423 4px 4px 0 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  padding: 0 18px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
}
</style>
