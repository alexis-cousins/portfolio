<template>
  <button
    @click="$emit('click')"
    class="
      font-bold
      w-48
      text-portfolio-dark-grey
      uppercase
      bg-gradient-to-r
      from-red-500
      via-pink-500
      to-indigo-500
      pt-1.5
      pb-1
      rounded-lg
    "
  >
    View CV
  </button>
</template>

<script>
export default {};
</script>

<style>
</style>