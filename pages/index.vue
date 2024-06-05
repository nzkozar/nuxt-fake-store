<script setup lang="ts">
import HorizontalProductList from "~/components/HorizontalProductList.vue";

definePageMeta({
  layout: 'landing'
});

useHead({
  title: "Products",
  meta: [
    {name: "description", content: "Description of Browse books from Browse books." }
  ]
});
</script>

<template>
  <HorizontalProductList :title="$t('home.featured_products')"
                         linkMore="/products/featured"
                         listDataUrl="https://fakestoreapi.com/products?limit=10"/>
</template>

<style scoped>

</style>