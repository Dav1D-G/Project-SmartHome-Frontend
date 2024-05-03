<<<<<<< HEAD
import { Container, Spinner , Text } from "@chakra-ui/react";
=======
import { Container } from "@chakra-ui/react";
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {
  AsideMenu,
  NavBarMobile,
  NavBar,
} from "./../components/molecule/Home/index";
import { useState } from "react";
<<<<<<< HEAD
import {isUser} from './../api/index'
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import {ForwardPageButton} from './../components/molecule/Auth/index'
import {isVerifyPanel} from './../api/index'

export function Homepage() {
  const [isClickedBurger, setIsClickedBurger] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const { isSuccess , isError , isPending }  = useQuery({queryKey : ['isVerify'] , queryFn : async()=> isUser(cookies['access-token'])});

  return (
    <>
=======

export function Homepage() {
  const [isClickedBurger, setIsClickedBurger] = useState(false);
  return (
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
    <Container
      minW={"358px"}
      maxW={"none"}
      m={"unset"}
      p={"unset"}
      height={"100vh"}
<<<<<<< HEAD
      bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
    >
      <Flex height={"100%"} justifyContent={"center"}>
        {isSuccess && <Box
=======
    >
      <Flex height={"100%"} justifyContent={"center"}>
        <Box
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
          flex={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
          height={"100%"}
<<<<<<< HEAD
          
=======
          bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
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
<<<<<<< HEAD
        </Box>}
        {isError && 
        <Flex width={'100%'} justifyContent={'start'} alignItems={'center'} marginTop={30} flexDirection={'column'}>
          <Flex justifyContent={'space-around'} alignItems={'center'} flexDirection={'column'} width={{base : '80%', md : '60%' , lg : '50%'}} height={'400px'} bg={'white'} borderRadius={50}>
            <Text marginBottom={15}>Coś poszło nie tak ....</Text>
            <Text marginBottom={15}>😕</Text>
            <Text marginBottom={15}>Może zostałeś wylogowany ?</Text>
            <Text marginBottom={15}>Może wciąż się nie zweryfikowałeś ?</Text>
            <ForwardPageButton url="/"/>
          </Flex>
        </Flex>
      }
        {isPending && 
          <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))">
            <Spinner size={'xl'} color="white"/>
          </Flex>
          }
      </Flex>
    </Container>
    </>
=======
        </Box>
      </Flex>
    </Container>
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
  );
}
