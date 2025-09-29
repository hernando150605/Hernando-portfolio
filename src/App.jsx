// src/App.jsx
import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [active, setActive] = useState('home')

  // bikin Map id -> ref (pakai createRef, bukan hook, jadi aman di loop)
  const sectionRefs = useMemo(() => {
    const map = new Map()
    NAV_ITEMS.forEach((n) => map.set(n.id, { id: n.id, ref: React.createRef() }))
    return map
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActive(id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = sectionRefs.get(id)?.ref.current
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionRefs])

  const handleNavClick = (id) => {
    const node = sectionRefs.get(id)?.ref.current
    node?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      <Navbar items={NAV_ITEMS} active={active} onNavClick={handleNavClick} />

      <main className="mx-auto max-w-6xl px-4">
        <section id="home" ref={sectionRefs.get('home')?.ref}>
          <Home />
        </section>
        <section id="about" ref={sectionRefs.get('about')?.ref}>
          <About />
        </section>
        <section id="experience" ref={sectionRefs.get('experience')?.ref}>
          <Experience />
        </section>
        <section id="projects" ref={sectionRefs.get('projects')?.ref}>
          <Projects />
        </section>
        <section id="contact" ref={sectionRefs.get('contact')?.ref}>
          <Contact />
        </section>
      </main>
    </div>
  )
}
