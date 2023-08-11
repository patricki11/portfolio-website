<template>


<div class="container py-5 align-items-center" id="projects">

    <div class="row align-items-center">
        <div class="row mx-auto projects-container-row" style="">
            
            
            <sectionHeader
            :title="$t('projects.sectionHeader')"
            class="pb-5"
            />
                <h3 v-if="!items.length">There are currently no projects!</h3>

                <ProjectRow
                    v-if="items"
                    v-for="project in items"

                    :title="project.title"
                    :description="project.description"
                    :projectUrls="project.projectUrls"
                    :languages="project.languages"
                    :frameworks="project.frameworks"
                    :status="project.status"
                />


        </div>
    </div>
</div>
    
</template>

<script>
import ProjectRow from './ProjectRow.vue'
import sectionHeader from '../generalComponents/sectionHeader.vue';

export default {
    components: {
        ProjectRow,
        sectionHeader
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
                this.items = this.$t('projects:items', { returnObjects: true });
            },
        },
    },
}

</script>

<style lang="scss" scoped>

#projects,
.projects-container-row {
    height:fit-content !important;
}

</style>