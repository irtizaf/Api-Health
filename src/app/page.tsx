"use client"
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Button,
  FormControl,
  Input,
  FormLabel,
  Center
} from "@chakra-ui/react";
import {
  makePostRequest,
  getallcompaing,
  getsinglecompaing,
  deleteCampaign,
  killCampaign,
  pauseCampaign,
  resumeCampaign,
} from "@/Apifunction/apis"; // import your API functions here
import ApiCollapse from "@/components/collaps";

// Define interface for result object
interface Result {
  name: string;
  result: any;
  timestamp: string;
}

// Define interface for API function
interface ApiFunction {
  name: string;
  func: (...args: any[]) => Promise<any>; // Function that accepts any number of arguments
}

// Define API functions array with updated function signatures
const apiFunctions: ApiFunction[] = [
  { name: "makePostRequest", func: makePostRequest },
  { name: "getallcompaing", func: getallcompaing },
  { name: "getsinglecompaing", func: getsinglecompaing },
  { name: "deleteCampaign", func: deleteCampaign },
  { name: "killCampaign", func: killCampaign },
  // { name: "pauseCampaign", func: pauseCampaign },
  // { name: "resumeCampaign", func: resumeCampaign },
];

// export default function ApiAccordion() {
//   // Explicitly specify the type of state
//   const [results, setResults] = useState<Result[]>([]);

//   const handleApiCall = async (func: (...args: any[]) => Promise<any>, ...args: any[]) => {
//     try {
//       const result = await func(...args);
//       const timestamp = new Date().toLocaleString(); // Get current date and time
//       setResults((prevResults) => [...prevResults, { name: func.name, result, timestamp }]);
//     } catch (error) {
//       console.error(`Error calling ${func.name}:`, error);
//     }
//   };

//   return (
//     <Accordion allowToggle>
//       {apiFunctions.map((apiFunc, index) => (
//         <AccordionItem key={index}>
//           <h2>
//             <AccordionButton>
//               <Box flex="1" textAlign="left">
//                 {apiFunc.name}
//               </Box>
//               <AccordionIcon />
//             </AccordionButton>
//           </h2>
//           <AccordionPanel pb={4}>
//             <Button
//               colorScheme="teal"
//               onClick={() => handleApiCall(apiFunc.func)}
//             >
//               Call API
//             </Button>
//             {results.map((result, idx) => (
//               <Box key={idx} mt={4}>
//                 <Text fontWeight="bold">{result.name}</Text>
//                 <Text>{JSON.stringify(result.result, null, 2)}</Text>
//                 <Text>Timestamp: {result.timestamp}</Text> {/* Display timestamp */}
//               </Box>
//             ))}
//           </AccordionPanel>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }



export default function ApiAccordion() {
  // Explicitly specify the type of state
  const [results, setResults] = useState<Result[]>([]);
  const [sortKey, setSortKey] = useState<string>(""); // State to store sortkey

  const handleApiCall = async (
    func: (...args: any[]) => Promise<any>,
    ...args: any[]
  ) => {
    try {
      let finalArgs = args; // Initialize finalArgs with initial arguments
      if (func === killCampaign && sortKey) { // Check if calling killCampaign and sortKey is available
        finalArgs = [sortKey]; // Append sortKey to finalArgs
      }
      const result = await func(...finalArgs); // Call the API function with finalArgs
      const timestamp = new Date().toLocaleString(); // Get current date and time
      setResults((prevResults) => [
        ...prevResults,
        { name: func.name, result, timestamp },
      ]);
    } catch (error) {
      console.error(`Error calling ${func.name}:`, error);
    }
  };

  // Function to create campaign and update sortKey
  const createCampaign = async () => {
    try {
      const result = await makePostRequest(); // Call makePostRequest to create campaign
      setSortKey(result); // Update sortKey with the result from makePostRequest
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  // Call createCampaign function when component mounts to obtain sortKey
  // useEffect(() => {
  //   createCampaign();
  // }, []);

  return (
    //  <Center >
    // <Accordion allowToggle width={"768px"}>
    //   {apiFunctions.map((apiFunc, index) => (
    //     <AccordionItem key={index}>
    //       <h2>
    //         <AccordionButton>
    //           <Box flex="1" textAlign="left">
    //             {apiFunc.name}
    //           </Box>
    //           <AccordionIcon />
    //         </AccordionButton>
    //       </h2>
    //       <AccordionPanel pb={4}>
    //         <Button
    //           colorScheme="teal"
    //           onClick={() => handleApiCall(apiFunc.func)}
    //         >
    //           Call API
    //         </Button>
    //         {results.map((result, idx) => (
    //           <Box key={idx} mt={4}>
    //             <Text fontWeight="bold">{result.name}</Text>
    //             <Text>{JSON.stringify(result.result, null, 2)}</Text>
    //             <Text>Timestamp: {result.timestamp}</Text>{" "}
    //             {/* Display timestamp */}
    //           </Box>
    //         ))}
    //       </AccordionPanel>
    //     </AccordionItem>
    //   ))}
    // </Accordion>
    // </Center>
    <>
    <Box h={"100vh"} background={"#f2f2f2"} >
    <ApiCollapse/>
    </Box>
    
    </>
  );
}
// export default function ApiAccordion() {
//   // Explicitly specify the type of state
//   const [results, setResults] = useState<Result[]>([]);
//   const [sortKey, setSortKey] = useState<string>(""); // State to store sortkey
//   const [allResults, setAllResults] = useState<Result[]>([]); // State to store all API results

//   const handleApiCall = async (
//     func: (...args: any[]) => Promise<any>,
//     ...args: any[]
//   ) => {
//     try {
//       let finalArgs = args; // Initialize finalArgs with initial arguments
//       if (func === killCampaign && sortKey) { // Check if calling killCampaign and sortKey is available
//         finalArgs = [sortKey]; // Append sortKey to finalArgs
//       }
//       const result = await func(...finalArgs); // Call the API function with finalArgs
//       const timestamp = new Date().toLocaleString(); // Get current date and time
//       setResults((prevResults) => [
//         ...prevResults,
//         { name: func.name, result, timestamp },
//       ]);
//       setAllResults((prevAllResults) => [
//         ...prevAllResults,
//         { name: func.name, result, timestamp },
//       ]);
//     } catch (error) {
//       console.error(`Error calling ${func.name}:`, error);
//     }
//   };

//   // Function to create campaign and update sortKey
//   const createCampaign = async () => {
//     try {
//       const result = await makePostRequest(); // Call makePostRequest to create campaign
//       setSortKey(result); // Update sortKey with the result from makePostRequest
//       // Automatically call other API functions
//       await Promise.all([
//         getallcompaing(),
//         getsinglecompaing(result), // Pass sortKey to getsinglecompaing
//         deleteCampaign(result), // Pass sortKey to deleteCampaign
//         pauseCampaign(result), // Pass sortKey to pauseCampaign
//         resumeCampaign(result) // Pass sortKey to resumeCampaign
//       ]);
//     } catch (error) {
//       console.error("Error creating campaign:", error);
//     }
//   };

//   // Call createCampaign function when component mounts to obtain sortKey
//   useEffect(() => {
//     createCampaign();
//   }, []);

//   return (
//     <>
//       <Accordion allowToggle>
//         {apiFunctions.map((apiFunc, index) => (
//           <AccordionItem key={index}>
//             <h2>
//               <AccordionButton>
//                 <Box flex="1" textAlign="left">
//                   {apiFunc.name}
//                 </Box>
//                 <AccordionIcon />
//               </AccordionButton>
//             </h2>
//             <AccordionPanel pb={4}>
//               <Button
//                 colorScheme="teal"
//                 onClick={() => handleApiCall(apiFunc.func)}
//               >
//                 Call API
//               </Button>
//               {results.map((result, idx) => (
//                 <Box key={idx} mt={4}>
//                   <Text fontWeight="bold">{result.name}</Text>
//                   <Text>{JSON.stringify(result.result, null, 2)}</Text>
//                   <Text>Timestamp: {result.timestamp}</Text>{" "}
//                   {/* Display timestamp */}
//                 </Box>
//               ))}
//             </AccordionPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//       <Accordion allowToggle mt={4}>
//         <AccordionItem>
//           <h2>
//             <AccordionButton>
//               <Box flex="1" textAlign="left">
//                 All API Results
//               </Box>
//               <AccordionIcon />
//             </AccordionButton>
//           </h2>
//           <AccordionPanel pb={4}>
//             {allResults.map((result, idx) => (
//               <Box key={idx} mt={4}>
//                 <Text fontWeight="bold">{result.name}</Text>
//                 <Text>{JSON.stringify(result.result, null, 2)}</Text>
//                 <Text>Timestamp: {result.timestamp}</Text>{" "}
//                 {/* Display timestamp */}
//               </Box>
//             ))}
//           </AccordionPanel>
//         </AccordionItem>
//       </Accordion>
//     </>
//   );
// }
