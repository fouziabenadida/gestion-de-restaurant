<template>
  <v-container fluid>
    <h1 class="titre">Sign Up</h1>
<v-row justify="center">
<v-col cols="6">
<v-form

  >
    <v-text-field
      label="Name"
      required
      v-model="name"
    ></v-text-field>

    <v-text-field
      label="E-mail"
      v-model="email"
      required
    ></v-text-field>
    <v-text-field
    type="password"
    v-model="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="SignUp"
    >
     Sign Up
    </v-btn>
  </v-form>
</v-col>
</v-row>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
   async SignUp(){
      let result = await axios.post("http://localhost:3000/users",{
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.warn(result)
      if (result.status==201) {
        alert("signup done")
        localStorage.setItem("user-info", JSON.stringify(result.data))
      }
    }
  },
 
};
</script>
<style scoped>
.titre {
 text-align: center;
 margin-bottom: 20px;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}



</style>
