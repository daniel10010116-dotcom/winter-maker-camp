import React, { useState } from 'react'
import { Box, Container, Typography, Button, Paper, Stack, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LaunchIcon from '@mui/icons-material/Launch'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'

export default function LineConversion({ selectedPlan, onCopyId }) {
  const [copied, setCopied] = useState(false)
  const lineId = 'ddchen0116'
  const lineUrl = `https://line.me/ti/p/~${lineId}`

  const handleCopy = () => {
    navigator.clipboard.writeText(lineId).then(() => {
      setCopied(true)
      if (onCopyId) {
        onCopyId(lineId)
      }
      setTimeout(() => setCopied(false), 3000)
    })
  }

  const handleOpenLine = () => {
    window.open(lineUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box
      id="line-contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FAF7F2',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Paper
            elevation={0}
            sx={{
              background: 'linear-gradient(135deg, #06C755 0%, #05A346 100%)',
              color: '#FFFFFF',
              borderRadius: { xs: '24px', sm: '32px' },
              p: { xs: 3.5, sm: 5, md: 6 },
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(6, 199, 85, 0.28)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient bubble decorations */}
            <Box
              sx={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 240,
                height: 240,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -50,
                left: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                pointerEvents: 'none',
              }}
            />

            {/* Selected Plan Notice Badge */}
            {selectedPlan && (
              <Box
                sx={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(10px)',
                  px: 2.2,
                  py: 0.8,
                  borderRadius: '20px',
                  mb: 2.5,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
              >
                🎯 您已選擇：{selectedPlan}
              </Box>
            )}

            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.75rem' },
                mb: 2,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              名額有限・立即加入 LINE 諮詢保留席位
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: { xs: '1rem', sm: '1.15rem' },
                maxWidth: 640,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              早鳥現省 $3,000 與前 5 名 8 折席位即將額滿！請直接加入官方 LINE 私訊告知欲報名模組與學員年級，講師將親自為您說明細節。
            </Typography>

            {/* LINE ID Showcase Card */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.16)',
                backdropFilter: 'blur(8px)',
                px: { xs: 2.5, sm: 3.5 },
                py: 1.5,
                borderRadius: '20px',
                mb: 4,
                border: '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255, 255, 255, 0.85)', mr: 1.5, fontSize: '0.9rem', fontWeight: 600 }}
              >
                官方 LINE ID：
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  fontSize: { xs: '1.4rem', sm: '1.75rem' },
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                }}
              >
                {lineId}
              </Typography>
            </Box>

            {/* Action Buttons Row */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              {/* Copy ID Button */}
              <Tooltip title="複製 ID 到剪貼簿">
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleCopy}
                  startIcon={copied ? <CheckCircleIcon sx={{ color: '#1B4332' }} /> : <ContentCopyIcon sx={{ color: '#06C755' }} />}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: copied ? '#1B4332' : '#06C755',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    py: 1.5,
                    px: 3.5,
                    minWidth: 230,
                    borderRadius: '28px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    '&:hover': {
                      backgroundColor: '#F5FFF8',
                      boxShadow: '0 10px 28px rgba(0, 0, 0, 0.18)',
                    },
                  }}
                >
                  {copied ? '已複製 LINE ID！' : '一鍵複製 LINE ID'}
                </Button>
              </Tooltip>

              {/* Direct Open Button */}
              <Button
                variant="outlined"
                size="large"
                onClick={handleOpenLine}
                endIcon={<LaunchIcon />}
                sx={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  borderWidth: 2,
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  py: 1.4,
                  px: 3.5,
                  minWidth: 230,
                  borderRadius: '28px',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderWidth: 2,
                  },
                }}
              >
                直接開啟 LINE 諮詢
              </Button>
            </Stack>

            {/* QR Code Block */}
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                p: 2.2,
                borderRadius: '20px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              }}
            >
              <QRCodeSVG
                value={lineUrl}
                size={140}
                level="H"
                includeMargin={false}
                imageSettings={{
                  src: '/favicon.svg',
                  x: undefined,
                  y: undefined,
                  height: 28,
                  width: 28,
                  excavate: true,
                }}
              />
              <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 1.2 }}>
                <QrCode2Icon sx={{ fontSize: '1rem', color: '#4A4E69' }} />
                <Typography variant="caption" sx={{ color: '#4A4E69', fontWeight: 700, fontSize: '0.82rem' }}>
                  手機掃描直接加入好友
                </Typography>
              </Stack>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
