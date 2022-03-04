import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import { Logo, Navbar } from './Header.styled';

const pages = ['O Nas', 'Twórczość', 'Członkowie', 'Kontakt'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Navbar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Logo />

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            {['Twórczość', 'Kontakt'].map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Navbar>
  );
};
export default Header;
