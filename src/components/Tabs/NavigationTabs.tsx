import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { RoomCard } from "../Card/RoomCard";
import { useSelector } from "react-redux";
import {
  getPendingSelector,
  getRoomsSelector,
} from "../../store/room/selectors";
import { fetchRoomRequest } from "../../store/room/actions";
import { useDispatch } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function NavigationTabs() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const roomDetails = useSelector(getRoomsSelector);

  useEffect(() => {
    dispatch(fetchRoomRequest());
  }, [dispatch]);

  // @ts-ignore Type instantiation is excessively deep and possibly infinite
  const roomData = roomDetails?.roomInfo?.map((room) => room.room[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log("room details", roomData);
  // console.log("rooms data", roomsData);
  // console.log("room res", roomRes);

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  // Hack
  const arrLength = roomDetails.length ?? 2;

  console.log("all rooms", arrLength);

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {arrLength >= 2 ? (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={true}
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
          >
            {roomData?.map((tab: string, index: number) => {
              return (
                <Tab
                  label={`Room ${index + 1}`}
                  {...a11yProps(index)}
                  key={index + 1}
                />
              );
            })}
          </Tabs>
        ) : null}
      </Box>
      {pending ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
          }}
        >
          <CircularProgress
            sx={{
              color: "primary",
            }}
          />
        </Box>
      ) : (
        roomData?.map((room: any, index: number) => {
          return (
            <TabPanel value={value} index={index} key={index}>
              <RoomCard
                id={room.id}
                nickname={room.roomName}
                vacationType={room.vacationType}
                travelStartDate={room.travelStartDate}
                travelEndDate={room.travelEndDate}
                imageUrl={room.imageUrl ? room.imageUrl : "/room.jpg"}
                remainingBalance={Math.trunc(room.remainingBalance)}
                roomType={room.roomType}
              />
            </TabPanel>
          );
        })
      )}
    </Box>
  );
}
