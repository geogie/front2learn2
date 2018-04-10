<!--列表-->
<template>
  <div id="todoList">
    <h1>Todo List</h1>
    <!--事件绑定：子控件的add事件传给当前事件addTodo-->
    <todo-add v-on:add="addTodo"></todo-add>
    <ul class="todos">
      <!--遍历todos-->
      <li v-for="todo, index in todos" class="todo">
        <input
          type="checkbox"
          name=""
          value=""
          :checked="todo.isCompleted"
        >
        <span
          :class="todo.isCompleted ? 'completed':''" @
        >
          <!--斜体字-->
          <em>{{index+1}}.</em>{{todo.text}}
        </span>
      </li>
    </ul>
    <div>
      <p v-show="todos.length===0">所有任务已经完成</p>
      <p v-show="todos.length!==0">
        共<strong>{{todos.length}}</strong>个待办事项。
        {{completedCounts}}个已完成，{{notCompletedCounts}}个未完成。
      </p>
    </div>
  </div>
</template>

<script>
  import TodoAdd from './TodoAdd.vue'
  export default {
    name: 'TodoList',
    components: {
      TodoAdd
    },
    methods: {
      addTodo(todo){
        console.log("add")
        this.todos.push({
          text: todo,
          isCompleted: false
        })
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        todos: [{
          text: 'java',
          isCompleted: false
        }, {
          text: 'c',
          isCompleted: true
        }
        ]
      }
    },
    computed: {
      completedCounts(){
        return this.todos.filter(item => item.isCompleted).length
      },
      notCompletedCounts(){
        return this.todos.filter(item => !item.isCompleted).length
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #todoList {
    margin: 0 auto;
    max-width: 350px;
  }

  .todos li {
    list-style: none; /*去掉黑点*/
  }

  .todo {
    text-align: left;
    cursor: pointer; /*小手*/
  }

  .completed {
    text-decoration: line-through;
  }
</style>
