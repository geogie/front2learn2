<!--add-->
<template>
  <div id="addTodo">
    <!--键盘enter事件-->
    <input
      type="text"
      name=""
      class="input"
      value=""
      v-model="todo"
      @keyup.enter="addTodo"
    >
    <!--button click事件-->
    <button
      type="button"
      name="button"
      @click="addTodo"
    >添加
    </button>
  </div>
</template>

<script>
  export default{
    name: 'addTodo',
    data(){
      return {
        todo: ''
      }
    },
    methods: {
      addTodo(){
        if (this.todo) {
          // 把add事件发给父控件，参数todo
          this.$emit('add', this.todo)
          this.todo = ''
        } else {
          alert('内容不能为空')
        }
      }
    }
  }
</script>
<style scoped>
  .input {
    min-width: 200px;
  }
</style>
