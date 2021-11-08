<template>
  <div class="border-b-2 border-portfolio-light-grey my-4 w-full">
    <h1 class="text-3xl font-semibold my-1">{{ project.name }}</h1>
    <div
      class="flex justify-between cursor-pointer"
      @click="displayDiv = !displayDiv"
    >
      <p class="my-2">{{ project.skillset }}</p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mb-4 transform transition duration-500 opacity-0"
          :class="{
            'rotate-180 opacity-100': !displayDiv,
          }"
          viewBox="0 0 24 24"
          :stroke="'url(#grad1)'"
        >
          <defs>
            <linearGradient
              id="grad1"
              gradientTransform="rotate(90)"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style="stop-color: #ec4899; stop-opacity: 1" />
              <stop offset="90%" style="stop-color: #6366f1; stop-opacity: 1" />
            </linearGradient>
          </defs>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mb-4 transform transition duration-500 -mt-12"
          :class="{
            'rotate-180 opacity-0': !displayDiv,
            'opacity-100': displayDiv,
          }"
          viewBox="0 0 24 24"
          :stroke="'#ffffff'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
    <transition name="slide">
      <div class="" v-show="!displayDiv">
        <div class="flex flex-col">
          <button
            class="
              w-3/4
              flex
              mx-auto
              p-1
              bg-gradient-to-br
              from-red-500
              via-pink-500
              to-indigo-500
              rounded-md
              transition
              duration-150
              shadow-md
              hover:shadow-2xl
            "
            type="button"
            @click="$router.push({ name: project.route })"
          >
            <img class="rounded-md" v-bind:src="project.landingImage" />
          </button>
          <ProjectButton
            @click="$router.push({ name: project.route })"
            class="mx-auto my-6"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      displayDiv: true,
    };
  },
};
</script>

<style>
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>