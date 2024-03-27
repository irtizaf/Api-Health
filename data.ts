import { deleteCampaign, getallcompaing, getsinglecompaing, killCampaign, makePostRequest, pauseCampaign, resumeCampaign } from "@/Apifunction/apis";

interface ApiData {
  loading: boolean | null;
  success?: boolean | string | null;
  error?: boolean | null;
  response: string | null;
}

export const datafor_component: Record<string, ApiData> = {
    makePostRequest: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
  getAllCampaign: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
  // Add more API calls as needed...
  // For example:
  getSingleCampaign: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
  deleteCampaign: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
  killCampaign: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
  pauseCampaign: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
  resumeCampaign: {
    loading: false,
    success: null,
    error: null,
    response: "",
  },
    
}

export const payload = {
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


export const apiFunctions = [
    // { name: 'MakePostRequest', func: makePostRequest},
    { name: 'Getallcompaing', func: getallcompaing },
    { name: 'Getsinglecompaing', func: getsinglecompaing },
    
    { name: 'KillCampaign', func: killCampaign },
    { name: 'DeleteCampaign', func: deleteCampaign },
    // { name: 'pauseCampaign', func: pauseCampaign },
    // { name: 'resumeCampaign', func: resumeCampaign }
  ];

  export const apiFunctionscreate = [
    { name: 'MakePostRequest', func: makePostRequest},
  
  ];