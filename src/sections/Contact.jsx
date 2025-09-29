import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react'


export default function Contact() {
return (
<div className="py-24">
<h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
<p className="mt-2 text-slate-300">Available for collaborations, freelance, or a quick chat 👋</p>


<div className="mt-8 grid md:grid-cols-2 gap-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 space-y-3">
<a href="mailto:hernandotan150605@gmail.com" className="flex items-center gap-3 hover:underline">
<Mail className="w-5 h-5"/> hernandotan150605@gmail.com
</a>
<div className="flex items-center gap-3 text-slate-300">
<Phone className="w-5 h-5"/> +62 812‑6827‑3262
</div>
<div className="flex items-center gap-3 text-slate-300">
<MapPin className="w-5 h-5"/> Tangerang, Indonesia
</div>
<div className="flex items-center gap-4 pt-2">
<a href="https://www.linkedin.com/in/hernando-tan" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-1 ring-white/15 hover:ring-white/30">
<Linkedin className="w-4 h-4"/> LinkedIn
</a>
<a href="https://github.com/hernando150605" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl ring-1 ring-white/15 hover:ring-white/30">
<Github className="w-4 h-4"/> GitHub
</a>

</div>
</div>


<form action="mailto: hernandotan150605@gmail.com" method="post" encType="text/plain" className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 grid gap-4">
<input name="name" placeholder="Nama" className="px-3 py-2 rounded-xl bg-black/30 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400" />
<input name="email" placeholder="Email" type="email" className="px-3 py-2 rounded-xl bg-black/30 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400" />
<textarea name="message" placeholder="Pesan" rows="5" className="px-3 py-2 rounded-xl bg-black/30 ring-1 ring-white/10 focus:outline-none focus:ring-indigo-400"></textarea>
<button type="submit" className="justify-self-start px-4 py-2 rounded-2xl bg-indigo-500/90 hover:bg-indigo-400">Kirim</button>
</form>
</div>


<footer className="mt-16 text-center text-xs text-slate-400">
© {new Date().getFullYear()} Hernando Tan. All rights reserved.
</footer>
</div>
)
}