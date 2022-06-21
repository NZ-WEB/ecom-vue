import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import store from "@/store";

@Module({
  name: "auth",
  store,
  namespaced: true,
  dynamic: true,
})
class Analitics extends VuexModule {
  public key = "";

  @Mutation
  public setKey(newKey: string) {
    this.key = newKey;
  }

  //   @Action
  //   public loadAnalitics() {
  //     const analiticsData = analitics.getAnaliticsData();
  //     this.setAnalitics(analiticsData);
  //   }

  get getKey() {
    return this.key;
  }
}

export default getModule(Analitics);
