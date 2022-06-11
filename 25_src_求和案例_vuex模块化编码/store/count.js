//求和相关的配置
export default {
    namespaced:true,//开启命名空间
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            console.log("mutations中的JIA被调用了")
            state.sum += value
        },
        JIAN(state,value){
            console.log("mutations中的JIAN被调用了")
            state.sum -= value
        }
    },
    state:{
        sum:0,//当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}