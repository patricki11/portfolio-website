<template>

    <div class="isotope-item feature col-lg-4 col-md-6 col-12 justify-content-center text-center px-2 fit-height-content">
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
    data() {
        return {}
    }
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
</style>