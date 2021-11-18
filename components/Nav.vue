<template>
  <div
    class="
      flex flex-col
      sm:flex-row
      w-full
      minh-20
      justify-between
      items-center
      px-8
      p-4
      bg-portfolio-dark-grey
      z-20
    "
  >
    <div class="text-white z-10">
      <h2
        class="
          text-2xl
          uppercase
          font-bold
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-pink-500
          to-indigo-500
        "
      >
        <nuxt-link to="/">Alexis Cousins</nuxt-link>
      </h2>
    </div>
    <div
      class="
        text-white
        font-semibold
        uppercase
        grid grid-cols-3
        xs:grid-cols-4
        items-center
        text-center
        gap-2
        sm:gap-4
        z-10
      "
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/Skills">Skills</nuxt-link>
      <h1 class="cursor-pointer" @click="showResume">CV</h1>
      <button
        class="
          font-semibold
          text-portfolio-dark-grey
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-indigo-500
          uppercase
          px-3
          pt-1
          pb-0.5
          rounded-lg
          xs:col-span-1
        "
      >
        <nuxt-link to="/Contact">Contact</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showResume: function () {
      const pdf = "/ACResume.pdf";
      window.open(pdf);
    },
  },
};
</script>