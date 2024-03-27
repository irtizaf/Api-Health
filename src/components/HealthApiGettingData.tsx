// pages/index.tsx

import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

const IndexPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Check if method is selected
      if (!formData.selectedMethod) {
        console.error('Please select a method');
        return;
      }

      const response = await fetch(`/api/${formData.selectedMethod}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });
      if (response.ok) {
        // Handle success
        console.log('API call successful');
      } else {
        // Handle error
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Select Method</FormLabel>
            <Select
              name="selectedMethod"
              value={formData.selectedMethod}
              onChange={handleChange}
              placeholder="Select method"
            >
              <option value="Post">Post</option>
              <option value="Get">Get</option>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default IndexPage;
