<script>
import CardContent from "../components/CardContent.vue";
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo.js";

export default {
  data() {
    return {
      currentPage: 1,
      currentDataRestaurant: [],
    };
  },
  components: { CardContent },
  computed: {
    ...mapWritableState(useMogoStore, [
      "restaurants",
      "searchData",
      "restaurantPage",
    ]),
  },
  methods: {
    ...mapActions(useMogoStore, ["fetchRestaurantsAction"]),

    async getRestaurants() {
      try {
        this.currentDataRestaurant = [];
        this.restaurantPage = [];
        let response = await this.fetchRestaurantsAction();
        this.restaurants = response.data.results;

        for (
          let i = (this.currentPage - 1) * 9;
          i < this.currentPage * 9;
          i++
        ) {
          if (!this.restaurants[i]) {
            break;
          } else {
            this.currentDataRestaurant.push(this.restaurants[i]);
          }
        }

        for (let i = 1; i <= response.data.totalPage; i++) {
          this.restaurantPage.push({ index: i });
        }
      } catch (err) {
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
    async searchButtonHandler() {
      try {
        this.currentPage = 1;
        this.getRestaurants();
      } catch (err) {
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
    async changePage(index) {
      try {
        this.currentPage = index;
        this.getRestaurants();
      } catch (err) {
        console.log(err);
      }
    },
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
      <div class="mx-auto my-4 search-div">
        <form @submit.prevent="searchButtonHandler">
          <label class="my-3" for="">Search by place :</label>
          <input
            v-model="searchData.location"
            type="text"
            placeholder="ex. Jakarta"
          />
          <button class="my-3 btn-primary" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </button>
        </form>
      </div>
      <div>
        <h2>Restaurants</h2>
      </div>
      <div class="row">
        <CardContent
          v-for="restaurant in currentDataRestaurant"
          :key="restaurant.id"
          :restaurant="restaurant"
        />
      </div>
    </div>
    <nav class="pagination-nav" aria-label="Page navigation example">
      <ul class="pagination">
        <li v-for="page in restaurantPage" class="page-item">
          <a
            @click.prevent="changePage(page.index)"
            class="page-link"
            href="#"
            >{{ page.index }}</a
          >
        </li>
      </ul>
    </nav>
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
.pagination-nav {
  margin: 20px 72px;
}
</style>
