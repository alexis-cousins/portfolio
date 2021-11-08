<template>
  <div
    class="
      flex
      mx-auto
      p-0.5
      bg-gradient-to-br
      from-red-500
      via-pink-500
      to-indigo-500
      rounded-md
      cursor-default
      transition
      transform
      duration-150
      hover:scale-105
      shadow-md
      hover:shadow-2xl
    "
  >
    <div
      class="
        w-36
        rounded-md
        flex flex-1
        items-center
        justify-center
        bg-portfolio-dark-grey
      "
    >
      <div class="space-y-2 p-4 mx-auto">
        <img class="h-6 w-6 mx-auto" :src="skill.svg" alt="logo" />

        <h2 class="font-semibold text-center">{{ skill.title }}</h2>
        <p v-if="skill.description" class="text-center text-sm">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: {
        title: "",
        description: "",
        svg: "",
      },
    },
  },
};
</script>

<style>
</style>