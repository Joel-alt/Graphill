<template>
  <div class="flex flex-col items-center"><br />
        <input class="bg-black text-gray-500 text-white" type="text" name="lastname" v-model="lastname" @keyup.enter="addData" placeholder=" Last Name"/> <br />
        <input class="bg-black text-gray-500 text-white" type="text" name="firstname" v-model="firstname" @keyup.enter="addData" placeholder=" First Name"/> <br />
        <input class="bg-black text-gray-500 text-white" type="text" name="artistname" v-model="artistname" @keyup.enter="addData" placeholder=" Artist Name"/> <br />
        <input class="bg-black text-gray-500 text-white" type="text" name="studies" v-model="studies" @keyup.enter="addData" placeholder=" studies"/> <br />
        <input class="bg-black text-gray-500 text-white" type="text" name="hostingTime" v-model="hostingTime" @keyup.enter="addData" placeholder=" Hosting Time"/> <br />
        <button class="px-4 py-1 text-sm font-semibold rounded-full border border-200" v-on:click="say('Submit successfully!')"> Submit </button> 
  </div>

  <div class="flex flex-col items-center"><br />
   <table class="table-auto border-separate border-2 border-slate-500">
       <thead>
           <tr>
               <th class="border-2 border-slate-500">Last Name</th>
               <th class="border-2 border-slate-500">First Name</th>
               <th class="border-2 border-slate-500">Artist Name</th>
               <th class="border-2 border-slate-500">Studies</th>
               <th class="border-2 border-slate-500">Hosting Time</th>
           </tr>
       </thead>
       <tbody>
        <tr v-for="i in items" v-bind:key="i.id">
          <td class="border-2 border-slate-500">{{i.lastname}}</td>
          <td class="border-2 border-slate-500">{{i.firstname}}</td>
          <td class="border-2 border-slate-500">{{i.artistname}}</td>
          <td class="border-2 border-slate-500">{{i.studies}}</td>
          <td class="border-2 border-slate-500">{{i.hostingTime}}</td>
        </tr>
       </tbody>
    </table>
    </div>
</template>

<script>

export default {
  name: 'FormView',
  components: {
  },
  async created(){
      try {
          const res = await axios.get(url1);
          this.items = res.data;
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
