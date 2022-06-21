import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import Auth from "@/api/auth";
import { EStatus } from "@/types/Status.enum";

const auth = new Auth();
@Module({
  name: "auth",
  store,
  namespaced: true,
  dynamic: true,
})
class Analitics extends VuexModule {
  public isAuth = false;
  public error: string | null = null;

  @Mutation
  public setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  @Mutation
  public setError(error: string | null) {
    this.error = error;
  }

  @Action
  public async auth(id: string) {
    await auth
      .getLeadhitSiteId(id)
      .then((res) => {
        const status = res.data.message;

        if (status === EStatus.ok) {
          this.setAuth(true);
          this.setError(null);
          localStorage.setItem("leadhit-site-id", status);
        }
      })
      .catch(() => {
        this.setError("Некорректный ID");
      });
  }

  get getAuthOrLocalStorage() {
    return this.isAuth || !!localStorage.getItem("leadhit-site-id");
  }

  get getAuth() {
    return this.isAuth;
  }
}

export default getModule(Analitics);
