<template>
  <v-row justify="center">
    <v-col class="pt-6" cols="12" sm="12" md="4" lg="6">
      <h1 class="pb-6" style="text-align: center">Update Restaurant</h1>
      <v-form lazy-validation>
        <v-text-field
          v-model="Restaurant.name"
          label="Enter Name"
        ></v-text-field>
        <v-text-field
          v-model="Restaurant.adress"
          label="Enter Adress"
        ></v-text-field>
        <v-text-field
          v-model="Restaurant.contact"
          label="Enter Contact"
        ></v-text-field>
        <v-btn @click="updateRestaurant()" color="success">
          Update Restaurant</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateResto",
  data() {
    return {
      Restaurant: {
        name: "",
        adress: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      const res = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.Restaurant.name,
          adress: this.Restaurant.adress,
          contact: this.Restaurant.contact,
        }
      );

      if (res.status == 200) {
        this.$router.push({ name: "home" });
      }
    },
  },
  async mounted() {
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );

    this.Restaurant = result.data;
  },
};
</script>
