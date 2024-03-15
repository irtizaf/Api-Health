// // components/Accordion.tsx

// import { useState } from 'react';
// import { Box, Button, Text } from '@chakra-ui/react';

// interface AccordionItem {
//   title: string;
//   content: string;
// }

// interface AccordionProps {
//   items: AccordionItem[];
// }

// const Accordion: React.FC<AccordionProps> = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           <Button onClick={() => handleToggle(index)} variant="outline">
//             <Text fontWeight="bold">{item.title}</Text>
//           </Button>
//           {openIndex === index && (
//             <Box p={4} borderWidth="1px" borderRadius="md">
//               {item.content}
//             </Box>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

// components/Accordion.tsx

import { useState } from 'react';
import { Box, Button, Text, Collapse, Heading } from '@chakra-ui/react';
import Buttons from './button';

interface AccordionItem {
  title: string;
  content: string | JSX.Element;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const CustomAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<boolean | null>(null);

  const handleToggle = () => {
    setOpenIndex(true);
  };

  return (
    <Box>
     
        <Box display={"flex"} justifyContent={"space-between"} width={"770px"} h={"120px"} >
            <Heading>Create CAmpaing APi</Heading>
          <Button onClick={() => handleToggle()} variant="outline">
            <Text fontWeight="bold">Open to run apis</Text>
          </Button>
          </Box>
          <Collapse in={openIndex == true } animateOpacity>
            <Box  >
            <Buttons/>
            </Box>
          </Collapse>
        
      
    </Box>
  );
};

export default CustomAccordion;
