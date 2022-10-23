<template>
  <div class=" justify-center align-middle p-16 ">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "@/components/loginPage/LoginForm.vue";
export default {
  name: 'Login',
  components: {
    LoginForm,
  },
}
</script>
