<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleAuth">auth</button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
import auth from "@/store/modules/auth";
import { useRouter } from "vue-router";

export default class extends Vue {
  router = useRouter();

  handleAuth() {
    auth.auth("5f8475902b0be670555f1bb3");

    if (auth.getAuth) {
      this.$router.push("/");
    }
  }
}
</script>
