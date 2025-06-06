import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Constantes de colores
const colors = {
  primary: '#8B4513', // Marrón clásico
  secondary: '#DAA520', // Dorado
  background: '#FDF5E6', // Crema antiguo
  text: '#2C1810', // Marrón oscuro para texto
  accent: '#CD853F', // Marrón dorado para acentos
};

// Asumiendo que las imágenes estarán en la carpeta public
const BACKGROUND_IMAGE = '/assets/library-background.jpg'; // La imagen con la persona
const LOGO_IMAGE = '/assets/bitbooks-logo.png'; // El logo

// Estilos de botón personalizados estilo Amazon
const AmazonButton = ({ children, variant = 'primary', ...props }) => {
  const buttonStyles = variant === 'primary' ? {
    background: 'linear-gradient(180deg, #f7dfa5 0%, #f0c14b 100%)',
    color: '#111',
    border: '1px solid #a88734',
    boxShadow: '0 1px 0 rgba(255,255,255,.4) inset',
    '&:hover': {
      background: 'linear-gradient(180deg, #f5d78e 0%, #eeb933 100%)',
    }
  } : {
    background: 'linear-gradient(180deg, #f7f8fa 0%, #e7e9ec 100%)',
    color: '#111',
    border: '1px solid #a2a6ac',
    boxShadow: '0 1px 0 rgba(255,255,255,.4) inset',
    '&:hover': {
      background: 'linear-gradient(180deg, #e7e9ec 0%, #d9dce1 100%)',
    }
  };

  return (
    <Button
      {...props}
      sx={{
        ...buttonStyles,
        borderRadius: '3px',
        padding: '8px 20px',
        fontSize: '1rem',
        fontWeight: 'normal',
        textTransform: 'none',
        '&:focus': {
          boxShadow: '0 0 3px 2px rgb(228,121,17,.5)',
          outline: 'none',
        },
        ...props.sx
      }}
    >
      {children}
    </Button>
  );
};

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: `linear-gradient(rgba(44, 24, 16, 0.85), rgba(44, 24, 16, 0.85)), url(${BACKGROUND_IMAGE})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      color: colors.background
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Logo y Título */}
          <Grid item xs={12} md={6}>
            <Box sx={{
              textAlign: { xs: 'center', md: 'left' },
              mb: 4
            }}>
              <img 
                src={LOGO_IMAGE} 
                alt="BitBooks Logo" 
                style={{
                  maxWidth: '300px',
                  width: '100%',
                  marginBottom: '2rem',
                  filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.3))'
                }}
              />
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  color: colors.secondary,
                  fontFamily: '"Playfair Display", serif'
                }}
              >
                Tu Biblioteca Digital
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  opacity: 0.9,
                  color: colors.background,
                  lineHeight: 1.6,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                Donde cada página te transporta a un nuevo mundo de conocimiento y aventura
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <AmazonButton
                  variant="primary"
                  startIcon={<ShoppingCartIcon />}
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem'
                  }}
                >
                  Explorar Catálogo
                </AmazonButton>
                <AmazonButton
                  variant="secondary"
                  startIcon={<AutoStoriesIcon />}
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem'
                  }}
                >
                  Vista Previa
                </AmazonButton>
              </Box>
            </Box>
          </Grid>

          {/* Tarjeta Destacada */}
          <Grid item xs={12} md={5}>
            <Paper 
              elevation={6}
              sx={{
                p: 4,
                backgroundColor: 'rgba(253, 245, 230, 0.95)',
                borderRadius: '8px',
                color: colors.text,
                textAlign: 'center',
                border: `1px solid ${colors.secondary}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{
                  color: colors.primary,
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 'bold'
                }}
              >
                Beneficios Exclusivos
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                • Acceso ilimitado a miles de libros digitales<br/>
                • Descuentos exclusivos para miembros<br/>
                • Contenido premium seleccionado<br/>
                • Lecturas recomendadas personalizadas
              </Typography>
              <AmazonButton
                variant="primary"
                size="large"
                sx={{
                  width: '80%',
                  mt: 2
                }}
              >
                Únete Ahora
              </AmazonButton>
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 2,
                  color: colors.accent,
                  fontStyle: 'italic'
                }}
              >
                ¡Los primeros 30 días son gratis!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home; 