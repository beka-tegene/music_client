import React from "react";
import { Box, Flex } from "rebass";
import NavBar from "./NavBar";
// import Play from "./Play";
import SideBar from "./SideBar";

const Home = (props) => {
  return (
    <Flex width={"100%"}>
      <SideBar />
      <Box width=" calc(100% - 254px)" marginLeft={254}>
        <NavBar />
        {props.children}
      </Box>
      {/* <Play useData={props.useData} /> */}

    </Flex>
  );
};

export default Home;
