import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state() {
    return {
      session: {} as any,
    };
  },
  actions: {
    async login(username: string, password: string) {
      this.session.token = "123456";
      localStorage.setItem("token", this.session.token);
      this.$router.push("/boards");
    },
    logout() {
      this.session = {};
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    init() {},
  },
});
