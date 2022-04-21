import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RecipesPage from "../views/RecipesPage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import FavoritePage from "../views/FavoritePage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritePage
    }
  ],
});

export default router;
