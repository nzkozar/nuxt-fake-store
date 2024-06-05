<script setup lang="ts">
  import ProductCard from "~/components/ProductCard.vue";

  defineProps(['title','linkMore','listDataUrl'])

</script>

<template>
  <div class="row mt-2">
    <div class="col-8">
      <h2>{{title}}</h2>
    </div>
    <div class="col-4 text-end">
      <a class="btn btn-success" :href="linkMore">{{$t("horizontal_product_list.show_more")}}</a>
    </div>
    <div class="col-12">
      <div class="list-group list-group-horizontal overflow-auto">
        <ProductCard v-for="product in products" :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data(){
      return {
        products: ''
      }
    },
    async mounted () {
      this.products = await $fetch(this.listDataUrl);
    }
  }
</script>

<style scoped>

</style>