<template>
  <v-container fluid>
    <h1 class="titre">Sign Up</h1>
<v-row justify="center">
<v-col cols="6">
<v-form
    lazy-validation
  >
    <v-text-field
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
    type="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
    >
     Sign Up
    </v-btn>
  </v-form>
</v-col>
</v-row>
  </v-container>
</template>
<script>
export default {
  name: "SignUp",
};
</script>
<style scoped>
.titre {
 text-align: center;
 margin-bottom: 20px;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}



</style>
