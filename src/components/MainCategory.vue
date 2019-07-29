<template>
    <div id="category-component">

        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button style="text-align: left" block href="#"
                      v-b-toggle="'accordion-' + category.id"
                      variant="success">
                <b-img :src="categoryHelper.getIconUrl(category.icon)" fluid alt=""></b-img>
                {{category.name}}
            </b-button>
        </b-card-header>

        <b-collapse :id="'accordion-' + category.id" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>Sub Categories:</b-card-text>

                <div id="sub-categories"
                     v-for="subCategory in category.categories"
                     v-bind:key="subCategory.id">
                    <SubCategory :subCategory="subCategory"/>
                </div>

            </b-card-body>
        </b-collapse>
    </div>

</template>

<script>
    import SubCategory from './SubCategory';
    import CategoryHelper from '../Utils/CategoryHelper';

    export default {
        data: () => (
            {
                categoryHelper: CategoryHelper
            }
        ),
        name: "MainCategory",
        components: {
            SubCategory
        },
        props: ['category']
    }
</script>

<style scoped>

</style>