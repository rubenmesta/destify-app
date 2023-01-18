import Box from "@mui/material/Box/Box";
import { ReactNode } from "react";
import Navbar from "../Navbar/NavBar";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box sx={{ maxWidth: "420px", margin: "0 auto" }}>
      <Navbar />
      {children}
    </Box>
  );
};
