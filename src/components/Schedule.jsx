import React from 'react'
import { Box, Container, Typography, Card, Chip, Button, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MapIcon from '@mui/icons-material/Map'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'

const scheduleItems = [
  {
    time: '08:00 - 09:00',
    title: '晨間彈性報到',
    tag: '上班免趕路',
    desc: '家長上班前即可安心送達。現場有助教老師溫馨陪伴、提供晨間趣味積木與繪本暖身。',
    icon: <WbSunnyOutlinedIcon sx={{ fontSize: 32, color: '#FFB703' }} />,
    color: '#FFB703',
  },
  {
    time: '09:00 - 17:00',
    title: '創客科技核心課程',
    tag: '實體動手做',
    desc: '含中午營養午餐與適度午休。雙師親授手把手帶領 3D 建模、AI 音樂調校與硬體組裝。',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 32, color: '#FF6B35' }} />,
    color: '#FF6B35',
  },
  {
    time: '17:00 - 18:00',
    title: '課後彈性接送',
    tag: '免收延托費',
    desc: '最貼心的下班接送緩衝期！孩子能在教室安全複習或自由創作，家長下班接送不再焦慮。',
    icon: <NightsStayOutlinedIcon sx={{ fontSize: 32, color: '#5C6BC0' }} />,
    color: '#5C6BC0',
  },
]

export default function Schedule() {
  return (
    <Box
      id="schedule"
      sx={{
        py: { xs: 8, md: 11 },
        background: 'linear-gradient(180deg, #FAF7F2 0%, #FFF8F0 50%, #FAF7F2 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<FamilyRestroomIcon sx={{ fontSize: '1.1rem !important', color: '#FF6B35 !important' }} />}
            label="PARENT-FRIENDLY SCHEDULE"
            sx={{
              backgroundColor: '#FFE8CC',
              color: '#D94E1B',
              fontWeight: 800,
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              mb: 1.5,
              borderRadius: '12px',
            }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.65rem' },
              color: '#1E1E24',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            專為雙薪家庭打造：超彈性接送時段
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A4E69',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            早上 8:00 就能送達、下午最晚 18:00 接回，整整 10 小時充實學習與完善看護，不加收延托費，讓雙薪爸媽上下班從容不迫！
          </Typography>
        </Box>

        {/* Timeline Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 5,
          }}
        >
          {scheduleItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card
                sx={{
                  height: '100%',
                  p: 3.5,
                  borderRadius: '20px',
                  backgroundColor: '#FFFDF9',
                  border: '1.5px solid #F0E6D8',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#FF6B35',
                    boxShadow: '0 12px 28px rgba(255, 107, 53, 0.12)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Accent top stripe */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    backgroundColor: item.color,
                  }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      border: '1px solid #EFE9E1',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{
                      backgroundColor: '#FFE8CC',
                      color: '#D94E1B',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                    }}
                  />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: item.color === '#FF6B35' ? '#FF6B35' : '#1E1E24',
                    mb: 0.8,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {item.time}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E1E24', mb: 1.5, fontSize: '1.15rem' }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#4A4E69', lineHeight: 1.6, flexGrow: 1 }}>
                  {item.desc}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Location Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              maxWidth: 960,
              mx: 'auto',
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: '20px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EFE9E1',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2.5,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  backgroundColor: '#FFF0E6',
                  color: '#FF6B35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1E1E24' }}>
                  營隊地點：台北市圓山捷運站步行 7 分鐘優質教室
                </Typography>
                <Typography variant="body2" sx={{ color: '#6C757D' }}>
                  捷運淡水信義線直達，周邊交通便捷、生活機能完善，接送最放心（報名完成後提供精確教室指引）
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="outlined"
              startIcon={<MapIcon />}
              href="https://maps.google.com/?q=Yuanshan+Station+Taipei"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                flexShrink: 0,
                borderColor: '#FFD8BF',
                color: '#FF6B35',
                fontWeight: 700,
                '&:hover': {
                  borderColor: '#FF6B35',
                  backgroundColor: '#FFF0E6',
                },
              }}
            >
              開啟 Google 地圖
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
