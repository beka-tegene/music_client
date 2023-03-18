import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Flex, Image, Text } from "rebass";
import { AlbumGet } from "../../Store/songs";
const AlbumList = () => {
  const dispatch = useDispatch();

  const AlbumSongs = useSelector((state) => state.musicUp.AlbumData);

  useEffect(() => {
    dispatch(AlbumGet());
  }, [dispatch]);
  return (
    <>
      <Box
        as={"div"}
        p={2}
        px={5}
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#222c65" }}
      >
        {AlbumSongs.length} Album
      </Box>
      <Flex
        minHeight={"89vh"}
        maxHeight={"89vh"}
        overflow="scroll"
        flexWrap="wrap"
        sx={{ gap: "1rem" }}
        pl={4}
      >
        {!AlbumSongs && <Box as={"h3"}>No Record Data </Box>}
        {AlbumSongs &&
          AlbumSongs?.map((item, index) => (
            <Flex
              as={"a"}
              flexDirection={"column"}
              p={3}
              key={index}
              href={`/${item.person.album}`}
              sx={{
                minHeight: "40vh",
                maxHeight: "40vh",
                textDecoration: "none",
              }}
            >
              <Card width={200}>
                <Image
                  src={item.person.artwork}
                  sx={{ borderRadius: "15px" }}
                />
              </Card>

              <Card color={"white"} sx={{ cursor: "pointer" }}>
                <Text fontSize={16} color={"black"}>
                  {item.person.album}
                </Text>
                <Text fontSize={12} color={"black"}>
                  {item.person.artist}
                </Text>
              </Card>
            </Flex>
          ))}
      </Flex>
    </>
  );
};

export default AlbumList;
