<template>
  <div class="flex flex-col items-center">
      <span class="cursor-pointer">
        <img class="rounded-xl max-w-md" :src=url alt="image">
      </span>
      <button class="bg-black w-36 text-white rounded-md m-2">likes {{likes}}</button>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    url: String,
    likes: Number
  }
}
</script>
