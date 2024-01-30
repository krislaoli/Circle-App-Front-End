import { Box, Text, Avatar, Input, Flex, Button } from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
// import { useThreads } from '../hooks/useThreads';
import { useThread } from "../hooks/useThread";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";

export default function ThreadsForm() {
  // const { handlePost, handleChange, fileInputRef, handleButtonClick, isPending, form } = useThreads();
  const auth = useSelector((state: RootState) => state.auth);

  const {
    handleChange,
    handleButtonClick,
    fileInputRef,
    mutate,
    isPending,
    form,
  } = useThread();
  return (
    <Box
      position={{ base: "relative", md: "fixed" }}
      top={0}
      // pt={{ base: 5, md: 5 }}
      padding={{ base: 100, md: 2 }}
      zIndex={"10000"}
      bgColor={"#11235A"}
      w={{ base: "50%", md: "47%" }}
      marginBottom={-20}
    >
      <Box mb={4}>
        <Text fontSize={"xl"} color={"white"}>Home</Text>
      </Box>
      <form
        onSubmit={(e) => {
          e.preventDefault(), mutate();
        }}
        encType="multipart/form-data"
      >
        <Flex mb={4} alignItems="center" justifyContent={"space-between"}>
          <Box display={"flex"} gap={4} w={"70%"}>
            <Avatar name={auth?.full_name} size={{ base: "sm", md: "md" }}/>
            <Box w={"full"} borderBottom={"1px solid gray"} mb={1}>
              <Input
                placeholder="What is happening?!"
                size="sm"
                border={"none"}
                onChange={handleChange}
                name="content"
                value={form.content}
color={"white"}
                mt={2}
              />
            </Box>
            <Input
              placeholder="Image"
              size="sm"
              border={"none"}
              name="image"
              onChange={handleChange}
              type="file"
              ref={fileInputRef}
              value={""}
              hidden
              bgColor={"white"}
            />
          </Box>
          <Box>
            <Box display={"flex"} gap={2}>
              <Button onClick={handleButtonClick} >
                <BiImageAdd size={20} />
              </Button>
              <Button bgColor={"#008000"} _hover={{ bgColor: "yellow", color: "black" }} type="submit" isLoading={isPending}>
                Post
              </Button>
            </Box>
          </Box>
        </Flex>
      </form>
    </Box>
  );
}
