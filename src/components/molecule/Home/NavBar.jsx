import { Flex } from "@chakra-ui/react";
import {
  dashboard,
  log_out_black,
  settings,
  user,
} from "./../../../assets/Images/index";
import { NavBarOption } from "./../../atom/Home/index";
export function NavBar() {
  return (
    <Flex
      bg={'white'}
      height={"50px"}
      justifyContent={"space-around"}
      display={{ base: "none", lg: "flex" }}
    >
        <NavBarOption image={dashboard} text="Dashboard" nav="homepage" />
        <NavBarOption image={user} text="Profile" nav="profile" />
        <NavBarOption image={settings} text="Settings" nav="settings" />
        <NavBarOption image={log_out_black} text="Log out" nav="logout"/>
    </Flex>
  );
}
