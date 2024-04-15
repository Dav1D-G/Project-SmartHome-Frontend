import { Flex  , Box , Text } from '@chakra-ui/react';

export function ForgetPassword()
{
    return(
        <Flex flex={1} justifyContent='space-around'  marginTop={10}>
            {/* START OF FORMULA */}
            <Flex width={{base : '100%' , md : '66%' , lg : '50%'}} p={3} border={'1px'} borderRadius={'20px'} borderColor={'gray.200'} padding={20} flexDirection={'column'} boxShadow={'lg'}  bg={'white'}>  
                <Box>
                    <Text>FORGET PASSWORD</Text>
                </Box>
            </Flex>
        </Flex>
    )
}