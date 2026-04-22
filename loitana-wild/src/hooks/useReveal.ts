import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    )
    document.querySelectorAll('.reveal, .reveal-scale, .reveal-fade').forEach((el) =>
      observer.observe(el),
    )
    return () => observer.disconnect()
  }, [])
}
