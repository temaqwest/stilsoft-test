<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {}
  },
  methods: {
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

*, *:before, *:after {
  font-family: "Montserrat", sans-serif;
}

.v-main {
  background-color: #37474F;
  color: #FFFFFF;
}

</style>
