<template>
  <BaseHeader />

  <div class="flex flex-col pt-10 mb-8 pl-10 pr-10">
  <h2 class="mb-4 text-2xl font-semibold text-center capitalize">
      <img src="../assets/efrei.png" class="max-w-sm h-20 w-100 align-middle inline-block" alt="">
  </h2>

  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100 ">
        <img src="../assets/cat1.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Joël</h2>
        <p class="mt-2 text-sm">Design, develop log in and log out, ...</p>
        <a class="mt-2 text-sm" href="https://github.com/Joel-alt">Click to know more...</a>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat2.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Bastien</h2>
        <p class="mt-2 text-sm">Design, develop illustrations...</p>
        <a class="mt-2 text-sm" href="https://github.com/bastien707">Click to know more...</a>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat3.png" class="max-w-sm h-10 w-10" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Julien</h2>
        <p class="mt-2 text-sm">Design, develop bid system...</p>
        <a class="mt-2 text-sm" href="https://github.com/Sl33pyCl0ud">Click to know more...</a>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-100">
        <img src="../assets/cat4.png" class="max-w-sm h-9 w-9" alt="">
      </div>
      <div class="ml-4">
        <h2 class="font-semibold">Huiting</h2>
        <p class="mt-2 text-sm">Design, develop about...</p>
        <a class="mt-2 text-sm" href="https://github.com/HuitingFENG">Click to know more...</a>
      </div>
    </div>
  </div>
</div>

  <BaseFooter class="bottom-0"/>
</template>

<script>
import BaseHeader from '@/components/global/BaseHeader.vue'
import BaseFooter from '@/components/global/BaseFooter.vue'

export default {
  name: 'AboutView',
  components: {
    BaseHeader,
    BaseFooter,
  },
  data: function () {
      return {
          names : ['Efrei Paris', 'Promo 2024', 'M1 SE1'],
      }
  },

}
</script>
