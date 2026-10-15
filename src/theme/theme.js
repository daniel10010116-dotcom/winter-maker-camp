import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35',
      light: '#FFE8CC',
      dark: '#E8531D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFB703',
      light: '#FFF9E6',
      dark: '#D48806',
      contrastText: '#1E1E24',
    },
    line: {
      main: '#06C755',
      dark: '#05A346',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF7F2',
      paper: '#FFFFFF',
      subtle: '#FFF8F0',
      hero: 'linear-gradient(135deg, #FFF3E6 0%, #FAF7F2 100%)',
    },
    text: {
      primary: '#1E1E24',
      secondary: '#4A4E69',
      subtle: '#6C757D',
    },
    action: {
      success: '#1B4332',
      discount: '#E63946',
    },
  },
  typography: {
    fontFamily: [
      '"Plus Jakarta Sans"',
      '"Noto Sans TC"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.015em',
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      borderRadius: '26px',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 26,
          boxShadow: 'none',
          padding: '10px 24px',
          fontSize: '1rem',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(255, 107, 53, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(239, 233, 225, 0.8)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&:before': { display: 'none' },
          overflow: 'hidden',
          marginBottom: 12,
          border: '1px solid #EFE9E1',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
