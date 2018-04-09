<template>
  <div class="hello">
    <ul>
      <li v-for="(todo,i) in todos" :key="i">
        {{todo}}
      </li>
    </ul>
    <div>
      <input type="text" name="task">
      <button @click.prevent="addTodoComponente">Enviar</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
  },
  methods: {
    ...mapActions({ addTodoComponente: 'addTodo' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
