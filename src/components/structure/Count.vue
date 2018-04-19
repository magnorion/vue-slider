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
        data() {
            return {
                bgOn: "#fff",
                bgOff: "#555"
            }
        },
        methods: {
            change: function(tick, e) {
                let ticker = e.target,
                tickers = document.querySelectorAll("li.slider-ticker");

                tickers.forEach(ele => {
                    ele.style.background = this.bgOff;
                });

                ticker.style.background = this.bgOn;

                this.$parent.$emit("next", tick);
            },
            tickerNext: function (position, width) {
                let tick = position / width,
                tickers = document.querySelectorAll("li.slider-ticker");

                if (tick < 0) tick = tick * -1;

                let tickActivate = tickers[tick];
                tickers.forEach(t => {
                    t.style.background = this.bgOff;
                });
                tickActivate.style.background = this.bgOn;

            }
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