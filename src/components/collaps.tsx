"use client";

import { apiFunctions } from "../../data";
import { apiFunctionscreate } from "../../data";

import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Text,
  Center,
  Image,
  Heading,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons"; // Importing icons
var tempResults: any = [];

export default function ApiHeading() {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean[]>(
    apiFunctions.map(() => false)
  ); // Initialize with false values

  const createCampaign = async () => {
    try {
      setLoading(true);
      // const result = await makePostRequest();
      const newResults: { name: string; result: any; timestamp: string; }[] = []
      for (let i = 0; i < apiFunctionscreate.length; i++) {
        const { name, func } = apiFunctionscreate[i];
        const startTime = new Date();
        const result = await func();
        if (result !== "AxiosError") {
          // console.log('RESPONSE FROM APIS.ts------------------',result)

          tempResults.push({
            name,
            result,
            timestamp: startTime.toLocaleString(),
          });
          setResults(tempResults);
        } else {
          console.error(`Error calling ${name} API:`);
          tempResults.push({
            name,
            result: null,
            timestamp: startTime.toLocaleString(),
          });

          setResults(tempResults);
        }
        setIsOpen((prevState) => {
          const updatedState = [...prevState];
          updatedState[i] = true; // Set isOpen to true for the corresponding index
          return updatedState;
        });
        return result;
      }
      // return result;
      
    } catch (error) {
      console.error("Error creating campaign:", error);
      return null;
    } finally {
      setLoading(false);
      
    }
    console.log(results, "-----------------------------results");
  };

  const handleApiCalls = async () => {
    try {
      const sortkey = await createCampaign();
      if (!sortkey) return; // If sortkey is null, return

      setLoading(true);

      // const tempResults = [];
      for (let i = 0; i < apiFunctions.length; i++) {
        const { name, func } = apiFunctions[i];
        const startTime = new Date();
        let statusMessage = "API is not working. Try again."; // Default status message
        console.log("THIS IS THE SORT-KEY-----======------", sortkey);
        const result = await func(sortkey);
        if (result !== "AxiosError") {
          // console.log('RESPONSE FROM APIS.ts------------------',result)
          statusMessage = "API runs perfectly";
          tempResults.push({
            name,
            result,
            timestamp: startTime.toLocaleString(),
          });
          setResults(tempResults);
        } else {
          console.error(`Error calling ${name} API:`);
          tempResults.push({
            name,
            result: null,
            timestamp: startTime.toLocaleString(),
          });

          setResults(tempResults);
        }

        setIsOpen((prevState) => {
          const updatedState = [...prevState];
          updatedState[i + 1] = true; // Set isOpen to true for the corresponding index
          return updatedState;
        });
      }
    } catch (error) {
      console.error("Error calling APIs:", error);
      
    } finally {
      setLoading(false);
      tempResults = []
      
    }

    
    console.log(results, "==================");
  };


  
  

  return (
    <Box background="#f2f2f2" pb={"100px"} >
      <Center>
        <Box
          display={"flex"}
          flexDirection={"column"}
         
        
          w={"768px"}
        >
          <Heading
            display={"flex"}
            justifyContent={"center"}
            textColor={"#0035a4"}
            fontFamily={"Fredoka"}
            fontWeight={500}
            fontSize={"48px"}
          >
            Api Health CyberNut
          </Heading>
          <Image
            borderTopRadius={"8px"}
            boxShadow={"0 0 4px 0 rgb(0 0 0/10%)"}
            border={"2px solid #e5e6e8"}
            width={"768px"}
            src="/apihealth.png"
            height={"224px"}
          />
          <Box display="flex" flexDirection="column" alignItems="center"
          
           borderBottom={"1px solid #ccc"}
          >
            <Box
              p="4"
              w="768px"
              background="white"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              borderLeft={"1px solid #ccc"}
              borderRight={"1px solid #ccc"}
         
            >
              <Text fontWeight="bold">API Calls</Text>
              <Button
                onClick={ ()=> {handleApiCalls()
                  
                  
                }}
                isLoading={loading}
                loadingText="Loading APIs"
              >
                Call APIs
              </Button>
              
            </Box>
            <Box 
         
          
            >
              {results.map((result, index) => (
                <>
                  <Box
                  
                    onClick={() => {
                      setIsOpen((prevState) => {
                        const updatedState = [...prevState];
                        if (updatedState[index] === true) {
                          updatedState[index] = false;
                        } else {
                          updatedState[index] = true;
                        }

                        return updatedState;
                      });
                    }}
                    display={"flex"}
                    p="2"
                    borderTop="1px solid #ccc"
                    borderLeft={"1px solid #ccc"}
                    borderRight={"1px solid #ccc"}
                    width="768px"
                    background={"white"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    px={"20px"}
                    h={"72px"}
                    
                  >
                    {" "}
                    <Text fontWeight={"500"}>{result.name}</Text>
                    <Box display={"flex"} alignContent={"center"}>
                      {result.result && (
                        <>
                          <Image
                            src="./bgtickgreen.png"
                            // mt={"3px"}
                            w={"24px"}
                            h={"24px"}
                            color="green.500"
                            mr="1"
                          />
                          <Text fontWeight={"400"} fontSize={"14px"}>
                            No known issues
                          </Text>
                        </>
                      )}
                    </Box>
                  </Box>
                  <Collapse key={index} in={isOpen[index]} animateOpacity>
                    <Box
                      background="white"
                      borderLeft={"1px solid #ccc"}
                      borderRight={"1px solid #ccc"}
                      px={"10px"}
                      pb={"5px"}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          ml={"10px"}
                          // mt={"10px"}
                        >
                          {result.result ? (
                            <>
                              <Image
                                src="./tick_icon.png"
                                w={"16px"}
                                h={"16px"}
                                color="green.500"
                                mr="1"
                              />
                              <Text fontWeight={"500"} fontSize={"14px"}>
                                No known issues
                              </Text>
                            </>
                          ) : (
                            <>
                              <CloseIcon
                                color="red.500"
                                mr="1"
                                w={"10px"}
                                h={"10px"}
                              />
                              <Text
                                color="red.500"
                                fontWeight={"500"}
                                fontSize={"14px"}
                              >
                                known issues Contact Admin.
                              </Text>
                            </>
                          )}
                        </Box>
                        <Text ml={"30px"} textColor={"#8d949e"} fontSize={"14px"}>
                          {result.timestamp}
                        </Text>
                        <Text
                          ml={"30px"}
                          mt={"3"}
                          fontSize={"14px"}
                          fontWeight={"400"}
                        >
                          {result.result &&
                            "The service is up and running with no known issues."}
                        </Text>
                      </Box>
                    </Box>
                  </Collapse>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
