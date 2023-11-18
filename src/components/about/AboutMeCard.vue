<template>

    <div ref="aboutMeComponent" class="isotope-item feature col-lg-4 col-md-6 col-12 justify-content-center text-center px-2 fit-height-content">
        <div class="card-container m-2 px-4 py-3 rounded shadow about-me-card">
            <div class="feature-icon d-flex flex-column align-items-center fs-2 rounded-4 mx-auto">
                <i :class="`fs-1 bi bi-${icon}`"></i>
                <p class="fs-7 fst-italic fw-bold">{{ title }}</p>
            </div>
            <p class="fs-7 lh-sm">
                {{ description }}
            </p>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        title: String,
        icon: String,
        description: String
    },
    mounted() {
        this.observeElement();
    },
    methods: {
        observeElement() {
            const aboutMeComponent = this.$refs.aboutMeComponent;

            const observer = new IntersectionObserver(
                (entries) => {
                    const inView = entries[0].isIntersecting;

                    if(inView) {
                        aboutMeComponent.classList.add('animate-in-view');
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(aboutMeComponent);
        },
    },
}

</script>

<style lang="scss" scoped>
i {
    font-size:1em;
    color: $purple-highlight;
}

.about-me-card {
    background: $secundaire-color-bg;
    white-space: pre-line;
}

.animate-on-scroll {
    opacity: 0; /* Start with opacity 0 if you want a fade-in effect */
}
  
.animate-in-view {
    animation: flip 1s ease-out forwards;
    opacity: 1; /* Optional: Set opacity to 1 to fade in when in view */
}
  
@keyframes flip {
    from {
        transform: rotateX(0deg); /* Start offscreen to the right */
        opacity: 0;
    }
    to {
        transform: rotateX(360deg);  /* Move to the original position on screen */
        opacity: 1;
        animation-timing-function: ease-out; /* Slow down at the end */
    }
}
</style>