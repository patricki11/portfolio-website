<template>

    <div ref="educationComponent" class="row animate-on-scroll exp-edu-row  g-4 py-4 row-cols-1 mx-auto align-self-end rounded shadow">
        <span class="fs-6 mt-0 title fw-bold fst-italic">
            {{ title }} {{ $t('employmentAndEducation.educationAt') }} {{ location }}, {{ city }}
        </span>
        <br />
        <span class="fs-7 mt-0 sub-date" v-if="education != null">{{ education }}</span>
        <br />
        <span class="fs-7 mt-0 sub-date">{{ start_date }} - {{ end_date }}</span>

        <pre class="mt-2 mb-0 fs-7 lh-sm overflow-visible">{{ description }}</pre>

        <hr v-if="skills != null" />
        <span v-if="skills != null" class="my-0 fs-7"> {{ $t('employmentAndEducation.skills') }} </span>
        <span class="badge d-flex mt-1 p-1 align-items-center rounded-pill ms-2 fs-7 fit-content text-black border border-2 border-purple" 
        v-for="(skill, index) in skills"
        :key="index">
            {{ skill }}
        </span>
    </div>

</template>

<script>
export default {
    props: {
        start_date: String,
        end_date: String,
        education: String,
        title: String,
        location: String,
        city: String,
        description: String,
        occupation_kind: String,
        skills: Array,
    },
    mounted() {
        this.observeElement();
    },
    methods: {
        observeElement() {
            const educationComponent = this.$refs.educationComponent;

            const observer = new IntersectionObserver(
                (entries) => {
                    const inView = entries[0].isIntersecting;

                    if(inView) {
                        educationComponent.classList.add('animate-in-view');
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(educationComponent);
        },
    },
}

</script>

<style lang="scss" scoped>

.exp-edu-container {
    width:fit-content;
}

.exp-edu-row {
    background-color: $secundaire-color-bg;
}

.sub-date {
    color: $grey-highlight;
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