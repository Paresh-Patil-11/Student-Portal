import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import "./CollegeBody.css";

const highlights = [
  {
    id: 1,
    title: "Modern Campus",
    description: "Experience a high-tech, student-friendly environment built for collaboration.",
    image: "https://www.rcpit.ac.in/images/infrastructure/rcpit-classroom-thumb.jpg",
  },
  {
    id: 2,
    title: "Research Labs",
    description: "State-of-the-art labs equipped for cutting-edge research and innovation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEkolafP4DyzsGSN_Oaf2MMPbzgh96ge0rg&s",
  },
  {
    id: 3,
    title: "Sports Facilities",
    description: "Top-tier gyms and stadiums supporting student athletics and wellness.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6yvAkCyXnuNErjyE7m7xeSFnQVnNJMuu-w&s",
  },
];

export default function CollegeBody() {
  return (
    <div className="collegeBody">
      <h1>TOP HIGHLIGHTS</h1>
      <div className="cardScroller">
        {highlights.map((item) => (
          <Card className="innerCard" key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <h3>{item.title}</h3>
                <p className="desp">{item.description}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

