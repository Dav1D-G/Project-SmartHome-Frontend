import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export function ClickableSVGBox({ svgUrl, linkTo, ...rest }) {
  const imageWidth = useBreakpointValue({
    base: "150px",
  });
  const imageHeight = useBreakpointValue({
    base: "150px",
  });

  return (
    <Link to={`/homepage/${linkTo}`}>
      <Box
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


ClickableSVGBox.propTypes = {
  svgUrl : PropTypes.string.isRequired,
  linkTo : PropTypes.string.isRequired
}