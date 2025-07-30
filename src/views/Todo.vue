<template>
  <div class="pa-10">
    <h1>To Do</h1>
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
            <v-list-item-title :class="{ 'text-decoration-line-through' : task.done }">{{ task.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    doneTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.done = !task.done;
      }
    },
  },
};
</script>
