import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import { Logo, Navbar } from './Header.styled';

const pages = [
  ['O Nas', 'about'],
  ['Twórczość', 'work'],
  ['Członkowie', 'members'],
  ['Kontakt', 'contact'],
];

const Header = () => {
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
            {[
              ['Twórczość', 'work'],
              ['Kontakt', 'contact'],
            ].map(page => (
              <a href={'#' + page[1]}>
                <Button
                  key={page[0]}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page[0]}
                </Button>
              </a>
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
              <a href={'#' + page[1]}>
                <Button
                  key={page[1]}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page[0]}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Navbar>
  );
};
export default Header;
