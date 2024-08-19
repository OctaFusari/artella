<!-- <template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
 -->




 <template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArtistSearch from './components/ArtistSearch.vue';

export default defineComponent({
  name: 'App',
  components: {
    ArtistSearch,
  },
});
</script>

<style>
/* Your global styles here */
</style>