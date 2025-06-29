import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { logout } from '../store/authSlice';


function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  let pages = [];
  let pageRoutes={};
  if (user?.role === 'Admin') {
    pages = ['Dashboard', 'Patients', 'Calendar'];
    pageRoutes={
      Dashboard: '/admin/dashboard',
      Patients: '/admin/patients',
      Calendar: '/admin/calendar',
    };
  } else if (user?.role === 'Patient') {
    pages = ['Dashboard'];
    pageRoutes={
      Dashboard: '/patient/dashboard',
    };
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 50, marginRight: 8 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'purple',
                textDecoration: 'none',
              }}
            >
              DENTAL CENTER
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'purple' }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={pageRoutes[page]}
                    style={({ isActive }) => ({
                      color: 'purple',
                      fontWeight: isActive ? 'bold' : 'normal',
                      textDecoration: 'none',
                    })}
                  >
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
              {user && (
                <MenuItem onClick={() => {
                  handleCloseNavMenu();
                  handleLogout();
                }}>
                  <Typography sx={{ color: 'purple', fontWeight: 600 }}>
                    Logout
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1, mr: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 40, marginRight: 8 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.1rem',
                color: 'purple',
                textDecoration: 'none',
              }}
            >
              DENTAL CENTER
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                key={page}
                to={pageRoutes[page]}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: 'purple',
                  padding: '22px',
                  borderBottom: isActive ? '3px solid purple' : '3px solid transparent',
                  fontWeight: isActive ? 600 : 400,
                })}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          {user && (
            <Box sx={{ flexShrink: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button
                onClick={handleLogout}
                sx={{
                  backgroundColor: '#9c27b0',
                  color: 'white',
                  px: 2,
                  py: 1,
                  fontSize: '0.8rem',
                  minWidth: 'auto',
                  '&:hover': { backgroundColor: '#7b1fa2' },
                }}
              >
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
