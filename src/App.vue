<template>
  <v-app>
    <v-main>
      <drawer />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '@/components/the-drawer.vue';

export default {
  name: 'App',
  components: {
    Drawer
  },
}
</script>
