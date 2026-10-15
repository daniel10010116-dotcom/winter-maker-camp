import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import { motion } from 'framer-motion'

const faqItems = [
  {
    q: '沒有任何 3D 列印或電腦基礎可以參加嗎？',
    a: '完全可以！本營隊專為小一至國二學員規劃，採限額 20 人滿班雙師親授引導。課程從圖像化立體空間觀念與直覺式 3D 建模切入，手把手帶領切片與 AI 調校，即使從未接觸過程式或列印機的孩子，也能自信完成高質感專屬作品！',
  },
  {
    q: '學員需要自備筆記型電腦嗎？',
    a: '是的，請學員自備一台可正常開機、連接 Wi-Fi 的筆記型電腦（Windows 或 macOS 系統皆可），並請攜帶充電線與滑鼠。課堂所使用之 3D 建模與 Suno AI 皆為直覺安全之教學環境，開課前我們會提供簡單的前置指引。',
  },
  {
    q: '課堂完成的實體作品可以全部帶回家嗎？',
    a: '完全可以！營隊非常注重實質產出與孩子的成就感，所有親手製作的 3D 列印發光城堡夜燈、客製化創意造型手機座、發光留聲機主機，以及 2 片感應即播的黑膠唱片，課程結束後全數由孩子帶回家珍藏與日常使用！',
  },
  {
    q: '接送時段真的可以 08:00 送達、18:00 接回嗎？',
    a: '是的！我們深知雙薪家庭趕上下班的辛苦，因此特別設置「08:00 - 09:00 晨間彈性報到」與「17:00 - 18:00 課後彈性接送」。教室現場皆有專屬助教老師看護陪伴，這段時間完全免收任何延托費用，讓爸媽上下班接送最從容。',
  },
  {
    q: '如何保留「前 5 名報名享 8 折」或早鳥優惠席位？',
    a: '點擊頁面上的「加 LINE 諮詢」或複製 ID【ddchen0116】，加入老師 LINE 私訊發送「我想諮詢冬令營 A/B 模組」，我們將即時核對剩餘名額並為您保留優惠折扣資格！',
  },
]

export default function FAQ() {
  const [expanded, setExpanded] = useState('panel0')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Chip
            icon={<HelpOutlineOutlinedIcon sx={{ fontSize: '1rem !important', color: '#FF6B35 !important' }} />}
            label="FREQUENTLY ASKED QUESTIONS"
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
              fontSize: { xs: '1.85rem', sm: '2.4rem' },
              color: '#1E1E24',
              mb: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            常見問題疑慮解答
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A4E69' }}>
            若有其他疑問，歡迎隨時透過 LINE 直接與講師親切諮詢
          </Typography>
        </Box>

        {/* Accordions */}
        <Box>
          {faqItems.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  border: expanded === `panel${index}` ? '1.5px solid #FF6B35' : '1px solid #EFE9E1',
                  boxShadow: expanded === `panel${index}` ? '0 8px 24px rgba(255, 107, 53, 0.1)' : 'none',
                  transition: 'all 0.25s ease',
                  backgroundColor: expanded === `panel${index}` ? '#FFFDF9' : '#FFFFFF',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === `panel${index}` ? '#FF6B35' : '#4A4E69',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    px: { xs: 2.5, sm: 3 },
                    py: 1.2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: expanded === `panel${index}` ? '#FF6B35' : '#2B2D42',
                      fontSize: { xs: '1rem', sm: '1.08rem' },
                    }}
                  >
                    {item.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, sm: 3 }, pb: 2.5, pt: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555555',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.92rem', sm: '0.96rem' },
                    }}
                  >
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
