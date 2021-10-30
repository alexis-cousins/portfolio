<template>
  <div>
    <section class="grid grid-cols-2 gap-12 px-16 border-indigo-500 border-b-2">
      <div class="flex flex-col space-y-10 mt-24 pb-40">
        <h1 class="text-3xl font-bold">Hi, I'm Alexis.</h1>
        <h1 class="text-3xl font-bold">
          I am a junior front-end web developer currently based in Auckland, New
          Zealand.
        </h1>
        <ContactButton class="m-auto" />
      </div>

      <div class="bg-indigo-500 h-full text-gray-900">Insert image here</div>
    </section>
    <section class="border-indigo-500 border-b-2 pb-10">
      <div class="mt-6">
        <h1 class="text-3xl font-bold uppercase text-center">Skillset</h1>
        <p class="m-10">
          I am currently completing the Level 6 Web and UX Design diploma at
          Yoobee Colleges, in Auckland. I have accquired a range skills as a
          part of this course, including:
        </p>
        <div class="w-3/5 mx-auto grid grid-cols-3 space-x-6 space-y-12">
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
        </div>
      </div>
    </section>
    <section class="px-16 py-6 border-indigo-500 border-b-2">
      <div class="mt-6">
        <h1 class="text-3xl font-bold uppercase text-center">Projects</h1>
      </div>
    </section>
    <section
      class="grid grid-cols-2 gap-12 px-16 py-6 border-indigo-500 border-b-2"
    >
      <div class="mt-6 space-y-10">
        <h1 class="text-3xl font-bold uppercase text-center">
          Connect with me!
        </h1>
        <p>
          If you feel I’d be a good fit for your team, let’s chat! Please enter
          your details and I’ll get back to you, or you can contact me via
          socials below!
        </p>
      </div>
      <div class=""><ContactForm /></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  layout: "app",

  data() {
    return {
      skills: [],
    };
  },
};
</script>
