<template>
    <div class="location">
        <b-card class="mb-2 address">
            <div class="address-details">

                <b-card-text class="name h5">
                    {{venueLocation.name}}
                </b-card-text>

                <b-card-text>
                    {{venueLocation.location.formattedAddress.join( ', ')}}
                </b-card-text>

            </div>
            <div class="address-maps">

                <iframe :src="'http://maps.google.com/maps?q='+ venueLocation.location.lat + ',' + venueLocation.location.lng + '&z=15&output=embed'"
                        width="100%" height="200"
                        frameborder="0"
                        style="border:0"></iframe>


            </div>

        </b-card>
    </div>
</template>

<script>

    export default {
        name: "Location",
        props: ['venueLocation'],
    }
</script>

<style lang="scss">

    @import '../assets/scss/location.scss';

</style>