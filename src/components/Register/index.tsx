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
import { useRegister } from "./hooks/useRegister";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterCard() {
  const { handleChange, handleRegister } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (


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
            <Text as={"span"} color={"green"}>
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
            Create account circle
          </Text>
          <Stack spacing={4} mt={10}>
            <FormControl id="full_name" isRequired minW="350px">
              <FormLabel color={"#F6ECA9"}>Full Name</FormLabel>
              <Input
                onChange={handleChange}
                placeholder="Full Name"
                name="full_name"
                type="name" color={"black"}
                bgColor={"#F6ECA9"}
              />
            </FormControl>
            <FormControl id="Username" isRequired minW="350px">
              <FormLabel color={"#F6ECA9"}>Username</FormLabel>
              <Input
                onChange={handleChange}
                placeholder="Username"
                name="username"
                type="name" color={"black"}
                bgColor={"#F6ECA9"}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel color={"#F6ECA9"}>Email</FormLabel>
              <Input
                onChange={handleChange}
                placeholder="Email"
                name="email"
                type="email" color={"black"}
                bgColor={"#F6ECA9"}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"#F6ECA9"}>Password</FormLabel>
              <InputGroup>
                <Input color={"black"}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  bgColor={"#F6ECA9"}
                />
                <InputRightElement width="4.5rem">
                  <IconButton color={"black"}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    h="0rem"
                    size="xl"
                    onClick={handleTogglePassword}
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              bgColor={"green"}
              color={"black"}
              w="full" 
              fontWeight={"bold"}
              _hover={{ bg: "yellow", color: "black" }}
              onClick={handleRegister}
            >
              Register
            </Button>

            <Text color={"#F6ECA9"}>
              Allready have an account?{" "}
              <Link to={"/login"}>
                <span style={{ color: "#F4CE14", fontWeight: "bold" }}>
                  Login
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