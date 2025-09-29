import { motion } from 'framer-motion'
import aboutImg from '../assets/profile2.jpg'


export default function About() {
return (
<div className="grid md:grid-cols-2 gap-8 items-center py-24">
<motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
<img src={aboutImg} alt="About profile" className="w-full h-[375px] object-cover rounded-2xl ring-1 ring-white/10 shadow-2xl" />
</motion.div>
<motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
<h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
<p className="mt-4 text-slate-300">
Computer Science student at Binus University with a focus on Web Development and Databases. I am proficient in languages like HTML, CSS, JavaScript, and C, along with SQL.
extend to UI/UX design with Figma, ensuring I can create both functional and visually appealing digital solutions.
I am a quick learner with strong analytical skills and am fluent in Indonesian, English, and Mandarin, making me ready to contribute to innovative projects.
</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-4">
<h3 className="font-semibold text-xl md:text-3xl">5+</h3>
<p className="text-sm text-slate-300 mt-1">Programming Languages</p>
</div>
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-4">
<h3 className="font-semibold text-xl md:text-3xl">3+</h3>
<p className="text-sm text-slate-300 mt-1">Years of coding</p>
</div>
</div>
</motion.div>
</div>
)
}