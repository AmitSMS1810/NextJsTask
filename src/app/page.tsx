import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, IconButton, Avatar, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ResponsiveLayout = () => {
  return (
    <Container sx={{mt:'4'}} >
      <Box>
        {/* Navbar */}
        <AppBar
          position="static"
          sx={{
            bgcolor: 'white',
            color: 'black',
            boxShadow: 1,
            border: 2, 
            borderColor: 'green', 
            px: { xs: 0, sm: 8 }
            
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Brand Name */}
            <Box sx={{display:'flex', flexDirection:'row', gap: '40px'}}>

            <Typography variant="h6">Brand Name</Typography>

            {/* Search Input (Centered) */}
            <Box
              sx={{                
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                border: 2,
                bgcolor: '#f1f1f1',
                borderRadius: 1,
                width: 350, 
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: '8px',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  flex: 1,
                }}
              />
              <IconButton type="button" sx={{ p: '8px' }}>
                <SearchIcon />
              </IconButton>
            </Box>
            </Box>

          
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ ml: 2 }}>J</Avatar>
              <Typography sx={{ display: { xs: 'none', sm: 'block' }, ml: 1 }}>John</Typography>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column', 
            border: 2,
            borderTop: 0,
            borderColor: 'black',
            
            minHeight: '80vh', 
          }}
        >
          <Container>
            <Grid container spacing={7} justifyContent="center">
              {/* Left Section */}
              <Grid item xs={12} sm={5}>
                <Box
                  sx={{
                    height: '700px',
                    bgcolor: '#f5f5f5',
                    border: 2,
                    borderColor: 'blue', 
                    borderRadius: 1,
                    mt: 1
                  
                  }}
                ></Box>
              </Grid>
              {/* Right Section */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    height: '650px',
                    bgcolor: '#f5f5f5',
                    border: 2, 
                    borderColor: 'blue',
                    borderRadius: 1,
                    mt: 2
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default ResponsiveLayout;