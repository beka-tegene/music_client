import React from "react";
import { Box, Card, Flex, Image, Text } from "rebass";
import { NavLink } from "react-router-dom";
import brandLogo from "../../img/Frame 4095.png";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const DUMMY_MENU = [
  {
    name: "PlayList",
    path: "/",
    Icons: <PlaylistAddCheckOutlinedIcon />,
  },
  {
    name: "Album",
    path: "/album",
    Icons: <AlbumOutlinedIcon />,
  },
  {
    name: "Import Music",
    path: "/create",
    Icons: <AddCircleOutlineOutlinedIcon />,
  },
];

const SideBar = () => {
  return (
    <Box sx={{ position: "fixed" }}>
      <Box width={254} height="90vh" backgroundColor={"#eaeaea"}>
        <Flex
          sx={{
            height: "11vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "-1px 2px 4px #fff3",
            padding: "1rem",
            color: "black",
          }}
        >
          <Image src={brandLogo} sx={{ width: "40%" }} />
        </Flex>
        <hr />
        <Box sx={{ mt: "4rem" }}>
          {DUMMY_MENU.map((item, index) => (
            <Card
              m={3}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#4c4c4c",
                },
              }}
              key={index}
            >
              <NavLink
              to={item.path}
              >
                <Flex
                  sx={{
                    alignItems: "center",
                    gap: "1rem",
                    padding: 2,
                  }}
                >
                  {item.Icons}
                  <Text>{item.name}</Text>
                </Flex>
              </NavLink>
            </Card>
          ))}
        </Box>
      </Box>
      <Flex
        width={254}
        height="10vh"
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor="#dcdcdc"
      >
        <Text fontSize={"13px"} color={"#0005"}>
          &copy;Copyright All Reserved
        </Text>
      </Flex>
    </Box>
  );
};

export default SideBar;
