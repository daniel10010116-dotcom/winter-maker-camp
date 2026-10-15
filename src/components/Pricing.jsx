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
import CheckIcon from '@mui/icons-material/Check'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import StarIcon from '@mui/icons-material/Star'

export default function Pricing({ onPlanSelect }) {
  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #FFF5EB 0%, #FAF7F2 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Chip
            label="INVEST IN CREATIVITY"
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
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.75rem' },
              color: '#1E1E24',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            透明費用與限額早鳥優惠
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
            小班制滿班僅限 20 位學員，確保每位孩子獲得最高品質雙師引導。費用已內含所有 3D 列印線材耗材、電子發光元件、NFC 晶片與完整雙師指導！
          </Typography>
        </Box>

        {/* Pricing Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1.08fr 1fr' },
            gap: { xs: 4, lg: 3 },
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Module A Only */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '20px' }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 3, sm: 3.5 },
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EFE9E1',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                overflow: 'visible',
              }}
            >
              <Typography variant="overline" sx={{ color: '#FF6B35', fontWeight: 800, fontSize: '0.85rem' }}>
                A 模組單報
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E1E24', mb: 1 }}>
                3D 列印生活設計
              </Typography>
              <Typography variant="body2" sx={{ color: '#6C757D', mb: 2 }}>
                1/25 (一) - 1/26 (二) ｜ 2天密集創作
              </Typography>

              <Box sx={{ my: 2 }}>
                <Typography component="span" variant="h3" sx={{ fontWeight: 900, color: '#1E1E24' }}>
                  NT$ 6,000
                </Typography>
                <Typography component="span" variant="body2" sx={{ color: '#6C757D', ml: 1 }}>
                  / 位
                </Typography>
              </Box>

              <List dense disablePadding sx={{ my: 2.5, flexGrow: 1 }}>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="帶回發光夢幻城堡夜燈模型" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="帶回客製創意造型手機座（外型自由發揮設計）" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="3D 列印切片參數調校實作" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="含全套 3D 列印線材與電子夜燈耗材" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
              </List>

              <Button
                fullWidth
                variant="outlined"
                onClick={() => onPlanSelect('A 模組單報 (NT$ 6,000)')}
                sx={{
                  borderColor: '#EFE9E1',
                  color: '#1E1E24',
                  fontWeight: 700,
                  py: 1.3,
                  '&:hover': {
                    borderColor: '#FF6B35',
                    color: '#FF6B35',
                    backgroundColor: '#FFF0E6',
                  },
                }}
              >
                諮詢 A 模組單報
              </Button>
            </Card>
          </motion.div>

          {/* Card 2: Full Camp 5 Days - HIGHLIGHTED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ paddingTop: '20px' }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 3, sm: 4 },
                pt: { xs: 3.5, sm: 4.5 },
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '2.5px solid #FF6B35',
                position: 'relative',
                overflow: 'visible',
                boxShadow: '0 20px 48px rgba(255, 107, 53, 0.18)',
                transform: { lg: 'scale(1.03)' },
                zIndex: 2,
              }}
            >
              {/* Top Banner Tag */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#FF6B35',
                  color: '#FFFFFF',
                  px: { xs: 1.8, sm: 2.2 },
                  py: 0.6,
                  borderRadius: '16px',
                  fontSize: { xs: '0.78rem', sm: '0.82rem' },
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  boxShadow: '0 4px 14px rgba(255, 107, 53, 0.4)',
                  whiteSpace: 'nowrap',
                  zIndex: 3,
                }}
              >
                <LocalFireDepartmentIcon sx={{ fontSize: '1rem' }} />
                熱門推薦・早鳥現省 $3,000
              </Box>

              <Typography variant="overline" sx={{ color: '#FF6B35', fontWeight: 800, fontSize: '0.85rem', mt: 0.5 }}>
                五天全報尊榮方案 (A + B 雙模組)
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#1E1E24', mb: 1, fontSize: { xs: '1.5rem', sm: '1.8rem' } }}>
                全方位創客大師營
              </Typography>
              <Typography variant="body2" sx={{ color: '#6C757D', mb: 2 }}>
                1/25 (一) - 1/29 (五) ｜ 完整 5 天沉浸體驗
              </Typography>

              {/* Price Block */}
              <Box sx={{ my: 1.5 }}>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: 'line-through',
                    color: '#9E9E9E',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}
                >
                  原價 NT$ 13,000
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: '#FF6B35', fontSize: '2.5rem' }}>
                    NT$ 10,000
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#D94E1B', fontWeight: 800 }}>
                    12/1 前早鳥特惠
                  </Typography>
                </Box>
              </Box>

              {/* Red Flash Sale Banner */}
              <Box
                sx={{
                  backgroundColor: '#FFF0F0',
                  border: '1px solid #FFD0D4',
                  borderRadius: '12px',
                  p: { xs: 1.2, sm: 1.4 },
                  mb: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                }}
              >
                <StarIcon sx={{ color: '#E63946', fontSize: '1.2rem', flexShrink: 0 }} />
                <Typography variant="caption" sx={{ color: '#E63946', fontWeight: 800, fontSize: { xs: '0.8rem', sm: '0.88rem' }, lineHeight: 1.35 }}>
                  ★ 搶先席位：前 5 名報名享 8 折特惠 (折後僅 $8,000)！
                </Typography>
              </Box>

              <List dense disablePadding sx={{ mb: 3.5, flexGrow: 1 }}>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="帶走全部實體成果（城堡夜燈 + 客製手機座 + 發光留聲機 + 2片唱片）"
                    primaryTypographyProps={{ fontWeight: 700, fontSize: '0.92rem', color: '#1E1E24' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="掌握 3D 列印 + 生成式 AI 音樂 + NFC 軟硬整合完整技能樹"
                    primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="含全套高階實作耗材、教具使用及專屬學習結業證書"
                    primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#FF6B35' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="享有 08:00 - 18:00 晨間與課後免加價超長彈性接送"
                    primaryTypographyProps={{ fontWeight: 700, fontSize: '0.92rem', color: '#FF6B35' }}
                  />
                </ListItem>
              </List>

              <Button
                fullWidth
                variant="contained"
                onClick={() => onPlanSelect('五天全報早鳥特惠 (NT$ 10,000 / 前5名再享8折)')}
                sx={{
                  backgroundColor: '#FF6B35',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  py: 1.5,
                  fontSize: '1.05rem',
                  borderRadius: '26px',
                  boxShadow: '0 8px 24px rgba(255, 107, 53, 0.35)',
                  '&:hover': {
                    backgroundColor: '#E8531D',
                    boxShadow: '0 12px 28px rgba(255, 107, 53, 0.45)',
                  },
                }}
              >
                立即搶早鳥席位
              </Button>
            </Card>
          </motion.div>

          {/* Card 3: Module B Only */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ paddingTop: '20px' }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 3, sm: 3.5 },
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EFE9E1',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                overflow: 'visible',
              }}
            >
              <Typography variant="overline" sx={{ color: '#D48806', fontWeight: 800, fontSize: '0.85rem' }}>
                B 模組單報
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E1E24', mb: 1 }}>
                AI 音樂與 NFC 黑膠盒
              </Typography>
              <Typography variant="body2" sx={{ color: '#6C757D', mb: 2 }}>
                1/27 (三) - 1/29 (五) ｜ 3天科技探索
              </Typography>

              <Box sx={{ my: 2 }}>
                <Typography component="span" variant="h3" sx={{ fontWeight: 900, color: '#1E1E24' }}>
                  NT$ 8,000
                </Typography>
                <Typography component="span" variant="body2" sx={{ color: '#6C757D', ml: 1 }}>
                  / 位
                </Typography>
              </Box>

              <List dense disablePadding sx={{ my: 2.5, flexGrow: 1 }}>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#D48806' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="帶回 3D 列印發光留聲機主機" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#D48806' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="帶回 2 片 NFC 嗶！感應黑膠唱片" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#D48806' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Suno 生成式 AI 詞曲創作與唱標設計" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 26, color: '#D48806' }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="含 3D 列印留聲機、NFC 晶片與 AI 創作軟硬體全配" primaryTypographyProps={{ fontSize: '0.92rem' }} />
                </ListItem>
              </List>

              <Button
                fullWidth
                variant="outlined"
                onClick={() => onPlanSelect('B 模組單報 (NT$ 8,000)')}
                sx={{
                  borderColor: '#EFE9E1',
                  color: '#1E1E24',
                  fontWeight: 700,
                  py: 1.3,
                  '&:hover': {
                    borderColor: '#D48806',
                    color: '#D48806',
                    backgroundColor: '#FFF9E6',
                  },
                }}
              >
                諮詢 B 模組單報
              </Button>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
