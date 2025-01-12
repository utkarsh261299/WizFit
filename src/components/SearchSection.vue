<template>
  <section class="hero">
    <div class="container">
      <h3 class="wizfit-heading">What is WizFit Challenge?</h3>
      <a
        href="https://www.youtube.com/watch?v=1OW0PADKTrM"
        target="_blank"
        rel="noopener noreferrer"
        class="watch-video-button"
      >
        Watch Video
      </a>
    </div>
    <img src="@/assets/player.png" alt="Athlete" class="hero-image" />
    <div class="content-wrapper">
      <h2>Are you ready to take the challenge?</h2>
      <div>
        <p>Download Hariem Wizards App</p>
        <div class="download-buttons">
          <img
            src="@/assets/goolge-store.png"
            alt="Google Play"
            class="store-btn"
          />
          <img
            src="@/assets/apple-store.png"
            alt="App Store"
            class="store-btn"
          />
        </div>
        <p>or you can sign up right now</p>
      </div>
      <div class="search-list">
        <div class="search-bar">
          <input
            type="text"
            placeholder="Search schools..."
            v-model="searchQuery"
            @input="debouncedSearch"
          />
        </div>
        <div v-if="loading" class="loading">Loading schools...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="school-list">
          <div v-if="schools.length === 0" class="no-results">
            No schools found.
          </div>
          <div v-else v-for="school in schools" :key="school.id" class="school">
            <p>{{ school.school_name }}</p>
            <button class="join-btn">Join Campaign</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchSchools } from "@/api/schools";
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      schools: [],
      searchQuery: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchSchoolList(query = "") {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetchSchools(query);
        this.schools = response.sort((a, b) =>
          a.school_name.localeCompare(b.school_name)
        );
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    handleSearch() {
      this.fetchSchoolList(this.searchQuery);
    },
    debouncedSearch: debounce(function () {
      this.handleSearch();
    }, 600),
  },
  created() {
    this.fetchSchoolList();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.watch-video-button {
  background-color: #ff3366;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.wizfit-heading {
  color: #ff3366;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
}
.hero {
  padding: 2rem;
}
.hero-image {
  max-width: 300px;
  display: block;
  margin: 0 auto;
}
.content-wrapper {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 800px;
  box-sizing: border-box;
}

.content-wrapper h2 {
  color: #ff3366;
  font-size: 2rem;
  font-weight: bold;
}
.search-list {
  margin-left: 8rem;
  margin-right: 8rem;
}
.download-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}
.store-btn {
  max-width: 150px;
  cursor: pointer;
}
.search-bar {
  margin-top: 2rem;
}
.search-bar input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.school-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.school {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.school p {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.join-btn {
  padding: 0.5rem 1rem;
  background-color: white;
  font-weight: bold;

  color: #ff3366;
  border: 2px solid #ff3366;
  border-radius: 5px;
  cursor: pointer;
}
.loading {
  text-align: center;
  margin: 1rem 0;
}
.error {
  color: red;
  text-align: center;
  margin: 1rem 0;
}
.no-results {
  color: gray;
  text-align: center;
  margin: 1rem 0;
}
</style>
