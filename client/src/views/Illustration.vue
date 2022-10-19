<template>
  <BaseHeader />
  <div>
    Header - remove scroll bar - fix image sizing - hover effect zoom
    <div class="w-full flex snap-y md:snap-x overflow-auto justify-center md:justify-start p-7" id="gallery">
      <div class="flex md:flex-row flex-col gap-16">
        <span v-for="card in items" :key="card" class="snap-center self-center">
          <Card :url=card.url :likes=card.likes />
        </span>
      </div>
    </div>
  </div>
  <BaseFooter />
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
      items: []
    }
  },
  methods: {
    getIllustrations() {
      fetch("http://localhost:3300/illustrations/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(response => {
          this.items = response;
        })
    },
  },
  created() {
    if (this.items.length === 0) {
      this.getIllustrations();
    }
  }
};
</script>

<style scoped>

/* Hide scrollbar for Safari, Chrome */
#gallery::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#gallery {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
