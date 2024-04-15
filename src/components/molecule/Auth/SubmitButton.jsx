import { Flex  , Box , Text ,  Image,  Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'

export function SubmitButton({image , text})
{
    return(
        <Flex justifyContent={'center'} marginTop={100}>
            <Button width={{base : "80%" , md :'60%', lg : '50%'}} borderRadius={'20px'} bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))" _hover={{ bgGradient: "linear(to-r, rgba(138,73,247,1), rgba(94,175,250,1))"}}>
                <Flex w={'100%'} >
                    <Box display={'flex'} justifyContent={'end'} alignItems={'center'} flex={5} >
                        <Text fontSize={{base : '18px' , md : '20px' }}  color={'white'}>{text}</Text> 
                    </Box>
                    <Box display={'flex'} justifyContent={'end'} flex={4} >
                        <Image  src={image} width={{base: 7 , md : 8 }} height={{base: 7 , md : 8 }}></Image>
                    </Box>
                </Flex>
            </Button>
        </Flex>
    )
}

SubmitButton.propTypes = {
    image : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
}