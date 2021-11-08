<template>
  <div
    class="
      flex
      w-full
      h-20
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
    <div class="text-white font-semibold uppercase space-x-10 z-10">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/Skills">Skills</nuxt-link>
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
        "
      >
        <nuxt-link to="/Contact">Contact</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>