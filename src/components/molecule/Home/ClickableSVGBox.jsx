import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ClickableSVGBox({ onClick, svgUrl, linkTo, ...rest }) {
  const imageWidth = useBreakpointValue({
    base: "150px",
  });
  const imageHeight = useBreakpointValue({
    base: "150px",
  });

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
