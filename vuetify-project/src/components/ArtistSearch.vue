<template>
  <div>
    <h1>Search Artists</h1>
    <input v-model="query" @keyup.enter="searchArtists" placeholder="Ricerca artista." />
    <ul>
      <li v-for="artist in artists" :key="artist.id" @click="selectArtist(artist.id)">
        {{ artist.name }}
      </li>
    </ul>
    <div v-if="selectedArtist">
      <h2>{{ selectedArtist.name }}</h2>
      <img :src="selectedArtist._links.thumbnail.href"  />
      <p>{{ selectedArtist.biography }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import artsyApi from '../services/dataservice';

export default defineComponent({
  name: 'ArtistSearch',
  setup() {
    const query = ref('');
    const artists = ref([]);
    const selectedArtist = ref(null);

    const searchArtists = async () => {
      try {
        const response = await artsyApi.searchArtists(query.value);
        artists.value = response.data._embedded.results.map((result: any) => ({
          id: response.data._embedded.results[0]._links.self.href,
          name: result.title,
          image: result._links.thumbnail.href,
        }));
      } catch (error) {
        console.error(error);
      }
    };
    const selectArtist = async (id: string) => {
      try {
        const response = await artsyApi.getArtist(id);
        selectedArtist.value = response.data
      } catch (error) {
        console.error(error);
      }
    };

    return {
      query,
      artists,
      selectedArtist,
      searchArtists,
      selectArtist,
    };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
