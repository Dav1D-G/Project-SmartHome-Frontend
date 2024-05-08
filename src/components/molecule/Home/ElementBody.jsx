import { Flex , Text , Image , Box} from "@chakra-ui/react";
import PropTypes from 'prop-types'
export function ElementBody({isOpen , setIsOpen , plusImage , minusImage , text})
{
    return(
        <Flex alignItems={'center'} justifyContent={'center'} flexDirection='column' margin={5} onClick={()=>setIsOpen(!isOpen)}>
            <Box bg={'red.300'} padding={5} borderRadius={10}>
                <Image src={`${isOpen ? plusImage : minusImage}`} width={100} height={100}/>
            </Box>
            <Text marginTop={5}>{text}</Text>
        </Flex>
    )
}


ElementBody.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    setIsOpen : PropTypes.func.isRequired,
    plusImage : PropTypes.string.isRequired,
    minusImage : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
};
  