"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Spinner,
  Text,
  Heading,
  Collapse,
} from "@chakra-ui/react";
import Buttons from "./button";
import { apiFunctions } from '../../data'

import { makePostRequest } from "../Apifunction/apis";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
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
import { useEffect } from "react";
import ApiCallComponent from "@/components/ApiCallComponent";

import { datafor_component } from "../../data";
const MyAccordion = () => {
  const [message, setMessage] = useState("");
  const { value, setValue, openIndex, setOpenIndex, apiError, setApiError,handleborder, setHandlebordser } =
    useWindowContext();
    // const { value ,setValue,setOpenIndex, setApiError,setHandlebordser } = useWindowContext();
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




  // console.log(openIndex, "========", apiError);
  const handeltoggle = () => {
    
    if (openIndex == true) {
      setOpenIndex(false);
      
    } else {
      setOpenIndex(true);
      
      }
      if(handleborder== false){
        setHandlebordser(true)
      }else {
        setTimeout(()=>{
          setHandlebordser(false)
        },230)
      }
  };

  const runApi = async () => {
    setMessage(openIndex ? "API is Not Working  " : "API Run Perfectly  ");
    setOpenIndex(true);
    setHandlebordser(true)

    // setApiRunning(true);
    const randomvalue = Math.random() + 1;
    setValue(randomvalue);

    setApiError(true);
  };

  return (
    <>
      <Box width={"768px"} h={"fit-content"} borderBottomRadius={"4px"} backgroundColor={"#ffffff"}   >
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          width={"768px"}
          h={"72px"}
          textColor={"#0035a4"}
          fontFamily={"Fredoka"}
          backgroundColor={"#ffffff"}
          onClick={() => handeltoggle()}
          borderLeft={"2px"} borderRight={"2px"}  borderBottom={handleborder ? "": "2px"}
          // borderBottom={"2px"} 
          borderColor={"#e5e6e8"}
          // boxShadow={"0 0 4px 0 rgb(0 0 0/10%)"} 
          
        >
          <Heading
            fontWeight={500}
            fontSize={"18px"}
            display={"flex"}
            alignItems={"center"}
          >
            Check APIs
          </Heading>
          <Box display={"flex"} alignItems={"center"} >
            <Text
              color={apiError ? "gray.500" : " green.500"}
              opacity={message ? 1 : 0}
              transition="opacity 0.5s, transform 0.5s"
              transform={`translateX(${message ? "0" : "10px"})`}
            >
              {apiError ? <SmallCloseIcon /> : <CheckCircleIcon />}
              {apiError ? " Apis running " : "All API Run Perfectly  "}
            </Text>
            <Button
            px={50}
              onClick={() => runApi()}
              color="#0035a4"
              border={"none"}
              variant="outline"
              disabled={apiError}
              width={"70px"}
              fontSize={"18px"}
              background={"#f2f2f2"}
              _hover={{background:"#f2f2f2" }}
              _active={{background:"none" }}
            >
              <Text fontWeight="bold">
                {apiError ? <Spinner color="green.500" size="sm" /> : "Run API"}
              </Text>
            </Button>
          </Box>
        </Box>
        {apiFunctions.map((x , index)=>(
                // <Text>{x.name} </Text>
                <Collapse in={openIndex} animateOpacity>
          <Box >
            
            <Buttons />
          </Box>
        </Collapse>
            )) }
        
      </Box>
    </>
  );
};

export default MyAccordion;
