import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function ButtonAppBar() {
  return (
    <AppBar position="fixed" sx={{ height: 80, bgcolor: "#ffff" }}>
      <Toolbar>
        <Typography
          variant="h3"
          color="black"
          component="div"
          sx={{ flexGrow: 1 }}
          align="left"
        >
          OUR STORE
        </Typography>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="default"
        >
          <Badge badgeContent={3} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
