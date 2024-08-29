<template>
    <div class="container__generale__router profilo__container">
      <div>
        <div class="profilo__upper">
          <div class="profilo__upper__sez__uno" :style="{ backgroundImage: 'url('+this.arrayUtenti.profile_picture_url+')'}">
  
          </div>
          <div class="profilo__upper__sez__due">
            <div v-if="this.arrayUtenti != {}">
              <h1>{{ this.arrayUtenti.username }}</h1><span style="margin-left: 3vw;color: #FF5400" v-if="user == (':'+user__local)" @click="$router.push({ name: 'modificaProfilo'})">Modifica profilo</span>
              
            </div>
            <div>
              <h3>{{ this.arrayUtenti.bio }}</h3>
            </div>
          </div>
        </div>
        <div class="profilo__centro">

        </div>
      </div>
      <div class="profilo__lato">
  
      </div>
    </div>
  </template>
  
  <style>
  .profilo__upper {
    display: flex;
  }
  
  .profilo__upper div {
    margin: 1vw;
  }
  
  .profilo__container {
    display: grid;
    grid-template-columns: 1fr .5fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". .";
    margin-top: 3vw;
  }
  
  .profilo__upper__sez__uno {
    background-size: cover;
    border: 1px solid var(--color-text);
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
  
  .profilo__upper__sez__due div:first-of-type {
    display: flex;
    align-items: center;
  }
  
  @media only screen and (max-width: 600px) {
    .profilo__upper__sez__due div:first-of-type {
      display: block;
      align-items: center;
    }
  }
  
  @media only screen and (max-width: 1200px) {
    
    
    .profilo__upper__sez__due span{
      margin-left: 0vw !important;
    }
  
   
    .profilo__uppersez__due div:first-of-type {
      display: block;
      align-items: center;
    }
  }
  
  
  </style>
  
  <script>
  import DataService from "../dataservice";
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { ref as refFire } from 'firebase/storage';
  import { onMounted } from 'vue';
  import { ref as refVue } from 'vue';
  import {
    collection,
    query,
    where,
    getFirestore,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    and,
    writeBatch,
    setDoc,
    getDoc,
  } from "firebase/firestore";
  export default {
    data() {
      return {
        commentotxt: "",
        arrayUtenti: {} = {},
        user: this.$route.params.userId,
        user__local: localStorage.getItem("login"),
      };
    },
    methods: {
  
      takeUsers: async function () {
        const querySnapshot = await getDocs(collection(DataService.dbEx(), "utenti"));
        querySnapshot.forEach((doc) => {
          var route__dot = this.$route.params.userId;
          var route__nodot = route__dot.substring(1);
          if(doc.id == route__nodot){
            this.arrayUtenti = { id: doc.id, ...doc.data() }
          }
        });
      },
    },
  
    mounted() {
        this.takeUsers()
    },
  
  
  };
  </script>