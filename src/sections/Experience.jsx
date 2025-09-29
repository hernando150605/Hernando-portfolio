import { EXPERIENCES } from '../data/experiences'
import { motion } from 'framer-motion'


export default function Experience() {
return (
<div className="py-24">
<h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
<p className="mt-2 text-slate-300">In work and organization.</p>


<div className="mt-10 grid gap-6">
{EXPERIENCES.map((exp, idx) => (
<motion.article
key={idx}
initial={{ opacity: 0, y: 16 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: idx * 0.05 }}
className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6"
>
<div className="flex flex-wrap items-baseline justify-between gap-2">
<h3 className="text-xl font-semibold">{exp.role} <span className="text-slate-400">@ {exp.company}</span></h3>
<span className="text-sm text-slate-400">{exp.period}</span>
</div>
<ul className="mt-4 list-disc list-inside space-y-1 text-slate-300">
{exp.points.map((p, i) => (
<li key={i}>{p}</li>
))}
</ul>
</motion.article>
))}
</div>
</div>
)
}