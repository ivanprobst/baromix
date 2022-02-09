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
    <p>© 2021-2022 ivanprobst</p>
  </footer>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: DarkSlateGray;
}

header {
  display: flex;
  padding: 1em;
  color: DarkGreen;
}
h1 {
  margin-left: 0.5em;
}

main {
  padding: 0 1em 0 1em;
}

footer {
  margin-top: auto;
}

input {
  padding: 0.5em;
  font-size: inherit;
  border: none;
  background: Gainsboro;
  text-align: center;
}
</style>
