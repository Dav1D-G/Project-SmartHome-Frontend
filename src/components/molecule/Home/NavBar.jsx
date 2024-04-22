import { Flex } from "@chakra-ui/react";
import {dashboard , log_out, settings , user} from './../../../assets/Images/index'
import {NavBarOption} from './../../atom/Home/index'
export function NavBar()
{
    return(
        <Flex backgroundColor={`#B0AFE5`} height={'80px'} justifyContent={'space-around'} display={{base : 'none' , lg : 'flex'}}>
            <NavBarOption image={dashboard} text="Dashboard" nav=""/>
            <NavBarOption image={user} text="Profile" nav="profile"/>
            <NavBarOption image={settings} text="Settings" nav="settings"/>
            <NavBarOption image={log_out} text="Log out" nav="logout"/>
        </Flex>
    )
}