import { Flex, Box, Image, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function AsideMenuOption({ image, text, nav }) {
  return (
    <Flex alignItems="center" my={3}>
      <Link to={`/${nav}`} style={{ textDecoration: "none" }}>
        <Flex alignItems="center">
          <Box mr={5}>
            <Image src={image} width="30px" height="30px" />
          </Box>
          <Center ml={"30vw"}>
            <Text>{text}</Text>
          </Center>
        </Flex>
      </Link>
    </Flex>
  );
}

AsideMenuOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
};
