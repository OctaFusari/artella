<template>
    <div>

    </div>
</template>

<script>
import DataService from "../dataservice";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

export default {

  data() {
    return {
        ArtObj:{},
    }
  },
  watch: {

  },
  methods: {
    async geneSearch() {
        try {
        let route__dot = this.$route.params.opId
        let route__nodot = route__dot.substring(1)
          const response = await DataService.geArtObj(route__nodot);
          this.ArtObj = response.data
          console.log(response)
        } catch (error) {
          console.error(error);
        }
    },
  },

  mounted() {
    this.geneSearch()
  },
}
</script>

<style>

</style>
