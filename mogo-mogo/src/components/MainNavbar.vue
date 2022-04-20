<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img width="200px" src="../assets/logo-removebg.png"
      /></a>
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
          <a class="nav-link active" aria-current="page" href="#"
            >Find Restaurants</a
          >
          <RouterLink to="/recipes" class="nav-link" href="#"
            >Find Recipes</RouterLink
          >
          <a class="nav-link" href="#"
            ><i class="fa-solid fa-heart"></i> My Favorites</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container-fluid {
  background-color: #faf5e4;
}
.nav-link {
  font-size: 25px;
}
</style>
