import React, { useState, useEffect } from 'react'
import {
  HeroContainer,
  HeroContent,
  H1,
  Span,
  Span2,
} from './HeroSectionElement'
const HeroSection = ({ toggle, isOpen }) => {
  const [scrollHero, setScrollHero] = useState(false)
  const changeHero = () => {
    if (window.scrollY >= 20) {
      setScrollHero(true)
    } else {
      setScrollHero(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeHero)
  }, [])
  return (
    <>
      <HeroContainer scrollHero={scrollHero}>
        <HeroContent scrollHero={scrollHero}>
          <H1 scrollHero={scrollHero}>
            L<Span scrollHero={scrollHero}>P</Span>
            <Span2 scrollHero={scrollHero}>FOL</Span2>IOF
          </H1>

          <H1 scrollHero={scrollHero}>
            A<Span scrollHero={scrollHero}>O</Span>
            RT<Span2 scrollHero={scrollHero}>I</Span2>LIO
          </H1>
          <H1 scrollHero={scrollHero}>
            U<Span scrollHero={scrollHero}>R</Span>
            FO<Span2 scrollHero={scrollHero}>O</Span2>OPL
          </H1>
          <H1 scrollHero={scrollHero}>
            R<Span scrollHero={scrollHero}>T</Span>
            <Span scrollHero={scrollHero}>S</Span>
            <Span2 scrollHero={scrollHero}>CR</Span2>OLL
          </H1>
          <H1 scrollHero={scrollHero}>
            I<Span scrollHero={scrollHero}>F</Span>
            <Span scrollHero={scrollHero}>C</Span>LIOPOR
          </H1>
          <H1 scrollHero={scrollHero}>
            E<Span scrollHero={scrollHero}>O</Span>
            <Span scrollHero={scrollHero}>R</Span>IOPORT
          </H1>
          <H1 scrollHero={scrollHero}>
            L<Span scrollHero={scrollHero}>L</Span>
            <Span scrollHero={scrollHero}>O</Span>OPORTF
          </H1>
          <H1 scrollHero={scrollHero}>
            S<Span scrollHero={scrollHero}>I</Span>
            <Span scrollHero={scrollHero}>L</Span>PORTFO
          </H1>
          <H1 scrollHero={scrollHero}>
            I<Span scrollHero={scrollHero}>O</Span>
            <Span scrollHero={scrollHero}>L</Span>ORTFOL
          </H1>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
