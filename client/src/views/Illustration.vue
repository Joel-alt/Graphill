<template>
  <div class="flex flex-col h-screen">
  <BaseHeader />
  <div class="bg-bodyBlue grow">
    <div class="w-full flex snap-y md:snap-x overflow-auto justify-center flex-col md:justify-start p-7" id="gallery">
      <div>
        <div v-if="statusPrice">
          <button type="button" @click="statusPrice=false">Price high</button>
        </div>
        <div v-else>
          <button type="button" @click="statusPrice=true">Price low</button>
        </div>
      </div>
      <div class="flex md:flex-row flex-col gap-16">
        <span v-for="card in items" :key="card" class="snap-center self-center">
          <Card :url=card.url :likes.sync=card.likes :id=card.id :isLiked=card.isLiked />
        </span>
      </div>
    </div>
  </div>
  <BaseFooter />
  </div>

</template>

<script>
import Card from "@/components/illustrationPage/Card.vue";
import BaseHeader from '@/components/global/BaseHeader.vue'
import BaseFooter from '@/components/global/BaseFooter.vue'
export default {
  name: "IllustrationView",
  components: {
    Card,
    BaseFooter,
    BaseHeader
  },
  data() {
    return {
      items: [],
      statusPrice: true,
    }
  },
  methods: {
    getIllustrations() {
      fetch("http://localhost:3300/illustrations/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then(response => response.json())
        .then(response => {
          this.items = response;
          this.userLikes(); // this is the function that checks if the user has liked the illustration
        })
    },
    userLikes() {
      fetch(`http://localhost:3300/illustrations/hasLiked`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then(response => response.json())
        .then(response => {
          for (let i = 0; i < this.items.length; i++) {
            response.forEach(element => {
              if (element.id === this.items[i].id) {
                this.items[i] = { ...this.items[i], isLiked: true };
              }
              if (this.items[i].isLiked === undefined) {
                this.items[i] = { ...this.items[i], isLiked: false };
            }
            });
          }
        })
    },
  },
  created() {
    if (this.items.length === 0) {
      this.getIllustrations();
    }
  },
};
</script>

<style scoped>
/* Hide scrollbar for Safari, Chrome */
#gallery::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#gallery {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
