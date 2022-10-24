<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <img class="check-png" src="../../assets/check.png" alt="" />
      <p>Envoyé !</p>
      <!--<p>Vous aurez la réponse d'ici quelques jours. Merci !</p>-->
      <div @click="$emit('close-modal')">
        <div class="close">
          Fermer
        </div>
      </div>
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
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(22, 22, 22, 0.742);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  min-width: 20rem;
  background-color: white;
  border-radius: 20px;
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

.close {
  margin: 1rem;
  background-color: #8f1dfd;
  border: 2px solid #242423;
  border-radius: 30px;
  box-shadow: #242423 4px 4px 0 0;
  color: #f3f3f3;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  padding: 0 18px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>
