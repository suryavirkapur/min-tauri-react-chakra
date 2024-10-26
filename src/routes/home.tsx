import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { House } from "lucide-react";
import { useState } from "react";

function Icon() {
  return (
    <Flex
      bg="gray.900"
      height="16"
      width="16"
      justify="center"
      align="center"
      margin="auto"
    >
      <Box margin="2">
        <VStack>
          <House />
          {/* <Text fontSize={"xs"}>Settings</Text> */}
        </VStack>
      </Box>
    </Flex>
  );
}

function HomePage() {
  let [count, setCount] = useState(1);
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap="3" color="white">
        <Icon /> <Icon /> <Icon /> <Icon />
      </Grid>
      <Center color="white">
        <Heading>Hello</Heading>
      </Center>
      <Heading color="white">{count}</Heading>
      <Button onClick={() => setCount(count + 1)}>Click me!</Button>
    </Box>
  );
}

export default HomePage;
