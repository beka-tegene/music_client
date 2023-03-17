import { createSlice } from "@reduxjs/toolkit";
import { fetchInputData, fetchUpdate } from "./fatchData";

const initialState = {
  InputData: [],
  UpdateData: [],
};

const MusicUp = createSlice({
  name: "music",
  initialState: initialState,

  reducers: {
    MusicInput(state, actions) {
      const newData = actions.payload;
      state.InputData.push({
        genre: newData.genre,
        title: newData.title,
        artist_name: newData.artist_name,
        album_name: newData.album_name,
        art_work: newData.art_work,
        audio_music: newData.audio_music,
      });

      fetchInputData(state.InputData);
    },
    MusicUpdate(state, actions) {
      const putData = actions.payload;
      console.log(putData);
      state.UpdateData.push({
        id: putData.id,
        genre: putData.genre,
        title: putData.title,
        artist_name: putData.artist_name,
        album_name: putData.album_name,
        art_work: putData.art_work,
        audio_music: putData.audio_music,
      });

      fetchUpdate(state.UpdateData);
    },
    MusicGet(state) {},
    MusicPut(state, action) {
      state.InputData = action.payload;
    },
    AlbumGet(state) {},
    AlbumPut(state, action) {
      state.InputData = action.payload;
    },
  },
});

export default MusicUp.reducer;
export const {
  MusicInput,
  MusicUpdate,
  MusicGet,
  MusicPut,
  AlbumPut,
  AlbumGet,
} = MusicUp.actions;
