<template>
    <div id="slider-bar">
        <count-image ref="counter" :count="counter"></count-image>
        <ul>
            <li @click="prev"> prev </li>
            <li @click="next"> next </li>
        </ul>
    </div>
</template>

<script>
    import Count from "./Count.vue";
    export default {
        props: ["counter", "width"],
        components: {
            "count-image": Count
        },
        data() {
            return {
                position: 0,
                timeout: null,
                timer: 7000
            }
        },
        methods: {
            next: function(time = false) {
                this.position = this.position - this.width;
                if ( ((this.counter * this.width) * -1) == this.position) {
                    this.position = 0;
                }
                
                if (time) {
                    let timer = this.timer;
                    this.timeout = setTimeout(() => this.next(true), timer);
                }

                this.animate(this.position);  
            },
            prev: function() {
                this.position = this.position + this.width;
                if (this.position > 0) {
                    this.position = this.position + (this.counter * this.width) * -1;
                }
                this.animate(this.position);
            },
            animate: function (position) {
                let container = document.querySelector("#slider-image-holder");
                container.style.marginLeft = position + "px";
                this.$refs.counter.tickerNext(position, this.width);
            },
            autoAnimate: function() {
                let timer = this.timer;
                this.timeout = setTimeout(() => this.next(true), timer);
            }
        },
        mounted() {
            this.$on("next", (tick) => {
                let pos = ( tick * this.width ) * -1;
                this.position = tick;
                this.animate( pos );
            });

            let holder = document.querySelector("#slider-image-holder");
            holder.addEventListener("mouseenter", () => {
                clearTimeout(this.timeout);
            });
            
            holder.addEventListener("mouseleave", () => {
                this.autoAnimate();
            });

            this.autoAnimate();
        }
    }
</script>

<style scoped>
    #slider-bar {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.7;
        height: 25px;
        position: absolute;
        bottom: 0%;
        left: 0%;
    }

    #slider-bar ul {
        width: 100%;
        text-align: right;
        margin: 0px !important;
        padding: 0px !important;
    }

    #slider-bar ul li {
        display: inline;
        color: #fff;
        font-weight: bold;
        margin-right: 10px;
        cursor: pointer;
        text-transform: uppercase;
        font-family: helvetica;
        font-size: 10px;
    }
</style>