<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <the-graph v-if="analiticsData.length" :analiticsData="analiticsData" />
    <div>{{ analiticsData }} - data</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import analitics from "@/store/modules/analitics";
import { IAnaliticsResponse } from "@/types/analiticsResponse.interface";
import auth from "@/store/modules/auth";
import TheGraph from "@/components/TheGraph.vue";

@Options({
  components: { TheGraph },
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
    analitics.loadAnalitics();
    this.analiticsData = analitics.getAnalitics;
  }
}
</script>
