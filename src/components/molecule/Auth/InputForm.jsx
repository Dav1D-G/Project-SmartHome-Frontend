import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Image,
  Spacer,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export function InputForm({ image, text }) {
  return (
    <FormControl marginTop={30}>
      <Box display="flex" alignItems="flex-end">
        <Box width={{ base: "10%" }} flexShrink={0}>
          <Image
            src={image}
            marginRight={{ base: 0, md: 5 }}
            width={{ base: 7, md: 8 }}
            height={{ base: 7, md: 8, lg: 10 }}
          />
        </Box>
        <Box width={{ base: "90%" }}>
          <FormLabel>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              color={"gray.500"}
              className="dm-sans"
              fontWeight={400}
            >
              {text}
            </Text>
          </FormLabel>
          <Input
            type="email"
            width={{ base: "100%" }}
            variant="flushed"
            borderColor={"gray.500"}
            focusBorderColor="blue.300"
          />
        </Box>
      </Box>
      <Spacer marginTop={2} />
    </FormControl>
  );
}

InputForm.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
