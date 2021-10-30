<template>
  <div>
    <form @submit.prevent="() => console.log(e)" class="flex flex-col">
      <div class="flex flex-col space-y-1">
        <label for="name">Name:</label>
        <input
          type="text"
          id="first-name"
          name="name"
          class="bg-portfolio-light-grey rounded-md h-8"
          required
        />
      </div>
      <div class="flex flex-col space-y-1 mt-2">
        <label for="contact-number">Contact Number:</label>
        <input
          type="number"
          id="contact-number"
          name="contact-number"
          class="bg-portfolio-light-grey rounded-md h-8"
          required
        />
      </div>
      <div class="flex flex-col space-y-1 mt-2">
        <label for="enquiry">Enquiry:</label>
        <textarea
          name="enquiry"
          id="enquiry-field"
          cols="30"
          rows="6"
          class="bg-portfolio-light-grey rounded-md"
        ></textarea>
      </div>
      <ContactButton class="mt-4 mx-auto" />
    </form>
  </div>
</template>

<script>
export default {};
</script>