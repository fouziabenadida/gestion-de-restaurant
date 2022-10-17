<template>
<v-row justify="center">
<v-col class="pt-6" cols="12" sm="12" md="4" lg="6">
<v-form lazy-validation>
<v-text-field v-model="name" label="Enter Name"></v-text-field>
<v-text-field v-model="address" label="Enter Adress"></v-text-field>
<v-text-field v-model="contact" label="Enter Contact"></v-text-field>
<v-btn @click="addRestaurant" color="success" > Add new Restaurant</v-btn>
</v-form>
</v-col>
</v-row>
</template>

<script>
export default {
  name: "AddResto",
  data() {
   return{
    Restaurant: {
      name: '',
      address: '',
      contact: ''
    }
   }
  },
  methods: {
  addRestaurant() {
    console.warn(this.Restaurant)
  }
  }
};
</script>