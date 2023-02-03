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
            {casts.slice(0,5).map(elem=>{
              return  (
                <Actor
                key={elem.id}
                  name={elem.original_name}
                  image={elem.profile_path}
                  character={elem.character}
                />
              );
            })}
      </Paper>
    )
  );
}

export default Actors;
