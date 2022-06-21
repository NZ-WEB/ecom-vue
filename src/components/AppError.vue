<template>
  <v-alert v-if="error" type="error" border="top"> {{ error }} </v-alert>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
export default class extends Vue {
  @Prop(String) readonly error!: string;
}
</script>

<style scoped></style>
