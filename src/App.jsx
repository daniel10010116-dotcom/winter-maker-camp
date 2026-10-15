import React, { useState } from 'react'
import { Box, Fab, Tooltip } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import confetti from 'canvas-confetti'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ModuleShowcase from './components/ModuleShowcase.jsx'
import Schedule from './components/Schedule.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import LineConversion from './components/LineConversion.jsx'
import Footer from './components/Footer.jsx'
import ToastFeedback from './components/ToastFeedback.jsx'

export default function App() {
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#FF6B35', '#FFB703', '#06C755', '#E63946', '#FFFFFF'],
    })
  }

  const scrollToContact = (planName) => {
    if (planName) {
      setSelectedPlan(planName)
    }
    const target = document.getElementById('line-contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCopyLineId = (customMsg) => {
    navigator.clipboard.writeText('ddchen0116').then(() => {
      triggerConfetti()
      setToastMessage(
        customMsg || '已複製 LINE ID：ddchen0116，打開 LINE 即可搜尋加入！'
      )
      setToastOpen(true)
    })
  }

  const handlePlanSelect = (planTitle) => {
    setSelectedPlan(planTitle)
    scrollToContact(planTitle)
    handleCopyLineId(`已為您選擇【${planTitle}】並複製 LINE ID：ddchen0116！`)
  }

  const handleModuleSelect = (moduleTitle) => {
    setSelectedPlan(moduleTitle)
    scrollToContact(moduleTitle)
    handleCopyLineId(`已選擇【${moduleTitle}】並複製 LINE ID：ddchen0116！`)
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Sticky Navigation */}
      <Navbar onContactClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* 2. Hero Banner */}
        <Hero onCtaClick={() => scrollToContact()} />

        {/* 3. Modules Showcase (A & B) */}
        <ModuleShowcase onModuleSelect={handleModuleSelect} />

        {/* 4. Schedule & Dual-income Logistics */}
        <Schedule />

        {/* 5. Pricing & Early-bird Discounts */}
        <Pricing onPlanSelect={handlePlanSelect} />

        {/* 6. FAQ Accordion */}
        <FAQ />

        {/* 7. Final Conversion (LINE ID, QR Code, Actions) */}
        <LineConversion
          selectedPlan={selectedPlan}
          onCopyId={() => handleCopyLineId()}
        />
      </Box>

      {/* 8. Footer */}
      <Footer />

      {/* Global Toast Feedback */}
      <ToastFeedback
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        message={toastMessage}
      />

      {/* Mobile Floating LINE Quick Action Button */}
      <Tooltip title="加 LINE 諮詢 (ddchen0116)" placement="left">
        <Fab
          aria-label="LINE 諮詢"
          onClick={() => {
            scrollToContact()
            handleCopyLineId()
          }}
          sx={{
            position: 'fixed',
            bottom: { xs: 24, sm: 32 },
            right: { xs: 20, sm: 32 },
            backgroundColor: '#06C755',
            color: '#FFFFFF',
            zIndex: 1000,
            boxShadow: '0 8px 24px rgba(6, 199, 85, 0.4)',
            transition: 'transform 0.25s ease',
            '&:hover': {
              backgroundColor: '#05A346',
              transform: 'scale(1.08)',
            },
          }}
          className="pulse-line-btn"
        >
          <ChatIcon sx={{ fontSize: 28 }} />
        </Fab>
      </Tooltip>
    </Box>
  )
}
