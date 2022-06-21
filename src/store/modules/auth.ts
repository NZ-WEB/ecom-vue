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
  public error: Error | null = null;

  @Mutation
  public setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  @Mutation
  public setError(error: Error) {
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
          localStorage.setItem("leadhit-site-id", status);
        }

        console.log(status, EStatus.ok);

        console.log(
          this.isAuth,
          "isAuth",
          localStorage.getItem("leadhit-site-id"),
          "- localStorage"
        );
      })
      .catch((e) => {
        if (e instanceof Error) {
          this.setError(e);
        } else {
          console.error(e);
        }
      });
  }

  get getAuth() {
    return this.isAuth || !!localStorage.getItem("leadhit-site-id");
  }
}

export default getModule(Analitics);
