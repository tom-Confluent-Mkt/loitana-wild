import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/the-residence', label: 'The House' },
  { to: '/expeditions', label: 'Expeditions' },
  { to: '/tailor-your-stay', label: 'Tailor Your Stay' },
  { to: '/inquiry', label: 'Inquiry' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-outline-variant/15">
      <div className="flex justify-between items-center px-8 py-5 max-w-[1920px] mx-auto">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-bold font-headline text-primary tracking-tighter hover:opacity-75 transition-opacity"
        >
          LOITANA WILD
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold border-b border-primary pb-0.5 font-headline text-base tracking-tight transition-colors duration-300'
                  : 'text-on-surface-variant font-medium font-headline text-base tracking-tight hover:text-primary transition-colors duration-300'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavLink
            to="/inquiry"
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 rounded hover:opacity-90 transition-all font-label uppercase tracking-widest text-[11px] font-bold active:scale-95 duration-200"
          >
            Book Your Escape
          </NavLink>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-primary transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-px bg-primary transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-primary transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 border-t border-outline-variant/15' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-8 py-6 gap-6 bg-background/95 backdrop-blur-xl">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold font-headline text-xl'
                  : 'text-on-surface-variant font-headline text-xl hover:text-primary transition-colors'
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/inquiry"
            onClick={() => setOpen(false)}
            className="bg-primary text-on-primary px-6 py-3 rounded text-center font-label uppercase tracking-widest text-[11px] font-bold w-full mt-2"
          >
            Book Your Escape
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
