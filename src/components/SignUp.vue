<template>
  <v-container fluid>
   
    <v-row class="mb-4" justify="center">
      <v-col cols="2">
        <img
          class="logo ml-10"
          src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ="
        />
      </v-col>
    </v-row>

    <v-row class="mt-10" justify="center">
      <v-col class="mt-10" cols="6">
        <v-form lazy-validation>
        <v-text-field label="Enter Name" required> </v-text-field>
        <v-text-field  label="Enter Email" required> </v-text-field>
        <v-text-field   type="password" label="Enter Password" required>
        </v-text-field>
        <v-btn class="mr-4" color="success"> Sign Up </v-btn>
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
.logo {
  left: 53%;
  width: 100px;
  margin-left: -125px !important;
  position: absolute;
  margin-right: 55% !important;
}



</style>
