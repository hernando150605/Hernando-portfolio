export default function Navbar({ items, active, onNavClick }) {
return (
<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/5">
<nav className="mx-auto max-w-6xl px-4">
<div className="flex items-center justify-between h-16">
<button onClick={() => onNavClick('home')} className="font-bold tracking-tight text-lg">
Hernando<span className="text-indigo-400">.portfolio</span>
</button>
<ul className="hidden md:flex items-center gap-1">
{items.map((item) => (
<li key={item.id}>
<button
onClick={() => onNavClick(item.id)}
className={`px-3 py-2 rounded-xl text-sm transition-all hover:bg-white/5 ${
active === item.id ? 'text-indigo-300 bg-white/5' : 'text-slate-300'
}`}
>
{item.label}
</button>
</li>
))}
</ul>
</div>
</nav>
</header>
)
}