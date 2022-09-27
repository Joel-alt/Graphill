<template>
  <BaseHeader/>
    <div class="min-h-screen bg-bodyBlue">
      <slot />
    </div>
  <BaseFooter/>
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
