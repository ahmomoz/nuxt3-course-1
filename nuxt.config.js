// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from "nuxt";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/assets/stylesheets/all.scss", "swiper/swiper-bundle.css"],

  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },

  modules: ["nuxt-swiper"],
});
