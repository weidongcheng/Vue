<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>

</template>
<script>

    import MyList from "@/components/MyList";
    import MyFooter from "@/components/MyFooter";
    import MyHeader from "@/components/MyHeader";

    export default {
        name:'App',
        components:{MyHeader,MyFooter,MyList},
        data(){
            return{
                //把对象转换成json对象
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj){
               // console.log('我是App组件，我收到了数据: ',todoObj)
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if(todo.id == id){
                        todo.done = !todo.done
                    }
                })
            },
            //删除
            deleteTodo(id){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            //全选or取消全选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.done = done
                })
            },
            //清除所有已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.done
                })
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value))
                }
            }
        }
    }
</script>
<style>
    /*base*/
    body{
        background: #fff;
    }
    .btn{
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    }
    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }
    .btn:focus{
        outline: none;
    }
    .todo-container{
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
