import { Container } from '@chakra-ui/react'
import { Flex, Box  } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
export function Auth()
{
    return(
        <Container maxW={"none"} m={'unset'} p={'unset'} height={1000}>
            <Flex height={'100%'} justifyContent={'center'}>
                <Box flex={1} display={'flex'} justifyContent={'center'} alignItems={'start'} height={'100%'}  bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))">
                    <Outlet />
                </Box>
            </Flex>
        </Container>
    )
}