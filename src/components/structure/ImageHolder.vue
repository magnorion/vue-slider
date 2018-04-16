<template>
    <div id="slider-image-holder">
        <img v-for="image in images" :src="image" :key="image">
    </div>
</template>

<script>
    export default {
        props: ["images", "width"],
        methods: {
            calcSlider: function() {
                const self = this;
                let container = document.querySelector("#slider-image-holder"),
                counter = self.images.length;

                container.style.width = (counter * self.width) + "px";
            },
            calcImage: function() {
                const self = this;
                let images = document.querySelectorAll("#slider-image-holder img");
                for(var i = 0; i < images.length; i++) {
                    images[i].style.width = self.width + "px";
                }
            }
        },
        mounted() {
            this.calcSlider();
            this.calcImage();
        }
    }
</script>

<style scoped>
    #slider-image-holder{
        height: 400px;
    }

    img{
        float: left;
    }
</style>