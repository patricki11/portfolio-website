

<template>
    <Menu />
    <Landing />
    <AboutMe />
    <ExpAndEdu />
    <Projects />
    <Contact />

    <Footer />
  </template>
  
  <script setup>
    import Menu from '../components/generalComponents/Menu.vue'

    import Landing from '../components/landing/Landing.vue'
    import AboutMe from '../components/about/AboutMe.vue'
    import ExpAndEdu from '../components/expAndEdu/ExpAndEdu.vue'
    import Projects from '../components/projects/Projects.vue'
    import Contact from '../components/contact/Contact.vue'

    import Footer from '../components/generalComponents/Footer.vue'
  </script>
  
  <style lang="scss">
  
  .container {
    height: 100vh !important;
  }
  
  .top-wave {
    position:absolute; 
    z-index:-1;
    width:100%;
  }
  
  
  
  </style>
  