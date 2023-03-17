import { Route, Routes } from "react-router-dom";
import Album from "./page/Album";
import AllList from "./page/AllList";
import Import from "./page/Import";
import SinglePersonAlbum from "./page/SinglePersonAlbum";
import Update from "./page/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllList />} />
      <Route path="/album" element={<Album />} />
      <Route path="/create" element={<Import />} />
      <Route path="/:album" element={<SinglePersonAlbum />} />
      <Route path="/edit/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
