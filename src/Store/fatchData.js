import axios from "axios";

export const fetchInputData = async (Data) => {
  const createMusic = fetch("http://localhost:8080/create-music", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      genre: Data[0].genre,
      title: Data[0].title,
      artist_name: Data[0].artist_name,
      album_name: Data[0].album_name,
      art_work: Data[0].art_work,
      audio_music: Data[0].audio_music,
    }),
  });

  if (createMusic) {
    window.location.href = "/";
  }
};

export const fetchGet = async () => {
  const getMusic = await axios.get("http://localhost:8080/song-list");
  return getMusic.data;
};

export const fetchGetAlbum = async () => {
  const data = await axios.get("http://localhost:8080/album-list");
  return data.data.data;
};

export const fetchUpdate = async (Data) => {
  console.log(Data[0]);
  const updateData = fetch("http://localhost:8080/update", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      id: Data[0].id,
      genre: Data[0].genre,
      title: Data[0].title,
      artist_name: Data[0].artist_name,
      album_name: Data[0].album_name,
      art_work: Data[0].art_work,
      audio_music: Data[0].audio_music,
    }),
  });
  if (updateData) {
    window.location.href = "/";
  }
};
