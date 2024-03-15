
import MyAccordion from '@/components/ui'
import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'


const Page = () => {
  return (

         <Box display={"flex"} height={"100vh"} justifyContent={"center"}  background={"white"}  >
        <Box mt={"100px"} >
      <Box display={"flex"}>
      <Heading
      textColor={"#0035a4"}  fontFamily={'Fredoka'} fontWeight={500} fontSize={"72px"}> Api Health CyberNut </Heading>
      <Image src="/Symbol Main.svg" width={"120px"} height={"118px"} />
      </Box>
      <MyAccordion/>

      </Box>
        
        
        </Box>

  
  )
}

export default Page