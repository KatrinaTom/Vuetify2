<template>
  <div class="pa-10">
    <h1>To Do</h1>
    <v-text-field
      v-model="newTask"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pl-3 pr-3 mt-5"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      clearable
    >
    </v-text-field>
    <v-list two-line flat>
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
        @click="doneTask(task.id)"
        :class="{ 'blue lighten-5': task.done }"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': task.done }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="deleteTask(task.id)">
              <v-icon color="primary lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
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
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;

      const newTask = {
        id: Date.now(),
        title: this.newTask,
        done: false,
      };
      this.tasks.push(newTask);
      this.newTask = "";
    },
    doneTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
