import Box from "@mui/material/Box/Box";
import { ReactNode } from "react";
import Navbar from "../Navbar/NavBar";
import { PropsWithChildren } from "react";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Box sx={{ maxWidth: "420px", margin: "0 auto" }}>
      <Navbar />
      {children}
    </Box>
  );
};
