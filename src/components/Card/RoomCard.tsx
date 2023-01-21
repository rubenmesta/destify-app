import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { RoomProps } from "../../store/room/types";
import { useSelector } from "react-redux";
import { getRoomsSelector } from "../../store/room/selectors";

// import data from "../../_data/data.json";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface TravelerProps {
  travelers: string[];
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const RoomCard = ({
  id,
  nickname,
  vacationType,
  travelStartDate,
  travelEndDate,
  imageUrl,
  roomType,
  remainingBalance,
}: RoomProps): JSX.Element => {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const roomDetails = useSelector(getRoomsSelector);
  // @ts-ignore Type instantiation is excessively deep and possibly infinite
  const roomData = roomDetails?.roomInfo?.map((item) => item);

  const traveler = roomData.map(
    (traveler: TravelerProps) => traveler.travelers[0]
  );

  return (
    <Box sx={{ height: "100vh" }}>
      <CardHeader
        sx={{ padding: "2rem 1rem" }}
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            <MeetingRoomIcon color="action" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={nickname}
        subheader={
          <Box
            component="span"
            sx={{ textTransform: "capitalize" }}
            color="text.secondary"
          >
            {`Room Type - ${vacationType}`}
            <br />
            <span>{`${travelStartDate} - ${travelEndDate}`}</span>{" "}
          </Box>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Hotel room"
      />
      <CardContent sx={{ height: "5rem", display: "flex", flexWrap: "wrap" }}>
        <Box>
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Booked"
            variant="outlined"
            sx={{ marginRight: 1 }}
            color="success"
          />
          <Chip
            icon={<PaidOutlinedIcon />}
            label={`Balence Due - $${remainingBalance}`}
            variant="outlined"
            color="warning"
          />
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginLeft: "8px" }}
        >
          {roomType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          startIcon={<EditLocationAltIcon />}
          sx={{ textTransform: "capitalize" }}
        >
          Modify
        </Button>
        <Button
          startIcon={<PaidOutlinedIcon />}
          sx={{ textTransform: "capitalize" }}
        >
          Make Payment
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle1" mb={2} sx={{ fronWeight: 900 }}>
            Guests in this room
          </Typography>
          {traveler.map((person: any, index: number) => {
            return (
              <Chip
                key={index}
                icon={person?.age > 18 ? <PersonIcon /> : <ChildCareIcon />}
                label={
                  person?.age > 18 ? `Adult ${index + 1}` : `Child ${index + 1}`
                }
                variant="outlined"
                sx={{ marginRight: 1 }}
                color="primary"
              />
            );
          })}
        </CardContent>
      </Collapse>
    </Box>
  );
};
