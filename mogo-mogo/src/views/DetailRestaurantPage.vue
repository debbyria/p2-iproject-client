<script>
import { mapActions, mapWritableState } from "pinia";
import { useMogoStore } from "../stores/mogo";

export default {
  data() {
    return {
      detailRestaurant: {},
    };
  },
  methods: {
    ...mapActions(useMogoStore, ["fetchDetailRestaurant"]),
    async getDetails(id) {
      try {
        let response = await this.fetchDetailRestaurant(id);
        this.detailRestaurant = response.data;
      } catch (err) {
        this.$swal({
          icons: "error",
        });
      }
    },
  },
  created() {
    this.getDetails(this.$route.params.fsqId);
  },
};
</script>

<template>
  <div
    id="cards_landscape_wrap-2"
    class="col-xs-4 col-sm-6 col-md-6 col-lg-6 mx-auto"
  >
    <div class="container">
      <div class="row">
        <div>
          <div class="card-flyer">
            <div class="text-box">
              <div class="image-box">
                <img
                  width="200px"
                  class="img-prod"
                  :src="detailRestaurant.imageUrl"
                  alt=""
                />
              </div>
              <div class="text-container">
                <h6>{{ detailRestaurant.name }}</h6>
                <p>{{ detailRestaurant.address }}</p>
              </div>
              <div>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="590"
                      height="400"
                      id="gmap_canvas"
                      :src="detailRestaurant.locationMap"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-cont {
  height: 300px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}

.detail-card {
  margin-left: 50%;
}
.img-prod {
  object-fit: cover;
}
.text-box {
  height: 800px;
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
