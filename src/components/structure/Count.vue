<template>
    <div>
        <ul>
            <li class="slider-ticker" @click="change(tick-1, $event)" v-for="tick in count" :key="tick"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["count"],
        methods: {
            change: function(tick, e) {
                let ticker = e.target,
                tickers = document.querySelectorAll(".slider-ticker");

                tickers.forEach(ele => {
                    ele.style.background = "#555";
                });

                ticker.style.background = "#fff";

                this.$parent.$emit("next", tick);
            },
            tickerNext: function () {}
        }
    }
</script>

<style scoped>
    ul {
        float: left;
        margin: 0px;
        margin-left: 5px;
        padding: 0px;
    }

    ul li {
        float: left;
        list-style: none;
        border: solid #fff 2px;
        background: #555;
        padding: 2px;
        width: 7px;
        height: 7px;
        border-radius: 10px;
        transition: ease all 0.5s;
        margin-right: 5px;
        margin-top: 5px;
        cursor: pointer;
    }

    ul li:first-child {
        background: #fff;
    }
</style>