import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

// Datos de ejemplo - En el futuro esto vendrá de una base de datos o API
const libros = [
  {
    id: 1,
    titulo: 'Mi Primer Libro',
    descripcion: 'Una breve descripción del libro...',
    portada: 'https://via.placeholder.com/200x300'
  },
  {
    id: 2,
    titulo: 'El Segundo Libro',
    descripcion: 'Otra historia fascinante...',
    portada: 'https://via.placeholder.com/200x300'
  },
  {
    id: 3,
    titulo: 'La Gran Aventura',
    descripcion: 'Un viaje inolvidable...',
    portada: 'https://via.placeholder.com/200x300'
  }
];

function BookList() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Catálogo de Libros
      </Typography>
      <Grid container spacing={4}>
        {libros.map((libro) => (
          <Grid item key={libro.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={Link} to={`/libro/${libro.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={libro.portada}
                  alt={libro.titulo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {libro.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {libro.descripcion}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BookList; 