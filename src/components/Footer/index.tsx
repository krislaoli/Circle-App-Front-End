import { Box, Flex, Text, Card } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <Box >
      <Card marginTop={"-180px"} p={6} bgColor={"#11235A"} boxShadow='lg' color={'white'}>
        <Box>
          <Flex>
            <Text fontSize='xs' mr={4} fontWeight={'bold'}>Develop By Kris </Text>
            <Flex gap={2}>
              <AiFillGithub />
              <AiFillLinkedin />
              <BsFacebook />
              <AiFillInstagram />
            </Flex>
          </Flex>
          <Flex>
            <Text fontSize='xs'>Powered by Dumbways Indonesia • #1 Coding Bootcamp</Text>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}
