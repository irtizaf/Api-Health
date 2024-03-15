"use client"


import { Box, Button, Progress, Heading, Text, Spinner } from "@chakra-ui/react";
import { MdCheck, MdClose } from "react-icons/md";
import { useState } from "react";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
const ApiCallComponent = (props: any) => {
  const { Loading, Success, Error, Apifunction } = props;
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [message, setMessage] = useState("")

  const handleApiCall = async () => {
    try {
      await Apifunction();
      setShowSuccessIcon(true);
    } catch (error) {
      // Handle error if needed
    }
    setMessage(Success?"API is Not Working  " :  "API Run Perfectly  ")
  };

  return (
    <Box p={"2px"} >
   

     

<Button
              bg={Success ? " white" : "yellow.500"}
              color="#0035a4"
              _hover={{ bg: Success ? " white" : "yellow.600" }}
              _active={{ bg: Success ? " white" : "yellow.700" }}
              onClick={ handleApiCall}
            >
              {Loading ? <Spinner size="sm" /> : "Run API"}
            </Button>
            <Text
        color={Success ? "green.500" : "red.500  "}
        opacity={Success ? 1 : 0}
        transition="opacity 0.5s, transform 0.5s"
        transform={`translateX(${Success ? "0" : "10px"})`}
      >
        {Success ? <CheckCircleIcon /> : <SmallCloseIcon />  } {message}
      </Text>
    </Box>
  );
};

export default ApiCallComponent;
