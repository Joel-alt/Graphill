<template>
  <div class="flex flex-col items-center">
    <span class="cursor-pointer border-4 border-neutral-800 rounded-2xl shadow-thick overflow-hidden">
      <img class="rounded-xl max-w-md hover:scale-110 transition duration-1000 ease-in" :src=url alt="image">
    </span>
    <div class="flex">
      <span class="bg-black w-36 text-white rounded-xl m-2 h-10 text-center">likes {{newLikes}}</span>
      <div v-if="likeStatus">
        <button class="bg-black w-36 text-white rounded-xl m-2 h-10" @click="unlike" >Unlike</button>
      </div>
      <div v-else>
        <button class="bg-black w-36 text-white rounded-xl m-2 h-10" @click="like">❤️</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    id: Number,
    url: String,
    likes: Number,
    isLiked: ''
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
