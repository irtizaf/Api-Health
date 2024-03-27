"use client";

import { Box, Text, Spinner } from "@chakra-ui/react";

import { useState } from "react";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
const ApiCallComponent = (props: any) => {
  const { Loading, Success, Apifunction ,Error } = props;
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  // console.log(Error,"===== suecess valye ")

  const handleApiCall = async () => {
    try {
      await Apifunction();
      setShowSuccessIcon(true);
    } catch (error) {
      // Handle error if needed
    }
    setMessage(Success ? "API is Not Working  " : "API Run Perfectly  ");
    setMessage2(Error ? "API is Not Working  " : "API Run Perfectly  ")
  };

  return (
    <Box p={"5px"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
        
    <Text
        color={Success ? "green.500" : "red.500"}
        opacity={Success ? 1 : 0}
        transition="opacity 0.5s, transform 0.5s"
        transform={`translateX(${message ? "10px" : "10px"})`}
        fontSize={"16px"}
      >
        {Success !== null && (
          <div>{Success ? <CheckCircleIcon color={"green.500"} /> : <></>}</div>
        )}
        </Text>

        <Text
        color={Error ? "red.500" : "green.500"}
        opacity={Error ? 1 : 0}
        transition="opacity 0.5s, transform 0.5s"
        transform={`translateX(${message2 ? "10px" : "10px"})`}
        fontSize={"16px"}
      >
        {Error !== null && (
          <div>{Error ? <SmallCloseIcon color={"red.500"} />: <></>}</div>
        )}
        </Text>
        <Box color="black" onClick={handleApiCall} pl={"20px"}>
        {Loading ? <Spinner size="sm" /> : ``}
      </Box>
      

     

    
    </Box>
  );
};

export default ApiCallComponent;
