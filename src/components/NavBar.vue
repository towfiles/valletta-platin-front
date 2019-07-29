<template>

    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-brand href="#">Locations: <span class="h6 font-weight-bold">{{globalConfig.nearBy}}</span> </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        </b-navbar>
    </div>

</template>

<script>

    import {globalConfig} from '../Utils/GlobalConfig';

    export default {
        name: "NavBar",
        data() {
            return {
                globalConfig : globalConfig
            }
        }
    }
</script>

<style scoped>

</style>