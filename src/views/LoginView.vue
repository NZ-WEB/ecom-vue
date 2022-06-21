<template>
  <v-container>
    <h1 class="my-4">LeadHit</h1>

    <v-alert v-if="error" type="error" border="top"> {{ error }} </v-alert>

    <v-card>
      <v-form tonal class="pa-4">
        <v-text-field
          v-model="id"
          :rules="rules"
          counter="24"
          hint="Введите id сайта для доступа к аналитике"
          label="Id сайта"
        ></v-text-field>
        <v-btn :disabled="isDisabled" color="primary" @click="handleAuth"
          >Войти</v-btn
        >
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import auth from "@/store/modules/auth";

export default class extends Vue {
  public rules = [
    (v: string) => v.length === 24 || "Id должен состоять из 24 символов",
  ];
  public id = "";

  async handleAuth() {
    await auth.auth(this.id);

    if (auth.getAuth) {
      this.$router.push("/");
    }
  }

  get isDisabled() {
    return typeof this.rules[0](this.id) === "string";
  }

  get error() {
    return auth.error;
  }
}
</script>
