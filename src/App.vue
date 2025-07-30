<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify To Do</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view>
        <div class="pa-10"><h1>Home</h1></div>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "To Do", icon: "mdi-format-list-checks", to: "/todo" },
      { title: "About", icon: "mdi-information", to: "/about" },
    ],
  }),
};
</script>

<style>
.v-btn__content {
  color: white;
}

.v-app-bar-title__content {
  width: 200px;
  color: white;
}

.v-toolbar {
  background-image: linear-gradient(
      to top right,
      rgba(19, 84, 122, 0.8),
      rgba(128, 208, 199, 0.8)
    ),
    url("https://picsum.photos/1920/1080?random");
  background-size: cover;
  background-position: center;
}
</style>
