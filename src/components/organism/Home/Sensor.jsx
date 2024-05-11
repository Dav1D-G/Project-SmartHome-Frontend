import { Flex } from "@chakra-ui/react";
import { Temperature, Humidity } from "./../../../assets/Images/index.js";
import { ForwardPageButton } from "./../../molecule/Auth/ForwardPageButton.jsx";
import { ElementHeader, ElementSensor } from "../../molecule/Home/index.js";

export function Sensor() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Flex
        marginTop={"5%"}
        bg={"white"}
        width={{ base: "90%", md: "70%", lg: "50%" }}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
        borderRadius={20}
      >
        {/* START OF SENSOR BODY */}
        <ElementHeader text="Temperature & Humidity" />
        <Flex alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <Flex
            flex="12"
            bg={"#E09FFF"}
            margin={5}
            borderRadius="10"
            flexDirection="column"
          >
            <ElementSensor image={Temperature} value="X" />
            <ElementSensor image={Humidity} value="Y" />
            <Flex marginTop={10} marginBottom={5}>
              <ForwardPageButton url="/homepage" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
