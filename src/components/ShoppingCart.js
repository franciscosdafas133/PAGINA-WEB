import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
  IconButton,
  Divider
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

function ShoppingCart({ book }) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const total = book.precio * quantity;

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <ShoppingCartIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Carrito de Compra</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem>
              <ListItemText 
                primary={book.titulo}
                secondary={`Precio: $${book.precio}`}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button 
                  size="small" 
                  variant="outlined"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <Typography>{quantity}</Typography>
                <Button 
                  size="small" 
                  variant="outlined"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </Box>
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ mt: 2, p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Total: ${total.toFixed(2)}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
              onClick={() => {
                // Aquí irá la lógica de pago
                alert('¡Gracias por tu compra!');
                setOpen(false);
              }}
            >
              Proceder al Pago
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default ShoppingCart; 