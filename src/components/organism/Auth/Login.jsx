import { Flex  , Box , Text } from '@chakra-ui/react';
import { user , lock , login } from '../../../assets/Images/index.js';
import {InfoAccount , SubmitButton , InfoForgetPassword , InputForm} from './../../molecule/Auth/index.js'

export function Login()
{
    return(
        <Flex flex={1} justifyContent='space-around'  marginTop={10}>
            {/* START OF FORMULA */}
            <Flex width={{base : '100%' , md : '66%' , lg : '50%'}} p={3} border={'1px'} borderRadius={'20px'} borderColor={'gray.200'} padding={20} flexDirection={'column'} boxShadow={'lg'}  bg={'white'}>  
                <Flex  flexDirection={'column'}>
                    <Box>
                        <Text fontSize={{base : '20px' , md : '25px' , lg : '30px'}} color={'black.700'} className='dm-sans' fontWeight={700}>{"Let's Sign You in"}</Text>
                    </Box>
                    <Box >
                        <Text fontSize={{base : '15px' , md : '17px' , lg : '20px'}} marginTop={3} className='dm-sans' color={'gray.500'}>{"Welcome back, you've been missed!"}</Text>
                    </Box>
                </Flex>
                <Flex flexDirection={'column'}>
                    <InputForm image={user} text='Username or Email'/>
                    <InputForm image={lock} text='Password'/>
                    <InfoForgetPassword />
                    <SubmitButton image={login} text='Login'/>
                    <InfoAccount info="Don't have an account?" authStatus="Sign up"/>
                </Flex>
            </Flex>
        </Flex>
    )
}