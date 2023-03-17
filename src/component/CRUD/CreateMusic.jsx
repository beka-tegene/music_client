import { Input, Label, Select } from "@rebass/forms";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Flex } from "rebass";
import { MusicInput } from "../../Store/songs";

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

const CreateMusic = () => {
  const dispatch = useDispatch();

  const genreInput = useRef();
  const titleInput = useRef();
  const nameInput = useRef();
  const albumInput = useRef();
  const [artworkInput, setArtworkInput] = useState();
  const [musicInput, setMusicInput] = useState();

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
      MusicInput({
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
      minHeight={"89vh"}
      maxHeight={"89vh"}
      overflow="scroll"
      alignItems={"center"}
      justifyContent={"center"}
      color={"black"}
    >
      <Box
        as={"form"}
        py={2}
        width={"60%"}
        onSubmit={submitHandler}
        sx={{ boxShadow: "1px 1px 9px #0003", p: "2rem", borderRadius: "10px" }}
      >
        <Flex mx={-2} mb={3} flexWrap="wrap" alignItems={"center"}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Genre</Label>
            <Select id={""} ref={genreInput}>
              <option disabled selected></option>
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
            <Input type={"text"} id={""} ref={titleInput}></Input>
          </Box>
        </Flex>
        <Flex mx={-2} mb={3} flexWrap="wrap">
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Artist Name</Label>
            <Input type={"text"} id={""} ref={nameInput}></Input>
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Album Name</Label>
            <Input type={"text"} id={""} ref={albumInput}></Input>
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
            ></Input>
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="">Music file</Label>
            <Input
              type={"file"}
              id={""}
              accept=".mp3"
              onChange={(e) => onMusicHandler(e)}
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
    </Flex>
  );
};

export default CreateMusic;
