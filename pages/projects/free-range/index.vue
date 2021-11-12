<template>
  <div class="w-full flex flex-col">
    <ProjectIndexTitle
      :title="title"
      :produced="produced"
      :description="description"
      :github="github"
      :appLink="appLink"
    />
    <ProjectIndexItem>
      <template v-slot:title>The Brief:</template>
      <template v-slot:body>
        <p class="my-6">
          Hypothetically, Tourism New Zealand works with the tourism industry to
          positively promote New Zealand internationally. They have a new
          campaign that is aimed at visitors staying for short periods, booking
          their own accommodation and arranging their own transport.
        </p>
        <p class="my-6">
          The task was to create a single page web application that allowed
          users to input information, validate the information and provide
          meaningful feedback when validation has failed or passed. Transport
          options must then be displayed user based the information entered,
          including the cost of the transportation.
        </p>
        <p class="my-6">
          This SPA must have a distinctive look and feel whilst remaining
          cohesive with the Tourism New Zealand brand.
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
      title: "Free Range:",
      produced: "June 2021",
      description: "A New Zealand-based journey planning web app.",
      github: "https://github.com/",
      appLink: "/projects/free-range/app",
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
          title: "CSS/SCSS",
          svg: "../img/css3.svg",
        },
      ],
      images: [
        "/img/freerange1.png",
        "/img/freerange2.png",
        "/img/freerange3.png",
        "/img/freerange4.png",
        "/img/freerange5.png",
        "/img/freerange6.png",
      ],
    };
  },
};
</script>

<style>
</style>