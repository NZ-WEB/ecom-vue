import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import { IAnaliticsResponse } from "@/types/analiticsResponse.interface";
import AnaliticsApi from "@/api/analitics";

const analitics = new AnaliticsApi();

@Module({
  name: "analitics",
  store,
  namespaced: true,
  dynamic: true,
})
class Analitics extends VuexModule {
  public analitics: IAnaliticsResponse[] = [];

  @Mutation
  public setAnalitics(val: IAnaliticsResponse[]) {
    this.analitics = val;
  }

  @Action
  public loadAnalitics() {
    const analiticsData = analitics.getAnaliticsData();
    this.setAnalitics(analiticsData);
  }

  get getAnalitics() {
    return this.analitics;
  }
}

export default getModule(Analitics);
