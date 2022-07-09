<template>
  <v-navigation-drawer app clipped permanent>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        :title="route.title"
        :prepend-icon="route.icon"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "../router.js";

export default {
  name: "Drawer",
  props: ["drawer"],
  setup() {
    return { routes };
  },
};
</script>
