<template>
  <div class="flex flex-col h-screen">
    <BaseHeader/>
      <div class="bg-bodyBlue grow">
      </div>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/global/BaseHeader.vue'
import BaseFooter from '@/components/global/BaseFooter.vue'
export default {
  name: 'HomeView',
  components: {
    BaseHeader,
    BaseFooter,
  },
}
</script>
