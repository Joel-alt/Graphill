<template>
  <div class="flex flex-col items-center">
    <span class="cursor-pointer">
      <img class="rounded-xl max-w-md" :src=url alt="image">
    </span>
    <div>
      <button class="bg-black w-36 text-white rounded-xl m-2 h-10">likes {{newLikes}}</button>
      <div v-if="likeStatus">
        <button class="bg-black w-36 text-white rounded-xl m-2 h-10">Unlike</button>
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
  },
}
</script>
