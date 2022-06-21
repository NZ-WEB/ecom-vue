<template>
  <h1 class="my-4">{{ title }}</h1>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class extends Vue {
  @Prop(String) readonly title!: string;
}
</script>

<style scoped></style>
