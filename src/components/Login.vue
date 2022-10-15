<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="4">
        <h1 class="pt-4 pb-4" style="text-align: center">Login</h1>
        <v-form lazy-validation class="pa-15">
          <v-text-field class="mb-5" label="Email" required></v-text-field>
          <v-text-field
            type="password"
            class="mb-5"
            label="Password"
            required
          ></v-text-field>
          <v-btn color="info" class="mr-4 mb-5"> Continue </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Login-vue",
};
</script>