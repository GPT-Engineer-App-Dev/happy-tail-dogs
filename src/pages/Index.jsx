import { Container, Text, VStack, Box, Image, Button, Heading } from "@chakra-ui/react";
import { FaDog } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to Dog Haven</Heading>
          <Text fontSize="lg">Find your perfect furry friend today!</Text>
        </Box>
        <Image src="/images/dog-landing.jpg" alt="Cute dog" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Button colorScheme="teal" size="lg" leftIcon={<FaDog />}>
          Browse Dogs
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;