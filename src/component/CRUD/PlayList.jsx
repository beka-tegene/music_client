import React from "react";
import DataTable from "react-data-table-component";
import { Box } from "rebass";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const deleteHandler = (id) => {
  fetch("http://localhost:8080/song-delete", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ id }),
  });
  window.location.reload();
};

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "name",
    selector: (row) => row.artist_name,
    sortable: true,
  },
  {
    name: "Album",
    selector: (row) => row.album_name,
    sortable: true,
  },
  {
    name: "Genre",
    selector: (row) => row.genre,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => (
      <Box>
        <Box
          as={"a"}
          mx={2}
          sx={{
            color: "#3874cf",
            "&:hover": { color: "#3874cf63" },
          }}
          href={`/edit/${row._id}`}
        >
          <EditOutlinedIcon />
        </Box>
        <Box
          as={"a"}
          sx={{
            color: "#d44545",
            "&:hover": { color: "#d4454563" },
          }}
          onClick={() => deleteHandler(row._id)}
        >
          <DeleteForeverOutlinedIcon />
        </Box>
      </Box>
    ),
  },
];

const PlayList = (props) => {
  const toggleData = (row) => {
    props.onPlayMusic(row);
  };
  const DUMMY_TABLE = props.DUMMY_MUSIC.map((item, index) => {
    return {
      _id: item._id,
      genre: item.genre,
      title: item.title,
      artist_name: item.artist_name,
      album_name: item.album_name,
      art_work: item.art_work,
      audio_music: item.audio_music,
    };
  });
  const pop = DUMMY_TABLE.filter((item) => item.genre === "POP");
  const rock = DUMMY_TABLE.filter((item) => item.genre === "Rock");
  const alternative = DUMMY_TABLE.filter(
    (item) => item.genre === "Alternative"
  );
  const RandB = DUMMY_TABLE.filter((item) => item.genre === "R&B");
  const classical = DUMMY_TABLE.filter((item) => item.genre === "Classical");
  const hipHop = DUMMY_TABLE.filter((item) => item.genre === "Hip-Hop");
  const customstayle = {
    headCells: {
      style: {
        backgroundColor: "#3d3d3d",
        color: "#fff",
      },
    },
  };
  return (
    <Box
      maxHeight={"89vh"}
      overflow="scroll"
      minHeight={"89vh"}
      flexWrap="wrap"
      py={4}
      px={2}
    >
      <Box
        as={"div"}
        p={2}
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#222c65",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box as={'span'}>{DUMMY_TABLE.length} All Songs</Box>
        <Box as={'span'} sx={{color: '#aaa' , fontSize: 15}}>{pop.length} POP</Box>
        <Box as={'span'} sx={{color: '#aaa' , fontSize: 15}}>{rock.length} Rock</Box>
        <Box as={'span'} sx={{color: '#aaa' , fontSize: 15}}>{alternative.length} Alternative</Box>
        <Box as={'span'} sx={{color: '#aaa' , fontSize: 15}}>{RandB.length} R&B</Box>
        <Box as={'span'} sx={{color: '#aaa' , fontSize: 15}}>{classical.length} Classical</Box>
        <Box as={'span'} sx={{color: '#aaa' , fontSize: 15}}>{hipHop.length} Hip-Hop</Box>
      </Box>
      {DUMMY_TABLE && (
        <DataTable
          columns={columns}
          data={DUMMY_TABLE}
          fixedHeader
          onRowClicked={toggleData}
          highlightOnHover
          pointerOnHover
          maxHeight="73.8vh"
          minHeight="73.8vh"
          customStyles={customstayle}
          pagination
        ></DataTable>
      )}
      <Box maxHeight={"15.2vh"} minHeight={"15.2vh"}></Box>
    </Box>
  );
};

export default PlayList;
