import React from 'react'
import { Box, Container, Typography, Button, Chip, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SchoolIcon from '@mui/icons-material/School'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SparklesIcon from '@mui/icons-material/AutoAwesome'
import heroImg from '../assets/hero_showcase.jpg'

export default function Hero({ onCtaClick }) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #FFF3E6 0%, #FAF7F2 100%)',
        pt: { xs: 5, md: 9 },
        pb: { xs: 8, md: 11 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient blurred blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 183, 3, 0.22) 0%, rgba(255, 107, 53, 0.05) 70%, transparent 100%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -40,
          left: -60,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
            gap: { xs: 5, md: 7 },
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {/* Top highlight pill */}
            <Chip
              icon={<SparklesIcon sx={{ fontSize: '1rem !important', color: '#FF6B35 !important' }} />}
              label="2027 寒假最酷創客體驗・小班限額"
              sx={{
                backgroundColor: '#FFE8CC',
                color: '#D94E1B',
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                mb: 2.5,
                px: 0.8,
                py: 2,
                borderRadius: '16px',
                border: '1px solid rgba(255, 107, 53, 0.25)',
              }}
            />

            {/* Main Title */}
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
                fontWeight: 900,
                lineHeight: 1.15,
                mb: 2,
                letterSpacing: '-0.025em',
                background: 'linear-gradient(135deg, #1E1E24 30%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              新星創客冬令營
            </Typography>

            {/* Slogan */}
            <Typography
              variant="h5"
              sx={{
                color: '#333333',
                fontWeight: 600,
                fontSize: { xs: '1.15rem', sm: '1.4rem' },
                lineHeight: 1.45,
                mb: 3,
              }}
            >
              用創意與科技，打造屬於你的未來！
            </Typography>

            {/* Core Badges Row */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: 4,
                width: '100%',
              }}
            >
              <Chip
                icon={<SchoolIcon sx={{ color: '#FF6B35 !important', fontSize: '1rem' }} />}
                label="小一 至 國二"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1E1E24',
                  fontWeight: 700,
                  fontSize: { xs: '0.8rem', sm: '0.88rem' },
                  py: 1.8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  border: '1px solid #EFE9E1',
                }}
              />
              <Chip
                icon={<PeopleAltIcon sx={{ color: '#FF6B35 !important', fontSize: '1rem' }} />}
                label="限額 20 人滿班｜雙師親授"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1E1E24',
                  fontWeight: 700,
                  fontSize: { xs: '0.8rem', sm: '0.88rem' },
                  py: 1.8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  border: '1px solid #EFE9E1',
                }}
              />
              <Chip
                icon={<LocationOnIcon sx={{ color: '#FF6B35 !important', fontSize: '1rem' }} />}
                label="圓山捷運站步行 7 分"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1E1E24',
                  fontWeight: 700,
                  fontSize: { xs: '0.8rem', sm: '0.88rem' },
                  py: 1.8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  border: '1px solid #EFE9E1',
                }}
              />
            </Box>

            {/* Dual CTAs */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={onCtaClick}
                sx={{
                  backgroundColor: '#FF6B35',
                  color: '#fff',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  py: 1.6,
                  px: 3.5,
                  borderRadius: '28px',
                  boxShadow: '0 10px 25px rgba(255, 107, 53, 0.35)',
                  '&:hover': {
                    backgroundColor: '#E8531D',
                    boxShadow: '0 12px 28px rgba(255, 107, 53, 0.45)',
                  },
                }}
              >
                搶先諮詢報名
              </Button>
              <Button
                component="a"
                href="#modules"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#EFE9E1',
                  color: '#4A4E69',
                  backgroundColor: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 700,
                  py: 1.5,
                  px: 3,
                  borderRadius: '28px',
                  '&:hover': {
                    borderColor: '#FF6B35',
                    color: '#FF6B35',
                    backgroundColor: '#FFFDF9',
                  },
                }}
              >
                查看實體作品成果
              </Button>
            </Stack>

            {/* Quick trust note */}
            <Box
              sx={{
                mt: 2.2,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 0.8,
              }}
            >
              <Chip
                size="small"
                label="⚡ 前 5 名享 8 折特惠"
                sx={{
                  backgroundColor: '#FFF0F0',
                  color: '#E63946',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  border: '1px solid #FFD0D4',
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: '#6C757D', fontSize: { xs: '0.8rem', sm: '0.85rem' }, fontWeight: 600 }}
              >
                08:00~18:00 彈性接送（免收延托費）
              </Typography>
            </Box>
          </motion.div>

          {/* Right Column: Hero Image Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            style={{ width: '100%', maxWidth: '100%' }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 45px rgba(30, 30, 36, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                p: { xs: 1.2, sm: 2 },
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {/* Image Container with subtle zoom on hover */}
              <Box
                sx={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '16/9',
                }}
              >
                <Box
                  component="img"
                  src={heroImg}
                  alt="新星創客冬令營 3D列印城堡、客製造型手機座與 NFC 留聲機作品合照"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                />
                {/* Floating Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    backgroundColor: 'rgba(30, 30, 36, 0.82)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    px: { xs: 1.2, sm: 1.8 },
                    py: 0.8,
                    borderRadius: '12px',
                    fontSize: { xs: '0.75rem', sm: '0.82rem' },
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#FF6B35',
                      boxShadow: '0 0 8px #FF6B35',
                    }}
                  />
                  營隊實作成果・每位孩子皆能親手帶回
                </Box>
              </Box>

              {/* Bottom Mini highlights */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: { xs: 0.5, sm: 1.5 },
                  mt: 2,
                  pt: 1.5,
                  borderTop: '1px solid #F5EFE6',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#FF6B35', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    3D 列印
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6C757D', fontSize: { xs: '0.68rem', sm: '0.78rem' }, display: 'block', mt: 0.3, lineHeight: 1.25 }}>
                    城堡・自選座
                  </Typography>
                </Box>
                <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#D48806', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    Suno AI
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6C757D', fontSize: { xs: '0.68rem', sm: '0.78rem' }, display: 'block', mt: 0.3, lineHeight: 1.25 }}>
                    專屬原創詞曲
                  </Typography>
                </Box>
                <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#06C755', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    NFC 感應
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6C757D', fontSize: { xs: '0.68rem', sm: '0.78rem' }, display: 'block', mt: 0.3, lineHeight: 1.25 }}>
                    留聲機即嗶即播
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
