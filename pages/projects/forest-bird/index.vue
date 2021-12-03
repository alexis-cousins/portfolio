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
          Your client represents a small non-profit organisation that would like to increase awareness of their cause and further it through education and engagement.
        </p>
        <p class="my-6">
          The organisation has two income streams that need to be accommodated for in the site. Visitors should be able to donate money, and they also need to be able to purchase products that may include merchandise from a curated online catalog.
        </p>

        <p class="my-6">
          This project is hosted and can be viewed  <a class="font-bold underline" target="_blank" href="http://13.211.173.178/"> here. </a>
        </p>

      </template>
    </ProjectIndexItem>
    <ProjectIndexItem>
      <template v-slot:title>The Tech Stack:</template>
      <template v-slot:body>
        <SkillTileGrid :skills="skills" />
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
      title: "Forest and Bird Redesign:",
      produced: "November 2021",
      description: "A Wordpress Custom Theme",
      github: "",
      appLink: "http://13.211.173.178/",
      skills: [
        {
          title: "PHP",
          svg: "../img/php.svg",
        },
        {
          title: "Wordpress",
          svg: "../img/wordpress.svg",
        },
        {
          title: "CSS/SCSS",
          svg: "../img/css3.svg",
        },
      ],
      images: [
        "/img/forest1.png",
        "/img/forest2.png",
        "/img/forest3.png",
        "/img/forest4.png",
      ],
    };
  },
};
</script>

<style>
</style>