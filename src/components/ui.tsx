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
import { useWindowContext } from "@/context/MyContext";
import { makePostRequest } from "../Apifunction/apis";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
const MyAccordion = () => {
  const [message, setMessage] = useState("");
  const { value, setValue, openIndex, setOpenIndex, apiError, setApiError,handleborder, setHandlebordser } =
    useWindowContext();

  console.log(openIndex, "========", apiError);
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
        <Collapse in={openIndex} animateOpacity>
          <Box >
            <Buttons />
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default MyAccordion;
