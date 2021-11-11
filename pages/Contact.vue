<template>
  <div class="h-screen flex items-center -mt-28 -mb-8 z-0">
    <section class="grid grid-cols-2 gap-12">
      <div class="my-auto space-y-10">
        <h1 class="text-3xl font-bold uppercase text-center">
          Connect with me!
        </h1>
        <p>
          If you feel I’d be a good fit for your team, let’s chat! Please enter
          your details and I’ll get back to you, or you can contact me via
          Linkedin below!
        </p>
        <Socials />
      </div>
      <div class=""><ContactForm /></div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>