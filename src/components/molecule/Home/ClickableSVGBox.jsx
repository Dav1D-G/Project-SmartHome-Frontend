import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import PropTypes from 'prop-types'

export function ClickableSVGBox({ svgUrl, linkTo, ...rest }) {
=======

export function ClickableSVGBox({ onClick, svgUrl, linkTo, ...rest }) {
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
  const imageWidth = useBreakpointValue({
    base: "150px",
  });
  const imageHeight = useBreakpointValue({
    base: "150px",
  });

<<<<<<< HEAD
  return (
    <Link to={`/homepage/${linkTo}`}>
      <Box
=======
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    // Dodaj dodatkową logikę, jeśli jest wymagane działanie po kliknięciu
  };

  return (
    <Link to={linkTo}>
      <Box
        onClick={handleClick}
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
        w={imageWidth} // ustaw szerokość według potrzeb
        h={imageHeight} // ustaw wysokość według potrzeb
        backgroundImage={`url(${svgUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        cursor="pointer"
        {...rest}
      />
    </Link>
  );
}
<<<<<<< HEAD


ClickableSVGBox.propTypes = {
  svgUrl : PropTypes.string.isRequired,
  linkTo : PropTypes.string.isRequired
}
=======
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
