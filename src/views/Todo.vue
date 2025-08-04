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
    <v-list two-line flat v-if="$store.state.tasks.length > 0">
      <v-list-item
        v-for="task in $store.state.tasks"
        :key="task.id"
        @click="$store.commit('doneTask', task.id)"
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
            <v-btn icon @click.stop="$store.commit('deleteTask', task.id)">
              <v-icon color="primary lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>

    <div v-else class="pa-10">
      <div class="primary--text no-tasks">
        <v-icon color="green darken-2 p-5" size="50px">mdi-check-circle</v-icon>
        <div class="text-h5 p-5">Congratulations!</div>
        <div class="p-5">Tasks Completed</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<style lang="scss">
.no-tasks {
  text-align: center;
  margin-top: 20px;
}
</style>
