import { Box, List, ListItem, ListIcon, Text, Button } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { AUTH_LOGOUT } from "../../store/RootReducer";
import { BiHeart, BiHomeCircle, BiLogOut, BiSearchAlt, BiUserCircle } from "react-icons/bi";
import useToast from "./hook/loginHook";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function handleLogout() {
  //   dispatch(AUTH_LOGOUT());
  // }

  const toast = useToast();
  function handleLogout() {
    dispatch(AUTH_LOGOUT());
    toast("Logout", "Logout Successful", "info");
  }

  return (
    <Box
      h={"full"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        <Box mb={4}>
          <Text fontSize="5xl" color="#008000" as="b">
            Circle
          </Text>
        </Box>

        <List alignItems={"center"}>

          <Box display={"flex"} alignItems="center" marginBottom={30}>
            <BiHomeCircle  />
            <ListItem ms={3}>
              <Link to="/">Home.</Link>
            </ListItem>
          </Box>
          <Box display={"flex"} alignItems="center" marginBottom={30}>
            <BiSearchAlt  />
            <ListItem ms={3}>
              <Link to="/search">Search.</Link>
            </ListItem>
          </Box>
          <Box display={"flex"} alignItems="center" marginBottom={30}>
            <BiHeart />
            <ListItem ms={3}>
              <Link to="/follow">Follows.</Link>
            </ListItem>
          </Box>
          <Box display={"flex"} alignItems="center" marginBottom={30}>
            <BiUserCircle  />
            <ListItem ms={3}>
              <Link to="/profile">Profile.</Link>
            </ListItem>
          </Box>


  
        </List>

        <Button
          bgColor={"#008000"}
          w="80%"
          mt={6}
          fontWeight={"bold"}
          _hover={{ bgColor: "yellow", color: "black" }}
          style={{ borderRadius: "10px" }}
        >
          Create Post
        </Button>
      </Box>

      <Box>
      <Button
        w="80%"
        mt={6}
        gap={2}
        display={"flex"}

        variant="unstyled"
        color="white"
        leftIcon={<BiLogOut />}
        onClick={() => {
          handleLogout();
          navigate("/");
        }}
      >
       <Text>Logout</Text> 
      </Button>
 
      </Box>
    </Box>
  );
}

export function NavbarMobile() {
  return (
    <List
      display={"flex"}
      flexDirection={"row"}
      gap={4}
      top={0}
      left={0}
      p={6}
      justifyContent={"space-between"}
      width={"100%"}
      height={"10%"}
      backgroundColor={"#222"}
      zIndex={1000000}
      position={"fixed"}
    >
      <Link to="/">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={RiHome7Fill} />
        </ListItem>
      </Link>
      <Link to="/search">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={FaSearch} />
        </ListItem>
      </Link>
      <Link to="/follow">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={RiUserFollowLine} />
        </ListItem>
      </Link>
      <Link to="/profile">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={CgProfile} />
        </ListItem>
      </Link>
    </List>
  );
}
