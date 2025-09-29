// Pastikan file ini berada di src/components/Projects.jsx
import { PROJECTS } from '../data/projects'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
// Import komponen carousel yang baru
import ProjectImageCarousel from "../components/ProjectImageCarousel"


export default function Projects() {
return (
<div className="py-24">
<h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
<p className="mt-2 text-slate-300">My Selected Works.</p>


<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{PROJECTS.map((proj, idx) => (
<motion.article
key={idx}
initial={{ opacity: 0, y: 16 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: idx * 0.05 }}
className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 flex flex-col"
>
    {/* Menggunakan komponen carousel di sini */}
    <ProjectImageCarousel images={proj.images} title={proj.title} />

<h3 className="text-lg font-semibold">{proj.title}</h3>
<p className="mt-2 text-sm text-slate-300 flex-1">{proj.description}</p>
<div className="mt-3 flex flex-wrap gap-2">
{proj.tags.map((t) => (
<span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10">{t}</span>
))}
</div>
<div className="mt-5 flex items-center gap-3">
{proj.links.demo && (
<a href={proj.links.demo} target="_blank" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-400">
<ExternalLink className="w-4 h-4"/> Live
</a>
)}
{proj.links.repo && (
<a href={proj.links.repo} target="_blank" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl ring-1 ring-white/15 hover:ring-white/30">
<Github className="w-4 h-4"/> Code
</a>
)}
</div>
</motion.article>
))}
</div>
</div>
)
} 