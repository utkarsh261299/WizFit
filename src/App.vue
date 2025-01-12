<template>
  <div id="app">
    <HeaderSection />
    <SearchSection />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import SearchSection from './components/SearchSection.vue';

export default {
  components: {
    HeaderSection,
    SearchSection,
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
}
</style>
