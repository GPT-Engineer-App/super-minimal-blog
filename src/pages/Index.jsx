import { Container, VStack, Heading, Text, Button, IconButton, HStack, Box, Image } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6} textAlign="center">
        <Box boxSize="150px" borderRadius="full" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTc0MzE0NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Web Developer | Tech Enthusiast | Blogger
        </Text>
        <Text fontSize="md" color="gray.500" maxW="lg">
          Welcome to my personal blog where I share insights on web development, tech trends, and my personal journey in the tech world.
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com" target="_blank" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com" target="_blank" />
        </HStack>
        <Button colorScheme="teal" size="lg" as="a" href="#blog-posts">
          Read My Blog
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
