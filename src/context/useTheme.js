import * as React from "react";
import {  ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



export const ColorModeProvider=({children})=>{
      const [mode, setMode] = React.useState("light");
      
      const loadMode = (mod)=>{
        setMode(mod);
      }
        const colorMode = React.useMemo(
          () => ({
            toggleColorMode: () => {
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
          }),
          []
        );
        const theme = React.useMemo(
          () =>
            createTheme({
              palette: {
                mode,
              },
            }),
          [mode]
        );
        React.useEffect(()=>{
          
         
        },[mode])

    return(
      <ColorModeContext.Provider value={{colorMode,loadMode}} >
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export const useColorMode=()=>React.useContext(ColorModeContext)