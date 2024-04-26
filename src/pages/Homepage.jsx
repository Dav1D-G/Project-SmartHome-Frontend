import { Container } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {
  AsideMenu,
  NavBarMobile,
  NavBar,
} from "./../components/molecule/Home/index";
import { useState } from "react";

export function Homepage() {
  const [isClickedBurger, setIsClickedBurger] = useState(false);
  return (
    <Container
      minW={"358px"}
      maxW={"none"}
      m={"unset"}
      p={"unset"}
      height={"100vh"}
    >
      <Flex height={"100%"} justifyContent={"center"}>
        <Box
          flex={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
          height={"100%"}
          bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
        >
          <Flex width={"100%"} flexDirection={"column"}>
            <AsideMenu isClickedBurger={isClickedBurger} />{" "}
            {/* min-width:0px  max-width:993px*/}
            <NavBarMobile
              isClickedBurger={isClickedBurger}
              setIsClickedBurger={setIsClickedBurger}
            />{" "}
            {/* min-width:0px  max-width:993px*/}
            <NavBar /> {/* min-width:994px  max-width:unlimited*/}
            <Outlet />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
