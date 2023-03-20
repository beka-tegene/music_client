import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Card, Image, Text } from "rebass";
import { AlbumGet } from "../../Store/songs";
const AlbumList = () => {
  const dispatch = useDispatch();

  const AlbumSongs = useSelector((state) => state.musicUp.AlbumData);

  useEffect(() => {
    dispatch(AlbumGet());
  }, [dispatch]);
  return (
    <Box>
      <Box
        as={"div"}
        p={2}
        px={5}
        sx={{ fontSize: "20px", fontWeight: "bold", color: "#222c65" }}
      >
        {AlbumSongs.length} Album
      </Box>
      <Box
        as={'div'}
        sx={{ gap: "3rem" , display:"flex" ,flexWrap: 'wrap'}}
        pl={4}
      >
        {!AlbumSongs && <Box as={"h3"}>No Record Data </Box>}
        {AlbumSongs &&
          AlbumSongs?.map((item, index) => (
            <Link as={"a"} p={3} key={index} to={`/album/${item.person.album}`}>
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
            </Link>
          ))}
      </Box>
    </Box>
  );
};

export default AlbumList;
