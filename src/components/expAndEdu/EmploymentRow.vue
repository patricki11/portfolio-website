<template>

    <div class="row exp-edu-row g-4 py-4 row-cols-1 mx-auto align-self-end rounded shadow">

        <span class="fs-6 mt-0 title fw-bold fst-italic">
            {{ title }} {{ $t('employmentAndEducation.employmentAt') }} {{ location }}, {{ city }}
        </span>
        <span class="fs-7 mt-0 sub-date">{{start_date}} - {{ end_date }}<span v-if="jobtype != null" class="badge px-1 py-1 align-items-center rounded-pill ms-2 fit-content fw-normal text-black border border-1 background-purple border-purple">{{ jobtype }}</span></span>

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
        jobtype: String,
        location: String,
        city: String,
        description: String,
        occupation_kind: String,
        skills: Array,
    },
    data() {
        return {}
    }
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

</style>