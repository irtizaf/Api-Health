"use client"
// import Buttons from '@/components/button'
// import { Box,Image,Heading } from '@chakra-ui/react'
// import React from 'react'
// import { Fredoka } from "next/font/google"
// import MyAccordion from '@/components/ui'
// import CustomAccordion from '@/components/accordionEdit'
// const page = () => {
//   const accordionItems = [
//     {
//       title: 'Accordion Item 1',
//       content: <p>Content for Accordion Item 1</p>,
//     },
//     {
//       title: 'Accordion Item 2',
//       content: <p>Content for Accordion Item 2</p>,
//     },
//     {
//       title: 'Accordion Item 3',
//       content: <p>Content for Accordion Item 3</p>,
//     },
//   ];

//   const items = [
//     { title: 'Item 1', content: 'Content for Item 1' },
//     { title: 'Item 2', content: 'Content for Item 2' },
//     { title: 'Item 3', content: 'Content for Item 3' },
//   ];
//   return (
 
//       <Box display={"flex"} height={"100vh"} justifyContent={"center"} alignItems={"baseline"} background={"#0035a4"} >
//         {/* <Box  >
//       <Image src="/cybernut.svg" width={"430px"} height={"118px"} />
//       <Heading
//       textColor={"white"}  fontFamily={'Fredoka'} fontWeight={500} fontSize={"92px"}> Api Health </Heading>
//         <MyAccordion/>
//         </Box> */}
//         <CustomAccordion />
//         </Box>
      
//   )
// }

// export default page



import React, { useState } from 'react';

const App = () => {
  // Define state to track the condition, initialize to null
  const [isConditionTrue, setIsConditionTrue] = useState<boolean | null>(null);

  // Function that determines the condition
  const checkCondition = () => {
    // You can implement your logic here to determine if the condition is true or false
    // For demonstration purposes, let's randomly return true or false
    return Math.random() < 0.5; // Returns true or false randomly
  };

  // Function to handle button click
  const handleClick = () => {
    const conditionResult:boolean = checkCondition();
    setIsConditionTrue(conditionResult);
    console.log(conditionResult)
  };

  return (
    <div>
      {/* Render components only when the condition is evaluated */}
      {isConditionTrue !== null && (
        <div>
          {isConditionTrue ? (
            <h1>Condition is True</h1>
          ) : (
            <h1>Condition is False</h1>
          )}
          {/* Additional components to render when the condition is known */}
        </div>
      )}

      {/* Button to trigger state update */}
      <button onClick={handleClick}>Check Condition</button>
    </div>
  );
};

export default App;
