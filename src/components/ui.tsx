"use client"
import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel,AccordionIcon  ,Box, Button, Spinner,Text, Heading, Collapse } from "@chakra-ui/react";
import Buttons from "./button";
import { useWindowContext } from "@/context/MyContext";
import {makePostRequest} from "../Apifunction/apis"
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
const MyAccordion = () => {
  const [isApiRunning, setApiRunning] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [message, setMessage] = useState("")
  const { value,setValue, openIndex, setOpenIndex } = useWindowContext();
  

  const runApi = async () => {
    setMessage(openIndex ?  "API is Not Working  " :  "API Run Perfectly  ")
    setOpenIndex(true)

    setApiRunning(true);
 
    setValue("run apis")
        
    setApiError(false);
    try {
        // const responsevalue = await setTimeout(() => {
        //   const runallapis:string = "run apis"
        //   return runallapis
        // }, 1000);
        // console.log(responsevalue,"data create campaign");
      //   setValue(responsevalue)
        
      // setApiError(false);

    } catch (error) {
      // Handle API error
      console.error("API error:", error);
      setApiError(true);
      setOpenIndex(true)
    } finally {
      // Reset the loading state
      setApiRunning(false);
   
    }
    
  };

  const handleRunApiClick = async () => {
    // Prevent event propagation
    // e.stopPropagation();

    // Call the runApi function
    await runApi();
  };


  return (
<>
{/* <Accordion  allowToggle={ahsan} width={"770px"} h={"72px"} >
      <AccordionItem >
        <Box  >
          <AccordionButton  disabled={true }
          
           
          >
            <Box 
            textColor={"#0035a4"}  fontFamily={"Fredoka"} fontWeight={500} fontSize={"24px"}
              as="span" flex='1' textAlign='left'>
              Create Campaign API
            </Box>

            <Text
        color={apiError ? "red.500" : " green.500"}
        opacity={message ? 1 : 0}
        transition="opacity 0.5s, transform 0.5s"
        transform={`translateX(${message ? "0" : "10px"})`}
      >
        {apiError ? <SmallCloseIcon /> : <CheckCircleIcon />  } {message}
      </Text>
      
            <Button
            
              bg={apiError ? "yellow.500" : "gray.100"}
              color="#0035a4"
              
              _hover={{ bg: apiError ? "yellow.600" : "gray.200" }}
              _active={{ bg: apiError ? "yellow.600" : "gray.200" }}
              onClick={(e) => handleRunApiClick(e)}
              
            > 
              {isApiRunning ? <Spinner color="white" size="sm" /> : "Run API"} 
           </Button>
         
          </AccordionButton>
        </Box>

        <AccordionPanel pb={4} >
       
        <Buttons/>
        
        </AccordionPanel>
      </AccordionItem>
    </Accordion> */}

    <Box>
     
        <Box display={"flex"} justifyContent={"space-between"} width={"740px"} h={"72px"} textColor={"#0035a4"}  fontFamily={"Fredoka"} backgroundColor={"gray.100"} rounded={"10px"} px={"5px"}
             >
            <Heading fontWeight={500} fontSize={"24px"} display={"flex"}  alignItems={"center"} width={"fit-content"}>Create Campaign API</Heading>
<Box display={"flex"}  alignItems={"center"} width={"fit-content"} >
            <Text
        color={apiError ? "red.500" : " green.500"}
        opacity={message ? 1 : 0}
        transition="opacity 0.5s, transform 0.5s"
        transform={`translateX(${message ? "0" : "10px"})`}
      >
        {apiError ? <SmallCloseIcon /> : <CheckCircleIcon />  } {message}
      </Text>
          <Button onClick={() => handleRunApiClick()}
          bg={apiError ? "yellow.500" : "gray.100"}
          color="#0035a4"
          
          _hover={{ bg: apiError ? "yellow.600" : "gray.200" }}
          _active={{ bg: apiError ? "yellow.600" : "gray.200" }}
          variant="outline">
            <Text fontWeight="bold">{isApiRunning ? <Spinner color="white" size="sm" /> : "Run API"}</Text>
          </Button>
          </Box>
          </Box>
          <Collapse in={openIndex } animateOpacity>
            <Box  >
            <Buttons/>
            </Box>
          </Collapse>
        
      
    </Box>

    </>
    
  );
};


export default MyAccordion
