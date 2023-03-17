import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicUp from "./songs";
import { watchFetchMusic } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { musicUp: musicUp },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchMusic);

export default store;
