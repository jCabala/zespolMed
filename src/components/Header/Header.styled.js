import styled from 'styled-components';

import { AppBar } from '@mui/material';

export const Navbar = styled(AppBar)`
  background-color: ${({ theme }) => `${theme.colors.primary} !important`};
`;

export const Logo = styled.div`
  background-image: url('./images/logo.webp');
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;

  margin-left: 10px;
`;
