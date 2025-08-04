import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Drink coffee",
        done: false,
      },
      {
        id: 2,
        title: "Take dog for a walk",
        done: false,
      },
      {
        id: 3,
        title: "Study",
        done: false,
      },
    ],
  },
  getters: {},
  mutations: {
    addTask(state, newTask) {
      if (newTask.trim() === "") return;

      const task = {
        id: Date.now(),
        title: newTask,
        done: false,
      };
      state.tasks.push(task);
    },
    doneTask(state, id) {
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});

// state is where the data is stored
// getters are used to access the state data
// mutations are used to change the state data
// actions are used to perform asynchronous operations and then commit mutations
// modules are used to split the store into smaller pieces
