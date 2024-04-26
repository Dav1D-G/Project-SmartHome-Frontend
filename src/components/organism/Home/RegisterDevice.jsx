import { Flex, Box, Text } from "@chakra-ui/react";
import { ID, login } from "../../../assets/Images/index.js";
import { SubmitButton, InputForm } from "./../../molecule/Auth/index.js";

export function RegisterDevice() {
  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORMULA */}
      <Flex
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        p={4}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems="center">
          <Text
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            color={"black.700"}
            fontWeight={700}
            mt={6}
          >
            {"Register your device"}
          </Text>
          <Text
            fontSize={{ base: "15px", md: "17px", lg: "20px" }}
            mt={2}
            color={"gray.500"}
          >
            {
              "If you want to use our application, please write ID here and confirm registration using button."
            }
          </Text>
        </Flex>
        <Flex flexDirection={"column"} mt={8} alignItems="center">
          <InputForm image={ID} text="Device ID" />
          <SubmitButton image={login} text="Confirm" />
        </Flex>
      </Flex>
    </Flex>
  );
}
