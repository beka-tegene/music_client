import React from "react";
import { Box, Button, Flex, Heading } from "rebass";

const NavBar = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        height={"11vh"}
        backgroundColor={"#eaeaea"}
        color={"black"}
        padding={"0 1rem"}
      >
        <Heading as={"h5"}>Music Up</Heading>
        <Box flexGrow={1} />
        <Button backgroundColor={"#4d4d4d"} mr={2}>
          SignUp
        </Button>
        <Button backgroundColor={"#c7d710"}>Login</Button>
      </Flex>

      <hr />
    </>
  );
};

export default NavBar;
