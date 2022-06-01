import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import Apihelpers from "../helpers/ApiHelpers";

export const useUserStore = defineStore({
  id: "User",
  state: () => ({
    router: useRouter(),
    token: localStorage.getItem("token"),
    username: "",
    password: "",
    user: JSON.parse(localStorage.getItem("userData")),
  }),
  getters: {
    isAuthinticated: (state) => state.token != null,
  },
  actions: {
    async login() {
      if (this.username.length != 0 && this.password.length != 0) {
        const user = await Apihelpers.Login({
          email: this.username,
          password: this.password,
        });
        this.username = "";
        this.password = "";
        const userJson = JSON.stringify(user);
        localStorage.setItem("userData", userJson);
        console.log(user);
        this.token = user.token;
        localStorage.setItem("token", this.token);
        this.router.push("/");
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      this.token = null;
      this.user = {};
      this.router.go();
    },
  },
});
