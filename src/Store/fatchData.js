import axios from "axios";

export const fetchInputData = async (Data) => {
  const createMusic = fetch("http://localhost:5000/create-music", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      genre: Data.genre,
      title: Data.title,
      artist_name: Data.artist_name,
      album_name: Data.album_name,
      art_work: Data.art_work,
      audio_music: Data.audio_music,
    }),
  });

  if (createMusic) {
    window.location.href = "/";
  }
};

export const fetchGet = async () => {
  const getMusic = await axios.get("http://localhost:5000/song-list");
  return getMusic.data;
};

export const fetchGetAlbum = async () => {
  const data = await axios.get("http://localhost:5000/album-list");
  return data.data.data;
};

export const fetchUpdate = async (Data) => {

  console.log(Data);
  const updateData = fetch("http://localhost:5000/update", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      id: Data.id,
      genre: Data.genre,
      title: Data.title,
      artist_name: Data.artist_name,
      album_name: Data.album_name,
      art_work: Data.art_work,
      audio_music: Data.audio_music,
    }),
  });
  if (updateData) {
    window.location.href = "/";
  }
};

export const fetchDelete = async (id) => {
  const deleteData = fetch("http://localhost:5000/song-delete", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ id }),
  });
  if (deleteData) {
    window.location.reload();
  }
};
//https://beka-songs.onrender.com