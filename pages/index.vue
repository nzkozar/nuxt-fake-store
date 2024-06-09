<script setup lang="ts">
import HorizontalProductList from "~/components/HorizontalProductList.vue";

definePageMeta({
  layout: 'landing'
});

useHead({
  title: "FakeStore | Home",
  meta: [
    {name: "description", content: "Fake products for all!" }
  ]
});

const {data: categories} = await useFetch('https://fakestoreapi.com/products/categories/');

</script>

<template>
  <HorizontalProductList :title="$t('home.featured_products')"
                         linkMore="/products/featured"
                         listDataUrl="https://fakestoreapi.com/products?limit=10"/>

  <HorizontalProductList v-for="category in categories"
                         :title="category"
                         :linkMore="'/category/'+category"
                         :listDataUrl="'https://fakestoreapi.com/products/category/'+category+'?limit=10'"/>

</template>

<style scoped>

</style>