<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
import auth from "@/store/modules/auth";

export default class extends Vue {
  created() {
    auth.setKey("newKey!");
    console.log(auth.getKey);
  }
}
</script>
