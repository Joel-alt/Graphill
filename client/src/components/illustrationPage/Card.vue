<template>
  <div class="flex flex-col items-center">
    <span class=" border-4 border-neutral-800 rounded-2xl shadow-thick overflow-hidden">
      <Modal :mUrl=url :mTitle=title :mDesc=desc :mLikes=likes />
    </span>
    <div class="flex align-middle">
      <span class="bg-black w-36 text-white rounded-xl m-2 h-10 text-center">likes {{newLikes}}
      </span>
      <div v-if="likeStatus">
        <button class="text-white rounded-xl m-2 h-10" @click="unlike">
          <img class="w-8 inline-block" src="../../assets/notliked-64.png" alt="unlike">
        </button>
      </div>
      <div v-else>
        <button class="text-white rounded-xl m-2 h-10" @click="like">
          <img class="w-8 inline-block" src="../../assets/like-64.png" alt="like">
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
