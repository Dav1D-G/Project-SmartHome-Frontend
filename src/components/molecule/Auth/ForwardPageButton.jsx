import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { arrow_right } from "./../../../assets/Images/index";
import PropTypes from "prop-types";

export function ForwardPageButton({ url }) {
  return (
    <Link
      to={url}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <Button
        colorScheme="whatsapp"
        width={{ base: "80%", md: "60%", lg: "50%" }}
        height={{ base: "60px", md: "50px", lg: "50px" }}
        fontSize={{ base: "xl" }}
        borderRadius="10px"
        boxShadow="lg"
      >
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Text flexGrow="1">Go to home page</Text>
          <Image src={arrow_right} boxSize={{ base: "28px", lg: "32px" }} />
        </Flex>
      </Button>
    </Link>
  );
}

ForwardPageButton.propTypes = {
  url: PropTypes.string.isRequired,
};
