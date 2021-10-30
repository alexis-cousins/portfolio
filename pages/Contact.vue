<template>
  <div>
    <section class="grid grid-cols-2 gap-12 px-32 py-10">
      <div class="mt-6 space-y-10">
        <h1 class="text-3xl font-bold uppercase text-center">
          Connect with me!
        </h1>
        <p>
          If you feel I’d be a good fit for your team, let’s chat! Please enter
          your details and I’ll get back to you, or you can contact me via
          socials below!
        </p>
        <div class="text-center">Social Icons go here</div>
      </div>
      <div class=""><ContactForm /></div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Contact",
  layout: "app",
};
</script>