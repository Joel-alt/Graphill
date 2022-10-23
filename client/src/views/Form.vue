<template>
    <div>
        <div class="text-center text-xl">
            <p>Afin que nous puissions accéder à votre demande, veuillir remplir le formulaire ci-dessous. Nous vous répondrons dans un délai de 7 jours.</p>
        </div>
        <div class="flex flex-col items-center"><br />
            <input class="form" type="text" name="lastname" v-model="lastname" @keyup.enter="addData" placeholder=" Last Name"/>
            <input class="form"  type="text" name="firstname" v-model="firstname" @keyup.enter="addData" placeholder=" First Name"/>
            <input class="form"  type="text" name="artistname" v-model="artistname" @keyup.enter="addData" placeholder=" Artist Name"/>
            <input class="form"  type="text" name="studies" v-model="studies" @keyup.enter="addData" placeholder=" Studies"/>
            <input class="form"  type="text" name="hostingTime" v-model="hostingTime" @keyup.enter="addData" placeholder=" Hosting Time"/>
            <br>
            <button class="bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded" v-on:click="say('Submit successfully!')"> Submit </button> 
        </div>
    </div>
</template>

<script>

export default {
  name: 'FormView',
  components: {
  },
  async created() {
      try {
          //const res = await axios.get(url1);
          //this.items = res.data;
      }catch(e){
          console.error(e);
      }
  },
  data(){
      return {
          items: [],
          lastname: "",
          firstname: "",
          artistname: "",
          studies: "",
          hostingTime: "",
          
      };
  },
  methods: {
      say: function (message){
          alert(message)
      },
      addData(){
          try{
              fetch("http://localhost:3300/forms/add", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      lastname: this.lastname,
                      firstname: this.firstname,
                      artistname: this.artistname,
                      studies: this.studies,
                      hostingTime: this.hostingTime,
                  })
              })
          }catch(e){
              console.error(e);
          }
      },
  }
  
}
</script>

<style scoped>
.form {
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 7px;
    background-color: #bfdbfe;
    color: #000000;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

::placeholder {
    color: #000000;
    opacity: 1;
}
</style>