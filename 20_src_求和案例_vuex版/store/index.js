//该文件用于创建Vuex中最为核心的store
//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用插件（Vuex）
Vue.use(Vuex)

//准备actions-用于响应组件中的动作
const actions = {
    /*jia(content,value){
        console.log("actions中的jia被调用了")
        content.commit('JIA',value)
    },
    jian(content,value){
        console.log("actions中的jian被调用了")
        content.commit('JIAN',value)
    },*/
    jiaOdd(content,value){
        console.log("actions中的jiaOdd被调用了")
        if(content.state.sum % 2){
            content.commit('JIA',value)
        }
    },
    jiaWait(content,value){
        console.log("actions中的jiaWait被调用了")
        setTimeout(()=>{
            content.commit('JIA',value)
        },500)
    }
}
//准备mutations-用于操作数据（state）
const mutations = {
    JIA(state,value){
        console.log("mutations中的JIA被调用了")
        state.sum += value
    },
    JIAN(state,value){
        console.log("mutations中的JIAN被调用了")
        state.sum -= value
    }
}
//准备state-用于存储数据
const state = {
    sum:0//当前的和
}


//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})



