<template>
    <div id="category-component2">

        <b-button :id="subCategory.name" @click="openLocation" block href="#"
                  class="badge-primary mb-1">
            <b-img :src="categoryHelper.getIconUrl(subCategory.icon)" fluid alt=""></b-img>
            {{subCategory.name}}
        </b-button>
    </div>
</template>

<script>

    import CategoryHelper from '../Utils/CategoryHelper';
    import ErrorHelper from '../Utils/ErrorHelper';
    import {appEventBus} from '../main';
    import {RepositoryFactory} from '../repository/RepositoryFactory';
    import {globalConfig} from '../Utils/GlobalConfig';


    export default {
        data: () => (
            {
                categoryHelper: CategoryHelper,
                errorHelper: ErrorHelper,
                locationRepository: RepositoryFactory.get('location'),
                globalConfig : globalConfig
            }
        ),
        methods: {
            openLocation($event) {
                this.locationRepository.getLocations($event.srcElement.id, globalConfig.nearBy)
                    .then((response) => {
                        if (response.status === 200) {
                            appEventBus.$emit('showLocationList', response.data.data);
                        }
                    })
                    .catch((error) => {
                        this.errorHelper.handleError(error);
                    });


            }
        },
        name: "SubCategory",
        props: ['subCategory']
    }
</script>

<style scoped>

</style>