import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { logout } from '../store/authSlice';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const adminLinks = [
    { text: 'Dashboard', path: '/admin/dashboard' },
    { text: 'Patients', path: '/admin/patients' },
    { text: 'Calendar', path: '/admin/calendar' },
  ];

  const patientLinks = [
    { text: 'Dashboard', path: '/patient/dashboard' },
  ];

  const navLinks = user?.role === 'Admin' ? adminLinks : user?.role === 'Patient' ? patientLinks : [];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'purple' }}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={Link}
            to={user ? (user.role === 'Admin' ? '/admin/dashboard' : '/patient/dashboard') : '/login'}
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 600,
            }}
          >
            ENTNT Dental
          </Typography>

          {!isMobile &&
            navLinks.map((link) => (
              <Button
                key={link.text}
                color="inherit"
                component={Link}
                to={link.path}
                sx={{ ml: 2 }}
              >
                {link.text}
              </Button>
            ))}

          {user && (
            <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text} component={Link} to={link.path}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
            {user && (
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
      <Outlet/>
    </>
  );
};

export default Navbar;
