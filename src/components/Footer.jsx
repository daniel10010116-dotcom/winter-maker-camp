import React from 'react'
import { Box, Container, Typography, IconButton, Stack } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1E1E24',
        color: '#8D99AE',
        py: { xs: 5, md: 6 },
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2.5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 0.5 }}>
              新星創客冬令營 Winter Maker Camp 2027
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.86rem', color: '#8D99AE' }}>
              © 2027 新星創客冬令營 All Rights Reserved. ｜ 教室地點：台北市圓山捷運站旁教室
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#6C757D' }}>
              小一至國二 ｜ 限額 20 人滿班 ｜ 精緻小班制 ｜ 諮詢 LINE ID：ddchen0116
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <IconButton
              onClick={scrollToTop}
              aria-label="回頁首"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#FF6B35',
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
