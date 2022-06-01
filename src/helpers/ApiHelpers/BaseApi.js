const BaseApi = () => {
  const baseApiUrl = "/api/v1/";
  const url = "https://expenses.nilecrm.review" + baseApiUrl;

  const postData = async (endpoint, Data) => {
    const token = localStorage.getItem("UserData")
      ? JSON.parse(localStorage.getItem("UserData")).token
      : "";
    const response = await fetch(url + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(Data),
    });
    if (!response.ok) {
      throw Error(response.statusMessage);
    }
    const actualResponse = await response.json();
    return actualResponse.data;
  };

  const getData = async (endpoint) => {
    const token = localStorage.getItem("token");
    const response = await fetch(url + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw Error(response.statusMessage);
    }

    const actualResponse = await response.json();
    return actualResponse.data;
  };

  return { postData, getData };
};

export default BaseApi;
