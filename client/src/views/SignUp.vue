<template>
  <div class="flex flex-col h-screen">
    <BaseHeader/>
    <div class="bg-bodyBlue justify-center align-middle flex p-16 grow">
      <SignUpForm/>
    </div>
    <BaseFooter/>
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
