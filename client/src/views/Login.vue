<template>
  <div class="flex flex-col h-screen">
    <BaseHeader/>
      <div class="bg-bodyBlue justify-center align-middle flex p-16 grow">
        <LoginForm/>
      </div>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/global/BaseHeader.vue'
import BaseFooter from '@/components/global/BaseFooter.vue'
import LoginForm from "@/components/loginPage/LoginForm.vue";
export default {
  name: 'Login',
  components: {
    LoginForm,
    BaseHeader,
    BaseFooter,
  },
}
</script>
