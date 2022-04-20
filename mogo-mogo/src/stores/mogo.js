import { defineStore } from "pinia";
import axios from 'axios'

export const useMogoStore = defineStore({
  id: "mogo",
  state: () => ({
    baseUrl: 'http://localhost:3000',
    restaurants: [],
    recipes: [],
    searchData: {
      keyword: "",
      location: "",
    }
  }),
  getters: {},
  actions: {
    fetchRestaurantsAction() {
      return axios.get(`${this.baseUrl}/restaurants/list?location=${this.searchData.location}`)
    },
    fetchRecipesAction() {
      return axios.get(`${this.baseUrl}/recipes?keyword=${this.searchData.keyword}`)
    }

  },

});
