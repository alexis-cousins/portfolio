<template>
  <div class="w-full">
    <h1 class="text-3xl font-semibold my-1"><slot name="title" /></h1>
    <p class="my-2"><slot name="body" /></p>
    <Divider />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>