import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ChatIcon from '@mui/icons-material/Chat'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const navItems = [
  { label: '成果作品', href: '#modules' },
  { label: '接送時程', href: '#schedule' },
  { label: '費用方案', href: '#pricing' },
  { label: '常見問題', href: '#faq' },
]

export default function Navbar({ onContactClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(239, 233, 225, 0.9)',
        color: '#1E1E24',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 68, justifyContent: 'space-between' }}>
          {/* Logo & Brand */}
          <Box
            component="a"
            href="#"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              gap: 1.2,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #FF6B35 0%, #FFB703 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(255, 107, 53, 0.3)',
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 20 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.05rem', sm: '1.25rem' },
                  color: '#1E1E24',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                新星創客冬令營
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#FF6B35',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.05em',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                MAKER WINTER CAMP 2027
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3.5 }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  textDecoration: 'none',
                  color: '#4A4E69',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#FF6B35',
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Desktop CTA */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <Button
              variant="contained"
              startIcon={<ChatIcon />}
              onClick={onContactClick}
              sx={{
                backgroundColor: '#06C755',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '8px 20px',
                borderRadius: '24px',
                '&:hover': {
                  backgroundColor: '#05A346',
                },
              }}
            >
              加 LINE 諮詢
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <Button
              size="small"
              variant="contained"
              onClick={onContactClick}
              sx={{
                backgroundColor: '#06C755',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '6px 14px',
                borderRadius: '20px',
                '&:hover': { backgroundColor: '#05A346' },
              }}
            >
              加 LINE
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: 280, backgroundColor: '#FAF7F2', p: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item.href)}
                sx={{ borderRadius: 2, mb: 1 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 700, color: '#1E1E24' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<ChatIcon />}
              onClick={() => {
                setMobileOpen(false)
                onContactClick()
              }}
              sx={{
                backgroundColor: '#06C755',
                color: '#fff',
                fontWeight: 700,
                py: 1.2,
                borderRadius: '24px',
                '&:hover': { backgroundColor: '#05A346' },
              }}
            >
              加 LINE 諮詢 (ddchen0116)
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}
