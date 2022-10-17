<template>
  <v-layout>
    <v-navigation-drawer v-if="$store.state.user" permanent>
      <template v-slot:prepend>
        <v-list-item
          two-line
          prepend-avatar="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ="
          :title="$store.getters.getWelcomeMessage"
          subtitle="Logged in"
        ></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
          @click="goHome"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Add Restaurant"
          @click="goAddResto"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-update"
          title="Update Restaurant"
          value="update"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-logout-variant"
          title="Logout"
          @click="logout()"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  created() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$store.dispatch("login", JSON.parse(user));
    } else {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    logout() {
      console.warn("logout");
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    goAddResto() {
      this.$router.push('/add-resto')
    },
    goHome() {
      this.$router.push('/')
    }
  },
});
</script>
