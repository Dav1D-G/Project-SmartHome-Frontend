import { Flex, Box, Text, Center} from "@chakra-ui/react";
import {
  control_panel,
  plus,
} from "../../../assets/Images/index.js";

import { ClickableSVGBox } from "../../molecule/Home/index.js";
import { useQuery } from "@tanstack/react-query";
import { isVerifyPanel } from "../../../api/is-verify-panel.js";
import {useCookies} from 'react-cookie'
import { useState , useEffect } from "react";


export function MainPage() {

  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);
  const { isSuccess , isError , isPending , error , data }  = useQuery({queryKey : ['isVerify'] , queryFn : async() => isVerifyPanel(cookies['access-token'])});
  const [isRegister , setIsRegister] = useState(false);

   // Effect for clearing error message 
   useEffect(() => {
    if(isSuccess)
      setIsRegister(()=>data.status);
  }, [isError,isSuccess,error,data]);


  return (
    <Flex flex={1} justifyContent="space-around" marginTop={10}>
      {/* START OF FORM */}
      <Flex
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
        height={{ base: "90%" }}
        borderRadius={"xl"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        boxShadow={"xl"}
        bg={"white"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
        >
          <Text
            textAlign="center"
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            color={"black.700"}
            className="dm-sans"
            fontWeight={700}
          >
            {"Select or add device"}
          </Text>
          <Flex flexDirection={"row"} justifyContent={"space-around"} mt={4}>
            {
              isRegister ? <div>TUTAJ MA BYC MENU DEVICE POFORMATOWANE</div> : <Box mr={{ base: 2, lg: 10 }}>
              <Center>
                <ClickableSVGBox
                  svgUrl={plus}
                  linkTo={"register-device"}
                />
              </Center>
              <Text
                textAlign="center"
                fontSize={{ base: "15px", md: "15px", lg: "20px" }}
                color={"black.700"}
                className="dm-sans"
                fontWeight={650}
              >
                {"Add device"}
              </Text>
            </Box>
            }
          </Flex>
        </Flex>       
      </Flex>
    </Flex>
  );
}


/*<Box ml={{ base: 2, lg: 10 }}>
<Center>
<ClickableSVGBox
  svgUrl={control_panel}
  linkTo={"main"}
/>
</Center>
<Text
textAlign="center"
fontSize={{ base: "15px", md: "15px", lg: "20px" }}
color={"black.700"}
className="dm-sans"
fontWeight={650}
>
{"Control panel"}
</Text>
 </Box>  */