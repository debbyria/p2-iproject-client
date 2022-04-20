<script>
import RecipesCard from "../components/RecipesCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo";

export default {
  components: { RecipesCard },
  methods: {
    ...mapActions(useMogoStore, ["fetchRecipesAction"]),

    async getRecipes() {
      try {
        let response = await this.fetchRecipesAction();

        this.recipes = response.data.results;
      } catch (err) {
        console.log(err.response);
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
  },
  computed: {
    ...mapWritableState(useMogoStore, ["recipes"]),
  },
  created() {
    this.getRecipes();
  },
};
</script>

<template>
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <h2>Recipes</h2>
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
