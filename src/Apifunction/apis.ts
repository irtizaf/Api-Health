import axios from "axios";
import { useWindowContext } from "../context/MyContext";
import { useContext } from "react";
// const { setResponse } = ApiCallComponent()
const payload = {
  CAMPAIGN_NAME: "CybernutHealth",
  PARTICIPANTS: [
    {
      groupName: "Cybernut ",
      id: "b6333d73-5ae4-4e53-b69c-4ee6291067a3",
      users: [
        {
          email: "defaultuser@razafridibrosgmail.onmicrosoft.com",
          id: "5f15a4db-6cd9-4977-b97e-af2f9b32c262",
          FIRSTNAME: "user",
          LASTNAME: "user",
          userName: "user",
          status: true,
        },
        {
          email: "mishaal@razafridibrosgmail.onmicrosoft.com",
          id: "40eb5b12-5d02-4d5d-b1b2-88e7e7e28385",
          FIRSTNAME: null,
          LASTNAME: null,
          userName: "Mishaal",
          status: true,
        },
        {
          email: "adil@razafridibrosgmail.onmicrosoft.com",
          id: "f4034ff8-59a8-4160-9bc9-fb9452ec81c9",
          FIRSTNAME: null,
          LASTNAME: null,
          userName: "Adil",
          status: true,
        },
      ],
    },
    {
      groupName: "Cignito-api-group",
      id: "c7537eb6-ae9b-4745-8f92-3dc78fc97b34",
      users: [
        {
          email: "josh123@razafridibrosgmail.onmicrosoft.com",
          id: "fa9fc4e2-60ae-40ae-ad7a-88085a483aff",
          FIRSTNAME: "josh",
          LASTNAME: "josh",
          userName: "josh .",
          status: true,
        },
        {
          email: "mohsin@razafridibrosgmail.onmicrosoft.com",
          id: "b7626813-2309-43b6-b910-cf64d11d3ee7",
          FIRSTNAME: null,
          LASTNAME: null,
          userName: "mohsin",
          status: true,
        },
        {
          email: "adam@razafridibrosgmail.onmicrosoft.com",
          id: "8643ad51-f2b5-431a-b9a4-ce916cd116a0",
          FIRSTNAME: "adam",
          LASTNAME: "adam",
          userName: "adam@gmail.com",
          status: true,
        },
      ],
    },
  ],
  START_DATE_AND_TIME: "2024/03/22",
  TIMEZONE: "(UTC -05:00) America/Eastern",
  END_DATE: "2024/04/03",
  BLACKOUT_DATES:
    "2024/03/10-2024/03/16,2024/03/17-2024/03/21,2024/03/24,2024/03/27,2024/03/28,2024/03/31,2024/03/05",
  CAMPAIGN_TYPE: "onboarding-campaign",
  DOMAIN: "gmail.com",
  FREQUENCY: 3,
  EMAIL: "62b6518e7b23eea780434404a2a39b6d3dc52264b86a57c566c6cb4ea4435ff7",
};

export const makePostRequest = async () => {
  // const { setValue } = useWindowContext();
  const apiUrl =
    "https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/campaign";
  console.log("makePost() runs.....");

  try {
    const responsevalue = await axios.post(apiUrl, payload);
    console.log("data coming from create campaign",responsevalue.data.SORT_KEY);
    // setValue({value:"hello"})
    return responsevalue.data.SORT_KEY;
  } catch (error: any) {
    console.log("Error making POST request:", error.name);
    return error.name;
  }
};

export const getallcompaing = async () => {
  try {
    const apiUrl =
      "https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/getcampaign?domain=gmail.com";
    const data = await axios.get(apiUrl);

    console.log("get data", data.data);
    return data.data;
  } catch (error: any) {
    console.log("Error fetching API data:", error.response.data);
    return error.name;
  }
};
export const getsinglecompaing = async (sortkey: string) => {
  try {
    const apiUrl = `https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/singlecampaign?partitionKey=campaign&sortKey=${sortkey}`;
    const { data } = await axios.get(apiUrl);
    console.log("get data for single", data);
    return data;
  } catch (error: any) {
    console.log("Error fetching API data:", error.name);
    return error.name;
  }
};
export const deleteCampaign = async (sortkey: string) => {
  const apiUrl = `https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/deletecampaign?partitionKey=campaign&sortKey=${sortkey}`;

  try {
    // Make a DELETE request to the API endpoint using Axios
    const response = await axios.delete(apiUrl);

    // Check if the request was successful (status code 2xx)
    console.log("Campaign deleted successfully", response.status);

    return response.status;
  } catch (error: any) {
    console.log("Error occurred while deleting campaign:", error.name);
    return error.name;
  }
};
export const killCampaign = async (sortkey: string) => {
  const apiUrl = `https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/killcampaign?partitionKey=campaign-${sortkey}`;

  try {
    // Make a DELETE request to the API endpoint using Axios
    const response = await axios.delete(apiUrl);
    console.log("Campaign kill successfully",response);
    // Check if the request was successful (status code 2xx)
    return response
    
  } catch (error: any) {
    console.log("Error occurred while killing campaign:", error.name);
    return error.name
  }
};
export const pauseCampaign = async (sortkey: string) => {
  const apiUrl = `https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/pausecampaign?partitionKey=campaign-${sortkey}`;

  try {
    // Make a DELETE request to the API endpoint using Axios
    const response = await axios.delete(apiUrl);
    console.log("Campaign deleted successfully",response);
    return response
    // Check if the request was successful (status code 2xx)
   
  } catch (error: any) {
    console.error("Error occurred while deleting campaign:", error.name);
    return error.name;
  }
};

export const resumeCampaign = async (sortkey: string) => {
  const apiUrl = `https://r5g82p5d85.execute-api.us-east-1.amazonaws.com/resumecampaign?partitionKey=campaign&sortKey=${sortkey}`;

  try {
    // Make a DELETE request to the API endpoint using Axios
    const response = await axios.delete(apiUrl);

    // Check if the request was successful (status code 2xx)
    return response
  } catch (error: any) {
    console.error("Error occurred while deleting campaign:", error.name);
    return error.name;
  }
};
