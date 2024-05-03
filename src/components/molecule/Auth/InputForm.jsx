import {
  Box,
  Text,
  FormControl,
  FormLabel,
<<<<<<< HEAD
  Image,
  Spacer,
  Tooltip
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export function InputForm({ image, text , children , isError , errorMessage }) {
=======
  Input,
  Image,
  Spacer,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export function InputForm({ image, text }) {
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
  return (
    <FormControl marginTop={30}>
      <Box display="flex" alignItems="flex-end">
        <Box width={{ base: "10%" }} flexShrink={0}>
<<<<<<< HEAD
            <Image
              src={image}
              marginRight={{ base: 0, md: 5 }}
              width={{ base: 7, md: 8 }}
              height={{ base: 7, md: 8, lg: 10 }}
            />
=======
          <Image
            src={image}
            marginRight={{ base: 0, md: 5 }}
            width={{ base: 7, md: 8 }}
            height={{ base: 7, md: 8, lg: 10 }}
          />
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
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
<<<<<<< HEAD
          <Tooltip isOpen={isError ? true : false} label={errorMessage} placement='bottom-start'  bg='red.600' borderRadius={10}>
            {children}
          </Tooltip>
=======
          <Input
            type="email"
            width={{ base: "100%" }}
            variant="flushed"
            borderColor={"gray.500"}
            focusBorderColor="blue.300"
          />
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
        </Box>
      </Box>
      <Spacer marginTop={2} />
    </FormControl>
  );
}

InputForm.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
<<<<<<< HEAD
  children : PropTypes.object.isRequired,
  isError : PropTypes.bool,
  errorMessage : PropTypes.string
=======
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
};
