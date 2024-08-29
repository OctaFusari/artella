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
      console.log("response")
        let route__dot = this.$route.params.opId
        let route__nodot = route__dot.replace("opera:", "")
        try {
          const response = await DataService.geArtObj(route__dot.replace("opera:", ""));
          this.ArtObj = response.data
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
