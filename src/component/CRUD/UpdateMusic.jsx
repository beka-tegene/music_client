import { Input, Label, Select } from "@rebass/forms";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Flex } from "rebass";
import { MusicGet, MusicUpdate } from "../../Store/songs";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const UpdateMusic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const genreInput = useRef();
  const titleInput = useRef();
  const nameInput = useRef();
  const albumInput = useRef();
  const [artworkInput, setArtworkInput] = useState();
  const [musicInput, setMusicInput] = useState();
  const updateInput = useSelector((state) => state.musicUp.InputData);
  const FilterData = updateInput.filter((item) => item._id === id);

  useEffect(() => {
    dispatch(MusicGet());
  }, [dispatch]);

  const onArtworkHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setArtworkInput(base64);
  };

  const onMusicHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setMusicInput(base64);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const genre = genreInput.current.value;
    const title = titleInput.current.value;
    const artist_name = nameInput.current.value;
    const album_name = albumInput.current.value;
    const art_work = artworkInput;
    const audio_music = musicInput;
    dispatch(
      MusicUpdate({
        id,
        genre,
        title,
        artist_name,
        album_name,
        art_work,
        audio_music,
      })
    );
  };

  return (
    <Flex
      as={"div"}
      minHeight={"89vh"}
      maxHeight={"89vh"}
      overflow="scroll"
      alignItems={"center"}
      justifyContent={"center"}
      color={"black"}
    >
      {FilterData.map((item, index) => (
        <Box
          as={"form"}
          py={2}
          width={"60%"}
          onSubmit={submitHandler}
          sx={{
            boxShadow: "1px 1px 9px #0003",
            p: "2rem",
            borderRadius: "10px",
          }}
          key={index}
        >
          <Flex mx={-2} mb={3} flexWrap="wrap" alignItems={"center"}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Genre</Label>
              <Select id={""} ref={genreInput} defaultValue={item.genre}>
                <option disabled selected>
                  {}
                </option>
                <option>POP</option>
                <option>Rock</option>
                <option>R&B</option>
                <option>Alternative</option>
                <option>Classical</option>
                <option>Hip-Hop</option>
              </Select>
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Title</Label>
              <Input
                type={"text"}
                id={""}
                ref={titleInput}
                defaultValue={item.title}
              ></Input>
            </Box>
          </Flex>
          <Flex mx={-2} mb={3} flexWrap="wrap">
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Artist Name</Label>
              <Input
                type={"text"}
                id={""}
                ref={nameInput}
                defaultValue={item.artist_name}
              ></Input>
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Album Name</Label>
              <Input
                type={"text"}
                id={""}
                ref={albumInput}
                defaultValue={item.album_name}
              ></Input>
            </Box>
          </Flex>
          <Flex mx={-2} mb={3} flexWrap="wrap">
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">ArtWork file</Label>
              <Input
                type={"file"}
                id={""}
                accept=".jpeg, .png, .jpg , .svg"
                onChange={(e) => onArtworkHandler(e)}
                // defaultValue={item.art_work}
              ></Input>
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="">Music file</Label>
              <Input
                type={"file"}
                id={""}
                accept=".mp3"
                onChange={(e) => onMusicHandler(e)}
                // defaultValue={item.audio_music}
              ></Input>
            </Box>
          </Flex>
          <Flex mx={-2} mb={3} flexWrap="wrap">
            <Box width={1 / 2} px={2} my={2}>
              <Button
                type="reset"
                width={"100%"}
                backgroundColor={"#ef345d"}
                sx={{ cursor: "pointer" }}
              >
                cancel
              </Button>
            </Box>
            <Box width={1 / 2} px={2} my={2}>
              <Button
                type="submit"
                width={"100%"}
                backgroundColor={"#cccc4c"}
                sx={{ cursor: "pointer" }}
              >
                submit
              </Button>
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default UpdateMusic;
