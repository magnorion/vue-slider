<template>
    <div>
        <ul>
            <li v-for="tick in count" :key="tick"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["count"],
        mounted() {
            console.log(this.count);
        },
        methods: {
            change: function() {
                
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