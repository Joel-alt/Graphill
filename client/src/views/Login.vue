<template>
  <div class=" justify-center align-middle p-16 ">
    <LoginForm/>
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
