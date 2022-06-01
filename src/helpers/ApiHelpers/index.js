import ApiEndpoints from "./ApiEndpoints";
import BaseApi from "./BaseApi";

const { getData, postData } = BaseApi();

const Apihelpers = {
  getExpenses: async () => {
    return getData(ApiEndpoints.expenses);
  },
  getTeamExpenses: async () => {
    return getData(ApiEndpoints.expensesTeam);
  },

  Login: async (Data) => {
    return postData(ApiEndpoints.login, Data);
  },
};
export default Apihelpers;
