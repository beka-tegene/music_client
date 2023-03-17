import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OneAlbum from "../component/CRUD/OneAlbum";
import Home from "../component/Home/Home";
import Play from "../component/Home/Play";
import { MusicGet } from "../Store/songs";

const SinglePersonAlbum = () => {
  const { album } = useParams();
  const getData = useSelector((state) => state.musicUp.InputData);

  const [useData, setUseData] = useState("");
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MusicGet());
  }, [dispatch]);

  const SongFilter = getData.filter((item) => item.album_name === album);

  const modelShowDetail = (item) => {
    setUseData(item);
    setDisplay(true);
  };
  const modelHandlerHidden = () => {
    setDisplay(false);
  };
  return (
    <Home>
      <OneAlbum
        onPlayMusic={(item) => modelShowDetail(item)}
        DUMMY_MUSIC={SongFilter}
      />
      {display && (
        <Play useData={useData} modelHandlerHidden={modelHandlerHidden} />
      )}
    </Home>
  );
};

export default SinglePersonAlbum;
