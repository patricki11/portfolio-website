<template>
  
  <div class="container py-5 align-items-center" id="what-i-do">
    <div class="row align-items-center">
      <sectionHeader 
      :title="$t('aboutMe.sectionHeader')" 
      :titleUsage="'main'"
      />
      <div class="align-items-end mx-auto about-me-container-row">
        <div class="py-3 mx-auto isotope-grid" id="aboutMeCards" style="background-color:transparent;">
          <AboutMeCard
          v-for="data in items"
          :key="data.title"

          :title="data.title"
          :icon="data.icon"
          :description="data.description"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import sectionHeader from '../generalComponents/sectionHeader.vue';
import AboutMeCard from './AboutMeCard.vue';

export default {
  components: {
      sectionHeader,
      AboutMeCard
  },
  data()
  {
      return {
          items: [],
      };
  },
  watch:
  {
      '$i18n.locale':
      {
          immediate: true,
          handler(newVal, oldVal)
          {
              this.items = this.$t('about:items', { returnObjects: true});
          },
      },
  },
  mounted() {
    this.initIsotope();
  },
  methods: {
    initIsotope() {
      $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.isotope-item',
        },
      });
    },
  },
}

</script>

<style lang="scss" scoped>
#what-i-do {
  height: fit-content !important;
}

.card-container {
  background-color: $secundaire-color-bg;
  height:100%;
}

@include media-breakpoint-down(md) {
    .container {
      height: fit-content !important;
    }
  }


</style>