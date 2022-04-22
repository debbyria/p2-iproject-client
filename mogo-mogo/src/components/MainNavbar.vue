<script>
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo";

export default {
  computed: {
    ...mapWritableState(useMogoStore, ["isLoggedIn"]),
  },
  methods: {
    logoutButtonHandler() {
      localStorage.clear;
      this.isLoggedIn = false;
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container-fluid">
      <div class="brand-img">
        <a class="navbar-brand" href="#"
          ><img width="150px" src="../assets/logo-removebg.png"
        /></a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link" href="#"
            ><i class="fa-solid fa-utensils"></i> List Restaurants</RouterLink
          >
          <RouterLink to="/recipes" class="nav-link" href="#"
            ><i class="fa-solid fa-book"></i> List Recipes</RouterLink
          >
          <RouterLink to="/favorites" class="nav-link" href="#"
            ><i class="fa-solid fa-heart"></i> My Favorites</RouterLink
          >
        </div>
        <div class="navbar-nav menu ms-auto">
          <RouterLink to="/login" href="" class="nav-link" v-if="!isLoggedIn"
            >Sign In</RouterLink
          >
          <RouterLink class="nav-link" href="" to="/register" v-if="!isLoggedIn"
            >Sign Up</RouterLink
          >
          <a
            v-if="isLoggedIn"
            class="navbar-link logout-link"
            href=""
            aria-disabled="true"
            @click.prevent="logoutButtonHandler"
            ><i class="fa-solid fa-right-from-bracket" style="color: red"></i>
            Logout</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.brand-img {
  width: 170px;
}
.navbar {
  background-color: #f6e7d8;
  height: 100px;
  width: 100%;
}
.nav-link {
  font-size: 20px;
}
</style>
