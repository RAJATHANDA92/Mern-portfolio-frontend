import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Tabs,
 // Tab,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  const [data,_data] = useState(JSON.parse(localStorage.getItem('userData')))

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(42,151,180,1) 12%, rgba(151,58,176,1) 22%, rgba(109,87,169,1) 41%, rgba(110,87,169,1) 41%, rgba(85,120,162,1) 62%, rgba(109,65,155,1) 80%, rgba(155,92,65,1) 90%, rgba(42,180,148,1) 100%);)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">CodeWithRJ</Typography>
        <Box display="flex" marginLeft="auto" marginRight={"auto"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
        {data!==null&&data!==undefined&&data!==''?
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="primary"
            onClick={()=>{
              localStorage.clear()
              window.location.reload()
              }}
          >
            LogOut
          </Button>:
          <>
          <Button
            LinkComponent={Link}
            to="/login"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="success"
          >
            Login
          </Button>
          <Button
            LinkComponent={Link}
            to="/singup"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            SignUp
          </Button>
          </>
        }
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;