<template>
    <div class="container">
        <Category title="游戏">
            <!--作用域插槽-->
            <template scope="atguiug">
                <ul>
                    <li v-for="(g,index) in atguiug.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <!--新的api-->
            <template slot-scope="{games}">
                <ol>
                    <li style="color: #bd362f" v-for="(g,index) in games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <!--结构赋值-->
            <template scope="{games}">
                <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
            </template>
        </Category>

    </div>

</template>
<script>
    import Category from "@/components/Count";

    export default {
        name:'App',
        components:{Category},

    }
</script>
<style>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
    h4{
        text-align: center;
    }
</style>

