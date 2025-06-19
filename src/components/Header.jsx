import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./Header.css";
export default function Header() {
  const theme = useTheme();

  return (
    <div className="cardBody">
      <Card sx={{ display: "flex" }}>
        <div className="cardFirst">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <h3>
                R C PATEL INSTITUTE OF TECHNOLOGY
              </h3>
              <p>
                {" "}
                R. C. Patel Institute of Technology, Shirpur (RCPIT) is a
                premier Autonomous Institute dedicated to developing skilled,
                ethical, and industry-ready engineers. Established in 2001 by
                the Shirpur Education Society under the visionary leadership of
                Shri Amrishbhai R. Patel, RCPIT was founded with a
                transformative mission: to provide high-quality technical
                education in a region historically underserved by such
                opportunities.
              </p>
            </CardContent>
          </Box>
        </div>
        <div className="cardSecond">
          <div className="cardImg">
            <CardMedia
              component="img"
              image="https://www.rcpit.ac.in/images/slider/slider1.jpg"
              alt="Live from space album cover"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
