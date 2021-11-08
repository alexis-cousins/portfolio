<template>
  <div>
    <section class="grid grid-cols-2 gap-12">
      <div class="flex flex-col space-y-10 mt-36 pb-40">
        <h1 class="text-3xl font-bold">Hi, I'm Alexis.</h1>
        <h1 class="text-3xl font-bold">
          I am a junior front-end web developer currently based in Auckland, New
          Zealand.
        </h1>
        <ContactButton class="m-auto" @click="$router.push('/Contact')" />
      </div>

      <div class="mx-auto">
        <img src="/img/hero.png" alt="hero illustration" />
      </div>
    </section>
    <Divider class="h-4" />
    <section class="pb-10">
      <div class="mt-6">
        <h1 class="text-3xl font-bold uppercase text-center">Skillset</h1>
        <p class="m-10">
          I am currently completing the Level 6 Web and UX Design diploma at
          Yoobee Colleges, in Auckland. I have accquired a range skills as a
          part of this course, including:
        </p>
        <div class="w-3/5 mx-auto grid grid-cols-3 gap-6">
          <SkillTile
            v-for="(skill, index) in skills"
            :key="index"
            :skill="skill"
          />
        </div>
      </div>
    </section>
    <div id="projects">
      <Divider />
    </div>

    <section class="">
      <h1 class="text-3xl font-bold uppercase text-center">Projects</h1>
      <p class="my-10">
        I have completed a number of projects utilising a range of skillsets
        during my last year of study. From pure HTML/CSS to a full stack MEVN
        project, please view some of my completed projects below:
      </p>
      <div class="flex flex-col">
        <ProjectTile
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </section>
    <Divider />
    <section class="grid grid-cols-2 gap-12 pt-6 pb-12">
      <div class="mt-6 space-y-10">
        <h1 class="text-3xl font-bold uppercase text-center">
          Connect with me!
        </h1>
        <p>
          If you feel I’d be a good fit for your team, let’s chat! Please enter
          your details and I’ll get back to you, or contact me via my Linkedin
          below!
        </p>
        <Socials />
      </div>
      <ContactForm />
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      skills: [
        {
          title: "Vue/Nuxt",
          description: "I regularly use JS frameworks in projects.",
          svg: "img/vue.svg",
        },
        {
          title: "Tailwind",
          description: "I regularly use Tailwind for my front-end.",
          svg: "img/tailwind.svg",
        },
        {
          title: "Github",
          description: "Experience with Github and version control",
          svg: "img/github.svg",
        },
        {
          title: "HTML",
          description: "I can write HTML in line with best practice.",
          svg: "img/html.svg",
        },
        {
          title: "CSS/SCSS",
          description: "Utilise styling frameworks within project.",
          svg: "img/css3.svg",
        },
        {
          title: "Node JS",
          description: "Building a backend API for MongoDB with ExpressJS.",
          svg: "img/nodedotjs.svg",
        },
      ],
      projects: [
        {
          name: "ThriftMe",
          skillset: "Mongoose, Express, Vue, Node, Github",
          route: "projects-thrift-me",
          landingImage: "/img/thrift1.png",
        },

        {
          name: "Fungi Files",
          skillset: "Mongoose, Express, Nuxt, Node, Github",
          route: "projects-fungi-files",
          landingImage: "/img/fungi1.png",
        },
        {
          name: "Free Range",
          skillset: "HTML, Vanilla JS, SCSS",
          route: "projects-free-range",
          landingImage: "/img/freerange1.png",
        },
      ],
    };
  },
};
</script>
