<template>
  <v-app>
    <v-app-bar
      app
      prominent
      color="#dfcbd2"
      elevation="7"
    >
      <div class="app__icon d-flex align-center">
        <v-icon
          large
        >
          mdi-search-web
        </v-icon>
        <div class="app__logo flex flex-column">
          <h1>FindFriends</h1>
          <p class="my-0">search friendly</p>
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  * {
    font-family: 'Times New Roman', Times, serif;
  }
  .v-app-bar {
    color: #636760 !important;
    .app__logo {
      margin-left: 10px;
    }
  }
  .v-main__wrap {
    padding: 40px;
    background-color: rgba(235, 221, 220, 0.5);
  }
</style>
