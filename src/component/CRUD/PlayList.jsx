import React from "react";
import DataTable from "react-data-table-component";
import { Box } from "rebass";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { MusicDelete } from "../../Store/songs";
import { NavLink } from "react-router-dom";

const PlayList = (props) => {
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
          <NavLink
            as={"a"}
            mx={2}
            sx={{
              color: "#3874cf",
              "&:hover": { color: "#3874cf63" },
            }}
            to={`/edit/${row._id}`}
          >
            <EditOutlinedIcon />
          </NavLink>
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
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(MusicDelete({ id }));
  };
  const toggleData = (row) => {
    props.onPlayMusic(row);
  };
  const pop = props.DUMMY_MUSIC.filter((item) => item.genre === "POP");
  const rock = props.DUMMY_MUSIC.filter((item) => item.genre === "Rock");
  const alternative = props.DUMMY_MUSIC.filter(
    (item) => item.genre === "Alternative"
  );
  const RandB = props.DUMMY_MUSIC.filter((item) => item.genre === "R&B");
  const classical = props.DUMMY_MUSIC.filter((item) => item.genre === "Classical");
  const hipHop = props.DUMMY_MUSIC.filter((item) => item.genre === "Hip-Hop");
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
        <Box as={"span"}>{props.DUMMY_MUSIC.length} All Songs</Box>
        <Box as={"span"} sx={{ color: "#aaa", fontSize: 15 }}>
          {pop.length} POP
        </Box>
        <Box as={"span"} sx={{ color: "#aaa", fontSize: 15 }}>
          {rock.length} Rock
        </Box>
        <Box as={"span"} sx={{ color: "#aaa", fontSize: 15 }}>
          {alternative.length} Alternative
        </Box>
        <Box as={"span"} sx={{ color: "#aaa", fontSize: 15 }}>
          {RandB.length} R&B
        </Box>
        <Box as={"span"} sx={{ color: "#aaa", fontSize: 15 }}>
          {classical.length} Classical
        </Box>
        <Box as={"span"} sx={{ color: "#aaa", fontSize: 15 }}>
          {hipHop.length} Hip-Hop
        </Box>
      </Box>
      {props.DUMMY_MUSIC && (
        <DataTable
          columns={columns}
          data={props.DUMMY_MUSIC}
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
