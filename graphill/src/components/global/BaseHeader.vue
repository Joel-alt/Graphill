<template>
  <header class="bg-gradient-to-b from-headerBlue to-bodyBlue mt-auto">
    <div class="flex items-center flex-col sm:flex-row">
      <router-link to="/" class="flex flex-1 ">
        <img src="../../assets/logo_graphill_noir.png" class="h-24 w-64 ml-4 mt-4" alt="Graphill Logo"/>
      </router-link>
      <p class="text-center flex-1 text-7xl font-semibold italic">Graphill</p>
      <ul class="flex flex-1 flex-wrap">
        <li class="flex flex-1 justify-end">
          <router-link to="/about" class="mr-4 md:mr-6 text-2xl font-semibold">Nous rejoindre</router-link>
        </li>
      </ul>
    </div>
    <div class="my-4"/>
    <p class="text-center text-2xl font-semibold">Votre galerie d'art en ligne</p>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>
