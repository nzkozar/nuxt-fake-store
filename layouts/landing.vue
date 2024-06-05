<script setup lang="ts">
const { $bs } = useNuxtApp();
onMounted(() => {
  try {
    const collapse = new $bs.Collapse('#navbarSupportedContent');
    collapse.show();
  } catch (e) {
    console.log('Bootstrap error: ', e);
  }
});
</script>

<template>
  <LandingPageHeader/>
  <div class="container-fluid">
    <slot />
  </div>
</template>

<style scoped>

</style>