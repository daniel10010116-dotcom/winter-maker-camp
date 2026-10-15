import React from 'react'
import { Snackbar, Box, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function ToastFeedback({ open, onClose, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2600}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        top: '24px !important',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#1B4332',
          color: '#FFFFFF',
          px: 2.8,
          py: 1.2,
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: 1.2,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'fadeInDown 0.3s ease-out',
        }}
      >
        <CheckCircleIcon sx={{ color: '#4ADE80', fontSize: '1.25rem' }} />
        <Typography
          sx={{
            fontSize: '0.92rem',
            fontWeight: 600,
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          {message || '已複製 LINE ID：ddchen0116，打開 LINE 即可搜尋加入！'}
        </Typography>
      </Box>
    </Snackbar>
  )
}
