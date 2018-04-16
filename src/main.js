import Vue from "vue";
import Slider from "./components/Slider.vue";

const slider = new Vue({
    el: "#slider",
    render: h => h(Slider)
});