import React from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { motion } from 'framer-motion'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import moduleAImg from '../assets/module_a.jpg'
import moduleBImg from '../assets/module_b.jpg'

export default function ModuleShowcase({ onModuleSelect }) {
  return (
    <Box
      id="modules"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FAF7F2',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Chip
            label="CURRICULUM & PROJECTS"
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
              fontSize: { xs: '1.45rem', sm: '2.2rem', md: '2.6rem' },
              color: '#1E1E24',
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            孩子親手打造，滿滿成就感帶回家
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A4E69',
              fontSize: { xs: '1rem', md: '1.15rem' },
              maxWidth: 720,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            告別走馬看花的夏冬令營！新星創客採用真實專案導向學習 (PBL)，每位孩子都能掌握設計軟體與硬體實作，把高質感的自製科技作品完整帶回家。
          </Typography>
        </Box>

        {/* Modules Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Module A Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                border: '1.5px solid #FFE8CC',
                boxShadow: '0 12px 32px rgba(255, 107, 53, 0.08)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px rgba(255, 107, 53, 0.16)',
                },
              }}
            >
              {/* Media Container */}
              <Box sx={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={moduleAImg}
                  alt="A 模組 3D列印發光城堡模型、客製化創意手機座與造型夾"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
                <Chip
                  icon={<CalendarTodayIcon sx={{ fontSize: '0.9rem !important', color: '#fff !important' }} />}
                  label="1/25 (一) - 1/26 (二) ｜ 2天"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    backgroundColor: 'rgba(30, 30, 36, 0.85)',
                    color: '#fff',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.8rem',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    backgroundColor: '#FF6B35',
                    color: '#fff',
                    px: 1.8,
                    py: 0.6,
                    borderRadius: '20px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.4)',
                  }}
                >
                  單報 NT$ 6,000
                </Box>
              </Box>

              <CardContent sx={{ p: { xs: 2.8, sm: 3.8 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="overline"
                  sx={{ color: '#FF6B35', fontWeight: 800, letterSpacing: '0.06em', fontSize: '0.82rem' }}
                >
                  MODULE A
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 800, color: '#1E1E24', mb: 1.2, fontSize: { xs: '1.3rem', sm: '1.45rem' } }}
                >
                  3D 列印生活設計
                </Typography>
                <Typography variant="body2" sx={{ color: '#4A4E69', mb: 2, lineHeight: 1.65 }}>
                  從空間立體觀念起步，學習直覺圖形化建模軟體、參數化結構與 3D 列印切片機操作。雙師帶領孩子掌握空間思維，將天馬行空的想像透過數位製造真正實體化！
                </Typography>

                {/* Highlights Box */}
                <Box sx={{ backgroundColor: '#FFF8F2', borderRadius: '14px', p: 1.8, mb: 2.5, border: '1px solid #FFE6D5' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: '#FF6B35', display: 'block', mb: 0.8, fontSize: '0.82rem' }}>
                    💡 核心學習技能亮點：
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#4A4E69', lineHeight: 1.55, mb: 0.5 }}>
                    • <b>立體空間思維</b>：座標系統定位、幾何布林交差集與壁厚支撐概念。
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#4A4E69', lineHeight: 1.55, mb: 0.5 }}>
                    • <b>造型完全自由設計</b>：不限於特定外型！孩子可自由發揮創意（柯基、小貓萌寵、潮流幾何或動漫標誌均可由孩子親自構思建模）。
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#4A4E69', lineHeight: 1.55 }}>
                    • <b>實機切片調校</b>：親手操作專業切片軟體，掌握層高、支撐結構與噴嘴溫控。
                  </Typography>
                </Box>

                {/* Checklist */}
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E1E24', mb: 1 }}>
                  帶回 2 件精緻實體成品：
                </Typography>
                <List dense disablePadding sx={{ mb: 3.5, flexGrow: 1 }}>
                  <ListItem disableGutters sx={{ py: 0.6 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#FF6B35' }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="🏰 發光夢幻城堡夜燈模型（內建溫暖 LED 光源夜燈）"
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem', color: '#2B2D42' }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.6 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#FF6B35' }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="📱 客製化創意造型手機座（外型自由設計，穩固實用追劇利器）"
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem', color: '#2B2D42' }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.6 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#FF6B35' }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="🐾 療癒小動物造型電線收納夾（生活實用小物）"
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem', color: '#2B2D42' }}
                    />
                  </ListItem>
                </List>

                {/* CTA Button */}
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<ChatBubbleOutlineOutlinedIcon />}
                  onClick={() => onModuleSelect('A 模組 (3D列印生活設計)')}
                  sx={{
                    backgroundColor: '#FFF0E6',
                    color: '#FF6B35',
                    border: '1.5px solid #FFD8BF',
                    fontWeight: 800,
                    py: 1.3,
                    borderRadius: '24px',
                    fontSize: '0.95rem',
                    '&:hover': {
                      backgroundColor: '#FF6B35',
                      color: '#FFFFFF',
                      borderColor: '#FF6B35',
                    },
                  }}
                >
                  諮詢 A 模組席位
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Module B Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                border: '1.5px solid #FFE3A8',
                boxShadow: '0 12px 32px rgba(255, 183, 3, 0.1)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px rgba(255, 183, 3, 0.2)',
                },
              }}
            >
              {/* Media Container */}
              <Box sx={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={moduleBImg}
                  alt="B 模組 AI 音樂與 NFC 留聲機黑膠盒"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
                <Chip
                  icon={<CalendarTodayIcon sx={{ fontSize: '0.9rem !important', color: '#fff !important' }} />}
                  label="1/27 (三) - 1/29 (五) ｜ 3天"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    backgroundColor: 'rgba(30, 30, 36, 0.85)',
                    color: '#fff',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.8rem',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    backgroundColor: '#D48806',
                    color: '#fff',
                    px: 1.8,
                    py: 0.6,
                    borderRadius: '20px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 12px rgba(212, 136, 6, 0.4)',
                  }}
                >
                  單報 NT$ 8,000
                </Box>
              </Box>

              <CardContent sx={{ p: { xs: 3, sm: 3.8 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="overline"
                  sx={{ color: '#D48806', fontWeight: 800, letterSpacing: '0.06em', fontSize: '0.82rem' }}
                >
                  MODULE B
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 800, color: '#1E1E24', mb: 1.2, fontSize: { xs: '1.3rem', sm: '1.45rem' } }}
                >
                  AI 音樂與 NFC 黑膠盒
                </Typography>
                <Typography variant="body2" sx={{ color: '#4A4E69', mb: 2, lineHeight: 1.65 }}>
                  結合最前沿生成式 AI 音樂創作與物聯網感應科技！引導孩子運用 Suno AI 創作詞曲，再將音樂寫入客製迷你黑膠，組裝發光留聲機，體驗一嗶即播的軟硬體跨界成就感！
                </Typography>

                {/* Highlights Box */}
                <Box sx={{ backgroundColor: '#FFFAF0', borderRadius: '14px', p: 1.8, mb: 2.5, border: '1px solid #FFE8B8' }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: '#D48806', display: 'block', mb: 0.8, fontSize: '0.82rem' }}>
                    🎵 核心學習技能亮點：
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#4A4E69', lineHeight: 1.55, mb: 0.5 }}>
                    • <b>Suno AI 詞曲靈感探索</b>：啟發孩子文字表達與寫詞能力，體驗 Jazz、Lo-Fi、Pop、搖滾等多元風格與編曲氛圍。
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#4A4E69', lineHeight: 1.55, mb: 0.5 }}>
                    • <b>黑膠唱片封面美學設計</b>：親手自繪黑膠唱片專屬圓標與外包裝，培養數位美學感官。
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#4A4E69', lineHeight: 1.55 }}>
                    • <b>物聯網 NFC 軟硬體整合</b>：學習近場通訊（NFC）原理，將個人專屬雲端音檔燒錄寫入實體唱片晶片。
                  </Typography>
                </Box>

                {/* Checklist */}
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E1E24', mb: 1 }}>
                  帶回 1 機 2 唱片專屬套裝：
                </Typography>
                <List dense disablePadding sx={{ mb: 3.5, flexGrow: 1 }}>
                  <ListItem disableGutters sx={{ py: 0.6 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#D48806' }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="📻 3D 列印發光留聲機主機（內建復古光圈與微控播放核心）"
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem', color: '#2B2D42' }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.6 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#D48806' }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="🎵 專屬原創歌曲 + 自繪特色唱片圓標封面（文藝美感滿分）"
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem', color: '#2B2D42' }}
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.6 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: '#D48806' }}>
                      <CheckCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="⚡ NFC 嗶！感應播放黑膠片（2片唱片，放上唱機即刻自動播歌）"
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem', color: '#2B2D42' }}
                    />
                  </ListItem>
                </List>

                {/* CTA Button */}
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<ChatBubbleOutlineOutlinedIcon />}
                  onClick={() => onModuleSelect('B 模組 (AI音樂與NFC黑膠盒)')}
                  sx={{
                    backgroundColor: '#FFF9E6',
                    color: '#D48806',
                    border: '1.5px solid #FFE3A8',
                    fontWeight: 800,
                    py: 1.3,
                    borderRadius: '24px',
                    fontSize: '0.95rem',
                    '&:hover': {
                      backgroundColor: '#D48806',
                      color: '#FFFFFF',
                      borderColor: '#D48806',
                    },
                  }}
                >
                  諮詢 B 模組席位
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
