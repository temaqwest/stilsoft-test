<template>
  <v-app-bar
      app
      color="blue-grey darken-4"
      dark
  >
    <v-container class="py-0 fill-height">
      <img
          height="50"
          src="@/assets/logo.svg"
          alt="logo"
      />
      <v-spacer></v-spacer>
      <router-link
          class="router-link"
          v-for="btn in headerBtns"
          :key="btn.id"
          :to="btn.path">
        <v-btn text>
          {{btn.name}}
        </v-btn>
      </router-link>
    </v-container>
  </v-app-bar>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      headerBtns: [
        {id: 1, name: 'Студенты', path: '/students'},
        {id: 2, name: 'Секции', path: '/sections'},
      ]
    }
  }
}
</script>

<style scoped>
  .router-link {
    text-decoration: none;
    color: #ffffff;
  }
</style>
