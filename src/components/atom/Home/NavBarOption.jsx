import { Flex, Box , Image , Center , Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export function NavBarOption({image , text , nav})
{
    return(
        <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
            <Link style={{display : 'flex',justifyContent : 'center' , alignItems : 'center'}} to={`/${nav}`}>
                <Box me={'5'}>
                    <Image src={`${image}`} width={'30px'} height={'30px'}/>
                </Box>
                <Box>
                    <Center><Text>{text}</Text></Center>
                </Box>
            </Link>
        </Flex>
    )
}


NavBarOption.propTypes = {
    image : PropTypes.string.isRequired,
    text :  PropTypes.string.isRequired,
    nav : PropTypes.string.isRequired
}