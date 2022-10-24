<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <img class="check-png" src="../../assets/check.png" alt="" />
      <p>Envoyé !</p>
      <!--<p>Vous aurez la réponse d'ici quelques jours. Merci !</p>-->
    </div>
    <div class="close" @click="$emit('close-modal')">
      <img class="close-png" src="../../assets/close.png" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
      name: 'Modal',
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 300px;
  width: 400px;
  margin-top: 20%;
  padding: 60px 140px;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-png {
  width: 30px;
  background-color: white;
  border-radius: 3px;
  outline-style: solid;
}

.check-png {
  width: 200px;
}

p {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

</style>
