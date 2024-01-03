import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useBreakpointValue,
  Image,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useUpdateProfile } from "./hook/useUpdateProfile";
import { AiFillEdit } from "react-icons/ai";
export default function ProfileForm() {
  const { profile, mutate, isPending, handleChange } = useUpdateProfile();
  const shouldDisplaySidebar = useBreakpointValue({ base: false, md: true });
  const toast = useToast();

  return (
    <FormControl w={{ base: "115%", md: "50%" }}>
      <Box>
        <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} mb={5}>
          Edit Profile
        </Text>
      </Box>

      <FormControl>
        <form
          onSubmit={(e) => {
            e.preventDefault(), mutate();
          }}
        >
          <FormControl justifyContent={"center"} display="flex" alignItems="center" >
            <Image
              alt="Profile Image"
              boxSize="100px"
              borderRadius="full"
              bgColor={"white"}
              mr={4}
              padding={1}
              
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleChange}
              display="none"
              id="profile-image-input"
            />
            <label htmlFor="profile-image-input">
              <IconButton
                as="span"
                icon={<AiFillEdit />}
                size="sm"
                aria-label="Edit Profile Image"
              />
            </label>
          </FormControl>
          <Box display={"flex"} flexDirection={"column"} gap={6}>
            <FormControl>
              <FormLabel>Your name</FormLabel>
              <Input
                placeholder="full name"
                value={profile.full_name}
                name="full_name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel display={"flex"} alignItems={"center"}>
                <FormLabel>Username</FormLabel>
              </FormLabel>
              <Input
                placeholder="username"
                value={profile.username}
                name="username"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="email"
                value={profile.email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder="bio"
                value={profile.bio}
                name="bio"
                onChange={handleChange}
              />
            </FormControl>
            {shouldDisplaySidebar ? (
              <Button
                onClick={() => {
                  const examplePromise = new Promise((resolve) => {
                    setTimeout(() => resolve(200), 1000);
                  });

                  toast.promise(examplePromise, {
                    success: { title: "Successfully Edit Profile" },
                    error: {
                      title: "Promise rejected",
                      description: "Something wrong",
                    },
                    loading: { title: "Please Wait" },
                  });
                }}
                bgColor={"#008000"}
                _hover={{ bgColor: "yellow", color: "black" }}
                type="submit"
                isLoading={isPending}
              >
                Save Profile
              </Button>
            ) : (
              <Button
                onClick={() => {
                  const examplePromise = new Promise((resolve) => {
                    setTimeout(() => resolve(200), 5000);
                  });

                  toast.promise(examplePromise, {
                    success: { title: "Successfully Edit Profile" },
                    error: {
                      title: "Promise rejected",
                      description: "Something wrong",
                    },
                    loading: { title: "Suksess", description: "Please wait" },
                  });
                }}
                bgColor={"#008000"}
                type="submit"
                isLoading={isPending}
              >
                Save Profile
              </Button>
            )}
          </Box>
        </form>
      </FormControl>
    </FormControl>
  );
}
