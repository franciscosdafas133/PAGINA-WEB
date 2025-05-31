import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useScrollTrigger,
  Slide
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <AutoStoriesIcon sx={{ color: 'primary.main', mr: 2 }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 'bold',
                letterSpacing: 1
              }}
            >
              Mi Libro Digital
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                color="primary"
                component="a"
                href="#descripcion"
                sx={{ textTransform: 'none' }}
              >
                Descripción
              </Button>
              <Button
                color="primary"
                component="a"
                href="#caracteristicas"
                sx={{ textTransform: 'none' }}
              >
                Características
              </Button>
              <Button
                color="primary"
                component="a"
                href="#resenas"
                sx={{ textTransform: 'none' }}
              >
                Reseñas
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: 'none' }}
              >
                Comprar Ahora
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar; 