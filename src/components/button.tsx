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



const Buttons = () => {
  const { value ,setValue,setOpenIndex, setApiError,setHandlebordser } = useWindowContext();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [apiStates, setApiStates] = useState(datafor_component);
  // const [sortkeyvalue, setSortkeyvalue] = useState<string>("");
  // const [handelallapis,setHandelallapis ] = useState<string>("")
  
   
// console.log(sortkeyvalue)

  const handleMakePostRequest = async () => {
    // console.log("handleMakePostRequest)( runs...");
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      makePostRequest: {
        loading: true,
        // success: false,
        error: false,
        response: "Create Campaing",
      },
    }));

    const res = await postingCampaigns();
    // console.log("CAMPAIGN IS CREATED:", res);
    setResponse( res);
    // console.log("SORT KEY ASSIGN IN STATE", response)
    // setSortkeyvalue(res);
    //  setSortkeyvalue(res)
    // setValue(res)
    // sort = res

    if (res !== "AxiosError") {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        makePostRequest: {
          loading: false,
          success: true,
          error: false,
          response: "Create Campaing",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        makePostRequest: {
          loading: false,
          success: false,
          error: true,
          response: "Create Campaing",
        },
      }));
    }
  };

  const handleGetAllCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      getAllCampaign: {
        loading: true,
        // success: false,
        error: false,
        response: "Get All Campaing",
      },
    }));

    const datavalue = await getallcompaing();
    // console.log(datavalue.error, "error" in datavalue);

    if (!("error" in datavalue)) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getAllCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "Get All Campaing",
        },
      }));
      // if (Array.isArray(datavalue)) {
      //   const filteredCampaigns = datavalue.filter(
      //     (campaign) => campaign.CAMPAIGN_NAME === "CybernutHealth"
      //   );

      //   console.log("======", filteredCampaigns);
      //   const sortkey = filteredCampaigns.map((x) => x.SORT_KEY);
      //   console.log(sortkey);
      //   setResponse(sortkey);
       
      // }
    } else {
      // console.log("Error fetching campaigns:");
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getAllCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "Get All Campaing",
        },
      }));
    }
  };
  
  const handleGetSingleCampaign = async () => {
    // console.log("handleGetSingleCampaign() runs......",response );

    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      getSingleCampaign: {
        loading: true,
        // success: false,
        error: false,
        response: "Single Campaing",
      },
    }));

    let abc = [];
    // console.log("waiting for this response", value);

    // console.log("SORT KEY: ", value)
    const res: any = await getsinglecompaing(response);
    // console.log("=========", res);
    if ("error" in res) abc.push(res.error.message);

    // for (let i = 0; i <= response.length; i++) {
    //   // console.log("this is a length of array",response.length,response[i])
    //     const res:any = await getsinglecompaing(response[i]);
    //     // console.log("=========")
    //     if ("error" in res) abc.push(res.error.message);
      
    // }

    if (abc.length === 0) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getSingleCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "Single Campaing",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        getSingleCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "Single Campaing",
        },
      }));
    }
  };

 

  const handleKillCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      killCampaign: {
        loading: true,
        
        error: false,
        response: "Kill Campaign",
      },
    }));
    let abc = [];
    // for (let i = 0; i < response.length; i++) {
    //   const res = await killCampaign(response[i]);
    //   console.log(res,i,"index");
    //   if (res === "AxiosError") {
    //     console.log("Error occurred in kill CAM---", res);
    //     abc.push(res);
    //   }
    // }
   
    const res =  await killCampaign(response);
    // console.log("handleKillCampaign ", response)
    if (res === "AxiosError") {
      // console.log("Error occurred in deleting CAM---", res);
      abc.push(res);
    }
    
    
    if (abc.length === 0) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        killCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "Kill Campaign",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        killCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "Kill Campaign",
        },
      }));
    }
  };

  const handlePauseCampaign = async () => {

    // console.log("handlePauseCampaign ", sortkeyvalue)
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      pauseCampaign: {
        loading: true,
        success: false,
        error: false,
        response: "Pause Campaign",
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

    const res =  await pauseCampaign(response);
    if (res === "AxiosError") {
      // console.log("Error handlePauseCampaign", res);
      abc.push(res);
    }

    if (abc.length === 0) {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        pauseCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "Pause Campaign",
        },
      }));
    } else {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        pauseCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "Pause Campaign",
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
        response: "Resume Campaign",
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

    const res =  await resumeCampaign(response);
    if (res === "AxiosError") {
      // console.log("Error occurred in deleting CAM---", res);
      abc.push(res);
    }

    if (abc.length === 0) {
      

      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        resumeCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "Resume Campaign",
        },
      }));
    } else  {
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        resumeCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "Resume Campaign",
        },
      }));
    } 
  };

  const handleDeleteCampaign = async () => {
    setApiStates((prevApiStates) => ({
      ...prevApiStates,
      deleteCampaign: {
        loading: true,
        // success: false,
        error: false,
        response: "Delete Campaign",
      },
    }));

    let abc = [];
    
    // for (let i = 0; i < response.length; i++) {
    //   const res = await deleteCampaign(response[i]);
  
      
    //   if (res === "AxiosError") {
    //     console.log("Error occurred in deleting CAM---", res);
    //     abc.push(res);
    //   }
    // }
    const res =  await deleteCampaign(response);
    if (res === "AxiosError") {
      // console.log("Error occurred in deleting CAM---", res);
      abc.push(res);
    }
    // console.log("===============!!!!!",sortkeyvalue,res)

    if (abc.length === 0) {
      setTimeout(() => {
        
        setOpenIndex(false)
        
      }, 1000);

      setTimeout(()=>{
        setHandlebordser(false)
        setApiError(false)
      },1200)
      
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        deleteCampaign: {
          loading: false,
          success: true,
          error: false,
          response: "Delete Campaign",
        },
      }));
    } else {
      setOpenIndex(true)
      setApiError(false)
      setApiStates((prevApiStates) => ({
        ...prevApiStates,
        deleteCampaign: {
          loading: false,
          success: false,
          error: true,
          response: "Delete Campaign",
        },
      }));
    }
  };

  useEffect(() => {

    const handleAllCampaignActions = async () => {
     
        await handleMakePostRequest();;
        
       
      
    };
    if (value > 0) {
      handleAllCampaignActions()
    
    }
    
  }, [value])

useEffect(() => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  
  const fetchData = async () => {
    try {
      await handleGetAllCampaign();
        await delay(500)
      await handleGetSingleCampaign();
      await delay(500)
      // await handlePauseCampaign();
      await handleKillCampaign();
      await delay(500)
      // await handleResumeCampaign();
      await handleDeleteCampaign();
      await delay(500)
    } catch (error) {
      // console.error("Error in useEffect:", error);
    }
  };

  if ( response.length > 0 ) {
 
    fetchData();
  }

  

}, [response])
  ;

  
  


  return (
    <Box px={"25px"} py={"10px"} background={"#ffffff"}  w={"768px"}  borderBottomRadius={"4px"} borderBottom={"2px solid #e5e6e8"} borderColor={"#e5e6e8"} borderLeft={"2px solid #e5e6e8"} borderRight={"2px solid #e5e6e8"} >
     
      <Box>
        
        {/* Make Post Request  */}
        <Box display={"flex"} py={"4px"}
       
        alignItems={"center"}
        >
        <Heading textColor={"#0035a4"}  fontFamily={"Fredoka"} fontWeight={"semibold"} fontSize={"18px"}>
          Make Campaign 
        </Heading>
        <ApiCallComponent
          Loading={apiStates.makePostRequest.loading}
          Success={apiStates.makePostRequest.success}
          Error={apiStates.makePostRequest.error}
          response= {apiStates.makePostRequest.response} 
          Apifunction={handleMakePostRequest}
        />
        </Box>
     

         {/* Get All Campaigns */}
         <Box display={"flex"} 
       py={"4px"}
       alignItems={"center"}>
        <Heading textColor={"#0035a4"}   fontFamily={"Fredoka"} fontWeight={"semibold"} fontSize={"18px"}>
          Get all Campaign 
        </Heading>
        <ApiCallComponent
          Loading={apiStates.getAllCampaign.loading}
          Success={apiStates.getAllCampaign.success}
          Error={apiStates.getAllCampaign.error}
          response= {apiStates.getAllCampaign.response}
          Apifunction={handleGetAllCampaign}
        />
        </Box>

        {/* Get Single Campaign */}
        <Box
        display={"flex"} 
        py={"4px"}
        alignItems={"center"}
        >
        <Heading textColor={"#0035a4"}   fontFamily={"Fredoka"} fontWeight={"semibold"} fontSize={"18px"}>
          Single Campaign 
        </Heading>
        <ApiCallComponent
          Loading={apiStates.getSingleCampaign.loading}
          Success={apiStates.getSingleCampaign.success}
          Error={apiStates.getSingleCampaign.error}
          response= {apiStates.getSingleCampaign.response}
          Apifunction={handleGetSingleCampaign}
        />
        </Box>
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
        <Box
        display={"flex"} 
        py={"4px"}
        alignItems={"center"}
        >
        <Heading textColor={"#0035a4"}   fontFamily={"Fredoka"} fontWeight={"semibold"} fontSize={"18px"}>
          Kill Campaign 
        </Heading>
        <ApiCallComponent
          Loading={apiStates.killCampaign.loading}
          Success={apiStates.killCampaign.success}
          Error={apiStates.killCampaign.error}
          response= {apiStates.killCampaign.response}
          Apifunction={handleKillCampaign}
        />
        </Box>
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
        <Box 
         display={"flex"} 
         py={"4px"}
         alignItems={"center"}
         >
        <Text textColor={"#0035a4"}   fontFamily={"Fredoka"} fontWeight={"semibold"} fontSize={"18px"}>
          Delete Campaign 
        </Text>
        <ApiCallComponent
          Loading={apiStates.deleteCampaign.loading}
          Success={apiStates.deleteCampaign.success}
          Error={apiStates.deleteCampaign.error}
          response= {apiStates.deleteCampaign.response}
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
