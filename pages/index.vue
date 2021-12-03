<template>
  <div>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="flex flex-col space-y-10 mt-10 md:mt-36 md:pb-40">
        <h1 class="text-3xl font-bold">Hi, I'm Alexis.</h1>
        <h1 class="text-3xl font-bold">
          I am a graduate front-end web developer currently based in Auckland, New
          Zealand.
        </h1>
        <ContactButton class="m-auto" @click="$router.push('/Contact')" />
        <a href="https://github.com/alexis-cousins/portfolio" target="_blank">
          <button
            class="
              flex
              justify-center
              items-center
              font-bold
              w-56
              text-portfolio-dark-grey
              uppercase
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-indigo-500
              py-1
              rounded-lg
              space-x-2
              mx-auto
            "
          >
            <span class="pt-1">View Portfolio</span>
            <svg
              enable-background="new 0 0 32 32"
              height="20px"
              class=""
              id="Layer_1"
              version="1.0"
              viewBox="0 0 32 32"
              width="20px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                clip-rule="evenodd"
                d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                fill="#151719"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </a>
      </div>

      <div class="mx-auto">
        <img
          class="h-56 sm:h-80 md:h-auto"
          src="/img/hero.png"
          alt="hero illustration"
        />
      </div>
    </section>
    <Divider class="h-4" />
    <section class="">
      <div class="mt-6">
        <h1 class="text-3xl font-bold uppercase text-center">Skillset</h1>
        <p class="m-10">
          I am currently completing the Level 6 Web and UX Design diploma at
          Yoobee Colleges, in Auckland. I have accquired a range skills as a
          part of this course, including:
        </p>
        <SkillTileGrid :skills="skills" />
        <nuxt-link to="/skills">
          <button
            @click="$router.push({ to: '/', hash: 'skills' })"
            class="
              font-bold
              w-48
              flex
              mx-auto
              my-10
              text-portfolio-dark-grey
              uppercase
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-indigo-500
              pt-1.5
              pb-1
              rounded-lg
              transition
              transform
              duration-150
              hover:scale-105
            "
          >
            <span class="mx-auto">View All Skills</span>
          </button>
        </nuxt-link>
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
    <section
      class="grid sm:grid-cols-1 sm:mx-10 md:grid-cols-2 gap-12 pt-6 pb-12"
    >
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
        {
          name: "Forest and Bird (A Wordpress Site)",
          skillset: "php, CSS, Wordpress and Woocommerce",
          route: "projects-forest-bird",
          landingImage: "/img/forest1.png",
        },
      ],
    };
  },
};
</script>
