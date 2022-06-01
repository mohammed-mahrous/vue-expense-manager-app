import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import Apihelpers from "../helpers/ApiHelpers";

export const useTeamExpensesStore = defineStore({
  id: "TeamExpenses",
  state: () => ({
    expenses: [],
  }),
  getters: {},
  actions: {
    async initExpenses() {
      try {
        this.expenses = await Apihelpers.getTeamExpenses();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
