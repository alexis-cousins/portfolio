<template>
  <div>
    <form action="" class="flex flex-col space-y-1">
      <label for="name">Name:</label>
      <input
        type="text"
        id="first-name"
        name="name"
        class="bg-portfolio-light-grey rounded-md h-8"
        required
      />
      <label for="contact-number">Contact Number:</label>
      <input
        type="number"
        id="contact-number"
        name="contact-number"
        class="bg-portfolio-light-grey rounded-md h-8"
        required
      />
      <label for="enquiry">Enquiry:</label>
      <textarea
        name="enquiry"
        id="enquiry-field"
        cols="30"
        rows="6"
        class="bg-portfolio-light-grey rounded-md"
      ></textarea>
      <button
        type="submit"
        class="
          my-6
          mx-auto
          font-bold
          w-40
          text-portfolio-dark-grey
          uppercase
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-indigo-500
          py-1
          rounded-lg
        "
      >
        <nuxt-link to="/Contact"> Get In Touch</nuxt-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>