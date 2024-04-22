import { Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types'

export function AsideMenu({isClickedBurger})
{
    return(
        <Flex position={'absolute'} display={{base : 'block' , lg : 'none'}} top={'80px'} width={'100%'} backgroundColor={'red.500'} transform={`${isClickedBurger ? "translateX(0%)" : "translateX(-100%)"}`} transition="transform 1s ease-in-out">
                ASIDE MENU
        </Flex>
    )
}

AsideMenu.propTypes = {
    isClickedBurger : PropTypes.bool.isRequired,
}