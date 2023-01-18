import { useEffect } from "react";

import { useDispatch } from "react-redux";
import NavigationTabs from "./components/Tabs/NavigationTabs";

import { getRoomsFetch } from "./features/roomSlice";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./Theme";
import "./index.css";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomsFetch());
  }, [dispatch]);

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <NavigationTabs />
      </ThemeProvider>
    </Layout>
  );
};

export default App;
