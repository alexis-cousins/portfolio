<template>
  <div :class="`${skill.width} my-6`">
    <div class="flex justify-between my-2 font-semibold">
      <h1>{{ skill.name }}</h1>
      <h1>{{ skill.confidence }}</h1>
    </div>
    <div
      class="
        rounded-full
        h-3
        bg-gradient-to-r
        from-red-500
        via-pink-500
        to-indigo-500
      "
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
    },
  },
};
</script>

<style>
</style>