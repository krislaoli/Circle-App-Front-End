import {
  Box,
  Button,
  Flex,
  Avatar,
  Input,
  // Accordion,
  // AccordionItem,
  // AccordionButton,
  // AccordionPanel,
} from "@chakra-ui/react";
import { useCreateReply } from "../hooks/useFormReply";
import { BiImageAdd } from "react-icons/bi";

export default function RepliesThreadForm() {
  const {
    handleChange,
    handleButtonClick,
    fileInputRef,
    mutate,
    isPending,
    form,
  } = useCreateReply();

  return (
    <Box mt={5} mb={4} padding={3} rounded={"lg"} w={"full"} bgColor={"#11235A"}>
      {/* <Accordion allowToggle> */}
        {/* <AccordionItem> */}
          <h2>
            {/* <AccordionButton> */}
              <Box as="span" flex="1" textAlign="left">
                Post Your Reply
              </Box>
            {/* </AccordionButton> */}
          </h2>
          {/* <AccordionPanel pb={4}> */}
            <form
              onSubmit={(e) => {
                e.preventDefault(), mutate();
              }}
              encType="multipart/form-data"
            >
              <Flex
                alignItems={"center"}
                w={"full"}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} w={"full"} gap={4}>
                  <Avatar />
                  <Box w={"80%"}>
                    <Box
                      w={"full"}
                      borderBottom={"1px solid gray"}
                      mt={2}
                      pb={1}
                    >
                      <Input
                        placeholder="Comments"
                        size={"sm"}
                        border={"none"}
                        onChange={handleChange}
                        value={form.content}
                        name="content"
                      />
                    </Box>
                    <Input
                      placeholder="Comments"
                      size={"sm"}
                      border={"none"}
                      onChange={handleChange}
                      type="file"
                      ref={fileInputRef}
                      hidden
                    />
                  </Box>
                </Box>
                <Box display={"flex"} gap={2}>
                  <Button onClick={handleButtonClick}>
                    <BiImageAdd size={20} />
                  </Button>
                  <Button
                    bgColor={"#008000"}
                    _hover={{ bgColor: "yellow", color: "black" }}
                    type="submit"
                    isLoading={isPending}
                  >
                    Reply
                  </Button>
                </Box>
              </Flex>
            </form>
          {/* </AccordionPanel> */}
        {/* </AccordionItem> */}
      {/* </Accordion> */}
    </Box>
  );
}
