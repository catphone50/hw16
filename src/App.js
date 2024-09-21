import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./App.css";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 500 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="sm"
        sx={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: 24,
            fontWeight: 500,
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Welcome to my app!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: "2px",
            padding: "10px",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            backgroundColor: "#3e58b563",
            padding: 0,
            boxShadow: "0px 0px 10px rgba(0,0,0,0.7)",
          }}
        >
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Germany is a country with a diverse range of natural landscapes,
              from the rugged mountains of the Alps to the scenic coastlines of
              the North Sea and Baltic Sea. The country is home to numerous
              forests, including the famous Black Forest, as well as rolling
              hills, picturesque lakes, and winding rivers. Germany's natural
              beauty is complemented by its rich cultural heritage, with many
              historic towns and cities showcasing stunning architecture and
              vibrant cultural scenes. With its unique blend of natural and
              cultural attractions, Germany is a popular destination for outdoor
              enthusiasts and culture lovers alike.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
