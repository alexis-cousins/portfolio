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
          My task was to work as a team to build an application that is
          intuitive to use and displays data from an API in an easily
          understandable representation. Before implementation, the application
          will be modelled and prototypes will be tested. The implementation of
          the project will be managed using agile methodologies. All contributed
          code will adhere to best practices. Project dependencies will be
          managed and the application will be built for production.
        </p>
        <p class="my-6">
          Your client wants to create C2C market space for their users to buy
          and sell their products (types or product or product category can be
          decided by you). The seller should be able to post a product with its
          associated details, buyers should be able to view, leave comments and
          ask questions about the products.
        </p>
        <p class="my-6">
          The solution requires the user to: create an item, view a list, view
          item details, update or edit the item and delete an item.
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
      title: "ThriftMe:",
      description:
        "A C2C platform for preloved clothing and fashion accessories.",
      githubLink: "https://github.com/",
      appLink: "/projects/thriftme/app",
      skills: [
        {
          title: "Github",
          svg: "../img/github.svg",
        },
        {
          title: "Tailwind",
          svg: "../img/tailwind.svg",
        },
        {
          title: "Vue",
          svg: "../img/vue.svg",
        },
        {
          title: "Node.JS",
          svg: "../img/nodedotjs.svg",
        },
        {
          title: "HTML",
          svg: "../img/html.svg",
        },
      ],
      images: [
        "/img/thrift1.png",
        "/img/thrift1a.png",
        "/img/thrift2.png",
        "/img/thrift3.png",
        "/img/thrift4.png",
        "/img/thrift6.png",
      ],
    };
  },
};
</script>

<style>
</style>