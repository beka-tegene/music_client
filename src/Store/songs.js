import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputData: [],
  UpdateData: [],
  deleteData: [],
  AlbumData: [],
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

    },
    MusicUpdate(state, actions) {
      const putData = actions.payload;
      state.UpdateData.push({
        id: putData.id,
        genre: putData.genre,
        title: putData.title,
        artist_name: putData.artist_name,
        album_name: putData.album_name,
        art_work: putData.art_work,
        audio_music: putData.audio_music,
      });
    },
    MusicDelete(state, actions) {
      const id = actions.payload;
      state.deleteData.push({
        id: id.id,
      });
    },
    MusicGet(state) {},
    MusicPut(state, action) {
      state.InputData = action.payload;
    },
    AlbumGet(state) {},
    AlbumPut(state, action) {
      state.AlbumData = action.payload;
    },
  },
});

export default MusicUp.reducer;
export const {
  MusicInput,
  MusicUpdate,
  MusicDelete,
  MusicGet,
  MusicPut,
  AlbumPut,
  AlbumGet,
} = MusicUp.actions;
