import { Flex , Text } from "@chakra-ui/react";
import PropTypes from 'prop-types'
export function ElementState({isOpen , plusState , minusState , device})
{
    return(
        <Flex alignItems={'center'} justifyContent={'center'} margin={5}>
            <Flex bg={'red.200'} paddingLeft={10} paddingRight={10} paddingTop={2} paddingBottom={2} borderRadius={10} justifyContent={'space-around'} width={{base : '80%', md : '60%' , lg : '50%'}}>
                <Text>{device} : <span style={{color : `${isOpen ? 'green' : 'red'}`}} >{`${isOpen ? plusState : minusState}`}</span></Text>
            </Flex>
        </Flex>
    )
}


ElementState.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    plusState : PropTypes.string.isRequired,
    minusState : PropTypes.string.isRequired,
    device : PropTypes.string.isRequired
};
  