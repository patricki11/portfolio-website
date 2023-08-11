<template>

<div class="container py-5 align-items-center" id="exp-and-edu">

    <div class="row align-items-center">
        <div class="row mx-auto exp-and-edu-container-row">

            <sectionHeader
            :title="$t('employmentAndEducation.sectionHeader')"
            />

            <div class="row g-4 pb-4 row-cols-1 mx-auto justify-content-center rounded" >
                <span class="fs-3 pb-2 px-5 border-bottom text-center sub-section-header">{{ $t('employmentAndEducation.employment') }}</span>
            </div>

            <EmploymentRow
            v-for="data in employment"
            :key="data.start"

            :start_date="data.start"
            :end_date="data.end"
            :education="data.education"
            :title="data.title"
            :jobtype="data.jobtype"
            :location="data.location"
            :city="data.city"
            :description="data.desc"
            :occupation_kind="data.occupation_kind"
            :skills="data.skills"
            />

            <div class="row g-4 pb-4 row-cols-1 mx-auto justify-content-center rounded" >
                <span class="fs-3 pb-2 px-5 border-bottom text-center sub-section-header">{{ $t('employmentAndEducation.internships') }}</span>
            </div>

            <InternshipRow
            v-for="data in internship"
            :key="data.start"

            :start_date="data.start"
            :end_date="data.end"
            :education="data.education"
            :title="data.title"
            :location="data.location"
            :city="data.city"
            :description="data.desc"
            :occupation_kind="data.occupation_kind"
            :skills="data.skills"
            />

            <div class="row g-4 pb-4 row-cols-1 mx-auto justify-content-center rounded" >
                <span class="fs-3 pb-2 px-5 border-bottom text-center sub-section-header">{{ $t('employmentAndEducation.education') }}</span>
            </div>
            
            <EducationRow
            v-for="data in education"
            :key="data.start"

            :start_date="data.start"
            :end_date="data.end"
            :education="data.education"
            :title="data.title"
            :location="data.location"
            :city="data.city"
            :description="data.desc"
            :occupation_kind="data.occupation_kind"
            :skills="data.skills"
            />

        </div>
    </div>
</div>

</template>

<script>
import sectionHeader from '../generalComponents/sectionHeader.vue';
import EmploymentRow from './EmploymentRow.vue';
import EducationRow from './EducationRow.vue';
import InternshipRow from './InternshipRow.vue';

export default {

    components: {
    sectionHeader,
    EmploymentRow,
    InternshipRow,
    EducationRow
},
    methods: {
        calcMirrored(index) {
            return index % 2
        }
    },
    data()
    {
        return {
            employment: [],
            internship: [],
            education: [],
        };
    },
    watch:
    {
        '$i18n.locale':
        {
            immediate: true,
            handler(newVal, oldVal)
            {
                this.employment = this.$t('employment:items', { returnObjects: true});
                this.internship = this.$t('internship:items', { returnObjects: true});
                this.education = this.$t('education:items', { returnObjects: true});
            },
        },
    },
}

</script>

<style lang="scss" scoped>

#exp-and-edu,
.exp-and-edu-container-row {
    height: fit-content !important;
}

.sub-section-header {
    width:fit-content !important;
}

</style>