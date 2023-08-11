<template>

    <div 
    class="row project-row g-4 pb-4 py-4 row-cols-1 mx-auto align-self-end rounded shadow">
        <span class="fs-6 fw-bold fst-italic mt-0"><i>{{ title }} </i></span>
        <pre class="fs-7 mt-2 lh-sm overflow-visible">{{ description }}</pre>


        <a 
        v-for="projectUrl in projectUrls"
        target="_blank"
        class="icon-link mt-0" 
        :href="projectUrl.url">
            <i :class="`fs-2 bi bi-${projectUrl.icon}`"></i>
        </a>

        <hr />
        <span v-if="languages.length != 0 || frameworks.length != 0" class="my-0 fs-7"> {{ $t('projects.madeWith') }} </span>
        <span class="badge d-flex mt-1 p-1 align-items-center rounded-pill ms-2 fs-7 fit-content text-black border border-2 border-purple" 
        v-for="(language, index) in [...frameworks, ...languages]"
        :key="index">
            {{ language }}
        </span>
    </div>

</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        projectUrls: Array,
        languages: Array,
        frameworks: Array,
        status: String
    },
    data() {
        return {}
    }
}

</script>

<style lang="scss" scoped>

.bi {
    font-size:2em;
    color: $purple-highlight !important;
}

.project-row {
    background-color: $secundaire-color-bg;
    color: black;
}

.icon-link {
    width:fit-content;
}

</style>