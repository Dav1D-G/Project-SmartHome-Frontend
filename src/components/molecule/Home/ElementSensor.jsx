import { Flex, Text,  Image} from "@chakra-ui/react";
import PropTypes from 'prop-types'

export function ElementSensor({image , value})
{
    return(
        <Flex alignItems={'center'} justifyContent={'space-around'} marginTop={5}>
            <Flex  flex={{base : 3 , lg : 5}} alignItems={'center'} justifyContent={'center'}>
                <Image src={image} width={{base : 120  , lg : 150}} height={{base : 120 , lg : 150}}/>
            </Flex>
            <Flex  flex='3' alignItems={'center'} justifyContent={'center'} marginEnd='5' border='1px' borderColor='gray.200' borderRadius='10' height={'50px'}>
                <Text >{value} %</Text>
            </Flex>
        </Flex>
    )
}

ElementSensor.propTypes = {
    image : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired
};