<template>
    <div id="slider-component">
        <image-holder :width="600" :images="images"></image-holder>
        <slider-bar :width="600" :counter="images.length"></slider-bar>
    </div>
</template>

<script>
    import ImageHolder from "./structure/ImageHolder.vue";
    import Bar from "./structure/Bar.vue";
    export default {
        components: {
            "image-holder": ImageHolder,
            "slider-bar": Bar
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
        height: 300px;
        overflow: hidden;
        position: relative;
    }
</style>