import React from "react";
import DataTable from "react-data-table-component";
import { Box, Card, Flex } from "rebass";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const deleteHandler = (id) => {
  fetch("https://beka-songs.onrender.com/song-delete", {
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
    name: "Name",
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
const OneAlbum = (props) => {
  const toggleData = (row) => {
    props.onPlayMusic(row);
    // console.log(row);
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
  // console.log(DUMMY_TABLE);
  // const yoni = props.DUMMY_MUSIC[0].art_work;
  // console.log(yoni);
  const customstayle = {
    rows: {
      style: {
        // backgroundColor: "#2d2d2d",
        // color: "#fff",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#a9b19443",
        color: "#222c65",
      },
    },
  };
  return (
    <Card
      maxHeight={"89vh"}
      overflow="scroll"
      // backgroundColor={"#4d4d4d"}
      minHeight={"89vh"}
      py={2}
      px={2}
    >
      <Flex
        alignItems={"flex-end"}
        sx={{
          gap: "1rem",
          backgroundColor: "#a9b19443",
          color: "#222c65",
          borderRadius: "10px",
          p: "1rem",
          my: "1rem",
        }}
      >
        <Card as={"div"} sx={{ width: "15%" }}>
          {/* <Image src={props.DUMMY_MUSIC[0].art_work} /> */}
        </Card>
        <Box>
          <span>{DUMMY_TABLE.length} songs</span>
        </Box>
      </Flex>
      <Box>
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

        <Box maxHeight={"15.2vh"} minHeight={"15.2vh"}></Box>
      </Box>
    </Card>
  );
};

export default OneAlbum;
