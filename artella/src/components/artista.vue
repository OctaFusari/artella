<template>
    <div>
        <div>
            <div>
                <h1></h1>
            </div>
            <div>
                <div style="display: flex;">
                    <button class="buttonlight">
                        Bibliografia
                    </button>
                    <button class="buttonheavy">
                        Opere
                    </button>
                </div>
            </div>
        </div>
        <div>

        </div>
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
        };
    },
    methods: {
    },
    mounted() {
        console.log(this.$route.params.postId)
        DataService.getArtist(this.$route.params.postId).then(async response => {
            console.log(response)
        })
    },


};
</script>

<style></style>
