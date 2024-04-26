import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  dashboard,
  log_out,
  settings,
  user,
} from "./../../../assets/Images/index";
import { AsideMenuOption } from "./../../atom/Home/index";

export function AsideMenu({ isClickedBurger }) {
  return (
    <Flex
      position={"absolute"}
      display={{ base: "block", lg: "none" }}
      height={"100%"}
      top={"80px"}
      width={"100%"}
      backgroundColor={"#B0AFE5"}
      transform={`${isClickedBurger ? "translateX(0%)" : "translateX(-100%)"}`}
      transition="transform 1s ease-in-out"
    >
      {/* Dodanie opcji z NavBar do AsideMenu */}
      <AsideMenuOption image={dashboard} text="Dashboard" nav="" />
      <AsideMenuOption image={user} text="Profile" nav="profile" />
      <AsideMenuOption image={settings} text="Settings" nav="settings" />
      <AsideMenuOption image={log_out} text="Log out" nav="logout" />
    </Flex>
  );
}

AsideMenu.propTypes = {
  isClickedBurger: PropTypes.bool.isRequired,
};
