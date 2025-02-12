import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  ThemeProvider,
  Button,
  CssBaseline,
  createTheme,
} from "@mui/material";

export default function App() {
  const [quote, setquote] = useState("");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    fetchRandomQuote();
    const interval = setInterval(fetchRandomQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchRandomQuote = () => {
    const quotes = [
      "The only limit to our realization of tomorrow is our doubts of today.",
      "Do what you can, with what you have, where you are.",
      "Happiness depends upon ourselves.",
      "No cuentes los días, haz que los días cuenten- Muhammad Ali",
      "No tengo talentos especiales, pero sí soy profundamente curioso.  -Albert Einstein",
      "Quality is not an act, it is a habit.",
      "In the middle of every difficulty lies opportunity.",
      "There is nothing more dangerous than a fool with ambitions -sami",
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setquote(quotes[randomIndex]);
    setFade(true, 300);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        marginTop: "50px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(to bottom, rgba(0, 0, 50, 0.5), rgba(0, 0, 0, 0.8)), 
                     url("/ahbackground.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Random Quote
      </Typography>
      <Card
        elevation={3}
        sx={{
          padding: "20px",
          bgcolor: "rgba(255, 255, 255, 1.0)",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            "{quote}"
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchRandomQuote}
        style={{ marginTop: "16px" }}
      >
        New Quote
      </Button>
    </Container>
  );
}
