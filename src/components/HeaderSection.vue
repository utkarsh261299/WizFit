<template>
  <header class="header">
    <div class="header-container">
      <img src="@/assets/banner.png" alt="WizFit Logo" class="logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped>
.header {
  padding: 0;
  color: white;
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0;
}

.logo {
  width: 100vw;
  height: auto;
}
</style>
