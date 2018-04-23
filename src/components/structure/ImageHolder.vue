<template>
    <div id="slider-image-holder">
        <ul>
            <li v-for="image in images" :key="image">
                <img :src="image" >
            </li>
        </ul>
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
                let images = document.querySelectorAll("#slider-image-holder ul li img");
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

<style>
    #slider-image-holder {
        height: 300px;
        transition: ease-out all 0.5s;
    }

    #slider-image-holder ul {
        padding: 0px !important;
        margin: 0px !important;
    }

    #slider-image-holder ul li {
        float: left;
    }
</style>