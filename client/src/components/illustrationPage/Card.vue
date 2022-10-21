<template>
  <div class="flex flex-col items-center">
    <span class="cursor-pointer">
      <img class="rounded-xl max-w-md" :src=url alt="image">
    </span>
    <div>
      <button class="bg-black w-36 text-white rounded-xl m-2 h-10">likes {{newLikes}}</button>
      <button class="bg-black w-36 text-white rounded-xl m-2 h-10" @click="like">❤️</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    id: Number,
    url: String,
    likes: Number
  },
  data() {
    return {
      newLikes: this.likes,
    }
  },
  methods: {
    like() {
      fetch(`http://localhost:3300/illustrations/${this.id}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
      this.newLikes++;
    },
  }
}
</script>
