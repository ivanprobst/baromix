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
  color: DarkGreen;
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
h2 {
  font-size: 3rem;
}
main p {
  font-size: 2rem;
}

footer {
  margin-top: auto;
}
</style>
