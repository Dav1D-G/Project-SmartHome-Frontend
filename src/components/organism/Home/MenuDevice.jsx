import { Flex, Box, Text, SimpleGrid, Center } from "@chakra-ui/react";
import {
  Camera,
  Gate,
  Humidity,
  Light,
  Lock,
  Temperature,
} from "../../../assets/Images/index.js";

import { ClickableSVGBox } from "../../molecule/Home/index.js";

export function MenuDevice() {
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
        <Flex>
          <Flex flexDirection={"column"} alignItems={"center"} mt={4}>
            <Text
              textAlign="center"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              color={"black.700"}
              className="dm-sans"
              fontWeight={700}
            >
              {"Select your sensor"}
            </Text>
            <Flex />
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Center>
                <Text
                  textAlign="center"
                  fontSize={{ base: "15px", md: "17px", lg: "20px" }}
                  marginTop={3}
                  className="dm-sans"
                  color={"gray.500"}
                >
                  {
                    "You can choose any sensor you want and, you will be redirected to sensor menu"
                  }
                </Text>
              </Center>
            </Flex>
            <SimpleGrid columns={[2, 3]} spacing={4} p={4}>
              {[
                { svgUrl: Temperature },
                { svgUrl: Humidity },
                { svgUrl: Lock },
                { svgUrl: Gate },
                { svgUrl: Light },
                { svgUrl: Camera },
              ].map((item, index) => (
                <ClickableSVGBox key={index} svgUrl={item.svgUrl} />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
