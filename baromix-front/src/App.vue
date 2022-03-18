<script setup lang="ts">
import IconBarometer from "./assets/IconBarometer.vue";
</script>

<template>
  <header>
    <div id="logo">
      <IconBarometer :width="50" />
      <h1>
        <router-link to="/">Baromix</router-link>
      </h1>
    </div>

    <nav>
      <router-link v-if="$route.path === '/summary'" to="/"
        >Add a new entry</router-link
      >
      <router-link v-if="$route.path === '/'" to="/summary"
        >See summary</router-link
      >
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <p>
      © 2021-2022
      <a href="https://ivanprobst.com" target="_blank" rel="noopener"
        >ivanprobst</a
      >
      |
      <a
        href="https://github.com/ivanprobst/baromix"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </footer>
</template>

<style>
/* Layout */
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: darkslategray;
}

header {
  display: flex;
}

#logo {
  display: flex;
  padding: 0.5em 2em;
  background: darkslategray;
  color: white;
}
#logo h1 {
  margin-left: 0.5em;
}
#logo h1 a {
  color: inherit;
  text-decoration: none;
}

nav {
  display: flex;
  align-items: flex-start;
}
nav a {
  display: block;
  padding: 1em 1.5em;
  border-bottom-right-radius: 0.8em;
  background: steelblue;
  transition: background-color 0.2s ease;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
nav a:hover {
  background: rgb(54, 100, 138);
}

main {
  padding: 0 1em 0 1em;
}

footer {
  margin-top: auto;
  border-top: 1px solid gainsboro;
}

/* Generic tags */
h2 {
  font-size: 3rem;
}
a {
  color: steelblue;
}
input {
  padding: 0.5em;
  font-size: inherit;
  border: none;
  border-radius: 0.2em;
  border: 1px solid moccasin;
  background: OldLace;
  color: darkslategray;
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
