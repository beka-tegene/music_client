import { call, put, takeLatest } from "redux-saga/effects";
import { fetchGet, fetchGetAlbum } from "./fatchData";
import { MusicPut, AlbumPut } from "./songs";

export function* watchFetchMusic() {
  yield takeLatest("music/MusicGet", fetchSongs);
  yield takeLatest("music/AlbumGet", fetchAlbum);
}

function* fetchSongs() {
  const songs = yield call(fetchGet);
  yield put(MusicPut(songs));
}

function* fetchAlbum() {
  const album = yield call(fetchGetAlbum);
  yield put(AlbumPut(album));
}
