import { Flex, Box, Text } from "@chakra-ui/react";
import { user, lock, login } from "../../../assets/Images/index.js";
import {
  InfoAccountLogin,
  SubmitButton,
  InfoForgetPassword,
  InputForm,
} from "./../../molecule/Auth/index.js";

export function Login() {
  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORM */}
      <Flex
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
        borderRadius={"xl"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex flexDirection={"column"} alignItems={"center"} mt={4}>
          <Box>
            <Text
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              color={"black.700"}
              className="dm-sans"
              fontWeight={700}
            >
              {"Let's Sign You in"}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "17px", lg: "20px" }}
              marginTop={3}
              className="dm-sans"
              color={"gray.500"}
            >
              {"Welcome back, you've been missed!"}
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection={"column"} p={5}>
          <InputForm image={user} text="Username or Email" />
          <InputForm image={lock} text="Password" />
          <InfoForgetPassword />
          <SubmitButton image={login} text="Login" />
          <InfoAccountLogin
            info="Don't have an account?"
            authStatus="Sign up"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
