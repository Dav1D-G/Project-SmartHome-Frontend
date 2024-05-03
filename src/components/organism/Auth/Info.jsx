import { Flex , Text } from "@chakra-ui/react";
import { CircleInfo , ForwardPageButton } from "../../molecule/Auth/index";
import { useRef } from "react";
import PropTypes from 'prop-types'
import { useSearchParams } from "react-router-dom";
export function Info({page , url})
{
    const [ searchParams ]  =  useSearchParams();
    const email = searchParams.get('email');
    const verificationCode = useRef('Successfully has been send verification code to given email');
    const activationLink = useRef("Successfully has been send activation link in order to reset password to given email");
    const resetPassword = useRef("Successfully has been changed a password");
    const verifiedUser = useRef("Successfully has been verified a user");
    const registerDevice = useRef("Successfully has been registered a control panel");

    return(
        <Flex flex={1} justifyContent="space-around" marginTop={10} borderRadius={50}>
            <Flex bg={'white'} width={{base : '100%', sm : '95%',  md : '70%', lg : "50%"}} flexDirection={'column'} borderRadius={50}>
                <Flex flexDirection={'column'} padding={5}>
                    <Text textAlign={'center'}>
                        {page == 'resetPassword' && resetPassword.current}
                        {page == 'registerUser' && verificationCode.current}
                        {page == 'forgetPassword' && activationLink.current}
                        {page == 'verifiedUser' && verifiedUser.current}
                        {page == 'registerDevice' && registerDevice.current}
                    </Text>
                    <Text textAlign={'center'} marginTop={20}>{email}</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <CircleInfo />
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} marginBottom={10} marginTop={10}>
                    <ForwardPageButton url={url}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

Info.propTypes = {
    page : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}