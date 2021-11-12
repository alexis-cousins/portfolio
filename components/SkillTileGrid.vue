<template>
  <div class="md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
    <SkillTile v-for="(skill, index) in skills" :key="index" :skill="skill" />
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>