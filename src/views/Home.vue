<template>
  <div class="cards">
    <v-card
      v-for="resource in routes_resources"
      :key="resource.title"
      :to="resource.path"
    >
      <h1>{{ resource.title }}</h1>
    </v-card>
  </div>
</template>

<script>
import { routes_resources } from "../router.js";
export default {
  name: "Home",
  setup() {
    return { routes_resources };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
