import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
  Text,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "./hook/useLogin";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginCard() {
  const { handleChange, handleLogin } = useLogin();
  // const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);

    const [showPassword, setShowPassword] = useState(false);
    // const { login, Login, handleLogin } = UseLogin();
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

  return (
    // <Box
    //   w={{ base: "100%", md: "40%" }}
    //   h={"100vh"}
    //   display={"flex"}
    //   alignItems={"center"}
    //   justifyContent={"center"}
    //   mx={"auto"}
    //   my={"auto"}
    // >
    //   <Card w={"full"} p={10} bgColor={"#222"} boxShadow="xl" color={"white"}>
    //     <Box
    //       w={"full"}
    //       display={"flex"}
    //       alignItems={"center"}
    //       justifyContent={"center"}
    //       mb={8}
    //     >
    //       <Text fontSize={"4xl"} fontWeight={"bold"}>
    //         Login
    //       </Text>
    //     </Box>
    //     <Input
    //       variant="outline"
    //       placeholder="Email"
    //       mb={4}
    //       onChange={handleChange}
    //       name="email"
    //     />
    //     <InputGroup size="md" mb={4}>
    //       <Input
    //         pr="4.5rem"
    //         type={show ? "text" : "password"}
    //         placeholder="Enter password"
    //         onChange={handleChange}
    //         name="password"
    //       />
    //       <InputRightElement width="4.5rem">
    //         <Button h="1.75rem" size="sm" onClick={handleClick}>
    //           {show ? "Hide" : "Show"}
    //         </Button>
    //       </InputRightElement>
    //     </InputGroup>

    //     <Box display={"flex"} alignItems={"center"} mb={4}>
    //       <Text>Don't have an account?</Text>
    //       <Link to="/register">
    //         <Button color={"green.200"} colorScheme="transparent">
    //           Register
    //         </Button>
    //       </Link>
    //     </Box>
    //     <Button colorScheme="green" onClick={handleLogin}>
    //       Login
    //     </Button>
    //   </Card>
    // </Box>
    <Flex
    bg={"#011b49;"}
    color={"color.100"}
    align={"center"}
    justify={"center"}
    minH={"100vh"}
  >
    <Stack spacing={8} py={12} px={6} w={"auto"} mx="auto">
      <Stack align={"center"}>
        <Box rounded={"lg"} boxShadow={"lg"} p={30} bgColor={"#11235A"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            <Text as={"span"} color={"#008000"}>
              Circle
            </Text>
          </Heading>
          <Text
            fontSize="xl"
            fontWeight={600}
            textAlign={"center"}
            m={1}
            color={"#F6ECA9"}
          >
            Login to Circle
          </Text>
          <Stack spacing={4} mt={10}>
              <FormControl mb={6} id="email" isRequired minW="350px">
                <FormLabel color={"#F6ECA9"}>Email</FormLabel>
                <Input
                color={"black"}
                  onChange={handleChange}
                  // placeholder="Email/Username"
                  name="email"
                  type="email"
                  bgColor={"#F6ECA9"}
                />
              </FormControl>
              <FormControl mb={6} id="password" isRequired>
                <FormLabel color={"#F6ECA9"}>Password</FormLabel>
                <InputGroup>
                  <Input
                  color={"black"}
                    onChange={handleChange}
                    name="password"
                    // placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    bgColor={"#F6ECA9"}
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      h="0rem"
                      size="xl"
                      color={"black"}
                      onClick={handleTogglePassword}
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
              onClick={handleLogin}
                bgColor={"green"}
                color={"black"}
                fontWeight={"bold"}
                w="full"
                type="submit"
                my="13px"
                _hover={{ bg: "yellow", color: "black" }}
              >
                Login
              </Button>
            <Text color={"#black"}  textAlign={"center"}>
              Don't have an account yet?{" "}
              <Link to="/register" color="#F4CE14">
                <span style={{ color: "#F4CE14", fontWeight: "bold" }}>
                  Register
                </span>
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  </Flex>
  );
}
