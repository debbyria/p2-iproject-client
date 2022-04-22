<script>
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo";
import RecipesCard from "../components/RecipesCard.vue";

export default {
  components: { RecipesCard },
  computed: {
    ...mapWritableState(useMogoStore, ["recipes", "searchData"]),
  },
  methods: {
    ...mapActions(useMogoStore, ["fetchRecipesAction"]),

    async getRecipes() {
      try {
        let response = await this.fetchRecipesAction();

        this.recipes = response.data.results;
      } catch (err) {
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
    async searchButtonHandler() {
      try {
        this.getRecipes();
      } catch (err) {
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
  },

  created() {
    this.getRecipes();
  },
};
</script>

<template>
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <div class="mx-auto my-4 search-div">
        <form @submit.prevent="searchButtonHandler">
          <label class="my-3" for="">Search by name :</label>
          <input
            v-model="searchData.keyword"
            type="text"
            placeholder="ex. Chicken"
          />
          <button class="my-3 btn-primary" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </button>
        </form>
      </div>
      <div>
        <h2>Recipes</h2>
      </div>
      <div class="row">
        <RecipesCard
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-div {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 100px;
  padding: 20px;
}
input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
button {
  border-radius: 20px;
  border: 1px solid #5b7db1;
  background-color: #b4e197;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
button:hover {
  background-color: #4e944f;
}
</style>
