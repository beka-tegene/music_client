import React from "react";
import DataTable from "react-data-table-component";
import { Box, Card, Flex } from "rebass";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { MusicDelete } from "../../Store/songs";
import { NavLink } from "react-router-dom";

const OneAlbum = (props) => {
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
  const customstayle = {
    headCells: {
      style: {
        backgroundColor: "#3d3d3d",
        color: "#fff",
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
          <span>{props.DUMMY_MUSIC.length} songs</span>
        </Box>
      </Flex>
      <Box>
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

        <Box maxHeight={"15.2vh"} minHeight={"15.2vh"}></Box>
      </Box>
    </Card>
  );
};

export default OneAlbum;
