import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { RoomCard } from "../Card/RoomCard";
import { useSelector } from "react-redux";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function NavigationTabs() {
  const [value, setValue] = React.useState(0);

  // @ts-ignore Type instantiation is excessively deep and possibly infinite
  const roomsData = useSelector((state) => state.rooms.rooms.roomInfo);

  // const roomId = roomsData.map((room: any) => room.room[0].id);
  const roomRes = roomsData?.map((room: any) => room.room[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            <Typography>{children}</Typography>
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

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          {roomRes?.map((tab: string, index: number) => {
            return (
              <Tab
                label={`Room ${index + 1}`}
                {...a11yProps(index)}
                key={index + 1}
              />
            );
          })}
        </Tabs>
      </Box>
      {roomRes?.map((room: any, index: number) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            <RoomCard
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
      })}
    </Box>
  );
}
