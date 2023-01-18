import React, { useEffect } from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Navbar from "./components/Navbar/NavBar";
import NavigationTabs from "./components/Tabs/NavigationTabs";

import { getRoomsFetch } from "./features/roomSlice";

import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { theme } from "./Theme";

const App = () => {
  // @ts-ignore Type instantiation is excessively deep and possibly infinite
  const rooms = useSelector((state) => state.rooms.rooms.roomInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomsFetch());
  }, [dispatch]);
  console.log("rooms from app", rooms);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <NavigationTabs />
        {/* <RoomCard /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
