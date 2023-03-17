import React, { useEffect, useState } from "react";
import PlayList from "../component/CRUD/PlayList";
import Home from "../component/Home/Home";
import Play from "../component/Home/Play";
import { useDispatch, useSelector } from "react-redux";
import { MusicGet } from "../Store/songs";

const AllList = () => {
  const getData = useSelector((state) => state.musicUp.InputData);
  const [useData, setUseData] = useState("");
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MusicGet());
  }, [dispatch]);

  const modelShowDetail = (item) => {
    setUseData(item);
    setDisplay(true);
  };
  const modelHandlerHidden = () => {
    setDisplay(false);
  };

  return (
    <Home>
      <PlayList
        onPlayMusic={(item) => modelShowDetail(item)}
        DUMMY_MUSIC={getData}
      />
      {display && (
        <Play useData={useData} modelHandlerHidden={modelHandlerHidden} />
      )}
    </Home>
  );
};

export default AllList;
