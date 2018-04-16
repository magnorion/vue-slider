<template>
    <div id="slider-component">
        <image-holder :width="600" :images="images"></image-holder>
    </div>
</template>

<script>
    import ImageHolder from "./structure/ImageHolder.vue";
    export default {

        components: {
            "image-holder": ImageHolder
        },
        data() {
            return {
                images: [
                    'http://localhost:3000/src/images/img1.jpg',
                    'http://localhost:3000/src/images/img2.jpg',
                    'http://localhost:3000/src/images/img3.jpg'
                ]
            }
        }
    }
</script>

<style scoped>
    #slider-component {
        width: 600px;
        height: 350px;
        overflow: hidden;
    }
</style>