import React, { useEffect, useRef, useState } from "react";
import { Box, Card, Flex, Heading, Image, Text } from "rebass";
import { Slider } from "@rebass/forms";
import FastRewindOutlinedIcon from "@mui/icons-material/FastRewindOutlined";
import FastForwardOutlinedIcon from "@mui/icons-material/FastForwardOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
const Play = (props) => {
  // default_data = props.useData;
  const [currentMusic] = useState(props.useData.audio_music);
  const audioPlay = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(100);
  const [elapsed, setElapsed] = useState();
  const [duration, setDuration] = useState();

  // setListData(props.useData);

  useEffect(() => {
    if (audioPlay) {
      audioPlay.current.volume = volume / 100;
    }
    if (!isPlay) {
      setInterval(() => {
        const _duration = Math.floor(audioPlay?.current?.duration);
        const _elapsed = Math.floor(audioPlay?.current?.currentTime);
        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlay]);

  function formatTime(time) {
    const min =
      Math.floor(time / 60) < 10
        ? `0${Math.floor(time / 60)}`
        : `${Math.floor(time / 60)}`;
    const sec =
      Math.floor(time % 60) < 10
        ? `0${Math.floor(time % 60)}`
        : `${Math.floor(time % 60)}`;
    return `${min}:${sec}`;
  }

  const fastForward = () => {
    audioPlay.current.currentTime += 10;
  };
  const fastBackward = () => {
    audioPlay.current.currentTime -= 10;
  };

  const togglePlay = () => {
    if (!isPlay) {
      audioPlay.current.play();
    } else {
      audioPlay.current.pause();
    }
    setIsPlay((prev) => !prev);
  };

  return (
    <>
      <Box
        as={"div"}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          zIndex: 3,
          backgroundColor: "#00000099",
        }}
        onClick={props.modelHandlerHidden}
      />
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        sx={{
          position: "fixed",
          bottom: 0,
          height: "15vh",
          width: "calc(100% - 254px) ",
          backgroundColor: "#4d4d4d",
          padding: "0 .5rem",
          zIndex: 4,
        }}
      >
        <audio src={currentMusic} ref={audioPlay} />
        <Flex
          height={"14vh"}
          width={270}
          alignItems={"center"}
          justifyContent={"flex-start"}
          sx={{ gap: ".5rem" }}
        >
          <Card width={100}>
            <Image src={props.useData.art_work} width={"100%"} />
          </Card>
          <Card>
            <Heading as={"p"} fontSize={18}>
              {props.useData.title}
            </Heading>
            <Text fontSize={11}>{props.useData.artist_name}</Text>
          </Card>
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"} width="40%">
          <Flex alignItems={"center"}>
            <FastRewindOutlinedIcon
              onClick={fastBackward}
              sx={{
                color: "silver",
                "&:hover": {
                  color: "black",
                },
              }}
            />
            {!isPlay ? (
              <PlayCircleFilledWhiteOutlinedIcon
                fontSize="large"
                onClick={togglePlay}
                sx={{
                  color: "silver",
                  "&:hover": {
                    color: "black",
                  },
                }}
              />
            ) : (
              <PauseCircleOutlineOutlinedIcon
                fontSize="large"
                onClick={togglePlay}
                sx={{
                  color: "silver",
                  "&:hover": {
                    color: "black",
                  },
                }}
              />
            )}
            <FastForwardOutlinedIcon
              onClick={fastForward}
              sx={{
                color: "silver",
                "&:hover": {
                  color: "black",
                },
              }}
            />
          </Flex>
          <Flex alignItems={"center"} width="95%">
            <Text mr={3}>{formatTime(elapsed)}</Text>
            <Slider
              value={elapsed}
              max={duration}
              onChange={(e, v) => setElapsed(v)}
            />
            <Text ml={1}>{formatTime(duration - elapsed)}</Text>
          </Flex>
        </Flex>
        <Flex alignContent={"center"}>
          <VolumeDownOutlinedIcon />
          <Slider
            color={"silver"}
            height={2}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            disabled
            min={0}
            value={volume}
            max={100}
            onChange={(e, v) => setVolume(v)}
          />
        </Flex>
        {/*  */}
      </Flex>
    </>
  );
};

export default Play;
