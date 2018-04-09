import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        task: 'teste',
        completed: false
      },
      {
        task: 'teste2',
        completed: false
      },
      {
        task: 'teste3',
        completed: false
      }
    ]
  },
  mutations: {
    addTodo: (state, payload) => {
      payload.completed = true
      state.todos.unshift(payload)
    },
    toggleTodo: (state, payload) => {
      state.todos = state.todos.map(t => {
        if (t.task === payload) { return { task: t.task, completed: !t.completed } }
        return t
      })
    }
  },
  actions: {
    addTodo: ({ commit }, payload) => {
      commit('addTodo', payload)
    }
  },
  getters: {
    todos: state => { return state.todos }
  }
})
