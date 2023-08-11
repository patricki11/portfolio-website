<template>
  <!--<li id="languageSelect"> 
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="option in supportedLanguages" :value="option.language" :key="option.language">{{ option.display }}</option>
    </select>
    <i class="flag flag-en"></i>
  </li>-->

  <div class="dropdown my-auto">
    <button class="btn btn-secondary dropdown-toggle text-capitalize" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i :class="`flag flag-${selectedLanguage.icon}`"></i>{{ selectedLanguage.display }}
    </button>
    <div class="dropdown-menu">
      <a v-for="option in supportedLanguages" :key="option.code" class="dropdown-item" href="#" @click="changeLanguage(option.code)">
        <i :class="`flag flag-${option.icon}`"></i>{{ option.display }}
      </a>
    </div>
  </div>
</template>

<script>

export default {
  inject: ['i18n'], // Inject the i18next instance provided from the root
  data() {
    return {
      supportedLanguages: [
        {'icon': 'united-kingdom', 'code': 'en', 'display': 'English'},
        {'icon': 'netherlands',    'code': 'nl', 'display': 'Nederlands'}
      ], // Add the languages you support here
    };
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.changeLanguage(language);
      localStorage.setItem('lang', language);
      window.location.reload();
    },
  },
  created()
  {
    var locallyStoredLanguage = localStorage.getItem('lang') || navigator.language

    const matchingLanguage = this.supportedLanguages.find(language => language.code === locallyStoredLanguage);

    if (matchingLanguage)
    {
      this.$i18n.changeLanguage(matchingLanguage.code);
      localStorage.setItem('lang', matchingLanguage.code);
    }
    else
    {
      this.$i18n.changeLanguage('en');
      localStorage.setItem('lang', 'en');
    }

    this.selectedLanguage = this.supportedLanguages.find(language => language.code === localStorage.getItem('lang'));
  }
};

</script>

<style lang="scss">

#languageDropdown {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  background-color: transparent;
}

</style>