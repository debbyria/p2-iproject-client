import { defineStore } from "pinia";
import axios from "axios";

export const useMogoStore = defineStore({
  id: "mogo",
  state: () => ({
    baseUrl: "http://localhost:3000",
    restaurants: [],
    recipes: [],
    searchData: {
      keyword: "",
      location: "",
    },
    restaurantPage: [],
    recipePage: [],
    username: "",
    isLoggedIn: false,
    userFavorites: [],
  }),
  getters: {},
  actions: {
    fetchRestaurantsAction() {
      return axios.get(
        `${this.baseUrl}/restaurants/list?location=${this.searchData.location}`
      );
    },
    fetchRecipesAction() {
      return axios.get(
        `${this.baseUrl}/recipes?keyword=${this.searchData.keyword}`
      );
    },
    loginAction(payload) {
      return axios.post(`${this.baseUrl}/users/login`, {
        email: payload.email,
        password: payload.password,
      });
    },
    registerAction(payload) {
      return axios.post(`${this.baseUrl}/users/register`, {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      });
    },
    addFavoriteActions(payload) {
      return axios.post(
        `${this.baseUrl}/recipes/favorite`,
        {
          name: payload.title,
          imageUrl: payload.thumbnail,
          youtubeUrl: payload.youtubeUrl,
        },
        {
          headers: {
            access_token: localStorage.access_token,
          },
        }
      );
    },
    fetchFavoritesAction() {
      return axios.get(`${this.baseUrl}/recipes/favorite`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    fetchDetailRestaurant(params) {
      return axios.get(`${this.baseUrl}/restaurants/${params}`);
    },
  },
});
