import { Flex, Box, Text } from "@chakra-ui/react";
import { mail, user, lock, login } from "../../../assets/Images/index.js";
import {
  InfoAccountRegister,
  SubmitButton,
  InputForm,
} from "./../../molecule/Auth/index.js";

export function Register() {
  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORMULA */}
      <Flex
        width={{ base: "95%", sm: "80%", md: "50%", lg: "50%", xl: "40%" }}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems="center" mt={4}>
          <Text
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            color={"black.700"}
            fontWeight={700}
            mt={6}
          >
            {"Getting Started"}
          </Text>
          <Text
            fontSize={{ base: "15px", md: "17px", lg: "20px" }}
            mt={2}
            color={"gray.500"}
          >
            {"Create an account to continue!"}
          </Text>
        </Flex>
        <Flex flexDirection={"column"} alignItems="center" p={5}>
          <InputForm image={mail} text="Email" />
          <InputForm image={user} text="Username" />
          <InputForm image={lock} text="Password" />
          <InputForm image={lock} text="Confirm Password" />
          <SubmitButton image={login} text="Sign Up" />
          <InfoAccountRegister
            info="Already have an account?"
            authStatus="Sign In"
          />
        </Flex>
      </Flex>
      {/* END OF FORMULA */}
    </Flex>
  );
}
