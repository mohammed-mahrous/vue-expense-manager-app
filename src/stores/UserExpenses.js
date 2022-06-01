import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
import Apihelpers from "../helpers/ApiHelpers";

export const useUserExpensesStore = defineStore({
  id: "UserExpenses",
  state: () => ({
    expenses: [],
  }),
  getters: {},
  actions: {
    async initExpenses() {
      try {
        this.expenses = await Apihelpers.getExpenses();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
