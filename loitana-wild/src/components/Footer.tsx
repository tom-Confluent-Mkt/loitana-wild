export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 border-t border-outline-variant/20 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 w-full mx-auto max-w-7xl">
        <div className="font-label text-sm uppercase tracking-widest text-outline">
          © 2025 Loitana Wild. The Breath of the Savannah.
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {['Conservation', 'Privacy Policy', 'Contact Us', 'Press Kit'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-label text-sm uppercase tracking-widest text-outline hover:text-primary underline transition-all opacity-80 hover:opacity-100"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex space-x-6 text-primary">
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">public</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
