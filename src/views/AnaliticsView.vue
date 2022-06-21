<template>
  <v-container>
    <app-page-title title="Аналитика" />
    <the-graph v-if="analiticsData.length" :analiticsData="analiticsData" />
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import analitics from "@/store/modules/analitics";
import { IAnaliticsResponse } from "@/types/analiticsResponse.interface";
import auth from "@/store/modules/auth";
import TheGraph from "@/components/TheGraph.vue";
import AppPageTitle from "@/components/AppPageTitle.vue";

@Options({
  components: { TheGraph, AppPageTitle },
})
export default class extends Vue {
  public analiticsData: IAnaliticsResponse[] = [];

  get isAuth() {
    return auth.getAuthOrLocalStorage;
  }

  public created() {
    if (!this.isAuth) {
      this.$router.push("/login");
    }
  }

  mounted() {
    if (this.isAuth) {
      analitics.loadAnalitics();
      this.analiticsData = analitics.getAnalitics;
    }
  }
}
</script>
