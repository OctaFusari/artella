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
          const response = await DataService.getGene(this.$route.params.opId.substring(1));
          this.ArtObj = response.data
          console.log(response.data)
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
