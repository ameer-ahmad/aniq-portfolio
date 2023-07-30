import React from 'react'
import Home from './Home'
import Introduction from './Introduction'
import FamousQuote from './FamousQuote';
import SkillsToolset from './SkillsToolset';
import Work from './Work';
import CorporateMemphis from './CorporateMemphis';
import TIFF from './TIFF';
import Aqua from './Aqua';
import PointCrossBeach from './PointCrossBeach'
import WeatherApp from './WeatherApp'
import EssentialBoardGame from './EssentialBoardGame';
import WellCareApp from './WellCareApp';
import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/introduction"  element={<Introduction />} />
          <Route path="/philosophical-quote"  element={<FamousQuote />} />
          <Route path="/skills-and-toolset"  element={<SkillsToolset />} />
          <Route path="/work"  element={<Work />} />
          <Route path="/corporate-memphis-style"  element={<CorporateMemphis />} />
          <Route path="/tiff-posters-portfolio-posters"  element={<TIFF />} />
          <Route path="/aqua-water-bottle"  element={<Aqua />} />
          <Route path="/point-cross-beach"  element={<PointCrossBeach />} />
          <Route path="/weather-app"  element={<WeatherApp />} />
          <Route path="/essential-board-game"  element={<EssentialBoardGame />} />
          <Route path="/well-care-app"  element={<WellCareApp />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes