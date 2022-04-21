<script>
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo";

export default {
  computed: {
    ...mapWritableState(useMogoStore, ["userFavorites"]),
  },
  methods: {
    ...mapActions(useMogoStore, ["fetchFavoritesAction"]),

    async getFavorites() {
      try {
        let response = await this.fetchFavoritesAction();
        this;

        this.userFavorites = response.data;
      } catch (err) {
        this.$swal({
          icon: "error",
          text: "Data Not Found",
        });
      }
    },
  },
  created() {
    this.getFavorites();
  },
};
</script>

<template>
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <div>
        <h2>Favorites</h2>
      </div>
      <div class="row">
        <div
          v-for="favorite in userFavorites"
          :key="id"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
        >
          <a href="">
            <div class="card-flyer">
              <div class="text-box">
                <div class="image-box">
                  <img class="img-prod" :src="favorite.imageUrl" alt="" />
                </div>
                <div class="text-container">
                  <h6>{{ favorite.name }}</h6>
                </div>
                <div>
                  <button class="mt-4 btn-watch">
                    <a :href="favorite.youtubeUrl" target="_blank"
                      ><i class="fa-solid fa-circle-play"></i> Click here to
                      watch</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #000000;
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
.btn-watch {
  background-color: #f8b400;
}
.btn-watch:hover {
  background-color: #30aadd;
}
.img-prod {
  object-fit: cover;
}
.text-box {
  height: 400px;
}
.text-container {
  height: 100px;
}
/*----  Main Style  ----*/
#cards_landscape_wrap-2 {
  text-align: center;
  background: #f7f7f7;
}
#cards_landscape_wrap-2 .container {
  padding-top: 80px;
  padding-bottom: 100px;
}
#cards_landscape_wrap-2 a {
  text-decoration: none;
  outline: none;
}
#cards_landscape_wrap-2 .card-flyer {
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box img {
  /* -webkit-transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease; */
  width: 100%;
  height: 200px;
}
#cards_landscape_wrap-2 .card-flyer:hover .image-box img {
  opacity: 0.7;
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
  transform: scale(1.15);
}
#cards_landscape_wrap-2 .card-flyer .text-box {
  text-align: center;
}
#cards_landscape_wrap-2 .card-flyer .text-box .text-container {
  padding: 30px 18px;
}
#cards_landscape_wrap-2 .card-flyer {
  background: #ffffff;
  margin-top: 50px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
}
#cards_landscape_wrap-2 .card-flyer:hover {
  background: #fff;
  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 50px;
}
#cards_landscape_wrap-2 .card-flyer .text-box p {
  margin-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #000000;
}
#cards_landscape_wrap-2 .card-flyer .text-box h6 {
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Black", sans-serif;
  letter-spacing: 1px;
  color: #00acc1;
}
</style>
