<template>
  <v-container>
    <app-page-title title="LeadHit" />
    <app-error :error="error" />

    <v-card>
      <v-form tonal class="pa-4">
        <v-text-field
          v-model="id"
          :rules="rules"
          counter="24"
          hint="Введите id сайта для доступа к аналитике"
          label="Id сайта"
        />
        <v-btn :disabled="isDisabled" color="primary" @click="handleAuth">
          Войти
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import auth from "@/store/modules/auth";
import AppError from "@/components/AppError.vue";
import AppPageTitle from "@/components/AppPageTitle.vue";

@Options({
  components: { AppError, AppPageTitle },
})
export default class extends Vue {
  public rules = [
    (v: string) => v.length === 24 || "Id должен состоять из 24 символов",
  ];
  public id = "";

  get isDisabled() {
    return typeof this.rules[0](this.id) === "string";
  }

  get error() {
    return auth.error;
  }

  async handleAuth() {
    await auth.auth(this.id);

    if (auth.getAuth) {
      this.$router.push("/");
    }
  }
}
</script>
