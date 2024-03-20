import MyAccordion from "@/components/ui";
import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Page = () => {
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      justifyContent={"center"}
      // alignItems={"baseline"}
      background={"#f2f2f2"}
    >
      <Box>
        <Heading
          display={"flex"}
          justifyContent={"center"}
          textColor={"#0035a4"}
          fontFamily={"Fredoka"}
          fontWeight={500}
          fontSize={"48px"}
        >
          {" "}
          Api Health CyberNut{" "}
        </Heading>
        <Box
          h={"fit-content"}
          borderTopRadius={"8px"}
          boxShadow={"0 0 4px 0 rgb(0 0 0/10%)"}
          border={"2px solid #e5e6e8"}
          width={"768px"}
        >
          <Image
            src="/apihealth.png"
            width={"768px"}
            height={"224px"}
            borderTopRadius={"8px"}
          />
        </Box>
        <MyAccordion />
      </Box>
    </Box>
  );
};

export default Page;
