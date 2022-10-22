<template>
  <div class="justify-center align-middle flex p-16 ">
    <SignUpForm/>
  </div>
</template>

<script>
import BaseHeader from '@/components/global/BaseHeader.vue'
import BaseFooter from '@/components/global/BaseFooter.vue'
import SignUpForm from "@/components/signUpPage/SignUpForm.vue";
export default {
  name: 'SignUp',
  components: {
    SignUpForm,
    BaseHeader,
    BaseFooter,
  },
}
</script>
