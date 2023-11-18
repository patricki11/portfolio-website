<template>

    <div ref="projectComponent" class="row project-row g-4 pb-4 py-4 row-cols-1 mx-auto align-self-end rounded shadow">
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
    mounted() {
        this.observeElement();
    },
    methods: {
        observeElement() {
            const projectComponent = this.$refs.projectComponent;

            const observer = new IntersectionObserver(
                (entries) => {
                    const inView = entries[0].isIntersecting;

                    if(inView) {
                        projectComponent.classList.add('animate-in-view');
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(projectComponent);
        },
    },
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

.animate-on-scroll {
    opacity: 0; /* Start with opacity 0 if you want a fade-in effect */
}
  
.animate-in-view {
    animation: slideInFromRight 1s ease-out forwards;
    opacity: 1; /* Optional: Set opacity to 1 to fade in when in view */
}
  
@keyframes slideInFromRight {
    from {
        transform: translateX(100%); /* Start offscreen to the right */
        opacity: 0;
    }
    to {
        transform: translateX(0); /* Move to the original position on screen */
        opacity: 1;
        animation-timing-function: ease-out; /* Slow down at the end */
    }
}

</style>