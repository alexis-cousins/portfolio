<template>
  <div class="w-full flex flex-col">
    <ProjectIndexTitle
      :title="title"
      :description="description"
      :githubLink="githubLink"
      :appLink="appLink"
    />
    <ProjectIndexItem>
      <template v-slot:title>The Brief:</template>
      <template v-slot:body>
        <p class="my-6">
          Yoobee College is looking for a new platform to faciitate students
          sharing images (and associated information) with other students,
          tutors and external users. The subject of these image-based posts is
          open to developer choice, as is all front end design and user flow
          through the process.
        </p>
        <p class="my-6">
          Each post must contain a name, an image (via url), author information
          and any relevant other elements that are justified within a use case.
        </p>
        <p class="my-6">
          Client and server applications will allow users to view a list of
          items, create an item, update an item and delete an item in line with
          basic CRUD functionality. The Items will be persisted to database on
          your local or remote backend server. The client and server
          applications could be in one project or separated into two projects.
        </p>
      </template>
    </ProjectIndexItem>
    <ProjectIndexItem>
      <template v-slot:title>The Tech Stack:</template>
      <template v-slot:body>
        <div class="w-3/5 mx-auto grid grid-cols-3 gap-6">
          <SkillTile
            v-for="(skill, index) in skills"
            :key="index"
            :skill="skill"
          />
        </div>
      </template>
    </ProjectIndexItem>
    <ProjectIndexItem>
      <template v-slot:title>The Product:</template>
      <template v-slot:body>
        <SplideComponent :images="images" />
      </template>
    </ProjectIndexItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Fungi Files:",
      description: "A 'shroom-sharing fullstack CRUD application.",
      githubLink: "https://github.com/",
      appLink: "/projects/fungi-files/app",
      skills: [
        {
          title: "Github",
          svg: "../img/github.svg",
        },
        {
          title: "HTML",
          svg: "../img/html.svg",
        },
        {
          title: "Tailwind",
          svg: "../img/tailwind.svg",
        },
        {
          title: "Vue/Nuxt",
          svg: "../img/vue.svg",
        },
        {
          title: "Node.JS",
          svg: "../img/nodedotjs.svg",
        },
      ],
      images: [
        "/img/fungi1.png",
        "/img/fungi2.png",
        "/img/fungi3.png",
        "/img/fungi4.png",
        "/img/fungi5.png",
      ],
    };
  },
};
</script>

<style>
</style>