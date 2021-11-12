<template>
  <div>
    <form @submit.prevent="submit" class="flex flex-col">
      <div class="flex flex-col space-y-1">
        <label for="name">Name:</label>
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          class="bg-portfolio-light-grey rounded-md h-8 py-0.5 px-1"
          required
        />
      </div>
      <div class="flex flex-col space-y-1 mt-2">
        <label for="email">Email:</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="bg-portfolio-light-grey rounded-md h-8 py-0.5 px-1"
          required
        />
      </div>
      <div class="flex flex-col space-y-1 mt-2">
        <label for="enquiry">Enquiry:</label>
        <textarea
          v-model="enquiry"
          name="enquiry"
          id="enquiry-field"
          cols="30"
          rows="6"
          class="bg-portfolio-light-grey rounded-md py-0.5 px-1"
        ></textarea>
      </div>
      <ContactButton class="mt-10 mx-auto" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      enquiry: "",
    };
  },
  methods: {
    async submit() {
      try {
        let response = await this.$axios.post(
          "https://api.hsforms.com/submissions/v3/integration/submit/21004862/e50be665-5d1a-4e27-ac3a-bec2157832b8",
          {
            fields: {
              name: this.name,
              email: this.email,
              enquiry: this.enquiry,
            },
            fields: [
              {
                name: "email",
                value: this.email,
              },
              {
                name: "firstname",
                value: this.name,
              },
              {
                name: "message",
                value: this.enquiry,
              },
            ],
          }
        );

        alert("Success!");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>