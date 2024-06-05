<script setup lang="ts">
const props = defineProps(['product'])

let product = props.product;
let cardUrl = '/product/'+product.id;

</script>

<template>
  <div class="list-group-item">
    <div class="card" style="width: 15rem;">
      <a :href=cardUrl>
        <NuxtImg
            :src=product.image
            class="card-img-top"
            alt="..."
            style="width: 15rem;max-height:10rem;object-fit: contain"
        />
      </a>
      <div class="card-body p-2">
        <h5 class="card-title"
            style="height: 3lh;overflow: hidden;"
            :title="product.title">
          <a :href=cardUrl>
            {{product.title}}
          </a>
        </h5>
        <p class="card-text text-end">{{product.price}} €</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>