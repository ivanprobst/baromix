<script setup lang="ts">
import Home from "./components/HomeForm.vue";
import IconBarometer from "./assets/IconBarometer.vue";
</script>

<template>
  <header>
    <IconBarometer :width="50" />
    <h1>Baromix</h1>
  </header>

  <main>
    <Home />
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
  padding: 1em;
}
h1 {
  margin-left: 0.5em;
}

main {
  padding: 0 1em 0 1em;
}

footer {
  margin-top: auto;
  border-top: 1px solid gainsboro;
}

/* Generic tags */
a {
  color: forestgreen;
}
input {
  padding: 0.5em;
  font-size: inherit;
  border: none;
  border-radius: 0.2em;
  background: Gainsboro;
  text-align: center;
}
</style>
