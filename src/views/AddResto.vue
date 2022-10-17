<template>
<v-row justify="center">
<v-col class="pt-6" cols="12" sm="12" md="4" lg="6">
<v-form lazy-validation>
<v-text-field v-model="Restaurant.name" label="Enter Name"></v-text-field>
<v-text-field v-model="Restaurant.adress" label="Enter Adress"></v-text-field>
<v-text-field v-model="Restaurant.contact" label="Enter Contact"></v-text-field>
<v-btn @click="addRestaurant" color="success" > Add new Restaurant</v-btn>
</v-form>
</v-col>
</v-row>
</template>

<script>
import axios from 'axios'
export default {
  name: "AddResto",
  data() {
   return{
    Restaurant: {
      name: '',
      adress: '',
      contact: ''
    }
   }
  },
  methods: {
   async addRestaurant() {
    
    let result = await axios.post('http://localhost:3000/restaurants',{
      name: this.Restaurant.name,
      adress: this.Restaurant.adress,
      contact: this.Restaurant.contact
    });
    if (result.status ==201) {
      this.$router.push({name: 'home'})
    }
  }
  }
};
</script>