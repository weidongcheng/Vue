// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入路由组件
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

//创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',//使用占位符声明接收params参数
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            //props 的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hello'}

                            //props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的params参数，以props的形式传递给Detail组件。
                            // props:true

                            //props 的第三种写法，值为函数（完整写法）
                            props($route){
                                return {
                                    id:$route.params.id,
                                    title:$route.params.title
                                }
                            }

                            //props 的第三种写法，值为函数（结构赋值）
                            /*props({params}){
                                return {id:params.id,title:params.title}
                            }*/

                            //props 的第三种写法，值为函数（结构赋值的连续写法）
                            // props({params:{id,title}}){
                            //     return {id,title}
                            // }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫-----初始化的时候、每一次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log("前置路由守卫",to,from)
    if(to.meta.isAuth){//判断是否需要鉴权
        if(localStorage.getItem('school')==='atguigu'){
            next()
        }else{
            alert('学校名不对，无权限查看！！')
        }
    }else{
        next()
    }
})

//全局后置路由守卫-----初始化的时候、每一次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log("后置路由守卫",to,from)
    document.title = to.meta.title || '硅谷系统'
})

export default router