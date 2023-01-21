import { useEffect } from "react";

import NavigationTabs from "./components/Tabs/NavigationTabs";

import "./index.css";
import { Layout } from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomRequest } from "./store/room/actions";
import { getRoomsSelector } from "./store/room/selectors";

const App = () => {
  const dispatch = useDispatch();
  const roomInfo = useSelector(getRoomsSelector);

  useEffect(() => {
    dispatch(fetchRoomRequest());
  }, [dispatch]);

  return (
    <Layout>
      <NavigationTabs />
    </Layout>
  );
};

export default App;
