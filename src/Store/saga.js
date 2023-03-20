import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchDelete,
  fetchGet,
  fetchGetAlbum,
  fetchInputData,
  fetchUpdate,
} from "./fatchData";
import { MusicPut, AlbumPut, MusicGet } from "./songs";

export function* watchFetchMusic() {
  yield takeLatest("music/MusicGet", fetchSongs);
  yield takeLatest("music/AlbumGet", fetchAlbum);
  yield takeLatest("music/MusicUpdate", updateSongs);
  yield takeLatest("music/MusicDelete", deleteSongs);
  yield takeLatest("music/MusicInput", InputData);
}

function* InputData(action) {
  yield call(fetchInputData, action.payload.data);
  yield MusicGet();
}
function* fetchSongs() {
  const songs = yield call(fetchGet);
  yield put(MusicPut(songs));
}

function* fetchAlbum() {
  const album = yield call(fetchGetAlbum);
  yield put(AlbumPut(album));
}
function* updateSongs(action) {
  yield call(fetchUpdate, action.payload.data);
  yield MusicGet();
}
function* deleteSongs(action) {
  yield call(fetchDelete, action.payload);
  yield MusicGet();
}
