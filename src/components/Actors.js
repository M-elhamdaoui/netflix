import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Actor from "./Actor";

function Actors({ casts }) {
  return (
    casts && (
      <Paper
        sx={{
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          mt: { xs:3, md: 0 },
          width: { xs: "100%", md: "30%" },
          p: 2,
          justifyContent: "flex-start",
          ml:{xs:0,lg:5},
          alignSelf:"center"
        }}>
            <Typography variant="h5" >Actors </Typography>
        <Actor
          name={casts[0].original_name}
          image={casts[0].profile_path}
          character={casts[0].character}
        />
        <Actor
          name={casts[1].original_name}
          image={casts[1].profile_path}
          character={casts[1].character}
        />
        <Actor
          name={casts[2].original_name}
          image={casts[2].profile_path}
          character={casts[2].character}
        />
        <Actor
          name={casts[3].original_name}
          image={casts[3].profile_path}
          character={casts[3].character}
        />
        <Actor
          name={casts[4].original_name}
          image={casts[4].profile_path}
          character={casts[4].character}
        />
      </Paper>
    )
  );
}

export default Actors;
