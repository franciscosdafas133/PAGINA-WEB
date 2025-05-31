import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
  Paper,
  Rating,
  Chip,
  Stack
} from '@mui/material';
import ShoppingCart from '../components/ShoppingCart';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';

// Datos del libro (después podrías moverlo a un archivo separado)
const libro = {
  id: 1,
  titulo: "Tu Libro",
  autor: "Tu Nombre",
  precio: 29.99,
  portada: "https://via.placeholder.com/600x900",
  descripcion: "Una descripción cautivadora de tu libro que enganche a los lectores...",
  caracteristicas: [
    "Formato PDF y EPUB",
    "Acceso inmediato",
    "Actualizaciones gratuitas",
    "Soporte premium"
  ],
  detalles: `Aquí va una descripción más detallada de tu libro. Puedes hablar sobre:
  - El contenido específico
  - A quién va dirigido
  - Qué aprenderán los lectores
  - Por qué deberían comprarlo`,
  resenas: [
    { id: 1, autor: "María G.", puntuacion: 5, comentario: "¡Excelente libro! Superó mis expectativas." },
    { id: 2, autor: "Juan P.", puntuacion: 5, comentario: "Muy bien estructurado y fácil de seguir." }
  ]
};

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: '20px 0' }}>
      {value === index && children}
    </div>
  );
}

function Home() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Columna Izquierda - Imagen y Precio */}
          <Grid item xs={12} md={5}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                image={libro.portada}
                alt={libro.titulo}
                sx={{
                  height: 600,
                  objectFit: 'cover',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary" gutterBottom>
                  ${libro.precio}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<AutoStoriesIcon />}
                  sx={{ mb: 2 }}
                >
                  Comprar Ahora
                </Button>
                <ShoppingCart book={libro} />
              </CardContent>
            </Card>
          </Grid>

          {/* Columna Derecha - Detalles */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                {libro.titulo}
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                por {libro.autor}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={4.5} readOnly precision={0.5} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  (basado en {libro.resenas.length} reseñas)
                </Typography>
              </Box>
            </Box>

            <Paper elevation={3} sx={{ mb: 4 }}>
              <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tab label="Descripción" />
                <Tab label="Características" />
                <Tab label="Reseñas" />
              </Tabs>

              <Box sx={{ p: 3 }}>
                <TabPanel value={tabValue} index={0}>
                  <Typography variant="body1" paragraph>
                    {libro.descripcion}
                  </Typography>
                  <Typography variant="body1" component="pre" sx={{ whiteSpace: 'pre-line' }}>
                    {libro.detalles}
                  </Typography>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Stack spacing={2}>
                    {libro.caracteristicas.map((caracteristica, index) => (
                      <Chip
                        key={index}
                        icon={<LocalOfferIcon />}
                        label={caracteristica}
                        variant="outlined"
                        sx={{ justifyContent: 'flex-start', maxWidth: '100%' }}
                      />
                    ))}
                  </Stack>
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                  <Stack spacing={3}>
                    {libro.resenas.map((resena) => (
                      <Box key={resena.id} sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating 
                            value={resena.puntuacion} 
                            readOnly 
                            size="small"
                            icon={<StarIcon fontSize="inherit" />}
                            emptyIcon={<StarIcon fontSize="inherit" />}
                          />
                          <Typography variant="subtitle2" sx={{ ml: 1 }}>
                            {resena.autor}
                          </Typography>
                        </Box>
                        <Typography variant="body2">{resena.comentario}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </TabPanel>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home; 