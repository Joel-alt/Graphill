<template>
  <div>
    Header - remove scroll bar - fix image sizing - hover effect zoom
    <div class="w-full flex snap-y md:snap-x overflow-auto justify-center md:justify-start p-7">
        <div class="flex md:flex-row flex-col gap-16">
          <span v-for="card in 10" :key="card" class="snap-center">
            <Card />
          </span>
        </div>
      </div>
    Footer
    </div>
</template>

<script>
import Card from "@/components/illustrationPage/Card.vue";
export default {
  name: "IllustrationView",
  components: {
    Card,
  },
};
</script>
