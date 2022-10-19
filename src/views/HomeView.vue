<template>
  <v-container fluid>
    <v-row justify="center">
      <h1 style="text-align: center">Welcome to Home Page</h1>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Contact</th>
              <th class="text-left">Adress</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in restaurants" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.adress }}</td>
              <td>
                <router-link class="uplink" :to="'/update/' + item.id"
                  >Update</router-link
                >
                <v-btn
                  class="deletebtn"
                  @click="removeRes(item.id)"
                  color="error"
                >
                  X</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async removeRes(id) {
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      const res = await axios.get("http://localhost:3000/restaurants");
      this.restaurants = res.data;
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/restaurants");
    console.warn(result);
    this.restaurants = result.data;
  },
};
</script>
<style scoped>
.uplink {
  text-decoration: none;
  color: black;
  
}
.uplink:hover {
  color: rgb(165, 42, 147);
}
.deletebtn {
  height: 40px;
  margin: 10px;
  padding: 0;
  float: right;
}
</style>
