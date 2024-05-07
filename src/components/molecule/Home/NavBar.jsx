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
      bgGradient="linear-gradient(90deg, rgba(108,187,231,1) 41%, rgba(2,78,181,1) 100%)"
      height={"50px"}
      justifyContent={"space-around"}
      display={{ base: "none", lg: "flex" }}
    >
      <NavBarOption image={dashboard} text="Dashboard" nav="" />
      <NavBarOption image={user} text="Profile" nav="profile" />
      <NavBarOption image={settings} text="Settings" nav="settings" />
      <NavBarOption image={log_out_black} text="Log out" nav="logout" />
    </Flex>
  );
}
