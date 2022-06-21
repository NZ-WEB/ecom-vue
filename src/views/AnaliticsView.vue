<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>{{ analiticsData }} - data</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import analitics from "@/store/modules/analitics";
import { IAnaliticsResponse } from "@/types/analiticsResponse.interface";
import auth from "@/store/modules/auth";

@Options({
  components: {
    HelloWorld,
  },
})
export default class extends Vue {
  public analiticsData: IAnaliticsResponse[] = [];

  get isAuth() {
    return auth.getAuth;
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
