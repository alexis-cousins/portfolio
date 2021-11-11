<template>
  <div class="my-6">
    <!-- <div :class="` my-6`"> -->
    <div
      :class="skill.width"
      class="cursor-pointer"
      @click="displayDiv = !displayDiv"
    >
      <div class="flex justify-between my-2 font-semibold">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-2 transform transition duration-500 opacity-0"
            :class="{
              'rotate-180 opacity-100': !displayDiv,
            }"
            fill="none"
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
                <stop
                  offset="0%"
                  style="stop-color: #ec4899; stop-opacity: 1"
                />
                <stop
                  offset="90%"
                  style="stop-color: #6366f1; stop-opacity: 1"
                />
              </linearGradient>
            </defs>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 -ml-6 transform transition duration-500 opacity-0"
            :class="{
              'rotate-180 opacity-0': !displayDiv,
              'opacity-100': displayDiv,
            }"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="'#ffffff'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <h1 class="ml-2">{{ skill.name }}</h1>
        </div>
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
    <transition name="slide">
      <div class="" v-show="!displayDiv">
        <div class="flex flex-col pt-6">
          <ul>
            <li
              class="list-disc ml-6 mt-1"
              v-for="(skill, index) of skill.skillset"
              :key="index"
            >
              {{ skill }}
            </li>
          </ul>
          <!-- {{ skill.skillset }} -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
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