import { defineStore } from "pinia";
import axios from 'axios'

export const useMogoStore = defineStore({
  id: "mogo",
  state: () => ({
    baseUrl: 'http://localhost:3000',
    restaurants: [],
    recipes: []
  }),
  getters: {},
  actions: {
    fetchRestaurantsAction() {
      return axios.get(`${this.baseUrl}/restaurants/list`)
    },
    fetchRecipesAction() {
      return axios.get(`${this.baseUrl}/recipes`)
    }
  },

});
