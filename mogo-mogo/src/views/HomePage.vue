<script>
import CardContent from "../components/CardContent.vue";
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo.js";

export default {
  data() {
    return {};
  },
  components: { CardContent },
  methods: {
    ...mapActions(useMogoStore, ["fetchRestaurantsAction"]),

    async getRestaurants() {
      try {
        let response = await this.fetchRestaurantsAction();
        this.restaurants = response.data.results;
      } catch (err) {
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
  },
  computed: {
    ...mapWritableState(useMogoStore, ["restaurants"]),
  },
  created() {
    this.getRestaurants();
  },
};
</script>

<template>
  <!-- Topic Cards -->
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <h2>Restaurants</h2>
      <div class="row">
        <CardContent
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :restaurant="restaurant"
        />
      </div>
    </div>
  </div>
</template>
