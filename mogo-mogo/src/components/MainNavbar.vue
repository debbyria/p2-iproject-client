<script>
export default {};
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
