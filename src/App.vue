<template>
    <div id="app">

        <NavBar />

        <b-container class="main-container">
            <b-row>


                <b-col class="full-height-overflow" md="4" sm="4">
                    <div>
                        <b-card
                                title="Categories"
                                tag="article"
                                class="mb-2"
                        >
                            <hr>

                            <Spinner v-if="Object.keys(categoryList).length === 0 " />

                            <b-card v-for="category in categoryList"
                                    v-bind:key="category.id"
                                    no-body class="mb-1">
                                <MainCategory :category="category"/>
                            </b-card>


                        </b-card>
                    </div>
                </b-col>

                <b-col class="full-height-overflow" md="8" sm="8">

                    <b-card v-if="!newData" class="mb-2 no-locations">
                        <b-card-text class="name h4">No Locations Exist. Select a Category
                        </b-card-text>

                    </b-card>

                    <div class="mt-2"
                         v-for="locationItem in locationListItems"
                         v-bind:key="locationItem.venue.id">
                        <Location :venueLocation="locationItem.venue"/>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import MainCategory from './components/MainCategory';
    import Location from './components/Location';
    import NavBar from './components/NavBar';
    import Spinner from './components/Spinner'
    import ErrorHelper from './Utils/ErrorHelper';
    import {appEventBus} from './main';

    import {RepositoryFactory} from './repository/RepositoryFactory';


    export default {
        name: 'app',
        components: {
            Spinner,
            NavBar,
            MainCategory,
            Location
        },

        data() {
            return {
                categoryList: {},
                locationListItems: [],
                errorHelper: ErrorHelper,
                categoryRepository : RepositoryFactory.get('category'),
                newData: false
            }
        },
        created: function () {
            this.fetchCategories();

            appEventBus.$on('showLocationList', (locationList) => {
                if (locationList.items !== null
                    && locationList.items !== undefined
                    && locationList.items.length > 0
                ) {

                    this.newData = true;
                    this.locationListItems = locationList.items;
                }
                else {
                    this.newData = false;
                    this.locationListItems = [];
                }
            });

        },
        methods: {
            fetchCategories() {
                this.categoryRepository.getCategoryListData()
                    .then((response) => {
                        if (response.status === 200) {
                            this.categoryList = response.data.data;
                        }
                    })
                    .catch((error) => {
                        this.errorHelper.handleError(error);
                    });

            }
        },


    }
</script>

<style lang="scss">

    @import 'assets/scss/app.scss';

</style>
