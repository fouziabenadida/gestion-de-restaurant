<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="4">
        <h1 class="pt-4 pb-4" style="text-align: center">Login</h1>
        <v-form lazy-validation class="pa-15">
          <v-text-field
            class="mb-5"
            label="Email"
            required
            v-model="email"
          ></v-text-field>
          <v-text-field
            type="password"
            class="mb-5"
            label="Password"
            v-model="password"
            required
          ></v-text-field>
          <v-btn @click="login()" color="info" class="mr-4 mb-5">
            Continue
          </v-btn>
          <p class="mr-4"><router-link to="/sign-up">Sign Up</router-link></p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Login-vue",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
      if (result.status == 200 && result.data.length > 0) {
        this.$store.dispatch("login", result.data[0]);
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    if (this.$store.state.user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>