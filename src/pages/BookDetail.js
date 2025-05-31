import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Box, Grid } from '@mui/material';

function BookDetail() {
  const { id } = useParams();

  // Simulando datos de un libro - En el futuro esto vendrá de una base de datos o API
  const libro = {
    id: parseInt(id),
    titulo: `Libro #${id}`,
    descripcion: 'Una descripción detallada del libro...',
    portada: 'https://via.placeholder.com/400x600',
    contenido: 'Aquí iría el contenido del libro...'
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={libro.portada}
                alt={libro.titulo}
                sx={{ height: '400px', objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  {libro.titulo}
                </Typography>
                <Typography variant="body1" paragraph>
                  {libro.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {libro.contenido}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
}

export default BookDetail; 