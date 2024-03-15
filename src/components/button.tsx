"use client";

import {
  makePostRequest as postingCampaigns,
  getallcompaing,
  getsinglecompaing,
  deleteCampaign,
  killCampaign,
  pauseCampaign,
  resumeCampaign,
} from "../Apifunction/apis";
import { useWindowContext } from "../context/MyContext";
import { useEffect, useState } from "react";
import ApiCallComponent from "@/components/ApiCallComponent";
import { Box, Button, Heading, Spinner,Text,Image } from "@chakra-ui/react";
import { datafor_component } from "../../data";


let sort: string;
const Buttons = () => {
  const { value ,setValue,setOpenIndex} = useWindowContext();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<string[]>([]);
  const [apiStates, setApiStates] = useState(datafor_component);
  const [sortkeyvalue, setSortkeyvalue] = useState<string>("");
  const [handelallapis,setHandelallapis ] = useState<string>("")
  
   
// console.log(sortkeyvalue)

  const handleMakePostRequest = async () => {
    console.log("handleMakePostRequest)( runs...");
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      makePostRequest: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));

    const res = await postingCampaigns();
    console.log("CAMPAIGN IS CREATED:", res);
    setResponse((pre) => [...pre, res]);
    console.log("SORT KEY ASSIGN IN STATE", res)
    // setSortkeyvalue(res);
     setSortkeyvalue(res)
    setValue(res)
    sort = res

    if (res !== "AxiosError") {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        makePostRequest: {
          loading: false,
          success: true,
          error: false,
          response: "",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        makePostRequest: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    }
  };

  const handleGetAllCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      getAllCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));

    const datavalue = await getallcompaing();
    console.log(datavalue.error, "error" in datavalue);

    if (!("error" in datavalue)) {
      if (Array.isArray(datavalue)) {
        const filteredCampaigns = datavalue.filter(
          (campaign) => campaign.CAMPAIGN_NAME === "CybernutHealth"
        );

        console.log("======", filteredCampaigns);
        const sortkey = filteredCampaigns.map((x) => x.SORT_KEY);
        console.log(sortkey);
        setResponse(sortkey);
        setApiStates((prevApiStates) => ({
          ...prevApiStates,
          getAllCampaign: {
            loading: false,
            success: true,
            error: false,
            response: "",
          },
        }));
      }
    } else {
      console.log("Error fetching campaigns:");
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getAllCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    }
  };
  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  const handleGetSingleCampaign = async () => {
    console.log("handleGetSingleCampaign() runs......",value );

    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      getSingleCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));

    let abc = [];
    console.log("waiting for this response", value);

    console.log("SORT KEY: ", value)
    const res: any = await getsinglecompaing(value);
    console.log("=========", res);
    if ("error" in res) abc.push(res.error.message);

    // for (let i = 0; i <= response.length; i++) {
    //   console.log("this is a length of array",response.length,response[i])
    //     const res:any = await getsinglecompaing(response[i]);
    //     console.log("=========")
    //     if ("error" in res) abc.push(res.error.message);
        // await delay(500)
    // }

    if (abc.length === 0) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getSingleCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getSingleCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    }
  };

  const handleDeleteCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      deleteCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));

    let abc = [];

    for (let i = 0; i < response.length; i++) {
      const res = await deleteCampaign(response[i]);
      if (res === "AxiosError") {
        console.log("Error occurred in deleting CAM---", res);
        abc.push(res);
      }
    }
    // const res =  await deleteCampaign(sortkeyvalue);
    // if (res === "AxiosError") {
    //   console.log("Error occurred in deleting CAM---", res);
    //   abc.push(res);
    // }
    // console.log("===============!!!!!",sortkeyvalue,res)

    if (abc.length === 0) {
      setTimeout(() => {
        setOpenIndex(false)
      }, 1000);
      
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        deleteCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "",
        },
      }));
    } else {
      setOpenIndex(true)
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        deleteCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    }
  };

  const handleKillCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      killCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));
    let abc = [];
    // for (let i = 0; i < response.length; i++) {
    //   const res = await killCampaign(response[i]);
    //   console.log(res);
    //   if (res === "AxiosError") {
    //     console.log("Error occurred in kill CAM---", res);
    //     abc.push(res);
    //   }
    // }
   
    const res =  await killCampaign(sortkeyvalue);
    console.log("handleKillCampaign ", sortkeyvalue,res)
    if (res === "AxiosError") {
      console.log("Error occurred in deleting CAM---", res);
      abc.push(res);
    }
    
    
    if (abc.length === 0) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        killCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        killCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    }
  };

  const handlePauseCampaign = async () => {

    console.log("handlePauseCampaign ", sortkeyvalue)
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      pauseCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));
    let abc = [];
    // for (let i = 0; i < response.length; i++) {
    //   const res = await pauseCampaign(response[i]);
    //   if (res === "AxiosError") {
    //     console.log("Error occurred in kill CAM---", res);
    //     abc.push(res);
    //   }
    // }

    const res =  await pauseCampaign(sortkeyvalue);
    if (res === "AxiosError") {
      console.log("Error handlePauseCampaign", res);
      abc.push(res);
    }

    if (abc.length === 0) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        pauseCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        pauseCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    }
  };

  const handleResumeCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      resumeCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "",
      },
    }));
    let abc = [];
    // for (let i = 0; i < response.length; i++) {
    //   const res = await resumeCampaign(response[i]);
    //   if (res === "AxiosError") {
    //     console.log("Error occurred in kill CAM---", res);
    //     abc.push(res);
    //   }
    // }

    const res =  await resumeCampaign(sortkeyvalue);
    if (res === "AxiosError") {
      console.log("Error occurred in deleting CAM---", res);
      abc.push(res);
    }

    if (abc.length === 0) {
      

      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        resumeCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "",
        },
      }));
    } else  {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        resumeCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "",
        },
      }));
    } 
  };
  

  useEffect(() => {

    const handleAllCampaignActions = async () => {
     
        await handleMakePostRequest();;
        
       
      
    };
    if (value) {
      handleAllCampaignActions()
    setHandelallapis("run")
    }
    
  }, [value])
useEffect(() => {
  
  const fetchData = async () => {
    try {
      await handleGetAllCampaign();
      await handleGetSingleCampaign();
      // await handlePauseCampaign();
      await handleKillCampaign();
      // await handleResumeCampaign();
      await handleDeleteCampaign();
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  };
  if (handelallapis ) {
 
    fetchData();
  }

  

}, [handelallapis])
  ;

  
  


  return (
    <Box px={"25px"} py={"10px"} background={"#0035a4"} rounded={"20px"} w={"740px"}>
     
      <Box>
        
        {/* Make Post Request  */}
        <Heading as="h2" size="lg" mb={4} fontFamily="monospace">
          Make Campaign API call{" "}
        </Heading>
        <ApiCallComponent
          Loading={apiStates.makePostRequest.loading}
          Success={apiStates.makePostRequest.success}
          Error={apiStates.makePostRequest.error}
          Apifunction={handleMakePostRequest}
        />
        <br />

         {/* Get All Campaigns */}
        <Heading textColor={"white"}  fontFamily={"Fredoka"} fontWeight={500} fontSize={"24px"}>
          Get all Campaign API call{" "}
        </Heading>
        <ApiCallComponent
          Loading={apiStates.getAllCampaign.loading}
          Success={apiStates.getAllCampaign.success}
          Error={apiStates.getAllCampaign.error}
          Apifunction={handleGetAllCampaign}
        />

        {/* Get Single Campaign */}
        <Heading textColor={"white"}  fontFamily={"Fredoka"} fontWeight={500} fontSize={"24px"}>
          Single Campaign API call{" "}
        </Heading>
        <ApiCallComponent
          Loading={apiStates.getSingleCampaign.loading}
          Success={apiStates.getSingleCampaign.success}
          Error={apiStates.getSingleCampaign.error}
          Apifunction={handleGetSingleCampaign}
        />
        {/* Get Pasue Campaign */}
        {/* <Heading as="h2" size="lg" mb={4} fontFamily="monospace">
          Pause Campaign API call{" "}
        </Heading>
        <ApiCallComponent
          Loading={apiStates.pauseCampaign.loading}
          Success={apiStates.pauseCampaign.success}
          Error={apiStates.pauseCampaign.error}
          Apifunction={handlePauseCampaign}
        /> */}

        {/* Get Kill Campaign */}
        <Heading textColor={"white"}  fontFamily={"Fredoka"} fontWeight={500} fontSize={"24px"}>
          Kill Campaign API call{" "}
        </Heading>
        <ApiCallComponent
          Loading={apiStates.killCampaign.loading}
          Success={apiStates.killCampaign.success}
          Error={apiStates.killCampaign.error}
          Apifunction={handleKillCampaign}
        />
 {/* Get Resume Campaign */}
 {/* <Heading as="h2" size="lg" mb={4} fontFamily="monospace">
          Resume Campaign API call{" "}
        </Heading>
        <ApiCallComponent
          Loading={apiStates.resumeCampaign.loading}
          Success={apiStates.resumeCampaign.success}
          Error={apiStates.resumeCampaign.error}
          Apifunction={resumeCampaign}
        /> */}
        {/* Get Delete Campaign */}
        <Box  >
        <Text textColor={"white"}  fontFamily={"Fredoka"} fontWeight={500} fontSize={"24px"}>
          Delete Campaign API call
        </Text>
        <ApiCallComponent
          Loading={apiStates.deleteCampaign.loading}
          Success={apiStates.deleteCampaign.success}
          Error={apiStates.deleteCampaign.error}
          Apifunction={handleDeleteCampaign}
        />
        
        </Box>
      </Box>
      {/* <Button onClick={handleAllCampaignActions}>
        {isSuccess ? <Spinner size="sm" /> : "Run All APIs"}
      </Button> */}
    </Box>
  );
};

export default Buttons;
