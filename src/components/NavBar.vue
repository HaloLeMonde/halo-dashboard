<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app disable-resize-watcher>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-item>{{ item.title }}</v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title >
          {{ appTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return {
      appTitle: 'Halo Dashboard',
      sidebar: false,
      menuItems: [
          { title: 'Halo 5', path: '/haloFive'},
          { title: 'HMCC', path: '/hmcc'},
          { title: 'Halo Infinite', path: '/halo-infinite'},
          { title: 'Settings', path: '/settings'},
      ]
    }
  },
};
</script>
